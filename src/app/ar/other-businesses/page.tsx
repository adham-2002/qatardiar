import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content";
import { NOINDEX } from "@/lib/seo";

const PAGE_KEY = "ar-other-businesses";

export const metadata: Metadata = {
  title: "أعمال أخرى | QatariDiar",
  description: "بالإضافة إلى الأعمال الأساسية لشركة الديار القطرية في مجال التطوير العقاري، تم إنشاء شركات لدعم رؤية الشركة منها شركات متخصصة في البناء وتكوين البنية التحتية، و",
  robots: NOINDEX,
};

export default function Page() {
  const page = PAGES[PAGE_KEY];
  if (!page) notFound();
  return <InteriorPageView page={page} />;
}
