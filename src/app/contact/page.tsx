import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact — LJ Chirombo",
  description:
    "Get in touch with Lovejoy Chirombo — Digital Designer open to collaborations and opportunities.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar active="CONTACT" />
      <ContactPage />
    </div>
  );
}
