"use client";

import { type FormEvent, useState } from "react";
import { siteConfig } from "../lib/site";
import { Button } from "./Button";

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
] as const;

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = [
      `Name: ${formData.get("name") ?? ""}`,
      `Email: ${formData.get("email") ?? ""}`,
      `Telephone: ${formData.get("telephone") ?? ""}`,
      `Company: ${formData.get("company") ?? ""}`,
      `Country: ${formData.get("country") ?? ""}`,
      "",
      "Comments:",
      `${formData.get("comments") ?? ""}`,
    ].join("\n");

    const mailto = new URL(`mailto:${siteConfig.email}`);
    mailto.searchParams.set("subject", "BroadVision Group inquiry");
    mailto.searchParams.set("body", message);

    setStatus("Opening your email app with the inquiry details.");
    window.location.href = mailto.toString();
  }

  return (
    <form
      className="glass-card-strong relative overflow-hidden rounded-[1.5rem] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.28)] sm:p-6 md:p-10 lg:rounded-[2rem]"
      onSubmit={handleSubmit}
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 border-t border-[var(--border-strong)]" />
      <div className="mb-8">
        <p className="label-caps text-secondary">Inquiry Form</p>
        <h2 className="heading-tight text-heading mt-3 text-2xl md:text-3xl">
          Submit your details
        </h2>
        <p className="text-muted mt-3 text-sm leading-6">
          Fields marked with an asterisk are required.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((field) => (
          <label className="group block" htmlFor={field.id} key={field.id}>
            <span className="mb-3 flex items-center justify-between gap-4">
              <span className="label-caps field-label">
                {field.label}
                {field.required ? "*" : ""}
              </span>
              {!field.required ? (
                <span className="field-note text-xs font-semibold">
                  Optional
                </span>
              ) : null}
            </span>
            <input
              autoComplete={field.autoComplete}
              className="field min-h-14 px-4 py-3 text-base font-semibold md:min-h-16 md:px-6"
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
        <span className="label-caps field-label mb-3 block">Country*</span>
        <div className="select-wrap">
          <select
            className="field min-h-14 px-4 py-3 text-base font-semibold md:min-h-16 md:px-6"
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
        </div>
      </label>

      <label className="mt-6 block" htmlFor="comments">
        <span className="label-caps field-label mb-3 block">Comments</span>
        <textarea
          className="field min-h-40 resize-y px-4 py-4 text-base font-semibold leading-7 md:min-h-52 md:px-6 md:py-6"
          id="comments"
          name="comments"
          placeholder="How can we help you?"
        />
      </label>

      <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted max-w-sm text-sm leading-6">
          Your inquiry will be reviewed by the appropriate BVG team.
        </p>
        <Button
          className="h-14 w-full rounded-[var(--control-radius)] px-9 shadow-[0_16px_40px_rgba(39,146,255,0.24)] sm:w-auto"
          type="submit"
        >
          Submit Inquiry
        </Button>
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
