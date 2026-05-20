import Link from "next/link";
import { navItems } from "../data";
import { Logo } from "./Logo";

const socials = [
  {
    label: "LinkedIn",
    icon: (
      <path d="M6.94 8.9H3.75v10.35h3.19V8.9ZM5.34 7.5a1.86 1.86 0 1 0 0-3.72 1.86 1.86 0 0 0 0 3.72Zm13.91 6.03c0-3.12-1.67-4.57-3.9-4.57a3.36 3.36 0 0 0-3.04 1.68V8.9H9.26v10.35h3.18v-5.13c0-1.35.26-2.66 1.93-2.66 1.65 0 1.67 1.54 1.67 2.75v5.04h3.2v-5.72Z" />
    ),
  },
  {
    label: "Facebook",
    icon: (
      <path d="M14.25 8.35h2.08V4.72a26.9 26.9 0 0 0-3.03-.16c-3 0-5.05 1.89-5.05 5.35v3.19H4.94v4.06h3.31v10.22h4.06V17.16h3.18l.5-4.06h-3.68V10.3c0-1.17.32-1.95 1.94-1.95Z" />
    ),
  },
  {
    label: "Twitter",
    icon: (
      <path d="M15.33 4.75h3.38l-7.38 8.43 8.68 11.47h-6.8l-5.32-6.96-6.09 6.96H-1.6l7.9-9.02L-2.02 4.75h6.97l4.81 6.36 5.57-6.36Zm-1.19 17.88h1.87L3.92 6.66H1.91l12.23 15.97Z" />
    ),
  },
  {
    label: "Instagram",
    icon: (
      <path d="M12 7.35A4.65 4.65 0 1 0 12 16.66 4.65 4.65 0 0 0 12 7.35Zm0 7.68a3.03 3.03 0 1 1 0-6.06 3.03 3.03 0 0 1 0 6.06Zm5.92-7.86a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Zm3.07 1.1c-.07-1.45-.4-2.73-1.46-3.78-1.05-1.06-2.33-1.39-3.78-1.46-1.49-.08-5.98-.08-7.47 0-1.44.07-2.72.4-3.78 1.45-1.06 1.06-1.39 2.34-1.46 3.78-.08 1.5-.08 5.98 0 7.48.07 1.44.4 2.72 1.46 3.78 1.06 1.06 2.34 1.39 3.78 1.46 1.49.08 5.98.08 7.47 0 1.45-.07 2.73-.4 3.78-1.46 1.06-1.06 1.39-2.34 1.46-3.78.08-1.5.08-5.98 0-7.47Zm-1.93 9.08a3.05 3.05 0 0 1-1.72 1.72c-1.19.47-4.01.36-5.34.36s-4.16.1-5.34-.36a3.05 3.05 0 0 1-1.72-1.72c-.47-1.19-.36-4.02-.36-5.35s-.1-4.16.36-5.34a3.05 3.05 0 0 1 1.72-1.72c1.18-.47 4.01-.36 5.34-.36s4.16-.1 5.34.36a3.05 3.05 0 0 1 1.72 1.72c.47 1.18.36 4.01.36 5.34s.11 4.16-.36 5.35Z" />
    ),
  },
  {
    label: "TikTok",
    icon: (
      <path d="M16.7 7.36a5.57 5.57 0 0 1-3.26-1.05v8.84a5.32 5.32 0 1 1-4.6-5.27v2.94a2.45 2.45 0 1 0 1.7 2.33V1.83h2.9a5.58 5.58 0 0 0 3.26 5.03v.5Z" />
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-[rgba(9,14,28,0.62)] py-12 md:py-16">
      <div className="site-container flex flex-col items-center gap-7 text-center md:gap-8">
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label="BroadVision Group home"
        >
          <Logo className="h-14 w-auto sm:h-16 md:h-20" />
        </Link>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3 sm:gap-x-8">
          {navItems.map((item) => (
            <Link
              className="label-caps text-[#c0c7d6] transition hover:text-[#a5c8ff]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {socials.map((social) => (
            <a
              aria-label={social.label}
              className="glass-card flex h-11 w-11 items-center justify-center rounded-full text-[#e2e8f0] transition hover:-translate-y-1 hover:border-[#2792ff]/60 hover:text-[#a5c8ff]"
              href="#"
              key={social.label}
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
              >
                {social.icon}
              </svg>
            </a>
          ))}
        </div>
        <p className="text-sm leading-6 text-[#c0c7d6]/65">
          © 2024 BroadVision Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
