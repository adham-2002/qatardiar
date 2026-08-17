import { img } from "@/components/sites/www-qataridiar-com-24dfe100/shared/assets";
import type {
  BusinessLogo,
  FeaturedProject,
  Metric,
  NavLink,
  NewsItem,
  ProjectSlide,
  RegionFilter,
  SocialLink,
} from "@/types/qataridiar";

export const HERO_TITLE = "التميز الملهم في العقارات";
export const HERO_LINK: NavLink = { href: "/ar/projects", label: "عرض المشاريع" };

/** Picked at random on every load by the source site. */
export const HERO_BACKGROUNDS = [
  img("hero-1.webp"),
  img("hero-2.webp"),
  img("hero-3.webp"),
  img("hero-chancery-rosewood.webp"),
  img("hero-5.webp"),
];
export const HERO_BACKGROUND_DEFAULT = img("hero-chancery-rosewood.webp");
export const HERO_BACKGROUNDS_MOBILE = [img("hero-mobile.webp"), img("hero-1.webp")];

export const METRICS: Metric[] = [
  { key: "20", value: ["سنة في العمل"] },
  { key: "18", value: ["بلد"] },
  { key: "42", value: ["مشروع إستثماري"] },
  { key: "35", value: ["قيمة الاستثمار", "مليار دولار أمريكي"] },
];

export const INTRO_TITLE =
  "إنشاء وتقديم مشاريع عقارية تحويلية تحتضن أعلى المعايير الدولية لأصحاب المصلحة لدينا على مستوى العالم.";
export const INTRO_LINK: NavLink = {
  href: "/ar/about-us",
  label: "المزيد عن الديار القطرية",
};

export const FEATURED_HEADING =
  "المشاريع المميزة في  قطر ودول مجلس التعاون الخليجي";

export const FEATURED_PROJECT: FeaturedProject = {
  href: "/ar/project/lusail",
  title: "لوسيل",
  image: img("featured-lusail-685x387.webp"),
  imageAlt: "لوسيل",
  details: [
    { label: "الموقع", value: "لوسيل, دولة قطر" },
    { label: "المساحة", value: "38,000,000متر مربع" },
  ],
  inquireHref: "/ar/inquire",
  inquireLabel: "استعلام",
};

export const EXPLORE_HEADING = "اكتشف مشاريعنا";
export const EXPLORE_LINK: NavLink = {
  href: "/ar/projects",
  label: "عرض جميع المشاريع",
};

export const REGION_FILTERS: RegionFilter[] = [
  { value: "1", label: "Qatar & GCC" },
  { value: "2", label: "Asia" },
  { value: "3", label: "Africa" },
  { value: "4", label: "Europe" },
  { value: "5", label: "The Americas" },
];

export const REGION_MAP = img("map-gcc.png");

export const PROJECT_SLIDES: ProjectSlide[] = [
  {
    slide: 0,
    href: "/ar/project/doha-exhibition-and-convention-center",
    title: "مركز الدوحة للمعارض والمؤتمرات",
    location: "الدوحة, دولة قطر",
    status: "مكتمل",
    image: img("project-doha-convention.webp"),
    imageAlt: "مركز الدوحة للمعارض والمؤتمرات",
    markerLeft: "46.8895%",
    markerTop: "43.9297%",
  },
  {
    slide: 1,
    href: "/ar/project/lusail",
    title: "لوسيل",
    location: "لوسيل, دولة قطر",
    status: "جاري التنفيذ",
    image: img("project-lusail.webp"),
    imageAlt: "لوسيل",
    markerLeft: "47.3538%",
    markerTop: "43.9297%",
  },
  {
    slide: 2,
    href: "/ar/project/hotel-park",
    title: "حديقة الفندق",
    location: "الدوحة, دولة قطر",
    status: "مكتمل",
    image: img("project-sheraton-park.webp"),
    imageAlt: "حديقة الفندق",
    markerLeft: "45.9610%",
    markerTop: "43.9297%",
  },
  {
    slide: 3,
    href: "/ar/project/commercial-avenue",
    title: "الشارع التجاري",
    location: "الدوحة, دولة قطر",
    status: "مكتمل",
    image: img("project-grand-commercial.webp"),
    imageAlt: "الشارع التجاري",
    markerLeft: "45.9610%",
    markerTop: "43.9297%",
  },
  {
    slide: 4,
    href: "/ar/project/simaisma",
    title: "سميسمة",
    location: "سميسمة, دولة قطر",
    status: "جاري التنفيذ",
    image: img("project-simaisma.webp"),
    imageAlt: "سميسمة",
    markerLeft: "45.7753%",
    markerTop: "43.9297%",
  },
  {
    slide: 5,
    href: "/ar/project/diar-ras-al-hadd",
    title: "ديار رأس الحد",
    location: "رأس الحد , سلطنة عمان",
    status: "جاري التنفيذ",
    image: img("project-ras-al-hadd.webp"),
    imageAlt: "ديار رأس الحد",
    markerLeft: "54.2247%",
    markerTop: "50.3195%",
  },
];

export const VIDEO_ID = "https://player.vimeo.com/video/708142464";

export const NEWS_HEADING = "آخر الأخبار";
export const NEWS_LINK: NavLink = { href: "/ar/media", label: "عرض كل الأخبار" };

export const NEWS_ITEMS: NewsItem[] = [
  {
    href: "/ar/media",
    title:
      "رئيس مجلس الوزراء المصري يستقبل الرئيس التنفيذي لشركة الديار القطرية لبحث مستجدات مشروع «علم الروم»",
    date: "09 أغسطس 2026",
    image: img("news-egypt-pm.webp"),
    imageAlt: "رئيس الوزراء المصري يستقبل الرئيس التنفيذي للديار القطرية",
  },
  {
    href: "/ar/media",
    title: "مدينة لوسيل تدخل موسوعة غينيس برقمين عالميين في منظومة تبريد المناطق",
    date: "29 يونيو 2026",
    image: img("news-lusail-guinness.webp"),
    imageAlt: "منظومة تبريد المناطق في مدينة لوسيل",
  },
];

export const BUSINESS_HEADING = "شركات أخرى";

export const BUSINESS_LOGOS: BusinessLogo[] = [
  { href: "https://www.gord.qa/", alt: "GORD", image: img("business-gord.jpg") },
  { href: "https://qd-om.com", alt: "QDOM", image: img("business-qdom.png") },
  {
    href: "https://www.marafeq.com.qa/",
    alt: "Marafeq Qatar",
    image: img("business-marafeq.png"),
  },
  { href: "https://www.smeet.com.qa/", alt: "SMEET", image: img("business-smeet.png") },
  { href: "https://qdvc.com", alt: "QDVC", image: img("business-qdvc.png") },
  { href: "https://www.qpm.com.qa", alt: "QPM", image: img("business-qpm.jpg") },
];

export const MAIN_MENU: NavLink[] = [
  { href: "/ar/about-us", label: "الديار القطرية" },
  { href: "/ar/projects", label: "المشاريع" },
  { href: "/ar/other-businesses", label: "أعمال أخرى" },
  { href: "/ar/about-qatar", label: "معلومات عن قطر" },
];

export const SECONDARY_MENU: NavLink[] = [
  { href: "/ar/media", label: "المركز الإعلامي" },
  { href: "/ar/careers", label: "وظائف" },
  { href: "/ar/contact-us", label: "إتصل بنا" },
  { href: "/ar/e-procurement", label: "المشتريات الإلكترونية" },
  { href: "/ar/request-access-information", label: "طلب الحصول على المعلومات" },
];

/** Footer lists main + secondary as one flat 9-item menu. */
export const FOOTER_MENU: NavLink[] = [...MAIN_MENU, ...SECONDARY_MENU];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://wa.me/66008088",
    label: "Whatsapp",
    icon: img("social-wa.svg"),
    iconWhite: img("social-wa-w.svg"),
    width: 26,
    height: 26,
  },
  {
    href: "https://www.facebook.com/Qatari-Diar-Real-Estate-Investment-Co-131332143599972/",
    label: "Facebook",
    icon: img("social-fb.svg"),
    iconWhite: img("social-fb-w.svg"),
    width: 8,
    height: 17,
  },
  {
    href: "https://ae.linkedin.com/company/qatari-diar",
    label: "LinkedIn",
    icon: img("social-li.svg"),
    iconWhite: img("social-li-w.svg"),
    width: 17,
    height: 17,
  },
  {
    href: "https://twitter.com/qataridiar",
    label: "Twitter",
    icon: img("social-x.svg"),
    iconWhite: img("social-x-w.svg"),
    width: 20,
    height: 20,
  },
  {
    href: "https://www.instagram.com/qatari_diar/",
    label: "Instagram",
    icon: img("social-ig.svg"),
    iconWhite: img("social-ig-w.svg"),
    width: 20,
    height: 20,
  },
];

export const FOOTER_COPYRIGHT = "© 2026 الديار القطرية";
export const FOOTER_PRIVACY: NavLink = {
  href: "/ar/privacy-policy",
  label: "سیاسة الخصوصیة العامة",
};
