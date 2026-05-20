import Image from "next/image";

type LogoProps = {
  className?: string;
  preload?: boolean;
};

export function Logo({ className = "h-14 w-auto", preload = false }: LogoProps) {
  return (
    <Image
      alt="BroadVision Group"
      className={className}
      height={127}
      preload={preload}
      src="/logo.svg"
      unoptimized
      width={282}
    />
  );
}
