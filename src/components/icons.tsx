// Small hand-drawn brand marks — kept to simple shapes on purpose, not
// traced illustrations. currentColor throughout so they inherit theme.

type IconProps = { className?: string };

export function PotIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 20h30l-2.6 15.2A5 5 0 0 1 31.5 39h-15a5 5 0 0 1-4.9-3.8L9 20Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M6 20h36" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M15 20c0-5 2.8-9 9-9s9 4 9 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M19 6.5c0 1.8-1.6 2-1.6 3.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M25 5.5c0 1.8-1.6 2-1.6 3.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function LadleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="2.2" />
      <path d="M22.5 22.5 40 40" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M13 15c0-2 1.5-3.6 3.4-3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function PepperIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 12c6-4 12-2 13 4 1.4 8-6 20-15 22-7 1.6-12-3-10.5-9.4C9 21 14.6 15.4 20 12Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M20 12c-1-2.6.4-5.4 3-6.6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 40C8 20 22 8 40 8 40 26 28 40 8 40Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M10 38 30 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function GrainRow({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 12" fill="none" className={className} aria-hidden="true">
      {[4, 16, 28, 40, 52].map((x, i) => (
        <ellipse
          key={x}
          cx={x + 4}
          cy="6"
          rx="4.2"
          ry="2.2"
          transform={`rotate(${i % 2 === 0 ? -18 : 14} ${x + 4} 6)`}
          stroke="currentColor"
          strokeWidth="1.3"
        />
      ))}
    </svg>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.5v2.4M12 19.1v2.4M4.4 12H2M22 12h-2.4M5.6 5.6l1.7 1.7M16.7 16.7l1.7 1.7M18.4 5.6l-1.7 1.7M7.3 16.7 5.6 18.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 14.2A8.5 8.5 0 1 1 9.8 4a7 7 0 0 0 10.2 10.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BagIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.5 8.5h11l1 12a1.6 1.6 0 0 1-1.6 1.7H7.1A1.6 1.6 0 0 1 5.5 20.5l1-12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9 8.5v-1a3 3 0 0 1 6 0v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m7 10 5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
