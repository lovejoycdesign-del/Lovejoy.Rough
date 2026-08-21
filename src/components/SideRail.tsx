import { SocialLinks } from "@/components/SocialLinks";
import { sidebarTagline } from "@/data/content";

export function SideRail() {
  return (
    <aside className="pointer-events-none fixed inset-y-0 right-0 z-20 hidden w-14 lg:block xl:w-16">
      <div className="pointer-events-auto flex h-full flex-col items-center justify-between py-28">
        <p
          className="text-[10px] font-medium tracking-[0.28em] text-white/85 xl:text-[11px]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {sidebarTagline}
        </p>

        <SocialLinks className="flex-col gap-4" iconSize={18} />
      </div>
    </aside>
  );
}
