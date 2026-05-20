import type { Metadata } from "next";
import { Button } from "../components/Button";

export const metadata: Metadata = {
  title: "Contact",
};

const fields = [
  {
    autoComplete: "name",
    id: "name",
    label: "Name",
    placeholder: "Enter your full name",
    required: true,
    type: "text",
  },
  {
    autoComplete: "email",
    id: "email",
    label: "Email",
    placeholder: "name@company.com",
    required: true,
    type: "email",
  },
  {
    autoComplete: "tel",
    id: "telephone",
    label: "Telephone",
    placeholder: "+1 (555) 000-0000",
    required: false,
    type: "tel",
  },
  {
    autoComplete: "organization",
    id: "company",
    label: "Company Name",
    placeholder: "Your Organization",
    required: true,
    type: "text",
  },
];

const features = [
  {
    icon: "G",
    title: "Global Presence",
    text: "Operating across 14 international hubs",
  },
  {
    icon: "S",
    title: "Institutional Trust",
    text: "Secured capital management protocols",
  },
  {
    icon: "24",
    title: "Rapid Response",
    text: "Initial consultation within 24 hours",
  },
];

export default function ContactPage() {
  return (
    <section className="ambient-section section-y">
      <div className="site-container">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <p className="label-caps mb-5 text-[#00c8fe]">Contact BVG</p>
          <h1 className="page-title text-[#a5c8ff]">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base font-semibold leading-7 text-[#e2e8f0] sm:text-lg md:mt-8 md:text-xl md:leading-8">
            For any inquiries, please fill in the form below or email us at{" "}
            <a
              className="text-[#a5c8ff] hover:text-[#2792ff]"
              href="mailto:contact@broadvision.com"
            >
              contact@broadvision.com
            </a>
            .
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-8">
          <aside className="glass-card rounded-[1.5rem] p-5 sm:p-7 md:p-9 lg:sticky lg:top-28 lg:rounded-[2rem]">
            <p className="label-caps text-[#a5c8ff]">Start a Conversation</p>
            <h2 className="mt-5 text-2xl font-black leading-tight text-white sm:text-3xl md:text-4xl">
              Tell us where capital, technology, or venture-building can help.
            </h2>
            <p className="mt-6 text-base leading-7 text-[#c0c7d6]">
              BVG evaluates opportunities across global technology sectors with
              an institutional, operator-led perspective. Share the context and
              our team will route the inquiry appropriately.
            </p>

            <div className="mt-9 space-y-4">
              <a
                className="group block rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-[#a5c8ff]/35 hover:bg-white/[0.07]"
                href="mailto:contact@broadvision.com"
              >
                <span className="label-caps text-[#00c8fe]">Email</span>
                <span className="mt-2 block text-base font-bold text-white transition group-hover:text-[#a5c8ff]">
                  contact@broadvision.com
                </span>
              </a>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5">
                <span className="label-caps text-[#00c8fe]">Response</span>
                <span className="mt-2 block text-base font-bold text-white">
                  Initial consultation within 24 hours
                </span>
              </div>
            </div>

            <div className="mt-9 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="mt-7 grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {features.map((feature) => (
                <article key={feature.title}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#a5c8ff]/25 bg-[#2792ff]/12 text-sm font-black text-[#a5c8ff]">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm leading-5 text-[#c0c7d6]">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </aside>

          <form className="glass-card-strong relative overflow-hidden rounded-[1.5rem] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.28)] sm:p-6 md:p-10 lg:rounded-[2rem]">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#a5c8ff]/55 to-transparent" />
            <div className="mb-8">
              <p className="label-caps text-[#00c8fe]">Inquiry Form</p>
              <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
                Submit your details
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#c0c7d6]">
                Fields marked with an asterisk are required.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {fields.map((field) => (
                <label className="group block" htmlFor={field.id} key={field.id}>
                  <span className="mb-3 flex items-center justify-between gap-4">
                    <span className="label-caps text-[#e2e8f0]">
                      {field.label}
                      {field.required ? "*" : ""}
                    </span>
                    {!field.required ? (
                      <span className="text-xs font-semibold text-[#8fa0b8]">
                        Optional
                      </span>
                    ) : null}
                  </span>
                  <input
                    autoComplete={field.autoComplete}
                    className="field min-h-14 px-4 py-3 text-base font-semibold hover:border-[#a5c8ff]/65 md:min-h-16 md:px-6"
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    required={field.required}
                    type={field.type}
                  />
                </label>
              ))}
            </div>

            <label className="mt-6 block" htmlFor="country">
              <span className="label-caps mb-3 block text-[#e2e8f0]">
                Country*
              </span>
              <select
                className="field min-h-14 px-4 py-3 text-base font-semibold hover:border-[#a5c8ff]/65 md:min-h-16 md:px-6"
                defaultValue=""
                id="country"
                name="country"
                required
              >
                <option disabled value="">
                  Select your country
                </option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Japan</option>
                <option>Singapore</option>
                <option>Pakistan</option>
              </select>
            </label>

            <label className="mt-6 block" htmlFor="comments">
              <span className="label-caps mb-3 block text-[#e2e8f0]">
                Comments
              </span>
              <textarea
                className="field min-h-40 resize-y px-4 py-4 text-base font-semibold leading-7 hover:border-[#a5c8ff]/65 md:min-h-52 md:px-6 md:py-6"
                id="comments"
                name="comments"
                placeholder="How can we help you?"
              />
            </label>

            <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-sm leading-6 text-[#c0c7d6]">
                Your inquiry will be reviewed by the appropriate BVG team.
              </p>
              <Button
                className="h-14 w-full rounded-[var(--control-radius)] px-9 shadow-[0_16px_40px_rgba(39,146,255,0.24)] sm:w-auto"
                type="submit"
              >
                Submit Inquiry
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
