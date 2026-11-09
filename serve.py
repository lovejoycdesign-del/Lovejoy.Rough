import base64
import json
import os
import smtplib
import ssl
from datetime import datetime
from email.message import EmailMessage
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUTBOX = ROOT / "applications"
ENV_PATH = ROOT / "mail.env"
TO = "lovejoyc.design@gmail.com"


def load_env():
    values = {}
    if not ENV_PATH.exists():
        return values
    for line in ENV_PATH.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        values[key.strip()] = value.strip()
    return values


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_POST(self):
        if self.path.split("?", 1)[0] != "/api/apply":
            self.send_error(404)
            return
        length = int(self.headers.get("Content-Length", "0"))
        try:
            payload = json.loads(self.rfile.read(length).decode("utf-8"))
            pdf = base64.b64decode(payload["pdf"])
        except (json.JSONDecodeError, KeyError, ValueError):
            self.respond(400, {"ok": False, "error": "The application could not be read."})
            return

        OUTBOX.mkdir(exist_ok=True)
        stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
        role = safe_part(payload.get("role", "role"))
        name = safe_part(payload.get("name", "applicant")).replace(" ", "-") or "applicant"
        pdf_path = OUTBOX / f"{stamp}-{role}-{name}.pdf"
        pdf_path.write_bytes(pdf)

        resume_path = None
        if payload.get("resume") and payload.get("resumeName"):
            resume_path = OUTBOX / f"{stamp}-{role}-{name}-{Path(str(payload['resumeName'])).name}"
            resume_path.write_bytes(base64.b64decode(payload["resume"]))

        emailed, detail = send_mail(pdf_path, resume_path, payload)
        self.respond(200, {"ok": True, "emailed": emailed, "detail": detail})

    def respond(self, code, body):
        data = json.dumps(body).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)


def safe_part(value):
    return "".join(char for char in str(value) if char.isalnum() or char in "-_ ")[:48].strip()


def send_mail(pdf_path, resume_path, payload):
    env = load_env()
    user = env.get("SMTP_USER") or TO
    password = env.get("SMTP_PASSWORD", "")
    host = env.get("SMTP_HOST", "smtp.gmail.com")
    port = int(env.get("SMTP_PORT", "587"))
    if not password:
        return False, "Saved on this computer. Add a Gmail app password in mail.env to send it from lovejoyc.design@gmail.com."

    message = EmailMessage()
    message["From"] = user
    message["To"] = TO
    title = payload.get("title") or payload.get("role") or "Role"
    applicant = payload.get("name") or "Applicant"
    message["Subject"] = f"Application — {title} — {applicant}"
    message.set_content(payload.get("summary") or "New Lovejoy Visuals application.")
    message.add_attachment(pdf_path.read_bytes(), maintype="application", subtype="pdf", filename=pdf_path.name)
    if resume_path and resume_path.exists():
        message.add_attachment(
            resume_path.read_bytes(),
            maintype="application",
            subtype="octet-stream",
            filename=resume_path.name,
        )
    try:
        with smtplib.SMTP(host, port, timeout=30) as smtp:
            smtp.starttls(context=ssl.create_default_context())
            smtp.login(user, password)
            smtp.send_message(message)
    except Exception as error:
        return False, f"Saved on this computer. Email was not sent ({error.__class__.__name__})."
    return True, "Sent to lovejoyc.design@gmail.com."


if __name__ == "__main__":
    os.chdir(ROOT)
    server = ThreadingHTTPServer(("127.0.0.1", 5173), Handler)
    print("Serving Lovejoy Visuals at http://127.0.0.1:5173", flush=True)
    server.serve_forever()
