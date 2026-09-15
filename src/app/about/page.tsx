import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About — LJ Chirombo",
  description:
    "About Lovejoy Chirombo — Digital Designer with skills in printmaking, animation, web design, UI/UX, and programming.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar active="ABOUT" />
      <AboutPage />
    </div>
  );
}
