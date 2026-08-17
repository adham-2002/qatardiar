const SHARED = "/sites/www-qataridiar-com-24dfe100/shared/images";

export const HERO_BACKGROUND = `${SHARED}/260701_AAR-V-01-jpg-190ce883cc.webp`;
export const INTRO_BACKGROUND = `${SHARED}/alam-al-roum-hero.jpg`;

export const HERO = {
  eyebrow: "الديار القطرية تقدّم",
  projectName: "علم الروم",
  location: "الساحل الشمالي، مصر",
  status: "جاري التنفيذ",
  tagline: "مدينة ساحلية جديدة غرب مرسى مطروح",
  lede: "علم الروم هو أحدث مشاريع الديار القطرية على الساحل الشمالي المصري، مدينة ساحلية متكاملة تمتد على 20.58 مليون متر مربع غرب مرسى مطروح، على بعد 15 دقيقة فقط من مطارها الدولي.",
  bullets: [
    "20.58 مليون متر مربع",
    "7.2 كم على الشاطئ الذهبي",
    "15 دقيقة من مطار مرسى مطروح الدولي",
  ],
};

export const STATS = [
  { value: "2006", label: "بداية الاستثمار في مصر" },
  { value: "+40 مليون", label: "متر مربع من المشاريع" },
  { value: "3.1 مليار", label: "دولار حجم الاستثمار" },
  { value: "4", label: "مشاريع كبرى" },
];

export const INTRO = {
  eyebrow: "عن استثماراتنا",
  title: "مصر",
  paragraph:
    "تُواصل الديار القطرية استثمارها في سوق العقارات في مصر. حيث تمتلك الشركة ملفًا ضخمًا يضم مشاريع عديدة مرموقة في جميع أنحاء الدولة، بمساحة أكثر من 40 مليون متر مربع. وبالرغم من أن سيتي جيت القاهرة الجديدة، وسانت ريجيس القاهرة، ونيو جيزة يحتلون الصدارة في مجال تطوير العقارات في مصر، إلا أنه سيتم الإعلان في المستقبل عن طرح المزيد من المشاريع الحصرية المطلة على البحر الأحمر. كما أن إيمان شركة الديار القطرية بمقوّمات سوق العقارات في مصر، بالإضافة إلى استثمار ما يقرب من 3.1 مليار دولار في مجال العقارات منذ عام 2006، جعل الشركة تتصدر السوق العقاري.",
};

export const VALUE_PROPS = [
  {
    title: "مواقع استراتيجية",
    body: "مشاريع ممتدة بين الساحل الشمالي والقاهرة الجديدة والجيزة، مع مشاريع حصرية مقبلة على البحر الأحمر.",
  },
  {
    title: "خبرة ممتدة منذ 2006",
    body: "ما يقرب من 3.1 مليار دولار من الاستثمارات العقارية في السوق المصري على مدى قرابة عقدين.",
  },
  {
    title: "محفظة متنوعة",
    body: "وحدات سكنية وفندقية ومشاريع متعددة الاستخدامات ضمن ملف يضم أكثر من 40 مليون متر مربع.",
  },
];

export interface EgyptProject {
  slug: string;
  href: string;
  title: string;
  image: string;
  imageAlt: string;
  location: string;
  status: string;
}

export const EGYPT_PROJECTS: EgyptProject[] = [
  {
    slug: "alam-al-roum",
    href: "/ar/project/alam-al-roum",
    title: "علم الروم",
    image: `${SHARED}/260701_AAR-V-01-jpg-a2229bba5d.webp`,
    imageAlt: "علم الروم",
    location: "الساحل الشمالي, مصر",
    status: "جاري التنفيذ",
  },
  {
    slug: "st-regis-cairo-and-residences",
    href: "/ar/project/st-regis-cairo-and-residences",
    title: "فندق سانت ريجيس القاهرة والوحدات السكنية",
    image: `${SHARED}/stregis_main_image-jpg-4e280e23eb.webp`,
    imageAlt: "فندق سانت ريجيس القاهرة",
    location: "القاهره, مصر",
    status: "مكتمل",
  },
  {
    slug: "city-gate-new-cairo",
    href: "/ar/project/city-gate-new-cairo",
    title: "سيتي جيت القاهرة الجديدة",
    image: `${SHARED}/citygate_main-jpg-cd3288f98f.webp`,
    imageAlt: "سيتي جيت القاهرة الجديدة",
    location: "القاهرة, مصر",
    status: "جاري التنفيذ",
  },
  {
    slug: "newgiza",
    href: "/ar/project/newgiza",
    title: "نيو جيزا",
    image: `${SHARED}/NEWGIZA-20Photo-png-ff4a82ccb8.webp`,
    imageAlt: "نيو جيزا",
    location: "الجيزة, مصر",
    status: "إتمام المرحلة الأولى، الثالثة مكتمل جزئياً",
  },
];

export const FAQS = [
  {
    question: "أين يقع مشروع علم الروم؟",
    answer:
      "يقع علم الروم على ساحل البحر الأبيض المتوسط غرب مرسى مطروح، ضمن محفظة الديار القطرية في مصر التي تمتد على أكثر من 40 مليون متر مربع.",
  },
  {
    question: "ما هي مشاريع الديار القطرية الحالية في مصر؟",
    answer:
      "تشمل المحفظة الحالية علم الروم على الساحل الشمالي، وسيتي جيت القاهرة الجديدة، وفندق سانت ريجيس القاهرة والوحدات السكنية، ونيو جيزا.",
  },
  {
    question: "ما أنواع الوحدات المتاحة؟",
    answer:
      "تضم المحفظة وحدات سكنية وفندقية ومشاريع متعددة الاستخدامات، من فيلات وشاليهات على الساحل الشمالي إلى شقق ووحدات فندقية في القاهرة الجديدة والجيزة.",
  },
  {
    question: "هل تتوفر خطط سداد ميسّرة؟",
    answer:
      "نعم، تقدّم الديار القطرية خطط سداد مرنة تُناقش تفاصيلها مباشرة مع فريق المبيعات بحسب المشروع والوحدة المختارة.",
  },
  {
    question: "من هي الديار القطرية؟",
    answer:
      "الديار القطرية للاستثمار العقاري شركة تأسست عام 2005 كإحدى شركات جهاز قطر للاستثمار، وتستثمر في السوق العقاري المصري منذ عام 2006 بما يقارب 3.1 مليار دولار.",
  },
  {
    question: "كيف يمكنني التسجيل للاستفسار عن أحد المشاريع؟",
    answer:
      "يمكنك ملء نموذج التسجيل بالاسم ورقم الهاتف في أعلى الصفحة، وسيتواصل معك فريق المبيعات خلال 24 ساعة، أو التواصل مباشرة عبر واتساب.",
  },
];

export const FINAL_CTA = {
  eyebrow: "تواصل معنا",
  title: "مهتم بالاستثمار في مشاريعنا بمصر؟",
  body: "اترك اسمك ورقم هاتفك، وسيتواصل معك فريق المبيعات لعرض التفاصيل والأسعار وخطط السداد المتاحة.",
};

export const FORM_COPY = {
  title: "سجّل اهتمامك",
  subtitle: "اترك بياناتك وسيتواصل معك فريق المبيعات بخصوص علم الروم.",
  nameLabel: "الاسم بالكامل",
  namePlaceholder: "مثال: أحمد محمود",
  phoneLabel: "رقم الهاتف",
  phonePlaceholder: "1XXXXXXXXX",
  submit: "احجز الآن",
  submitting: "جارٍ الإرسال…",
  privacy: "بياناتك سرّية ولن تتم مشاركتها مع أي جهة أخرى.",
  successTitle: "تم استلام طلبك",
  successBody: "سيتواصل معك فريق المبيعات خلال 24 ساعة.",
  errors: {
    nameRequired: "من فضلك أدخل اسمك.",
    nameShort: "الاسم قصير جداً.",
    phoneRequired: "من فضلك أدخل رقم هاتفك.",
    phoneInvalid: "أدخل رقم موبايل مصري صحيح (مثال: 01012345678).",
    submitFailed: "تعذّر إرسال الطلب. من فضلك حاول مرة أخرى.",
  },
};

/** Lead-capture backend (Express + MongoDB, hosted on Hostinger). */
export const LEAD_API_URL = "https://seashell-koala-848874.hostingersite.com/api/v1/forms";
export const LEAD_PROVIDER = "qatari-diar-egypt";
