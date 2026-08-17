"use client";

import { useId, useState } from "react";
import { trackMetaEvent } from "@/lib/meta-pixel";
import { FORM_COPY, LEAD_API_URL, LEAD_PROVIDER } from "./data";

type Variant = "glass" | "solid";

/**
 * Egyptian mobile numbers are 010/011/012/015 + 8 digits. Accepts the number
 * with or without the +20 country code or the leading national 0.
 */
function normalizePhone(raw: string) {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("0020")) digits = digits.slice(4);
  if (digits.startsWith("20") && digits.length > 10) digits = digits.slice(2);
  if (digits.startsWith("0")) digits = digits.slice(1);
  return digits;
}

const isValidPhone = (raw: string) => /^1[0125]\d{8}$/.test(normalizePhone(raw));

interface Errors {
  name?: string;
  phone?: string;
}

function validate(name: string, phone: string): Errors {
  const errors: Errors = {};
  const trimmed = name.trim();
  if (!trimmed) errors.name = FORM_COPY.errors.nameRequired;
  else if (trimmed.length < 3) errors.name = FORM_COPY.errors.nameShort;

  if (!phone.trim()) errors.phone = FORM_COPY.errors.phoneRequired;
  else if (!isValidPhone(phone)) errors.phone = FORM_COPY.errors.phoneInvalid;

  return errors;
}

async function submitLead(name: string, phone: string) {
  const res = await fetch(LEAD_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.trim(),
      phone: `+20${normalizePhone(phone)}`,
      provider: LEAD_PROVIDER,
    }),
  });
  // The backend's validation/error messages are English internals not meant
  // for the site's Arabic visitors — surface only FORM_COPY.errors.submitFailed.
  if (!res.ok) throw new Error(FORM_COPY.errors.submitFailed);
}

const STYLES = {
  glass: {
    card: "bg-qd-navy/70 ring-1 ring-white/20 backdrop-blur-xl",
    title: "text-white",
    subtitle: "text-white/70",
    label: "text-white/85",
    field:
      "border border-white/25 bg-white/[0.07] text-white placeholder:text-white/40 focus:border-qd-gold focus:bg-white/[0.12]",
    error: "text-qd-danger-on-dark",
    fieldError: "border-qd-danger-on-dark",
    prefix: "border-white/25 bg-white/[0.12] text-white/70",
    button:
      "bg-qd-gold text-qd-navy hover:bg-white focus-visible:outline-white",
    privacy: "text-white/55",
    successTitle: "text-white",
    successBody: "text-white/75",
  },
  solid: {
    card: "bg-white ring-1 ring-qd-rule",
    title: "text-qd-navy",
    subtitle: "text-qd-text",
    label: "text-qd-navy",
    field:
      "border border-qd-rule bg-qd-cream text-qd-navy placeholder:text-[#9a9a9a] focus:border-qd-gold focus:bg-white",
    error: "text-qd-danger",
    fieldError: "border-qd-danger",
    prefix: "border-qd-rule bg-[#f1eeee] text-qd-text",
    button:
      "bg-qd-navy text-white hover:bg-qd-gold hover:text-qd-navy focus-visible:outline-qd-navy",
    privacy: "text-[#6b6b6b]",
    successTitle: "text-qd-navy",
    successBody: "text-qd-text",
  },
} satisfies Record<Variant, Record<string, string>>;

export function LeadForm({
  variant = "glass",
  title = FORM_COPY.title,
  subtitle = FORM_COPY.subtitle,
  submitLabel = FORM_COPY.submit,
  className = "",
}: {
  variant?: Variant;
  title?: string;
  subtitle?: string;
  submitLabel?: string;
  className?: string;
}) {
  const s = STYLES[variant];
  const uid = useId();
  const nameId = `${uid}-name`;
  const phoneId = `${uid}-phone`;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [sentName, setSentName] = useState("");
  const [submitError, setSubmitError] = useState("");

  // Re-validate on every keystroke only once the user has tried to submit, so
  // errors never appear before the first attempt.
  const revalidate = (nextName: string, nextPhone: string) => {
    if (submitted) setErrors(validate(nextName, nextPhone));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const found = validate(name, phone);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSubmitError("");
    setPending(true);
    try {
      await submitLead(name, phone);
      setSentName(name.trim().split(/\s+/)[0]);
      trackMetaEvent("Lead");
    } catch {
      setSubmitError(FORM_COPY.errors.submitFailed);
    } finally {
      setPending(false);
    }
  };

  const fieldClass = (hasError: boolean) =>
    `w-full px-[14px] py-[13px] text-[15px] outline-none transition-colors ${s.field} ${
      hasError ? s.fieldError : ""
    }`;

  if (sentName) {
    return (
      <div className={`p-[32px] ${s.card} ${className}`} role="status">
        <div className="mb-[18px] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-qd-gold">
          <svg viewBox="0 0 24 24" className="h-[26px] w-[26px]" aria-hidden="true">
            <path
              d="M20 6 9 17l-5-5"
              fill="none"
              stroke="var(--color-qd-navy)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className={`mb-[8px] text-[22px] font-bold ${s.successTitle}`}>
          {`شكراً ${sentName}، ${FORM_COPY.successTitle}`}
        </h3>
        <p className={`text-[15px] leading-[26px] ${s.successBody}`}>
          {FORM_COPY.successBody}
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className={`p-[32px] max-[767px]:p-[24px] ${s.card} ${className}`}
    >
      <span className="mb-[18px] block h-[3px] w-[48px] bg-qd-gold" aria-hidden="true" />
      <h2 className={`text-[24px] leading-[34px] font-bold ${s.title}`}>{title}</h2>
      <p className={`mt-[6px] mb-[24px] text-[14px] leading-[24px] ${s.subtitle}`}>
        {subtitle}
      </p>

      <div className="mb-[18px]">
        <label htmlFor={nameId} className={`mb-[7px] block text-[13px] font-bold ${s.label}`}>
          {FORM_COPY.nameLabel} *
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          placeholder={FORM_COPY.namePlaceholder}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            revalidate(e.target.value, phone);
          }}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${nameId}-error` : undefined}
          className={fieldClass(Boolean(errors.name))}
        />
        {errors.name ? (
          <p id={`${nameId}-error`} className={`mt-[6px] text-[13px] ${s.error}`}>
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="mb-[24px]">
        <label htmlFor={phoneId} className={`mb-[7px] block text-[13px] font-bold ${s.label}`}>
          {FORM_COPY.phoneLabel} *
        </label>
        {/* Forced LTR so the number and its country code read in dial order. */}
        <div dir="ltr" className="flex">
          <span
            className={`flex shrink-0 items-center border px-[14px] text-[15px] ${s.prefix}`}
            aria-hidden="true"
          >
            +20
          </span>
          <input
            id={phoneId}
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder={FORM_COPY.phonePlaceholder}
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              revalidate(name, e.target.value);
            }}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${phoneId}-error` : undefined}
            className={`${fieldClass(Boolean(errors.phone))} border-l-0`}
          />
        </div>
        {errors.phone ? (
          <p id={`${phoneId}-error`} className={`mt-[6px] text-[13px] ${s.error}`}>
            {errors.phone}
          </p>
        ) : null}
      </div>

      {submitError ? (
        <p role="alert" className={`mb-[14px] text-[13px] ${s.error}`}>
          {submitError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className={`w-full cursor-pointer px-[28px] py-[15px] text-[15px] font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-wait disabled:opacity-70 ${s.button}`}
      >
        {pending ? FORM_COPY.submitting : submitLabel}
      </button>

      <p className={`mt-[14px] text-center text-[12px] leading-[20px] ${s.privacy}`}>
        {FORM_COPY.privacy}
      </p>
    </form>
  );
}
