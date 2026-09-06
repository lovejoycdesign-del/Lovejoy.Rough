import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Marks",
  description: "Leave a note for Lovejoy Chirombo.",
};

export default function MarksPage() {
  return (
    <article className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
      <div>
        <p className="font-mono text-[11px] tracking-[0.28em] text-foreground/55 uppercase">
          Marks · Contact
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">
          Leave a mark.
        </h1>
        <p className="mt-6 max-w-md text-[17px] leading-relaxed text-foreground/75">
          Commissions, collaborations, something that needs a poster or a mark.
          Write plainly. I will write back.
        </p>
        <dl className="mt-10 space-y-4 font-mono text-[12px] tracking-[0.12em]">
          <div>
            <dt className="text-foreground/45 uppercase">Mail</dt>
            <dd className="mt-1">
              <a
                href="mailto:lovejoyc.design@gmail.com"
                className="underline decoration-foreground/30 underline-offset-4 hover:decoration-[#c4452d]"
              >
                lovejoyc.design@gmail.com
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-foreground/45 uppercase">Studio</dt>
            <dd className="mt-1">Severn, Maryland</dd>
          </div>
          <div>
            <dt className="text-foreground/45 uppercase">Book</dt>
            <dd className="mt-1">
              <a
                href="https://www.behance.net/lovejoychirombo"
                className="underline decoration-foreground/30 underline-offset-4 hover:decoration-[#c4452d]"
                target="_blank"
                rel="noreferrer"
              >
                Behance / lovejoychirombo
              </a>
            </dd>
          </div>
        </dl>
      </div>
      <ContactForm />
    </article>
  );
}
