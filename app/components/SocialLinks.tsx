import { socialLinks } from "../lib/social";

type SocialPlatform = (typeof socialLinks)[number]["platform"];

const iconPaths: Record<SocialPlatform, string[]> = {
  LinkedIn: [
    "M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5C0 2.11 1.11 1 2.49 1s2.49 1.11 2.49 2.5ZM.35 8h4.27v13H.35V8Zm7.11 0h4.09v1.78h.06c.57-1.08 1.96-2.22 4.03-2.22 4.31 0 5.11 2.84 5.11 6.53V21h-4.27v-6.12c0-1.46-.03-3.34-2.04-3.34-2.04 0-2.35 1.59-2.35 3.23V21H7.46V8Z",
  ],
  X: [
    "M13.19 9.29 21.42 0h-1.95l-7.15 8.07L6.62 0H0l8.63 12.21L0 21.96h1.95l7.54-8.52 6.02 8.52h6.62l-8.94-12.67Zm-2.67 3.02-.87-1.21L2.69 1.43h3l5.61 7.8.87 1.21 7.3 10.15h-3l-5.95-8.28Z",
  ],
  Facebook: [
    "M13.5 22v-8h2.69l.4-3.12H13.5V8.89c0-.9.25-1.52 1.55-1.52h1.65V4.58c-.29-.04-1.27-.12-2.42-.12-2.39 0-4.03 1.46-4.03 4.14v2.28H7.54V14h2.71v8h3.25Z",
  ],
  Instagram: [
    "M7 2h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm4 3.35A3.65 3.65 0 1 1 11 14.65 3.65 3.65 0 0 1 11 7.35Zm0 2A1.65 1.65 0 1 0 11 12.65 1.65 1.65 0 0 0 11 9.35Zm4.9-2.95a.85.85 0 1 1 0 1.7.85.85 0 0 1 0-1.7Z",
  ],
  TikTok: [
    "M15.4 1c.35 2.66 1.84 4.25 4.6 4.42v3.02a7.64 7.64 0 0 1-4.56-1.42v6.93c0 3.5-2.15 6.95-6.58 6.95-3.66 0-6.86-2.4-6.86-6.27 0-4.42 4.25-7.06 8.15-6.2v3.18c-1.8-.58-4.74.2-4.74 2.88 0 1.76 1.37 3.08 3.23 3.08 2.11 0 3.43-1.28 3.43-3.78V1h3.33Z",
  ],
};

type SocialLinksProps = {
  showHandles?: boolean;
  className?: string;
  linkClassName?: string;
};

export function SocialLinks({
  showHandles = false,
  className = "",
  linkClassName = "",
}: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      {socialLinks.map((link) => (
        <a
          aria-label={`${link.platform}: ${link.handle}`}
          className={`text-muted hover:text-accent-soft inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-bold transition hover:border-[var(--border-strong)] hover:bg-white/[0.07] ${linkClassName}`}
          href={link.url}
          key={link.platform}
          rel="noopener noreferrer"
          target="_blank"
          title={`${link.platform}: ${link.handle}`}
        >
          <svg
            aria-hidden="true"
            className="h-4 w-4 shrink-0"
            fill="currentColor"
            viewBox="0 0 22 22"
          >
            {iconPaths[link.platform].map((path) => (
              <path d={path} key={path} />
            ))}
          </svg>
          {showHandles ? <span>{link.handle}</span> : <span className="sr-only">{link.platform}</span>}
        </a>
      ))}
    </div>
  );
}
