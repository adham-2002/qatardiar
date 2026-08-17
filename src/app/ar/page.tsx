import type { Metadata } from "next";
import { ExploreProjects } from "@/components/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/ExploreProjects";
import { FeaturedProject } from "@/components/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/FeaturedProject";
import { Hero } from "@/components/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/Hero";
import { NewsSection } from "@/components/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/NewsSection";
import { OtherBusinesses } from "@/components/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/OtherBusinesses";
import { StatsIntro } from "@/components/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/StatsIntro";
import { VideoSection } from "@/components/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/VideoSection";
import { PageShell } from "@/components/sites/www-qataridiar-com-24dfe100/shared/PageShell";
import { NOINDEX } from "@/lib/seo";

const PATTERN =
  "/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/images/pattern-upper-content.svg";

export const metadata: Metadata = {
  title: "الديار القطرية | QatariDiar",
  description: "التميز الملهم في العقارات",
  robots: NOINDEX,
};

export default function ArHome() {
  return (
    <PageShell>
      <Hero />
      <div
        className="bg-qd-cream bg-no-repeat"
        style={{ backgroundImage: `url(${PATTERN})`, backgroundPosition: "0 0" }}
      >
        <StatsIntro />
        <FeaturedProject />
        <ExploreProjects />
        <VideoSection />
      </div>
      <NewsSection />
      <OtherBusinesses />
    </PageShell>
  );
}
