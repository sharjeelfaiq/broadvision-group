import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit";
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = [
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-xs font-extrabold uppercase tracking-[0.14em] transition duration-300 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--primary-focus-ring)] sm:px-8 sm:tracking-[0.16em]",
    variant === "primary"
      ? "bg-[var(--primary)] text-heading hover:bg-[var(--primary-hover)] hover:shadow-[0_0_30px_rgba(39,146,255,0.42)]"
      : "border border-[var(--border-strong)] bg-white/[0.06] text-heading hover:border-[var(--primary-soft)] hover:bg-white/[0.1]",
    className,
  ].join(" ");

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type}>
      {children}
    </button>
  );
}
