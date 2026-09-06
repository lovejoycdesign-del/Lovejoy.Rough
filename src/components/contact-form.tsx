"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const EMAIL = "lovejoyc.design@gmail.com";

type Status = "idle" | "error" | "success";

export function ContactForm() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !from.trim() || !note.trim()) {
      setStatus("error");
      setMessage("Name, email, and a note — all three, or it doesn’t leave the desk.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from)) {
      setStatus("error");
      setMessage("That email doesn’t look usable. Check it and send again.");
      return;
    }

    const subject = encodeURIComponent(`Mark from ${name.trim()}`);
    const body = encodeURIComponent(`${note.trim()}\n\n— ${name.trim()}\n${from.trim()}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus("success");
    setMessage("Your mail client should be open. If it isn’t, write directly.");
  }

  if (status === "success") {
    return (
      <div className="border border-foreground/20 bg-card px-5 py-8">
        <p className="font-serif text-2xl">Mark left.</p>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground/70">{message}</p>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-4 inline-block font-mono text-[12px] tracking-[0.16em] text-[#c4452d] underline-offset-4 hover:underline"
        >
          {EMAIL}
        </a>
        <div>
          <Button
            type="button"
            variant="outline"
            className="mt-6 rounded-none"
            onClick={() => {
              setStatus("idle");
              setName("");
              setFrom("");
              setNote("");
              setMessage("");
            }}
          >
            Write another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="space-y-1.5">
        <Label htmlFor="name" className="font-mono text-[11px] tracking-[0.18em] uppercase">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="h-10 rounded-none border-foreground/25 bg-card"
          autoComplete="name"
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="email" className="font-mono text-[11px] tracking-[0.18em] uppercase">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={from}
          onChange={(event) => setFrom(event.target.value)}
          className="h-10 rounded-none border-foreground/25 bg-card"
          autoComplete="email"
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="note" className="font-mono text-[11px] tracking-[0.18em] uppercase">
          Note
        </Label>
        <Textarea
          id="note"
          name="note"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          rows={6}
          className="rounded-none border-foreground/25 bg-card"
          placeholder="What are we making?"
        />
      </div>
      {status === "error" ? (
        <p role="alert" className="font-mono text-[12px] text-[#c4452d]">
          {message}
        </p>
      ) : null}
      <Button type="submit" className="rounded-none px-5 font-mono text-[11px] tracking-[0.2em] uppercase">
        Send the note
      </Button>
    </form>
  );
}
