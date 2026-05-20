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
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-xs font-extrabold uppercase tracking-[0.14em] transition duration-300 active:scale-95 sm:px-8 sm:tracking-[0.16em]",
    variant === "primary"
      ? "bg-[#2792ff] text-white hover:bg-[#43a3ff] hover:shadow-[0_0_30px_rgba(39,146,255,0.42)]"
      : "border border-white/20 bg-white/[0.06] text-white hover:border-[#a5c8ff]/60 hover:bg-white/[0.1]",
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
