import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PaintStroke } from "@/components/PaintStroke";
import { SideRail } from "@/components/SideRail";
import { SkillsBar } from "@/components/SkillsBar";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <Navbar active="HOME" />
      <SideRail />

      <main className="relative flex min-h-screen flex-col pb-6 lg:pr-14 xl:pr-16">
        <Hero />
        <SkillsBar />
      </main>

      <div className="relative h-9 w-full overflow-hidden md:h-11">
        <PaintStroke variant="footer" className="h-full w-full" />
      </div>
    </div>
  );
}
