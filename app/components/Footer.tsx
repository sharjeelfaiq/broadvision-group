import Link from "next/link";
import { navItems } from "../data";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="py-12 md:py-16">
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
              className="label-caps text-muted hover:text-accent-soft transition"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-muted text-sm leading-6 opacity-65">
          © 2026 BroadVision Group. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
