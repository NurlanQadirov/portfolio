import { notFound } from "next/navigation";
import HomeClient from "@/components/HomeClient";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { toChromeDict, toHomeDict } from "@/i18n/slices";
import { homeGraph, jsonLdScript } from "@/lib/structured-data";

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDictionary(locale);
  const chrome = toChromeDict(dict);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(homeGraph(dict, locale)) }}
      />
      <HomeClient dict={toHomeDict(dict)} chrome={chrome} locale={locale} />
    </>
  );
}
