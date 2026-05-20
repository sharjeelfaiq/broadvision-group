import { Button } from "./Button";

type CTASectionProps = {
  title: string;
  text?: string;
  buttonLabel: string;
  href: string;
};

export function CTASection({ title, text, buttonLabel, href }: CTASectionProps) {
  return (
    <section className="site-container py-12 md:py-16">
      <div className="glass-card-strong relative overflow-hidden rounded-[1.5rem] px-5 py-12 text-center sm:px-6 md:rounded-[2rem] md:px-12 md:py-24">
        <div className="relative mx-auto max-w-3xl">
          <h2 className="heading-tight text-heading text-3xl sm:text-4xl md:text-6xl">
            {title}
          </h2>
          {text ? (
            <p className="body-copy mx-auto mt-6 max-w-2xl text-base md:text-lg md:leading-8">
              {text}
            </p>
          ) : null}
          <Button className="mt-8" href={href}>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
