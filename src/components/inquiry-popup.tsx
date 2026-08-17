"use client";

import { XIcon } from "lucide-react";

import { LeadForm } from "@/components/sites/www-qataridiar-com-24dfe100/ar-egypt/LeadForm";
import { FORM_COPY } from "@/components/sites/www-qataridiar-com-24dfe100/ar-egypt/data";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { useSmartPopup } from "@/hooks/use-smart-popup";

export function InquiryPopup() {
  const [open, setOpen] = useSmartPopup();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        showClose={false}
        className="w-[calc(100%-2rem)] max-w-[420px] rounded-none border-0 bg-transparent p-0 shadow-none"
      >
        <div className="qd-root relative shadow-2xl">
          <DialogClose
            aria-label="إغلاق"
            className="absolute top-4 end-4 z-10 inline-flex size-8 items-center justify-center rounded-full bg-white/90 text-qd-navy backdrop-blur transition-colors hover:bg-qd-gold hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-qd-navy"
          >
            <XIcon className="size-4" />
          </DialogClose>
          <LeadForm variant="solid" title={FORM_COPY.title} subtitle={FORM_COPY.subtitle} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
