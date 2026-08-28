import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { WHATSAPP_URL, pricing } from "@/data/site";
import { formatPrice } from "@/lib/format-price";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { toChromeDict } from "@/i18n/slices";
import { SERVICE_KEYS, localeAlternates, paths } from "@/i18n/routes";
import {
  BUSINESS_ID,
  breadcrumbNode,
  jsonLdScript,
} from "@/lib/structured-data";
import { SITE_URL } from "@/data/site";

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale;
  const dict = getDictionary(locale);

  return {
    title: dict.services.metaTitle,
    description: dict.services.metaDescription,
    alternates: {
      canonical: paths.services(locale),
      languages: {
        ...localeAlternates((target) => paths.services(target)),
        "x-default": paths.services("az"),
      },
    },
    openGraph: {
      type: "website",
      title: dict.services.metaTitle,
      description: dict.services.metaDescription,
      url: paths.services(locale),
      // Şəkil açıq şəkildə göstərilir: bu səhifə `openGraph` obyektini özü
      // təyin etdiyi üçün kök `opengraph-image` faylı avtomatik qoşulmur və
      // paylaşım kartı boş çərçivə ilə çıxırdı.
      images: ["/opengraph-image"],
    },
  };
}

export default function ServicesIndexPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDictionary(locale);
  const chrome = toChromeDict(dict);
  const pageUrl = `${SITE_URL}${paths.services(locale)}`;

  /**
   * Siyahı səhifəsi üçün `ItemList` — hər xidmət ayrıca `Service` səhifəsinə
   * işarə edir, yəni crawler dörd səhifəni bir yerdən kəşf edir.
   */
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: dict.services.metaTitle,
        description: dict.services.metaDescription,
        about: { "@id": BUSINESS_ID },
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#services`,
        name: dict.services.title,
        numberOfItems: SERVICE_KEYS.length,
        itemListElement: SERVICE_KEYS.map((key, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: dict.services.pages[key].name,
          url: `${SITE_URL}${paths.service(locale, key)}`,
        })),
      },
      breadcrumbNode(
        [
          { name: dict.common.breadcrumbHome, url: `${SITE_URL}${paths.home(locale)}` },
          { name: dict.services.label, url: pageUrl },
        ],
        pageUrl,
      ),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(graph) }}
      />

      <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30">
        <SiteHeader dict={chrome} locale={locale} />

        <main>
          <section className="relative overflow-hidden px-6 pt-40 pb-16 md:pt-48 border-b border-slate-900">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle,#20202A_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_45%,transparent_100%)]" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(237,237,236,0.05),transparent_70%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-3 mb-8 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-600"
              >
                <a href={paths.home(locale)} className="hover:text-slate-300 transition-colors">
                  {dict.common.breadcrumbHome}
                </a>
                <span className="w-6 h-px bg-slate-800" />
                <span className="text-slate-400">{dict.services.label}</span>
              </nav>

              <h1 className="font-display font-normal text-paper text-[2.4rem] sm:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-[-0.02em] max-w-3xl text-balance">
                {dict.services.title}
              </h1>
              <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-2xl">
                {dict.services.lede}
              </p>
            </div>
          </section>

          <section className="px-6 py-20 md:py-28">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 border-t border-slate-800">
                {SERVICE_KEYS.map((key, index) => {
                  const page = dict.services.pages[key];
                  const price = pricing[key];
                  const priceLabel = price
                    ? formatPrice(price, dict.services)
                    : null;

                  return (
                    <a
                      key={key}
                      href={paths.service(locale, key)}
                      className="group block py-10 border-b border-slate-800"
                    >
                      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 mb-4">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <span className="w-8 h-px bg-slate-800" />
                        {priceLabel && <span>{priceLabel}</span>}
                      </div>

                      <h2 className="font-display font-normal text-2xl md:text-3xl text-paper mb-3 transition-colors group-hover:text-cyan-200">
                        {page.name}
                      </h2>

                      <p className="text-slate-400 leading-relaxed mb-5 max-w-xl">
                        {page.tagline}
                      </p>

                      <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 group-hover:text-paper transition-colors">
                        {dict.services.seeMore}
                        <ArrowUpRight
                          size={13}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-16 rounded-xl border border-slate-800 bg-slate-900/60 p-8">
                <p className="font-display text-xl md:text-2xl text-paper mb-6">
                  {dict.contact.statement}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-7 py-4 bg-paper hover:bg-white text-slate-950 rounded-lg font-semibold transition-all items-center justify-center gap-2"
                >
                  {dict.contact.ctaWhatsapp}
                </a>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter dict={chrome} locale={locale} />
      </div>
    </>
  );
}
