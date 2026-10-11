export const locales = ["az", "en", "ru", "tr"] as const;
export type Locale = (typeof locales)[number];

/** Azərbaycan bazarı əsas hədəfdir, ona görə `/` buraya yönlənir. */
export const defaultLocale: Locale = "az";

export const localeNames: Record<Locale, string> = {
  az: "AZ",
  en: "EN",
  ru: "RU",
  tr: "TR",
};

/** `hreflang` atributu üçün tam kodlar. */
export const hreflangs: Record<Locale, string> = {
  az: "az-AZ",
  en: "en",
  ru: "ru",
  tr: "tr",
};

/** OpenGraph `locale` sahəsi üçün. */
export const ogLocales: Record<Locale, string> = {
  az: "az_AZ",
  en: "en_US",
  ru: "ru_RU",
  tr: "tr_TR",
};

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
