type PaintStrokeProps = {
  className?: string;
  variant?: "underline" | "footer";
};

export function PaintStroke({ className = "", variant = "underline" }: PaintStrokeProps) {
  if (variant === "footer") {
    return (
      <svg
        className={className}
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 28c80-18 160-8 240-14s160-20 240-8 160 24 240 18 160-22 240-16 160 20 240 14 160-10 240-6v34H0V28z"
          fill="#c1121f"
        />
        <path
          d="M0 34c90-12 180-4 270-10s180-16 270-6 180 18 270 12 180-16 270-10 180 14 270 10 90-2 90-2v20H0V34z"
          fill="#e85d04"
        />
        <path
          d="M0 40c100-8 200-2 300-6s200-10 300-4 200 10 300 6 200-8 300-4 200 6 240 4v8H0v-4z"
          fill="#f5a623"
          opacity="0.95"
        />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 320 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M2 11c28-6 56-3 84-5s56-7 84-3 56 8 84 6 42-3 62-2"
        stroke="#e85d04"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M6 13c30-4 58-1 86-3s54-5 82-1 52 5 78 3 40-2 58-1"
        stroke="#f5a623"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}
