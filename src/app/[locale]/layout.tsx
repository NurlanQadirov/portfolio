import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Fraunces, JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../globals.css";
import { SITE_URL, person } from "@/data/site";
import {
  hreflangs,
  isLocale,
  locales,
  ogLocales,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localeAlternates, paths } from "@/i18n/routes";

/**
 * Şrift sistemi.
 *
 * `latin-ext` alt çoxluğu MÜTLƏQ lazımdır — azərbaycan `ə` hərfi (U+0259)
 * məhz orada yaşayır. `cyrillic` isə rus dili üçün əlavə olunub.
 * Hər üç ailənin `ə/Ə/ğ/ı/ş` dəstəyi seçim mərhələsində yoxlanılıb.
 *
 * Mobil performans: next/font hər alt çoxluğun faylını `<head>`-də yüksək
 * prioritetlə preload edir. Əvvəllər bu 9 fayl (~290 KB) idi və yavaş 4G-də
 * CSS ilə bant genişliyi uğrunda yarışıb FCP/LCP-ni saniyələrlə gecikdirirdi.
 * İndi yalnız ilk ekranda mütləq lazım olanlar preload olunur:
 * - Fraunces yalnız 400 çəkidə istifadə olunur (başlıqlar preflight-da
 *   `font-weight: inherit` alır), ona görə dəyişkən 100–900 fayl əvəzinə
 *   statik 400 yüklənir.
 * - Kursiv Fraunces yalnız hero başlığındakı bir sözdədir — ayrıca ailə kimi,
 *   preload-suz yüklənir.
 * - JetBrains Mono yalnız kiçik etiketlərdədir; preload-suz, ehtiyac olanda.
 */
const fontDisplay = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const fontDisplayItalic = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: "italic",
  variable: "--font-display-italic",
  display: "swap",
  preload: false,
});

const fontSans = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  themeColor: "#0B0B0F",
  colorScheme: "dark",
};

/** Üç dilin hamısı build zamanı statik qurulur. */
export const generateStaticParams = () =>
  locales.map((locale) => ({ locale }));

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale;
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.titleDefault,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
    applicationName: `${person.name} — Portfolio`,
    authors: [{ name: person.name, url: SITE_URL }],
    creator: person.name,
    publisher: person.name,
    category: "technology",
    keywords: dict.meta.keywords,
    alternates: {
      canonical: paths.home(locale),
      languages: {
        ...localeAlternates((target) => paths.home(target)),
        "x-default": paths.home("az"),
      },
    },
    openGraph: {
      type: "profile",
      siteName: `${person.name} — Portfolio`,
      title: dict.meta.titleDefault,
      description: dict.meta.description,
      url: paths.home(locale),
      locale: ogLocales[locale],
      alternateLocale: locales
        .filter((item) => item !== locale)
        .map((item) => ogLocales[item]),
      firstName: person.givenName,
      lastName: person.familyName,
      username: "NurlanQadirov",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.titleDefault,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;

  return (
    <html lang={hreflangs[locale]}>
      <body
        className={`${fontDisplay.variable} ${fontDisplayItalic.variable} ${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
