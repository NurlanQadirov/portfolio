import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { WHATSAPP_URL, pricing } from "@/data/site";
import { formatPrice } from "@/lib/format-price";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { toChromeDict } from "@/i18n/slices";
import {
  SERVICE_KEYS,
  localeAlternates,
  paths,
  serviceKeyFromSlug,
  serviceSlugs,
} from "@/i18n/routes";
import { jsonLdScript, serviceGraph } from "@/lib/structured-data";

/** Hər dil × hər xidmət — hamısı statik qurulur. */
export const generateStaticParams = () =>
  locales.flatMap((locale) =>
    SERVICE_KEYS.map((key) => ({ locale, slug: serviceSlugs[locale][key] })),
  );

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale;
  const key = serviceKeyFromSlug(locale, params.slug);
  if (!key) return {};

  const page = getDictionary(locale).services.pages[key];

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: paths.service(locale, key),
      languages: {
        ...localeAlternates((target) => paths.service(target, key)),
        "x-default": paths.service("az", key),
      },
    },
    openGraph: {
      type: "website",
      title: page.metaTitle,
      description: page.metaDescription,
      url: paths.service(locale, key),
      // Şəkil açıq şəkildə göstərilir: bu səhifə `openGraph` obyektini özü
      // təyin etdiyi üçün kök `opengraph-image` faylı avtomatik qoşulmur və
      // paylaşım kartı boş çərçivə ilə çıxırdı.
      images: ["/opengraph-image"],
    },
  };
}

export default function ServicePage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const key = serviceKeyFromSlug(locale, params.slug);
  if (!key) notFound();

  const dict = getDictionary(locale);
  const chrome = toChromeDict(dict);
  const page = dict.services.pages[key];
  const price = pricing[key];
  const others = SERVICE_KEYS.filter((item) => item !== key);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(serviceGraph(dict, locale, key)),
        }}
      />

      <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30">
        <SiteHeader dict={chrome} locale={locale} />

        <main>
          {/* --- Başlıq --- */}
          <section className="relative overflow-hidden px-6 pt-40 pb-20 md:pt-48 md:pb-24 border-b border-slate-900">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle,#20202A_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_45%,transparent_100%)]" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(237,237,236,0.05),transparent_70%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
              {/* Breadcrumb — hem istifadeci, hem crawler ucun */}
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-3 mb-8 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-600"
              >
                <a href={paths.home(locale)} className="hover:text-slate-300 transition-colors">
                  {dict.common.breadcrumbHome}
                </a>
                <span className="w-6 h-px bg-slate-800" />
                <span className="text-slate-400">{page.name}</span>
              </nav>

              <h1 className="font-display font-normal text-paper text-[2.4rem] sm:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-[-0.02em] max-w-3xl text-balance">
                {page.h1}
              </h1>

              <p className="mt-7 text-slate-400 text-lg leading-relaxed max-w-2xl">
                {page.intro}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 bg-paper hover:bg-white text-slate-950 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  {dict.contact.ctaWhatsapp}
                </a>
                <a
                  href={`${paths.home(locale)}#projects`}
                  className="px-7 py-4 border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-paper rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  {dict.hero.ctaProjects}
                </a>
              </div>
            </div>
          </section>

          {/* --- Nə daxildir + qiymət --- */}
          <section className="px-6 py-24 md:py-32 border-b border-slate-900">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 mb-8">
                  {dict.services.includesHeading}
                </div>
                <ul className="border-t border-slate-800">
                  {page.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 py-4 border-b border-slate-800 text-slate-300"
                    >
                      <Check size={17} className="shrink-0 mt-1 text-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Qiymət yalnız `site.ts`-də təyin olunubsa göstərilir. */}
                {price && (
                  <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900/60 p-6">
                    <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 mb-3">
                      {dict.services.priceHeading}
                    </div>
                    <p className="font-display text-2xl text-paper mb-2">
                      {formatPrice(price, dict.services)}
                    </p>
                    <p className="text-sm text-slate-500">{dict.services.priceNote}</p>
                  </div>
                )}
              </div>

              {/* --- İş prosesi --- */}
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 mb-8">
                  {dict.services.stepsHeading}
                </div>
                <ol className="border-t border-slate-800">
                  {page.steps.map((step, index) => (
                    <li key={step.title} className="py-6 border-b border-slate-800">
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-[11px] text-slate-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="font-display text-xl text-paper mb-2">
                            {step.title}
                          </h3>
                          <p className="text-slate-400 leading-relaxed">{step.body}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          {/* --- Səhifəyə uyğun FAQ (FAQPage sxeması ilə) --- */}
          <section className="px-6 py-24 md:py-32 border-b border-slate-900">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display font-normal text-3xl md:text-4xl tracking-[-0.02em] text-paper mb-12">
                {dict.services.faqHeading}
              </h2>
              <dl className="border-t border-slate-800">
                {page.faq.map((item) => (
                  <div key={item.q} className="py-7 border-b border-slate-800">
                    <dt className="font-display text-xl text-paper mb-3">{item.q}</dt>
                    <dd className="text-slate-400 leading-relaxed">{item.a}</dd>
                  </div>
                ))}
              </dl>

              <a
                href={paths.faq(locale)}
                className="mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-slate-400 hover:text-paper transition-colors"
              >
                {dict.faq.title}
                <ArrowUpRight size={14} />
              </a>
            </div>
          </section>

          {/* --- Digər xidmətlər (daxili linkləmə) --- */}
          <section className="px-6 py-24 md:py-28">
            <div className="max-w-7xl mx-auto">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 mb-10">
                {dict.services.otherServices}
              </div>
              <div className="grid sm:grid-cols-3 gap-x-8 gap-y-10 border-t border-slate-800 pt-10">
                {others.map((item) => (
                  <a
                    key={item}
                    href={paths.service(locale, item)}
                    className="group block"
                  >
                    <h3 className="font-display text-xl text-paper mb-2 transition-colors group-hover:text-cyan-200">
                      {dict.services.pages[item].name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-3">
                      {dict.services.pages[item].tagline}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-600 group-hover:text-slate-300 transition-colors">
                      {dict.services.seeMore}
                      <ArrowUpRight size={13} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>

        <SiteFooter dict={chrome} locale={locale} />
      </div>
    </>
  );
}
