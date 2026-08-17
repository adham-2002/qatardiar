import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content";
import { NOINDEX } from "@/lib/seo";

const PAGE_KEY = "ar-e-procurement";

export const metadata: Metadata = {
  title: "المشتريات الإلكترونية | QatariDiar",
  description: "تخضع عمليات الشراء في شركة الديار القطرية للاستثمار العقاري لمبادئ الشفافية والعدالة بهدف الحصول على سلع وخدمات عالية الجودة من الموردين المختصين ذوي السمعة الح",
  robots: NOINDEX,
};

export default function Page() {
  const page = PAGES[PAGE_KEY];
  if (!page) notFound();
  return <InteriorPageView page={page} />;
}
