import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/ProjectDetailView";
import {
  getProject,
  PROJECT_SLUGS,
} from "@/components/sites/www-qataridiar-com-24dfe100/shared/content";
import { INDEXABLE_PROJECT_SLUGS, NOINDEX } from "@/lib/seo";
import { OG_LOCALE, SITE_NAME, SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, residenceSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project | QatariDiar", robots: NOINDEX };

  const isIndexable = (INDEXABLE_PROJECT_SLUGS as readonly string[]).includes(slug);
  const title = project.title;
  const description = project.summary || project.paragraphs[0] || project.title;

  if (!isIndexable) {
    return {
      title: project.documentTitle || `${project.title} | QatariDiar`,
      description,
      robots: NOINDEX,
    };
  }

  const canonical = `/ar/project/${slug}/`;
  const ogImage = `/og/${slug}.jpg`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: OG_LOCALE,
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const isIndexable = (INDEXABLE_PROJECT_SLUGS as readonly string[]).includes(slug);
  if (!isIndexable) return <ProjectDetailView project={project} />;

  return (
    <>
      <JsonLd data={residenceSchema(project)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "الرئيسية", url: `${SITE_URL}/` },
          { name: project.title, url: `${SITE_URL}${project.route}/` },
        ])}
      />
      <ProjectDetailView project={project} />
    </>
  );
}
