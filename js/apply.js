import { roles } from "./roles.js?v=2";

const roleId = new URLSearchParams(location.search).get("role");
const role = roles.find((item) => item.id === roleId) || roles[0];
const storageKey = `lovejoy-application:${role.id}`;
const form = document.querySelector("#application");
const skillsBox = document.querySelector("#skills");
const experienceBox = document.querySelector("#experience");
const status = document.querySelector("#status");
const resumeInput = document.querySelector("#resume");
const resumeNote = document.querySelector("#resume-note");

document.querySelector("#role-title").textContent = role.title.toUpperCase();
document.querySelector("#role-summary").textContent = role.summary;
document.title = `${role.title} application — Lovejoy Visuals`;

role.groups.forEach((group) => {
  const block = document.createElement("fieldset");
  block.className = "skill-group";
  const legend = document.createElement("legend");
  legend.textContent = group.name;
  const detail = document.createElement("p");
  detail.textContent = group.detail;
  const list = document.createElement("div");
  list.className = "check-list";
  group.skills.forEach((skill) => {
    const label = document.createElement("label");
    const box = document.createElement("input");
    box.type = "checkbox";
    box.name = "skill";
    box.value = `${group.name}: ${skill}`;
    const text = document.createElement("span");
    text.textContent = skill;
    label.append(box, text);
    list.append(label);
  });
  block.append(legend, detail, list);
  skillsBox.append(block);
});

function updateSkillCount() {
  const boxes = [...skillsBox.querySelectorAll("input")];
  const chosen = boxes.filter((box) => box.checked).length;
  document.querySelector("#skill-count").textContent = `${chosen} of ${boxes.length} selected for ${role.title}`;
}

skillsBox.addEventListener("change", updateSkillCount);
updateSkillCount();

function experienceFields(values = {}) {
  const entry = document.createElement("div");
  entry.className = "experience-entry";
  entry.innerHTML = `
    <label>Employer <input name="employer" type="text" /></label>
    <label>Title <input name="jobTitle" type="text" /></label>
    <label>Dates <input name="dates" type="text" /></label>
    <label>What you did <textarea name="details"></textarea></label>
  `;
  entry.querySelector("[name=employer]").value = values.employer || "";
  entry.querySelector("[name=jobTitle]").value = values.jobTitle || "";
  entry.querySelector("[name=dates]").value = values.dates || "";
  entry.querySelector("[name=details]").value = values.details || "";
  experienceBox.append(entry);
}

function readFile(file) {
  return new Promise((resolve) => {
    if (!file) {
      resolve(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve({ name: file.name, data: String(reader.result).split(",")[1] || "" });
    reader.readAsDataURL(file);
  });
}

function collect() {
  const data = new FormData(form);
  return {
    role: role.id,
    title: role.title,
    school: data.get("school") || "",
    credential: data.get("credential") || "",
    years: data.get("years") || "",
    name: data.get("name") || "",
    email: data.get("email") || "",
    phone: data.get("phone") || "",
    location: data.get("location") || "",
    skills: data.getAll("skill"),
    experience: [...experienceBox.querySelectorAll(".experience-entry")].map((entry) => ({
      employer: entry.querySelector("[name=employer]").value,
      jobTitle: entry.querySelector("[name=jobTitle]").value,
      dates: entry.querySelector("[name=dates]").value,
      details: entry.querySelector("[name=details]").value,
    })),
  };
}

function applySaved(saved) {
  form.school.value = saved.school || "";
  form.credential.value = saved.credential || "";
  form.years.value = saved.years || "";
  form.name.value = saved.name || "";
  form.email.value = saved.email || "";
  form.phone.value = saved.phone || "";
  form.location.value = saved.location || "";
  const chosen = new Set(saved.skills || []);
  skillsBox.querySelectorAll("input").forEach((box) => {
    box.checked = chosen.has(box.value);
  });
  experienceBox.replaceChildren();
  (saved.experience?.length ? saved.experience : [{}]).forEach(experienceFields);
  if (saved.resumeName) resumeNote.textContent = `Saved resume file: ${saved.resumeName}`;
  updateSkillCount();
}

function pdfEscape(value) {
  return String(value).replace(/[^\x20-\x7E]/g, " ").replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrap(text, width = 88) {
  const words = String(text || "").split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const next = line ? `${line} ${word}` : word;
    if (next.length > width && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  });
  if (line) lines.push(line);
  return lines.length ? lines : [""];
}

function buildPdf(lines) {
  const chunks = [];
  for (let index = 0; index < lines.length; index += 46) chunks.push(lines.slice(index, index + 46));
  const objects = [];
  const add = (body) => {
    objects.push(body);
    return objects.length;
  };
  const fontId = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const pageIds = chunks.map((chunk) => {
    const stream = `BT /F1 11 Tf 50 760 Td 14 TL\n${chunk.map((line) => `(${pdfEscape(line)}) Tj\nT*`).join("\n")}\nET`;
    const bytes = new TextEncoder().encode(stream);
    const contentsId = add(`<< /Length ${bytes.length} >>\nstream\n${stream}\nendstream`);
    return { contentsId, bytes };
  });
  const pagesId = add("<< /Type /Pages /Count 0 /Kids [] >>");
  const pageObjectIds = pageIds.map(({ contentsId }) => add(
    `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 612 792] /Contents ${contentsId} 0 R /Resources << /Font << /F1 ${fontId} 0 R >> >> >>`
  ));
  objects[pagesId - 1] = `<< /Type /Pages /Count ${pageObjectIds.length} /Kids [${pageObjectIds.map((id) => `${id} 0 R`).join(" ")}] >>`;
  const catalogId = add(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`);
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((body, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${body}\nendobj\n`;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer << /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return pdf;
}

function applicationLines(record, resumeName) {
  const lines = [
    "Lovejoy Visuals application",
    `Role: ${role.title}`,
    "",
    "Contact",
    `Name: ${record.name}`,
    `Email: ${record.email}`,
    `Phone: ${record.phone}`,
    `Location: ${record.location}`,
    "",
    "Education",
    `School: ${record.school}`,
    `Credential: ${record.credential}`,
    `Years: ${record.years}`,
    "",
    "Experience",
  ];
  record.experience.forEach((job, index) => {
    lines.push(`${index + 1}. ${job.jobTitle || "Role"} at ${job.employer || "Employer"} (${job.dates || "Dates"})`);
    wrap(job.details).forEach((line) => lines.push(`   ${line}`));
  });
  lines.push("", "Skills checked");
  if (!record.skills.length) {
    lines.push("None checked");
  } else {
    const grouped = new Map();
    record.skills.forEach((skill) => {
      const [group, ...rest] = String(skill).split(": ");
      const name = rest.join(": ") || group;
      if (!grouped.has(group)) grouped.set(group, []);
      grouped.get(group).push(name);
    });
    grouped.forEach((items, group) => {
      lines.push(group);
      items.forEach((item) => lines.push(`- ${item}`));
    });
  }
  lines.push("", `Resume file: ${resumeName || "Not uploaded"}`);
  return lines.flatMap((line) => wrap(line));
}

function saveLocal(record, resumeFile) {
  const stored = { ...record };
  if (resumeFile && resumeFile.data.length < 1200000) {
    stored.resumeName = resumeFile.name;
    stored.resume = resumeFile.data;
  } else if (resumeFile) {
    stored.resumeName = resumeFile.name;
  }
  localStorage.setItem(storageKey, JSON.stringify(stored));
  return stored;
}

const existing = localStorage.getItem(storageKey);
if (existing) {
  applySaved(JSON.parse(existing));
  status.textContent = "Your saved application is ready to continue.";
} else {
  experienceFields();
}

document.querySelector("#add-experience").addEventListener("click", () => experienceFields());

document.querySelector("#save-exit").addEventListener("click", async () => {
  const resumeFile = await readFile(resumeInput.files[0]);
  saveLocal(collect(), resumeFile);
  location.href = "careers.html";
});

document.querySelector("#save-continue").addEventListener("click", async () => {
  if (!form.reportValidity()) return;
  status.textContent = "Saving your application...";
  const record = collect();
  const resumeFile = await readFile(resumeInput.files[0]);
  const stored = saveLocal(record, resumeFile);
  const pdf = buildPdf(applicationLines(record, resumeFile?.name || stored.resumeName));
  const pdfBase64 = btoa(pdf);
  try {
    const response = await fetch("/api/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        role: role.id,
        title: role.title,
        name: record.name,
        summary: `${record.name} applied for ${role.title}.`,
        pdf: pdfBase64,
        resume: resumeFile?.data || stored.resume || "",
        resumeName: resumeFile?.name || stored.resumeName || "",
      }),
    });
    const result = await response.json();
    status.textContent = result.detail || "Your application was saved. You can return to it on this computer.";
  } catch {
    status.textContent = "Your application is saved on this computer. The email could not be sent from this page.";
  }
});
