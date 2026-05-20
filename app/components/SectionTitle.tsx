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
        <p className="label-caps mb-4 text-[#a5c8ff]">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-6xl">
        {title}
      </h2>
      <div
        className={[
          "mt-6 h-1 w-24 rounded-full bg-[#2792ff]",
          align === "center" ? "mx-auto" : "",
        ].join(" ")}
      />
      {subtitle ? (
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#e2e8f0] md:mt-8 md:text-lg md:leading-8">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
