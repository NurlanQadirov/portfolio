import { notFound } from "next/navigation";
import HomeClient from "@/components/HomeClient";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { homeGraph, jsonLdScript } from "@/lib/structured-data";

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDictionary(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(homeGraph(dict, locale)) }}
      />
      <HomeClient dict={dict} locale={locale} />
    </>
  );
}
