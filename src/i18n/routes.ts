import { type Locale, locales } from "./config";

/**
 * Xidmət səhifələri.
 *
 * Açar (`ServiceKey`) dildən asılı deyil — kod hər yerdə onunla işləyir.
 * URL-də görünən hissə isə hər dil üçün ayrıca tərcümə olunur, çünki
 * axtarış sorğuları da hər dildə fərqli sözlərlə gəlir.
 *
 * Qeyd: `/services/` seqmenti hər üç dildə eyni qalır. Onu da tərcümə etmək
 * SEO baxımından cüzi fayda verir, routing-i isə nəzərəçarpacaq dərəcədə
 * mürəkkəbləşdirir — açar söz daşıyan hissə slug-dır, o tərcümə olunub.
 */
export const SERVICE_KEYS = [
  "web-development",
  "ecommerce",
  "nextjs",
  "landing",
] as const;

export type ServiceKey = (typeof SERVICE_KEYS)[number];

export const serviceSlugs: Record<Locale, Record<ServiceKey, string>> = {
  az: {
    "web-development": "veb-sayt-hazirlanmasi",
    ecommerce: "e-ticaret-sayti-hazirlanmasi",
    nextjs: "next-js-developer",
    landing: "landing-page-hazirlanmasi",
  },
  en: {
    "web-development": "web-development",
    ecommerce: "ecommerce-development",
    nextjs: "nextjs-developer",
    landing: "landing-page-development",
  },
  ru: {
    "web-development": "razrabotka-saytov",
    ecommerce: "razrabotka-internet-magazina",
    nextjs: "nextjs-razrabotchik",
    landing: "landing-page",
  },
};

/** URL-dəki slug-dan dildən asılı olmayan açara qaytarır. */
export const serviceKeyFromSlug = (
  locale: Locale,
  slug: string,
): ServiceKey | null => {
  const table = serviceSlugs[locale];
  const found = SERVICE_KEYS.find((key) => table[key] === slug);
  return found ?? null;
};

export const paths = {
  home: (locale: Locale) => `/${locale}`,
  /** Bütün xidmətlərin siyahısı — naviqasiyadakı "Xidmətlər" buraya gedir. */
  services: (locale: Locale) => `/${locale}/services`,
  faq: (locale: Locale) => `/${locale}/faq`,
  service: (locale: Locale, key: ServiceKey) =>
    `/${locale}/services/${serviceSlugs[locale][key]}`,
};

/** Eyni səhifənin bütün dil variantları — `hreflang` və sitemap üçün. */
export const localeAlternates = (
  build: (locale: Locale) => string,
): Record<string, string> =>
  Object.fromEntries(locales.map((locale) => [locale, build(locale)]));

/** Sitemap-ın gəzəcəyi bütün ünvanlar. */
export const allRoutes = (): { locale: Locale; path: string; priority: number }[] =>
  locales.flatMap((locale) => [
    { locale, path: paths.home(locale), priority: 1 },
    { locale, path: paths.services(locale), priority: 0.9 },
    ...SERVICE_KEYS.map((key) => ({
      locale,
      path: paths.service(locale, key),
      priority: 0.8,
    })),
    { locale, path: paths.faq(locale), priority: 0.6 },
  ]);
