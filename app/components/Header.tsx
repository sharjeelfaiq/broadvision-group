"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "../data";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-glass fixed inset-x-0 top-0 z-50">
      <div className="site-container flex min-h-16 items-center justify-between gap-4 py-3 md:min-h-20 md:py-0">
        <Link
          className="inline-flex shrink-0 items-center"
          href="/"
          aria-label="BroadVision Group home"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-10 w-auto sm:h-11 md:h-14" preload />
        </Link>

        <button
          aria-controls="primary-navigation"
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="glass-card inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:border-[#2792ff]/60 hover:text-[#a5c8ff] md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span className="relative h-4 w-5" aria-hidden="true">
            <span
              className={[
                "absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition",
                open ? "translate-y-[7px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[7px] h-0.5 w-full rounded-full bg-current transition",
                open ? "opacity-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-current transition",
                open ? "-translate-y-[7px] -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>

        <nav className="hidden items-center justify-end gap-x-7 lg:gap-x-9 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            const isContact = item.href === "/contact";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "label-caps rounded-full transition duration-300",
                  active
                    ? "text-[#2792ff]"
                    : "text-[#e2e8f0] hover:text-[#a5c8ff]",
                  isContact
                    ? "border border-[#2792ff]/70 px-5 py-2 hover:bg-[#2792ff] hover:text-white"
                    : "border-b-2 border-transparent pb-1",
                  active && !isContact ? "border-[#2792ff]" : "",
                  active && isContact ? "bg-[#2792ff] text-white" : "",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div
        className={[
          "site-container overflow-hidden transition-[max-height,opacity,padding] duration-300 md:hidden",
          open ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
        id="primary-navigation"
      >
        <nav className="glass-card-strong grid gap-2 rounded-[1.25rem] p-2">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={[
                  "rounded-[0.9rem] px-4 py-3 text-sm font-extrabold text-white transition",
                  active
                    ? "bg-[#2792ff] shadow-[0_12px_28px_rgba(39,146,255,0.25)]"
                    : "text-[#e2e8f0] hover:bg-white/[0.07] hover:text-[#a5c8ff]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
