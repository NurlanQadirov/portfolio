/**
 * Single source of truth for identity, contact and project data.
 *
 * Burada YALNIZ dildən asılı olmayan faktlar saxlanılır (ünvan, texnologiya,
 * link, şəkil). Görünən mətnlər `src/i18n/dictionaries/*` içindədir — belədə
 * eyni layihə üç dildə təsvir alır, struktur data isə onlardan qidalanır.
 */

/** Canonical origin. Override per-environment with NEXT_PUBLIC_SITE_URL on Vercel. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nurlanqadirov.vercel.app"
).replace(/\/$/, "");

/** E.164 form — required by schema.org and by the wa.me deep link. */
export const PHONE_E164 = "+994504544111";
/** Human-readable form — this is the string that gets rendered as plain text. */
export const PHONE_DISPLAY = "+994 50 454 41 11";
export const WHATSAPP_URL = "https://wa.me/994504544111";
export const EMAIL = "nurlanqadirovv4@gmail.com";

export const person = {
  name: "Nurlan Qadirov",
  /**
   * Adın digər yazılışları.
   *
   * Soyad azərbaycanca `Q`, beynəlxalq mətnlərdə çox vaxt `G`, rus dilində isə
   * kiril əlifbası ilə yazılır. Hamısını burada elan etmək AI və axtarış
   * sistemlərinə bu yazılışların EYNİ şəxsə aid olduğunu bildirir — əks halda
   * hər variant ayrı, zəif "şəxs" kimi qəbul olunur.
   *
   * Kanonik yazılış `name` sahəsidir və hər yerdə (GitHub, LinkedIn, e-mail,
   * domen) eyni saxlanılmalıdır.
   */
  alternateName: [
    "Nurlan Qədirov",
    "Nurlan Gadirov",
    "Nurlan Kadirov",
    "Нурлан Кадиров",
  ],
  givenName: "Nurlan",
  familyName: "Qadirov",
  jobTitle: "Frontend & Full-Stack Developer",
  headline:
    "Frontend & Full-Stack Developer based in Baku, Azerbaijan, building fast, secure and accessible web applications with React, Next.js and TypeScript.",
  bio:
    "Nurlan Qadirov is a Frontend and Full-Stack Developer based in Baku, Azerbaijan. He builds production web applications and e-commerce platforms with React, Next.js, TypeScript, Tailwind CSS and Node.js. Working day-to-day inside a cybersecurity company, he approaches every interface through the combined lens of user experience, performance and security. He is available for freelance and contract work, remotely and on-site in Baku.",
  locality: "Baku",
  region: "Baku",
  country: "AZ",
  countryName: "Azerbaijan",
  email: EMAIL,
  telephone: PHONE_E164,
  github: "https://github.com/NurlanQadirov",
  linkedin: "https://www.linkedin.com/in/nurlan-qadirov-617470315/",
} as const;

/** Fed into `knowsAbout` so an LLM can match this profile to a stack question. */
export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Redux",
  "Framer Motion",
  "Vite",
  "REST API Integration",
  "Responsive Web Design",
  "Web Performance Optimization",
  "Web Accessibility",
  "Technical SEO",
  "E-commerce Development",
  "UI/UX Implementation",
] as const;

/** Fed into `makesOffer` — the services a prospective client can actually buy. */
export const services = [
  {
    name: "Frontend Development",
    description:
      "Production-grade user interfaces built with React, Next.js and TypeScript, from design handoff to deployment.",
  },
  {
    name: "Full-Stack Web Application Development",
    description:
      "End-to-end web applications with Next.js and Node.js, including API design, authentication and database integration.",
  },
  {
    name: "E-commerce Development",
    description:
      "Fast, conversion-focused online stores with product catalogues, filtering, cart and checkout flows.",
  },
  {
    name: "Corporate Website & Landing Page Development",
    description:
      "Responsive, SEO-ready corporate sites and landing pages optimised for Core Web Vitals.",
  },
] as const;

export type Project = {
  /** Lüğətlərdəki `projects.desc` açarı ilə eynidir — dəyişməməlidir. */
  id: number;
  title: string;
  /** Beynəlxalq oxunan qısa etiket, hər üç dildə eyni saxlanılır. */
  category: string;
  tech: string[];
  /** Boş olarsa kart kliklənməyən `<article>` kimi render olunur. */
  demoUrl?: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Modern Furniture E-commerce Web Application",
    category: "E-Commerce",
    tech: ["React", "Vite", "Tailwind CSS"],
    // TODO: add the live URL here once deployed — the card links automatically.
    image: "/projects/furniture.png",
  },
  {
    id: 8,
    title: "Harmal — Luxury Jewellery & Silk Kəlağayı",
    category: "E-Commerce",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://harmal.az/",
    image: "/projects/harmal.png",
  },
  {
    id: 9,
    title: "Aristocrat Social & Business Club",
    category: "B2B / Membership",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://aristocratnetworking.club/",
    image: "/projects/aristocrat.png",
  },
  {
    id: 2,
    title: "Cyber Mine",
    category: "Cyber Security",
    tech: ["React", "UI/UX"],
    demoUrl: "https://ciso.az/",
    image: "/projects/ciso.png",
  },
  {
    id: 3,
    title: "Reform (MyData)",
    category: "Corporate",
    tech: ["React", "Tailwind"],
    demoUrl: "https://mydata.az/",
    image: "/projects/mydata.png",
  },
  {
    id: 4,
    title: "E-Partners",
    category: "Landing Page",
    tech: ["Landing Page"],
    demoUrl: "https://e-partners.az/",
    image: "/projects/epartners.png",
  },
  {
    id: 5,
    title: "El Travel",
    category: "Travel",
    tech: ["React", "Framer"],
    demoUrl: "https://eltravel.az/",
    image: "/projects/eltravel.png",
  },
  {
    id: 6,
    title: "Zm Tech",
    category: "IT",
    tech: ["React", "Vite"],
    demoUrl: "https://khaki-armadillo-452654.hostingersite.com/",
    image: "/projects/zmtech.png",
  },
  {
    id: 7,
    title: "Dəniz Restaurant",
    category: "QR Menu",
    tech: ["React", "Mobile"],
    demoUrl: "https://deniz-qr-menu.vercel.app/menu",
    image: "/projects/denizqr.png",
  },
];

/**
 * Xidmət qiymətləri.
 *
 * Bunlar SİZİN biznes qərarınızdır — ona görə boş buraxılıb. Rəqəm yazana
 * qədər saytda qiymət bölməsi ümumiyyətlə göstərilmir və `priceRange`
 * struktur dataya düşmür (yalan məlumat verməmək üçün).
 *
 * Doldurmaq üçün `null` yerinə mətn yazın, məsələn: "400 – 800 AZN".
 */
export const pricing: Record<
  "web-development" | "ecommerce" | "nextjs" | "landing",
  string | null
> = {
  "web-development": null,
  ecommerce: null,
  nextjs: null,
  landing: null,
};

/**
 * `ProfessionalService` sxeması üçün ümumi qiymət diapazonu (məs. "$$").
 * Boş qalarsa sxemaya əlavə olunmur.
 */
export const priceRange: string | null = null;
