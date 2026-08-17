"use client";

import { useState } from "react";
import { trackMetaEvent } from "@/lib/meta-pixel";

export function ContactForm({
  title = "أرسل رسالة",
}: {
  title?: string;
}) {
  const [sent, setSent] = useState(false);

  const fields = [
    { name: "first_name", label: "الاسم", type: "text", required: true },
    { name: "last_name", label: "اسم العائلة", type: "text", required: true },
    { name: "email", label: "البريد الإلكتروني", type: "email", required: true },
    { name: "message", label: "الرسالة", type: "textarea", required: true },
  ];

  return (
    <form
      className="space-y-[18px] bg-white p-[30px]"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        trackMetaEvent("Contact");
      }}
    >
      <h2 className="mb-[10px] text-[22px] font-bold text-qd-navy uppercase">
        {title}
      </h2>
      {sent ? (
        <p className="text-[15px] text-qd-navy">
          شكراً لتواصلك. تم استلام رسالتك (عرض تجريبي).
        </p>
      ) : (
        <>
          {fields.map((f) => (
            <div key={f.name}>
              <label className="mb-[6px] block text-[13px] font-bold text-qd-navy">
                {f.label}
                {f.required ? " *" : ""}
              </label>
              {f.type === "textarea" ? (
                <textarea
                  name={f.name}
                  required={f.required}
                  rows={5}
                  className="w-full border border-qd-rule bg-qd-cream px-[14px] py-[12px] text-[14px] outline-none focus:border-qd-gold"
                />
              ) : (
                <input
                  type={f.type}
                  name={f.name}
                  required={f.required}
                  className="w-full border border-qd-rule bg-qd-cream px-[14px] py-[12px] text-[14px] outline-none focus:border-qd-gold"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="bg-qd-navy px-[28px] py-[12px] text-[14px] font-bold text-white uppercase transition hover:bg-qd-gold"
          >
            إرسال
          </button>
        </>
      )}
    </form>
  );
}
