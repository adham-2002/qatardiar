import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content";
import { NOINDEX } from "@/lib/seo";

const PAGE_KEY = "ar-projects-map";

export const metadata: Metadata = {
  title: "خريطة المشاريع | QatariDiar",
  description: "مشاريعنا هي مشاريع بارزة ومهمة لا مثيل لها في كثير من الأحيان من حيث الحجم والنطاق والرؤية. تسعى تطوراتنا إلى رعاية نمو المجتمعات المحلية بشكل شامل وتوفير فرص استثمارية.",
  robots: NOINDEX,
};

export default function Page() {
  const page = PAGES[PAGE_KEY];
  if (!page) notFound();
  return <InteriorPageView page={page} />;
}
