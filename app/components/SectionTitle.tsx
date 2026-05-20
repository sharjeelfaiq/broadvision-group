type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={[
        "mb-12",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
      ].join(" ")}
    >
      {eyebrow ? (
        <p className="label-caps text-accent-soft mb-4">{eyebrow}</p>
      ) : null}
      <h2 className="heading-tight text-heading text-3xl sm:text-4xl md:text-6xl">
        {title}
      </h2>
      <div
        className={[
          "mt-6 h-1 w-24 rounded-full bg-[var(--primary)]",
          align === "center" ? "mx-auto" : "",
        ].join(" ")}
      />
      {subtitle ? (
        <p className="body-copy mx-auto mt-6 max-w-2xl text-base md:mt-8 md:text-lg md:leading-8">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
