import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/sites/www-qataridiar-com-24dfe100/shared/PageShell";
import { NOINDEX } from "@/lib/seo";

export const metadata: Metadata = {
  title: "الصفحة غير موجودة",
  description: "عذراً، الصفحة التي تبحث عنها غير متوفرة.",
  robots: NOINDEX,
};

export default function NotFound() {
  return (
    <PageShell darkHeader>
      <section className="bg-qd-cream px-[15px] py-[200px] text-center">
        <h1 className="mb-[20px] text-[35px] font-bold text-qd-navy">
          الصفحة غير موجودة
        </h1>
        <p className="mb-[30px] text-qd-text">
          عذراً، الصفحة التي تبحث عنها غير متوفرة.
        </p>
        <Link href="/" className="font-bold text-qd-gold uppercase">
          العودة للرئيسية
        </Link>
      </section>
    </PageShell>
  );
}
