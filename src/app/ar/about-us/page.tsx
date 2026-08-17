import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content";
import { NOINDEX } from "@/lib/seo";

const PAGE_KEY = "ar-about-us";

export const metadata: Metadata = {
  title: "معلومات عنا | QatariDiar",
  description: "تأسست شركة الديار القطرية للاستثمار العقاري عام 2005 كإحدى شركات جهاز قطر للاستثمار. كُلّفت الديار القطرية بدعم الاقتصاد القطري المتنامي وتنسيق أولويات التنمية ",
  robots: NOINDEX,
};

export default function Page() {
  const page = PAGES[PAGE_KEY];
  if (!page) notFound();
  return <InteriorPageView page={page} />;
}
