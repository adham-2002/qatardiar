import { SOCIAL_LINKS } from "@/components/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/data";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const LOGO_URL = `${SITE_URL}/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/images/logo.svg`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "Qatari Diar",
    url: SITE_URL,
    logo: LOGO_URL,
    sameAs: SOCIAL_LINKS.map((s) => s.href),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      areaServed: "EG",
      availableLanguage: ["ar"],
      url: "https://wa.me/201515124909",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "ar",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function residenceSchema(project: {
  title: string;
  summary: string;
  banner: string;
  location: string;
  area: string;
  route: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: project.title,
    description: project.summary,
    image: `${SITE_URL}${project.banner}`,
    url: `${SITE_URL}${project.route}/`,
    address: {
      "@type": "PostalAddress",
      addressLocality: project.location,
      addressCountry: "EG",
    },
    ...(project.area
      ? {
          additionalProperty: {
            "@type": "PropertyValue",
            name: "المساحة",
            value: project.area,
          },
        }
      : {}),
  };
}
