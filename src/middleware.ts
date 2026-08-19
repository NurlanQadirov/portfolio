import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/i18n/config";

/**
 * Bütün səhifələr `/[locale]/...` altında yaşayır, ona görə dilsiz gələn
 * ünvanları uyğun dilə yönləndiririk. Dil seçimi `Accept-Language`
 * başlığından götürülür; tanınmayan dil üçün azərbaycanca açılır.
 */
const pickLocale = (request: NextRequest) => {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  // "az-AZ,az;q=0.9,ru;q=0.8" → [{tag:'az-az', q:1}, ...] keyfiyyətə görə sıralanır
  const preferences = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const qParam = params.find((p) => p.trim().startsWith("q="));
      const q = qParam ? Number.parseFloat(qParam.split("=")[1]) : 1;
      return { tag: tag.toLowerCase(), q: Number.isFinite(q) ? q : 0 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of preferences) {
    const base = tag.split("-")[0];
    const match = locales.find((locale) => locale === base);
    if (match) return match;
  }

  return defaultLocale;
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = pickLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  /**
   * Statik fayllar, şəkillər və metadata route-ları (robots.txt, sitemap.xml,
   * icon.png, opengraph-image) yönləndirilməməlidir — onların dili yoxdur.
   */
  matcher: [
    "/((?!_next|api|.*\\..*|robots\\.txt|sitemap\\.xml|icon\\.png|opengraph-image|llms\\.txt).*)",
  ],
};
