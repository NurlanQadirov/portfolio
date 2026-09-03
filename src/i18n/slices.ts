import type { Dictionary } from "./dictionaries/az";
import { SERVICE_KEYS, type ServiceKey } from "./routes";

/**
 * Lüğət dilimləri.
 *
 * Problem: client komponentə ötürülən hər prop RSC payload-una serializasiya
 * olunur. Bütün `Dictionary`-ni `SiteHeader`/`SiteFooter`-ə versək, dörd
 * xidmət səhifəsinin tam mətni və bütün FAQ cavabları HƏR səhifənin
 * payload-una düşür — case study səhifəsində bu, 60 KB artıq yük demək idi.
 *
 * Həll: hər client komponentə yalnız işlətdiyi sahələri veririk. Açar adları
 * eyni saxlanılır, ona görə komponentlərin daxili kodu dəyişmir.
 */

export type ChromeDict = {
  nav: Dictionary["nav"];
  services: {
    label: string;
    pages: Record<ServiceKey, { name: string }>;
  };
  faq: { label: string };
  contact: {
    spec: Pick<Dictionary["contact"]["spec"], "whatsapp" | "email" | "location">;
  };
};

export const toChromeDict = (dict: Dictionary): ChromeDict => ({
  nav: dict.nav,
  services: {
    label: dict.services.label,
    pages: Object.fromEntries(
      SERVICE_KEYS.map((key) => [key, { name: dict.services.pages[key].name }]),
    ) as Record<ServiceKey, { name: string }>,
  },
  faq: { label: dict.faq.label },
  contact: {
    spec: {
      whatsapp: dict.contact.spec.whatsapp,
      email: dict.contact.spec.email,
      location: dict.contact.spec.location,
    },
  },
});

export type HomeDict = {
  hero: Dictionary["hero"];
  about: Dictionary["about"];
  /**
   * Ana səhifədəki xidmətlər bölməsi. Yalnız ad və tagline ötürülür —
   * tam mətnlər, `includes` və qiymətlər xidmət səhifələrində qalır, ona görə
   * bu bölmə payload-a bir neçə yüz bayt əlavə edir, kilobayt yox.
   */
  services: {
    label: string;
    title: string;
    lede: string;
    seeMore: string;
    pages: Record<ServiceKey, { name: string; tagline: string }>;
  };
  faq: { label: string; title: string };
  projects: Dictionary["projects"];
  contact: Dictionary["contact"];
  caseStudies: { label: string };
};

export const toHomeDict = (dict: Dictionary): HomeDict => ({
  hero: dict.hero,
  about: dict.about,
  services: {
    label: dict.services.label,
    title: dict.services.title,
    lede: dict.services.lede,
    seeMore: dict.services.seeMore,
    pages: Object.fromEntries(
      SERVICE_KEYS.map((key) => [
        key,
        {
          name: dict.services.pages[key].name,
          tagline: dict.services.pages[key].tagline,
        },
      ]),
    ) as Record<ServiceKey, { name: string; tagline: string }>,
  },
  faq: { label: dict.faq.label, title: dict.faq.title },
  projects: dict.projects,
  contact: dict.contact,
  caseStudies: { label: dict.caseStudies.label },
});
