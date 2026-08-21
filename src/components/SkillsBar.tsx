import {
  ClapperIcon,
  CodeIcon,
  PenIcon,
  PersonIcon,
} from "@/components/icons";
import { skillGroups } from "@/data/content";

const iconMap = {
  design: PenIcon,
  animation: ClapperIcon,
  development: CodeIcon,
  strategy: PersonIcon,
};

export function SkillsBar() {
  return (
    <div className="relative z-10 mx-auto mt-auto w-full max-w-[1200px] px-5 pb-4 md:px-8 lg:px-10">
      <div className="grid grid-cols-1 divide-y divide-white/10 rounded-md border border-white/15 bg-[#1a1a1a]/90 backdrop-blur-sm sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {skillGroups.map((group) => {
          const Icon = iconMap[group.icon];
          return (
            <div
              key={group.title}
              className="flex items-start gap-3 px-5 py-5 md:px-6 md:py-6"
            >
              <Icon size={24} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <h3 className="text-[13px] font-bold tracking-[0.16em] text-white">
                  {group.title}
                </h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-white/70 md:text-[13px]">
                  {group.items}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
