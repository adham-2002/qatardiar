import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content";
import { NOINDEX } from "@/lib/seo";

const PAGE_KEY = "ar-request-access-information";

export const metadata: Metadata = {
  title: "طلب الحصول على المعلومات | QatariDiar",
  description: "طلب الحصول على المعلومات من شركة الديار القطرية للاستثمار العقاري، شركة مساهمة قطرية خاصة",
  robots: NOINDEX,
};

export default function Page() {
  const page = PAGES[PAGE_KEY];
  if (!page) notFound();
  return <InteriorPageView page={page} />;
}
