import type { pricing } from "@/data/site";

type Price = NonNullable<(typeof pricing)[keyof typeof pricing]>;

/** 1200 → "1 200". Locale API-dən istifadə etmirik ki, server və brauzer eyni nəticə versin. */
const group = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

/**
 * Qiyməti cari dilin şablonuna yerləşdirir.
 * Saatlıq və layihə üzrə tariflər ayrı şablon işlədir, çünki üç dildə
 * "…-dən başlayır" cümləsi fərqli qurulur.
 */
export function formatPrice(
  price: Price,
  dict: { priceFrom: string; priceFromHour: string },
): string {
  const template = price.per === "hour" ? dict.priceFromHour : dict.priceFrom;
  return template.replace("{amount}", group(price.from));
}
