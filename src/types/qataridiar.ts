export interface Metric {
  key: string;
  value: string[];
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: string;
  iconWhite: string;
  width: number;
  height: number;
}

export interface FeaturedProject {
  href: string;
  title: string;
  image: string;
  imageAlt: string;
  details: { label: string; value: string }[];
  inquireHref: string;
  inquireLabel: string;
}

export interface ProjectSlide {
  slide: number;
  href: string;
  title: string;
  location: string;
  status: string;
  image: string;
  imageAlt: string;
  markerLeft: string;
  markerTop: string;
}

export interface RegionFilter {
  value: string;
  label: string;
}

export interface NewsItem {
  href: string;
  title: string;
  date: string;
  image: string;
  imageAlt: string;
}

export interface BusinessLogo {
  href: string;
  alt: string;
  image: string;
}

export interface ProjectCard {
  slug: string;
  href: string;
  title: string;
  image: string;
  imageAlt: string;
}

export interface ProjectDetail {
  slug: string;
  route: string;
  title: string;
  documentTitle: string;
  banner: string;
  region: string;
  location: string;
  area: string;
  status: string;
  summary: string;
  paragraphs: string[];
  gallery: { src: string; alt: string }[];
  website: string;
}

export interface MediaCard {
  href: string;
  title: string;
  image: string;
  imageAlt: string;
  date: string;
  body: string;
}

export interface FormField {
  tag?: string;
  type: string;
  name?: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
}

export interface InteriorPage {
  key: string;
  route: string;
  title: string;
  subtitle?: string;
  intro?: string;
  banner?: string;
  paragraphs?: string[];
  labeled?: { label: string; value: string }[];
  headings?: { tag: string; text: string }[];
  links?: { href: string; title: string; image?: string; body?: string }[];
  gallery?: { src: string; alt: string }[];
  items?: MediaCard[];
  projects?: ProjectCard[];
  businesses?: {
    href: string;
    name: string;
    image: string;
    body: string;
    cta: string;
  }[];
  formFields?: FormField[];
  contactBlocks?: { label: string; value: string }[];
  mapLink?: string;
  notFound?: boolean;
  showForm?: boolean;
  isMap?: boolean;
  egyptProjects?: (ProjectCard & { location: string; status: string })[];
}

