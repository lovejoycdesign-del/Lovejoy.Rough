import {
  BehanceIcon,
  EmailIcon,
  LinkedInIcon,
} from "@/components/icons";
import { socialLinks } from "@/data/content";

const iconMap = {
  behance: BehanceIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
};

type SocialLinksProps = {
  className?: string;
  iconSize?: number;
};

export function SocialLinks({ className = "", iconSize = 20 }: SocialLinksProps) {
  return (
    <ul className={`flex items-center gap-5 ${className}`.trim()}>
      {socialLinks.map((item) => {
        const Icon = iconMap[item.icon];
        return (
          <li key={item.label}>
            <a
              href={item.href}
              aria-label={item.label}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="grid h-9 w-9 place-items-center text-white/85 transition hover:text-accent"
            >
              <Icon size={iconSize} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
