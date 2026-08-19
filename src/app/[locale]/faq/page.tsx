import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { WHATSAPP_URL } from "@/data/site";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localeAlternates, paths } from "@/i18n/routes";
import { faqGraph, jsonLdScript } from "@/lib/structured-data";

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
    title: dict.faq.metaTitle,
    description: dict.faq.metaDescription,
    alternates: {
      canonical: paths.faq(locale),
      languages: {
        ...localeAlternates((target) => paths.faq(target)),
        "x-default": paths.faq("az"),
      },
    },
    openGraph: {
      type: "website",
      title: dict.faq.metaTitle,
      description: dict.faq.metaDescription,
      url: paths.faq(locale),
    },
  };
}

export default function FaqPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDictionary(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqGraph(dict, locale)) }}
      />

      <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30">
        <SiteHeader dict={dict} locale={locale} />

        <main>
          <section className="relative overflow-hidden px-6 pt-40 pb-16 md:pt-48 border-b border-slate-900">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle,#20202A_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_45%,transparent_100%)]" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-3 mb-8 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-600"
              >
                <a href={paths.home(locale)} className="hover:text-slate-300 transition-colors">
                  {dict.common.breadcrumbHome}
                </a>
                <span className="w-6 h-px bg-slate-800" />
                <span className="text-slate-400">{dict.faq.label}</span>
              </nav>

              <h1 className="font-display font-normal text-paper text-[2.4rem] sm:text-5xl leading-[1.1] tracking-[-0.02em] text-balance">
                {dict.faq.title}
              </h1>
              <p className="mt-6 text-slate-400 text-lg leading-relaxed">
                {dict.faq.lede}
              </p>
            </div>
          </section>

          <section className="px-6 py-20 md:py-28">
            <div className="max-w-3xl mx-auto">
              <dl className="border-t border-slate-800">
                {dict.faq.items.map((item) => (
                  <div key={item.q} className="py-7 border-b border-slate-800">
                    <dt className="font-display text-xl md:text-2xl text-paper mb-3">
                      {item.q}
                    </dt>
                    <dd className="text-slate-400 leading-relaxed">{item.a}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-14 rounded-xl border border-slate-800 bg-slate-900/60 p-8">
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

        <SiteFooter dict={dict} locale={locale} />
      </div>
    </>
  );
}
