import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content";
import { NOINDEX } from "@/lib/seo";

const PAGE_KEY = "ar-about-qatar-history-geography";

export const metadata: Metadata = {
  title: "معلومات عن قطر | QatariDiar",
  description: "لمحة موجز عن الدولة روابط مفيدة",
  robots: NOINDEX,
};

export default function Page() {
  const page = PAGES[PAGE_KEY];
  if (!page) notFound();
  return <InteriorPageView page={page} />;
}
