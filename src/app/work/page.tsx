import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { WorkPage } from "@/components/WorkPage";

export const metadata: Metadata = {
  title: "Work — LJ Chirombo",
  description:
    "Selected creative work by Lovejoy Chirombo — art, graphic design, branding, and digital design.",
};

export default function Work() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar active="WORK" />
      <WorkPage />
    </div>
  );
}
