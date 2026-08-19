export const locales = ["az", "en", "ru"] as const;
export type Locale = (typeof locales)[number];

/** Azərbaycan bazarı əsas hədəfdir, ona görə `/` buraya yönlənir. */
export const defaultLocale: Locale = "az";

export const localeNames: Record<Locale, string> = {
  az: "AZ",
  en: "EN",
  ru: "RU",
};

/** `hreflang` atributu üçün tam kodlar. */
export const hreflangs: Record<Locale, string> = {
  az: "az-AZ",
  en: "en",
  ru: "ru",
};

/** OpenGraph `locale` sahəsi üçün. */
export const ogLocales: Record<Locale, string> = {
  az: "az_AZ",
  en: "en_US",
  ru: "ru_RU",
};

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
