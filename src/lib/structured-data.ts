import {
  EMAIL,
  PHONE_E164,
  SITE_URL,
  WHATSAPP_URL,
  person,
  priceRange,
  pricing,
  projects,
  skills,
} from "@/data/site";
import { hreflangs, type Locale } from "@/i18n/config";
import type { Dictionary, QA } from "@/i18n/dictionaries/az";
import { SERVICE_KEYS, paths } from "@/i18n/routes";

/**
 * Struktur data (JSON-LD).
 *
 * Bütün qovşaqlar `@id` ilə ünvanlanır ki, crawler və LLM-lər şəxs, sayt,
 * səhifə, xidmət və iş nümunələri arasındakı əlaqəni bərpa edə bilsin —
 * bir-birindən qopmuş beş ayrı blok kimi deyil.
 */
export const PERSON_ID = `${SITE_URL}/#person`;
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const abs = (path: string) => `${SITE_URL}${path}`;

/** Şəxs qovşağı — kimlik lövbəri, bütün digər qovşaqlar buna bağlanır. */
const personNode = (dict: Dictionary) => ({
  "@type": "Person",
  "@id": PERSON_ID,
  name: person.name,
  alternateName: person.alternateName,
  givenName: person.givenName,
  familyName: person.familyName,
  jobTitle: person.jobTitle,
  description: person.bio,
  disambiguatingDescription: dict.meta.description,
  url: SITE_URL,
  image: abs("/icon.png"),
  email: `mailto:${EMAIL}`,
  telephone: PHONE_E164,
  address: {
    "@type": "PostalAddress",
    addressLocality: person.locality,
    addressRegion: person.region,
    addressCountry: person.country,
  },
  nationality: { "@type": "Country", name: person.countryName },
  knowsAbout: [...skills],
  knowsLanguage: [
    { "@type": "Language", name: "Azerbaijani", alternateName: "az" },
    { "@type": "Language", name: "English", alternateName: "en" },
    { "@type": "Language", name: "Russian", alternateName: "ru" },
  ],
  sameAs: [person.github, person.linkedin, WHATSAPP_URL],
  worksFor: { "@id": BUSINESS_ID },
});

/**
 * `ProfessionalService` — "mənə xidmət göstərən tap" tipli cavabları məhz bu
 * tip qidalandırır. `Person` tək başına bunu etmir, ona görə ayrıca qovşaqdır.
 */
const businessNode = (dict: Dictionary, locale: Locale) => ({
  "@type": "ProfessionalService",
  "@id": BUSINESS_ID,
  name: `${person.name} — ${person.jobTitle}`,
  description: dict.meta.description,
  url: paths.home(locale) === `/${locale}` ? abs(paths.home(locale)) : SITE_URL,
  image: abs("/icon.png"),
  email: `mailto:${EMAIL}`,
  telephone: PHONE_E164,
  founder: { "@id": PERSON_ID },
  employee: { "@id": PERSON_ID },
  address: {
    "@type": "PostalAddress",
    addressLocality: person.locality,
    addressRegion: person.region,
    addressCountry: person.country,
  },
  areaServed: [
    { "@type": "Country", name: person.countryName },
    { "@type": "Place", name: "Worldwide (remote)" },
  ],
  availableLanguage: ["az", "en", "ru"],
  knowsLanguage: ["az", "en", "ru"],
  // Qiymət yalnız həqiqətən təyin olunubsa göstərilir.
  ...(priceRange ? { priceRange } : {}),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: dict.services.title,
    itemListElement: SERVICE_KEYS.map((key) => {
      const page = dict.services.pages[key];
      const price = pricing[key];
      return {
        "@type": "Offer",
        // Başlanğıc həddi maşın oxuya bilən formada — axtarış mühərrikləri və
        // LLM-lər qiyməti mətndən çıxarmaq əvəzinə birbaşa oxuya bilsin.
        ...(price
          ? {
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "AZN",
                minPrice: price.from,
                unitText: price.per === "hour" ? "HOUR" : "PROJECT",
              },
            }
          : {}),
        itemOffered: {
          "@type": "Service",
          "@id": `${abs(paths.service(locale, key))}#service`,
          name: page.name,
          description: page.metaDescription,
          url: abs(paths.service(locale, key)),
          serviceType: page.name,
          provider: { "@id": BUSINESS_ID },
          areaServed: { "@type": "Country", name: person.countryName },
        },
      };
    }),
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Sales",
      telephone: PHONE_E164,
      email: EMAIL,
      url: WHATSAPP_URL,
      availableLanguage: ["Azerbaijani", "English", "Russian"],
      areaServed: "Worldwide",
    },
  ],
  sameAs: [person.github, person.linkedin],
});

const websiteNode = (dict: Dictionary, locale: Locale) => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: `${person.name} — Portfolio`,
  description: dict.meta.description,
  inLanguage: hreflangs[locale],
  publisher: { "@id": PERSON_ID },
  author: { "@id": PERSON_ID },
});

/** FAQ qovşağı — AI cavablarına düşməyin ən birbaşa formatı. */
export const faqNode = (items: QA[], pageUrl: string) => ({
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});

export const breadcrumbNode = (
  crumbs: { name: string; url: string }[],
  pageUrl: string,
) => ({
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,
  itemListElement: crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
});

/** Ana səhifə qrafı: şəxs + biznes + sayt + profil + iş nümunələri. */
export const homeGraph = (dict: Dictionary, locale: Locale) => {
  const pageUrl = abs(paths.home(locale));

  return {
    "@context": "https://schema.org",
    "@graph": [
      personNode(dict),
      businessNode(dict, locale),
      websiteNode(dict, locale),
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: dict.meta.titleDefault,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        mainEntity: { "@id": PERSON_ID },
        inLanguage: hreflangs[locale],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#projects`,
        name: dict.projects.title,
        description: dict.projects.lede,
        numberOfItems: projects.length,
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: project.title,
            description: dict.projects.desc[project.id],
            genre: project.category,
            url: project.demoUrl,
            image: abs(project.image),
            keywords: project.tech.join(", "),
            inLanguage: hreflangs[locale],
            author: { "@id": PERSON_ID },
            creator: { "@id": PERSON_ID },
          },
        })),
      },
    ],
  };
};

/** Xidmət səhifəsi qrafı: xidmət + biznes + breadcrumb + səhifə FAQ-ı. */
export const serviceGraph = (
  dict: Dictionary,
  locale: Locale,
  key: (typeof SERVICE_KEYS)[number],
) => {
  const page = dict.services.pages[key];
  const pageUrl = abs(paths.service(locale, key));

  return {
    "@context": "https://schema.org",
    "@graph": [
      personNode(dict),
      businessNode(dict, locale),
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: page.name,
        alternateName: page.h1,
        description: page.metaDescription,
        url: pageUrl,
        serviceType: page.name,
        provider: { "@id": BUSINESS_ID },
        areaServed: [
          { "@type": "Country", name: person.countryName },
          { "@type": "Place", name: "Worldwide (remote)" },
        ],
        availableLanguage: ["az", "en", "ru"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: dict.services.includesHeading,
          itemListElement: page.includes.map((item) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: item },
          })),
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: page.metaTitle,
        description: page.metaDescription,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": `${pageUrl}#service` },
        inLanguage: hreflangs[locale],
      },
      breadcrumbNode(
        [
          { name: dict.common.breadcrumbHome, url: abs(paths.home(locale)) },
          { name: page.name, url: pageUrl },
        ],
        pageUrl,
      ),
      faqNode(page.faq, pageUrl),
    ],
  };
};

/** FAQ səhifəsi qrafı. */
export const faqGraph = (dict: Dictionary, locale: Locale) => {
  const pageUrl = abs(paths.faq(locale));

  return {
    "@context": "https://schema.org",
    "@graph": [
      personNode(dict),
      businessNode(dict, locale),
      faqNode(dict.faq.items, pageUrl),
      breadcrumbNode(
        [
          { name: dict.common.breadcrumbHome, url: abs(paths.home(locale)) },
          { name: dict.faq.title, url: pageUrl },
        ],
        pageUrl,
      ),
    ],
  };
};

/**
 * JSON-LD-nin `<script>` içinə təhlükəsiz yerləşdirilməsi.
 * Data statikdir, amma `<` qaçırılır ki, heç bir halda script teqi vaxtından
 * əvvəl bağlanmasın.
 */
export const jsonLdScript = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");
