import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content";
import { NOINDEX } from "@/lib/seo";

const PAGE_KEY = "ar-careers";

export const metadata: Metadata = {
  title: "وظائف | QatariDiar",
  description: "لقد عُهد إلى الديار القطرية بتحقيق رؤية قطر الملهمة المتمثلة في بناء بيئة جميلة، ومجتمعات جديدة مستدامة تأسر ألباب الجمهور على مستوى العالم..",
  robots: NOINDEX,
};

export default function Page() {
  const page = PAGES[PAGE_KEY];
  if (!page) notFound();
  return <InteriorPageView page={page} />;
}
