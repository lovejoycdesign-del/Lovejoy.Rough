import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { SkillsPage } from "@/components/SkillsPage";

export const metadata: Metadata = {
  title: "Skills — LJ Chirombo",
  description:
    "Skills and tools of Lovejoy Chirombo — design, animation, development, strategy, and more.",
};

export default function Skills() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar active="SKILLS" />
      <SkillsPage />
    </div>
  );
}
