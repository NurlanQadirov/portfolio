import type { Locale } from "./config";
import az, { type Dictionary } from "./dictionaries/az";
import en from "./dictionaries/en";
import ru from "./dictionaries/ru";

const dictionaries: Record<Locale, Dictionary> = { az, en, ru };

/**
 * Lüğətlər statik import edilir, çünki hər üçü kiçikdir və tamamı build
 * zamanı səhifələrə yerləşir — dinamik import burada əlavə mürəkkəblikdən
 * başqa heç nə qazandırmır.
 */
export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

export type { Dictionary };
