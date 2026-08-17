"use client";

import { useEffect, useState } from "react";
import { VIDEO_ID } from "./data";

const BACKGROUND_SRC = `${VIDEO_ID}?background=1&autoplay=1&loop=1&byline=0&title=0`;

export function VideoSection() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  return (
    <>
      <section className="mx-auto my-[90px] max-w-[960px] px-[15px] max-[991px]:px-[25px]">
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <iframe
            src={BACKGROUND_SRC}
            width={640}
            height={360}
            allow="autoplay; fullscreen"
            allowFullScreen
            title="فيديو تعريفي عن الديار القطرية"
            loading="lazy"
            className="absolute top-0 left-0 h-full w-full bg-black"
          />
          <button
            type="button"
            aria-label="تشغيل الفيديو"
            onClick={() => setModalOpen(true)}
            className="absolute inset-0 cursor-pointer"
          />
        </div>
      </section>

      {modalOpen && (
        <>
          <div
            onClick={() => setModalOpen(false)}
            aria-hidden="true"
            className="fixed inset-0 z-[998] bg-black/50"
          />
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-[20px]">
            <button
              type="button"
              aria-label="إغلاق"
              onClick={() => setModalOpen(false)}
              className="absolute top-[30px] right-[30px] text-[40px] leading-none text-white"
            >
              ×
            </button>
            <div className="aspect-video w-full max-w-[960px]">
              <iframe
                src={VIDEO_ID}
                width={640}
                height={360}
                allow="autoplay; fullscreen"
                allowFullScreen
                title="فيديو تعريفي عن الديار القطرية"
                className="h-full w-full bg-black"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
