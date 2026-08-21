import type { ReactNode } from "react";

type IconProps = { className?: string; size?: number };

function Svg({
  className,
  size = 24,
  children,
  fill = "none",
}: IconProps & { children: ReactNode; fill?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{ width: size, height: size, flexShrink: 0, display: "block" }}
    >
      {children}
    </svg>
  );
}

export function PenIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <path
        d="M4 20l4.2-1.1L19.5 7.6a1.8 1.8 0 0 0 0-2.5l-.6-.6a1.8 1.8 0 0 0-2.5 0L5.1 15.8 4 20z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M14.2 6.2l3.6 3.6" stroke="currentColor" strokeWidth="1.6" />
    </Svg>
  );
}

export function ClapperIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <path d="M4 9h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9z" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4 9l2.2-4.5a1 1 0 0 1 1.3-.45L19.5 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M8 5.5l1.2 2.5M12 6.8l1.2 2.5" stroke="currentColor" strokeWidth="1.6" />
    </Svg>
  );
}

export function CodeIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <path
        d="M8.5 7.5 4 12l4.5 4.5M15.5 7.5 20 12l-4.5 4.5M13.2 6.5l-2.4 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function PersonIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5.5 19.5c1.2-3.2 3.4-4.8 6.5-4.8s5.3 1.6 6.5 4.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function InstagramIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </Svg>
  );
}

export function BehanceIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size} fill="currentColor">
      <path d="M4 8h5.2a2.4 2.4 0 0 1 0 4.8H4V8zm0 4.8h5.5A2.5 2.5 0 0 1 7 17.8H4v-5zM13.2 13.8h6.2c0 2.4-1.5 4-3.4 4-2.1 0-3.4-1.5-3.4-3.7 0-2.3 1.5-3.9 3.6-3.9 1.7 0 2.8.8 3.2 2.1h-2.1c-.2-.5-.7-.8-1.2-.8-.9 0-1.5.8-1.5 1.9 0 1.2.7 2 1.6 2 .8 0 1.3-.4 1.4-1.1h-2.4v-.5zM13.5 8.2h5V9.5h-5V8.2z" />
    </Svg>
  );
}

export function LinkedInIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <path
        d="M6.5 9.5V18M6.5 6.8v.05M10.5 18v-5.2c0-1.4.8-2.3 2.1-2.3 1.2 0 1.9.8 1.9 2.3V18M14.5 10.5V18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
    </Svg>
  );
}

export function EmailIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4.5 7.5 12 13l7.5-5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function BrushIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <path
        d="M14.5 4.5 19.5 9.5 10 19H5v-5l9.5-9.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M5 16.5c1.8 0 2.5.7 2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </Svg>
  );
}

export function TruckIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <path
        d="M3 7.5h11v9H3v-9zM14 10.5h4.2L21 13.8v2.7h-7v-6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="17.5" r="1.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="17.5" r="1.6" stroke="currentColor" strokeWidth="1.6" />
    </Svg>
  );
}

export function DollarIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 7v10M14.5 9.2c-.5-1-1.4-1.5-2.5-1.5-1.4 0-2.5.9-2.5 2.1S10.6 12 12 12s2.5.7 2.5 2.1c0 1.2-1.1 2.1-2.5 2.1-1.1 0-2-.5-2.5-1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function LightbulbIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <path
        d="M9.5 17h5M10 19.5h4M8.5 14.2A5.5 5.5 0 1 1 15.5 14c0 1.7-.8 2.6-1.6 3.4-.4.4-.7.8-.9 1.4H11c-.2-.6-.5-1-.9-1.4-.8-.8-1.6-1.7-1.6-3.4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function HeartIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <path
        d="M12 19.5s-6.5-4.1-8.2-7.6C2.4 9.2 3.4 6.5 6.2 5.7c1.7-.5 3.4.2 4.3 1.6.9-1.4 2.6-2.1 4.3-1.6 2.8.8 3.8 3.5 2.4 6.2C18.5 15.4 12 19.5 12 19.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function StarIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <path
        d="M12 3.5 14.4 9l5.9.5-4.5 3.8 1.4 5.7L12 16.3 6.8 19l1.4-5.7L3.7 9.5 9.6 9 12 3.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function MusicIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <path
        d="M9.5 17.5V6.2l10-2.2v11.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="17.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="15.3" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </Svg>
  );
}

export function BasketballIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 3.5v17M3.5 12h17M6 6.5c2.8 2.2 4.2 5 4.2 8.5S8.8 19.3 6 21.5M18 6.5c-2.8 2.2-4.2 5-4.2 8.5s1.4 4.8 4.2 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function BookIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <path
        d="M4.5 6.5A2.5 2.5 0 0 1 7 4h12.5v14.5H7A2.5 2.5 0 0 0 4.5 21V6.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M7 4v14.5" stroke="currentColor" strokeWidth="1.6" />
    </Svg>
  );
}

export function PlaneIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <path
        d="M21 12 3.5 4.5l2.2 6.8L14 12l-8.3.7-2.2 6.8L21 12z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function CommunityIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <circle cx="8" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="7.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.5 18.5c.8-2.4 2.4-3.6 4.5-3.6s3.7 1.2 4.5 3.6M11.5 18.5c.8-2.4 2.4-3.6 4.5-3.6s3.7 1.2 4.5 3.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function CapIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <path d="M3 10.5 12 6l9 4.5-9 4.5L3 10.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path
        d="M7 12.5v4.2c0 .8 2.2 2.3 5 2.3s5-1.5 5-2.3v-4.2M21 10.5v5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function RocketIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <path
        d="M14.5 9.5 8 16M9.2 14.8 6.5 17.5c-.8.8-2.4.3-2.6-.8l-.3-1.8 2.4-.4 1.6-1.6.4-2.4 1.8.3c1.1.2 1.6 1.8.8 2.6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 8.5c1.5-3.2 5.2-5 8.8-5.2.3 3.6-1.5 7.3-4.7 8.8L9.5 8.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="15.2" cy="8.8" r="1.2" stroke="currentColor" strokeWidth="1.4" />
    </Svg>
  );
}

export function TargetIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </Svg>
  );
}

export function SparkIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <path
        d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3M6.2 6.2l2.1 2.1M15.7 15.7l2.1 2.1M17.8 6.2l-2.1 2.1M8.3 15.7l-2.1 2.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.6" />
    </Svg>
  );
}

export function ArrowUpIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <path
        d="M12 19V5M6.5 10.5 12 5l5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function QuoteIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size} fill="currentColor">
      <path d="M10.5 8.5C9 7 7.2 6.5 5.5 6.8v3.2c1.3-.1 2.5.5 2.8 1.8.4 1.5-.6 3-2.2 3.2v3.5c3.4-.4 5.7-3.2 5.4-6.5-.2-1.8-1-3.2-1.8-4zM20.5 8.5c-1.5-1.5-3.3-2-5-1.7v3.2c1.3-.1 2.5.5 2.8 1.8.4 1.5-.6 3-2.2 3.2v3.5c3.4-.4 5.7-3.2 5.4-6.5-.2-1.8-1-3.2-1.8-4z" />
    </Svg>
  );
}

export function PhoneIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <path
        d="M8 3.5h3.2l1 3.2-2 1.2c.8 1.6 2.1 2.9 3.7 3.7l1.2-2 3.2 1V17a1.5 1.5 0 0 1-1.5 1.5A12 12 0 0 1 4.5 6.5 1.5 1.5 0 0 1 6 5h2V3.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function LocationIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <path
        d="M12 20.5s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </Svg>
  );
}

export function GlobeIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.5 12h17M12 3.5c2.2 2.4 3.5 5.3 3.5 8.5s-1.3 6.1-3.5 8.5c-2.2-2.4-3.5-5.3-3.5-8.5s1.3-6.1 3.5-8.5z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </Svg>
  );
}

export function GearIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 4.2v1.8M12 18v1.8M4.2 12h1.8M18 12h1.8M6.5 6.5l1.3 1.3M16.2 16.2l1.3 1.3M17.5 6.5l-1.3 1.3M7.8 16.2l-1.3 1.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function MonitorIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <rect x="3.5" y="4.5" width="17" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 19.5h6M12 16.5v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </Svg>
  );
}

export function BriefcaseIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <rect x="3.5" y="8" width="17" height="11.5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9 8V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V8M3.5 13h17"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </Svg>
  );
}

export function TrophyIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <path
        d="M8 4.5h8v5c0 2.2-1.8 4-4 4s-4-1.8-4-4v-5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 7H5.8c-.7 0-1.3.6-1.3 1.3 0 1.6 1.2 2.7 2.7 2.7H8M16 7h2.2c.7 0 1.3.6 1.3 1.3 0 1.6-1.2 2.7-2.7 2.7H16M10 16.5h4M12 13.5v3M9.5 19.5h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function CheckIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8.5 12.2 11 14.7l4.5-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function PhoneMobileIcon({ className, size }: IconProps) {
  return (
    <Svg className={className} size={size}>
      <rect x="7" y="3.5" width="10" height="17" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 17.5h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </Svg>
  );
}
