import { EGYPT_PROJECTS } from "@/components/sites/www-qataridiar-com-24dfe100/ar-egypt/data";

export const INDEXABLE_PROJECT_SLUGS = EGYPT_PROJECTS.map((p) => p.slug);

export const NOINDEX = { index: false, follow: true } as const;
