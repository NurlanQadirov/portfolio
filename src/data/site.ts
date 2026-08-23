/**
 * Single source of truth for identity, contact and project data.
 *
 * Burada YALNIZ dildən asılı olmayan faktlar saxlanılır (ünvan, texnologiya,
 * link, şəkil). Görünən mətnlər `src/i18n/dictionaries/*` içindədir — belədə
 * eyni layihə üç dildə təsvir alır, struktur data isə onlardan qidalanır.
 */

/**
 * Kanonik ünvan.
 *
 * Bütün canonical linklər, hreflang, sitemap və struktur data buradan
 * qidalanır — yəni domeni dəyişmək üçün yalnız bu bir dəyər kifayətdir.
 *
 * `www` versiyası işlədilir, çünki Vercel-də Primary Domain məhz `www` kimi
 * qurulub — `nurlanqadirov.az` ona 308 ilə yönləndirir. Canonical yönləndirən
 * ünvana yox, faktiki son ünvana işarə etməlidir, ona görə `www` seçildi.
 * (Əgər gələcəkdə Vercel-də Primary Domain `www`-suz variantla dəyişdirilsə,
 * bu sətri də uyğunlaşdırmaq lazımdır.)
 *
 * Vercel-də `NEXT_PUBLIC_SITE_URL` təyin edilibsə o üstünlük təşkil edir.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nurlanqadirov.az"
).replace(/\/$/, "");

/**
 * Paylaşım şəkillərində göstərilən brend etiketi.
 *
 * `SITE_URL`-dən çıxarılır ki, domen dəyişəndə şəkildəki yazı köhnə qalmasın —
 * etiket sabit sətir olanda saytın adı ilə şəklin adı bir-birindən ayrı düşür,
 * bu da AI və axtarış sistemləri üçün ikinci, əlaqəsiz brend kimi oxunur.
 * `www.` atılır, çünki etiket kimi qısa forma oxunur.
 */
export const SITE_LABEL = SITE_URL.replace(/^https?:\/\//, "")
  .replace(/^www\./, "")
  .toUpperCase();

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
  // Backend və infrastruktur — Harmal və Aristocrat layihələrində faktiki
  // işlədilib, ona görə iddia deyil, sənədləşdirilmiş təcrübədir.
  "Prisma ORM",
  "SQLite",
  "JWT Authentication",
  "Custom Admin Panel Development",
  "VPS Deployment (Nginx, PM2)",
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
  /** Doldurulubsa, kart xarici sayta yox, daxili case study səhifəsinə keçir. */
  caseStudy?: string;
  title: string;
  /** Beynəlxalq oxunan qısa etiket, hər üç dildə eyni saxlanılır. */
  category: string;
  tech: string[];
  /** Boş olarsa kart kliklənməyən `<article>` kimi render olunur. */
  demoUrl?: string;
  image: string;
  /**
   * Layihənin işə düşdüyü ay, `YYYY-MM` formatında.
   *
   * Sxemada `datePublished` kimi verilir — bunsuz model beş il əvvəlki işlə
   * bu aykı işi eyni çəkidə görür. Görünən mətndə lüğətlərdəki `monthNames`
   * ilə yerliləşdirilir, ona görə burada dilsiz ISO saxlanılır.
   * Doldurulmayıbsa nə səhifədə, nə sxemada görünmür.
   */
  datePublished?: string;
};

export const projects: Project[] = [
  {
    id: 8,
    caseStudy: "harmal",
    title: "Harmal — Luxury Jewellery & Silk Kəlağayı",
    category: "E-Commerce",
    // Full-stack: Next.js route handler-ləri + Prisma/SQLite + öz admin paneli.
    // Kartda oxunaqlı qalsın deyə yalnız beş əsas ad; tam quruluş case study-nin
    // "Arxitektura" bölməsindədir.
    tech: ["Next.js", "TypeScript", "Prisma", "SQLite", "Tailwind CSS"],
    demoUrl: "https://harmal.az/",
    image: "/projects/harmal.webp",
    datePublished: "2026-08",
  },
  {
    id: 9,
    caseStudy: "aristocrat",
    title: "Aristocrat Social & Business Club",
    category: "B2B / Membership",
    // Full-stack, lakin bazasız: məzmun və müraciətlər serverdəki JSON
    // fayllarında saxlanılır. Səbəbi case study-dəki "Niyə baza yoxdur?"
    // qərarında izah olunub.
    //
    // Siyahıda ayrıca "Node.js" YOXDUR və olmamalıdır: backend ayrı Express/Node
    // tətbiqi deyil, elə Next.js-in öz route handler-ləridir. Node yalnız həmin
    // Next.js prosesini işlədən mühitdir — texnologiya kimi sadalamaq ayrı
    // server varmış təəssüratı yaradar.
    tech: ["Next.js", "TypeScript", "JWT Auth", "JSON Storage", "Tailwind CSS"],
    demoUrl: "https://aristocratnetworking.club/",
    image: "/projects/aristocrat.webp",
    datePublished: "2026-08",
  },
  {
    id: 11,
    caseStudy: "telco-group",
    title: "Telco Group — IT Infrastructure & Cloud",
    category: "IT Infrastructure",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    // Şirkətin öz domeni (telcogroup.az) hələ bağlanmayıb — sayt Vercel
    // ünvanında yayımlanır. Domen qoşulan kimi bu sətri yeniləyin.
    demoUrl: "https://telco-rouge.vercel.app/",
    image: "/projects/telco.webp",
    datePublished: "2026-02",
  },
  {
    id: 10,
    caseStudy: "rentcar-baku",
    title: "RentCar Baku — Luxury Car Rental Platform",
    category: "Car Rental",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    /**
     * Vercel subdomeni bilərəkdən saxlanılıb: layihə real müştəri sifarişi
     * deyil, öz təşəbbüsümlə qurulmuş tam işlək demo platformadır. Kartın
     * özü daxili case study səhifəsinə aparır — canlı link orada verilir.
     */
    demoUrl: "https://rent-car-demo.vercel.app/az",
    image: "/projects/rentcar.webp",
    datePublished: "2025-11",
  },
  {
    id: 2,
    caseStudy: "cyber-mine",
    title: "Cyber Mine",
    category: "Cyber Security",
    tech: ["React", "Vite", "Tailwind CSS"],
    demoUrl: "https://ciso.az/",
    image: "/projects/ciso.webp",
    datePublished: "2025-08",
  },
  {
    id: 12,
    caseStudy: "aykhan-ashrafov",
    title: "Aykhan Ashrafov — Cyber Security Engineer Portfolio",
    category: "Personal Portfolio",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://aykhanashrafov.com/",
    image: "/projects/aykhan.webp",
    datePublished: "2026-02",
  },
  {
    id: 3,
    caseStudy: "reform-mydata",
    title: "Reform (MyData)",
    category: "IT Services",
    tech: ["React", "Vite", "Tailwind CSS"],
    demoUrl: "https://mydata.az/",
    image: "/projects/mydata.webp",
    datePublished: "2025-08",
  },
  {
    id: 6,
    caseStudy: "zm-tech",
    title: "ZM Tech — IT Services Company Website",
    category: "IT Services",
    tech: ["React", "Vite", "Tailwind CSS"],
    // Öz domeninə köçüb (əvvəlki Hostinger müvəqqəti ünvanı ölüdür).
    demoUrl: "https://zmtech.cloud/",
    image: "/projects/zmtech.webp",
    datePublished: "2025-08",
  },
  {
    id: 4,
    caseStudy: "e-partners",
    title: "E-Partners",
    category: "Consulting",
    tech: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://e-partners.az/",
    image: "/projects/epartners.webp",
    datePublished: "2025-10",
  },
  {
    id: 7,
    caseStudy: "deniz-qr-menu",
    title: "Dəniz Restaurant",
    category: "QR Menu",
    tech: ["React", "Vite", "Tailwind CSS"],
    demoUrl: "https://deniz-qr-menu.vercel.app/menu",
    image: "/projects/denizqr.webp",
    datePublished: "2025-12",
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

/**
 * Case study metrikləri.
 *
 * `null` olan metrik NƏ səhifədə, NƏ də struktur datada görünmür — yəni
 * doldurmayana qədər heç bir uydurma rəqəm çıxmır.
 *
 * Lighthouse və LCP dəyərlərini almaq üçün: https://pagespeed.web.dev
 * saytına layihənin linkini yapışdırın, çıxan nəticəni bura yazın.
 */
/**
 * Lighthouse mobil və masaüstü ayrı açarlardır, çünki dəyər yalnız rəqəmdir —
 * "93 (mobil)" yazsaydıq, azərbaycanca söz ingilis və rus səhifəsində də
 * render olunardı. Hansı ölçmə olduğunu lüğətlərdəki etiket bildirir.
 */
export type MetricKey =
  | "lighthouseMobile"
  | "lighthouseDesktop"
  | "lcp"
  | "languages"
  | "pages";

export const caseStudyMetrics: Record<number, { key: MetricKey; value: string | null }[]> = {
  8: [
    { key: "languages", value: "3 — AZ / EN / RU" },
    { key: "lighthouseMobile", value: "93" },
    { key: "lighthouseDesktop", value: "93" },
    { key: "lcp", value: null },
    { key: "pages", value: null },
  ],
  // Aristocrat — interfeys üç dildədir (seçim brauzerdə saxlanılır), lakin hər
  // dilin ayrıca ünvanı yoxdur. Bu nüans metrikdə deyil, case study-dəki
  // "Üç dil bir ünvanda" qərarında üç dildə izah olunur.
  9: [
    { key: "languages", value: "3 — AZ / EN / RU" },
    { key: "lighthouseMobile", value: null },
    { key: "lighthouseDesktop", value: null },
    { key: "lcp", value: null },
  ],
  2: [
    { key: "languages", value: "1 — AZ" },
    { key: "lighthouseMobile", value: "91" },
    { key: "lighthouseDesktop", value: "98" },
  ],
  3: [
    { key: "languages", value: "1 — AZ" },
    { key: "lighthouseMobile", value: "99" },
    { key: "lighthouseDesktop", value: "86" },
  ],
  4: [
    { key: "languages", value: "1 — AZ" },
    { key: "lighthouseMobile", value: "93" },
    { key: "lighthouseDesktop", value: "99" },
  ],
  7: [
    { key: "languages", value: "3 — AZ / EN / RU" },
    { key: "lighthouseMobile", value: null },
    { key: "lighthouseDesktop", value: null },
  ],
  // ZM Tech — sayt tam ingilis dilindədir, saytdan birbaşa yoxlanılıb.
  6: [
    { key: "languages", value: "1 — EN" },
    { key: "lighthouseMobile", value: null },
    { key: "lighthouseDesktop", value: null },
  ],
  // RentCar Baku — hər dil ayrıca marşrutdadır (/az, /en, /ru).
  10: [
    { key: "languages", value: "3 — AZ / EN / RU" },
    { key: "pages", value: "6 × 3" },
    { key: "lighthouseMobile", value: "94" },
    { key: "lighthouseDesktop", value: "100" },
    { key: "lcp", value: null },
  ],
  12: [
    { key: "languages", value: "1 — EN" },
    { key: "lighthouseMobile", value: "97" },
    { key: "lighthouseDesktop", value: null },
  ],
  // Telco Group — hazırda yalnız AZ marşrutu var (dil düymələri hələ işləmir).
  11: [
    { key: "languages", value: "1 — AZ" },
    { key: "lighthouseMobile", value: null },
    { key: "lighthouseDesktop", value: null },
    { key: "lcp", value: null },
  ],
};
