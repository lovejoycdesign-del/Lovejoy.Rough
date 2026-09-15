import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ResumePage } from "@/components/ResumePage";

export const metadata: Metadata = {
  title: "Resume — LJ Chirombo",
  description:
    "Resume of Lovejoy Chirombo — Digital Designer, problem solver, and lifelong learner.",
};

export default function Resume() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar active="RESUME" />
      <ResumePage />
    </div>
  );
}
