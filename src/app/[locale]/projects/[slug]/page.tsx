import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import {
  SITE_URL,
  WHATSAPP_URL,
  caseStudyMetrics,
  person,
  projects,
} from "@/data/site";
import { hreflangs, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { toChromeDict } from "@/i18n/slices";
import { localeAlternates, paths } from "@/i18n/routes";
import {
  PERSON_ID,
  breadcrumbNode,
  faqNode,
  jsonLdScript,
} from "@/lib/structured-data";

/** Case study olan hər layihə × hər dil. */
export const generateStaticParams = () =>
  locales.flatMap((locale) =>
    projects
      .filter((project) => project.caseStudy)
      .map((project) => ({ locale, slug: project.caseStudy as string })),
  );

const findProject = (slug: string) =>
  projects.find((project) => project.caseStudy === slug);

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const project = findProject(params.slug);
  if (!project) return {};

  const study = getDictionary(params.locale).caseStudies.items[project.id];
  if (!study) return {};

  return {
    title: study.metaTitle,
    description: study.metaDescription,
    alternates: {
      canonical: paths.project(params.locale, params.slug),
      languages: {
        ...localeAlternates((target) => paths.project(target, params.slug)),
        "x-default": paths.project("az", params.slug),
      },
    },
    openGraph: {
      type: "article",
      title: study.metaTitle,
      description: study.metaDescription,
      url: paths.project(params.locale, params.slug),
    },
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const project = findProject(params.slug);
  if (!project) notFound();

  const dict = getDictionary(locale);
  const chrome = toChromeDict(dict);
  const cs = dict.caseStudies;
  const study = cs.items[project.id];
  if (!study) notFound();

  const metrics = (caseStudyMetrics[project.id] ?? []).filter(
    (metric): metric is { key: typeof metric.key; value: string } =>
      Boolean(metric.value),
  );

  const pageUrl = `${SITE_URL}${paths.project(locale, params.slug)}`;

  /**
   * `additionalProperty` iki mənbədən qidalanır: ölçülmüş metriklər və
   * arxitektura qatları. Qatları da bura qoymaq ona görə vacibdir ki, stack
   * sualına cavab axtaran model `keywords`-dəki quru siyahını deyil, hansı
   * qatda nəyin işlədiyini oxusun — "Next.js" sözü ilə admin paneli, bazası
   * və deploy axını olan tam tətbiq arasındakı fərq yalnız burada görünür.
   */
  const properties = [
    ...metrics.map((metric) => ({
      "@type": "PropertyValue",
      name: cs.metricLabels[metric.key],
      value: metric.value,
    })),
    ...(study.architecture ?? []).map((layer) => ({
      "@type": "PropertyValue",
      name: layer.layer,
      value: layer.body,
    })),
  ];

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${pageUrl}#work`,
        name: project.title,
        headline: study.h1,
        description: study.summary,
        genre: project.category,
        url: project.demoUrl,
        image: `${SITE_URL}${project.image}`,
        keywords: project.tech.join(", "),
        inLanguage: hreflangs[locale],
        author: { "@id": PERSON_ID },
        creator: { "@id": PERSON_ID },
        // Uydurma iddia olmasın deyə yalnız real dəyərlər əlavə olunur.
        ...(properties.length ? { additionalProperty: properties } : {}),
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: study.metaTitle,
        description: study.metaDescription,
        about: { "@id": `${pageUrl}#work` },
        inLanguage: hreflangs[locale],
      },
      // Sual-cavab cütü AI cavabına düşməyin ən birbaşa formatıdır, ona görə
      // səhifədəki mətnlə eyni məzmun ayrıca `FAQPage` kimi də verilir.
      ...(study.faq?.length ? [faqNode(study.faq, pageUrl)] : []),
      breadcrumbNode(
        [
          { name: dict.common.breadcrumbHome, url: `${SITE_URL}${paths.home(locale)}` },
          { name: dict.projects.label, url: `${SITE_URL}${paths.home(locale)}#projects` },
          { name: project.title, url: pageUrl },
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
          {/* --- Başlıq --- */}
          <section className="relative overflow-hidden px-6 pt-40 pb-16 md:pt-48 border-b border-slate-900">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle,#20202A_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_45%,transparent_100%)]" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(237,237,236,0.05),transparent_70%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-3 mb-8 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-600"
              >
                <a href={paths.home(locale)} className="hover:text-slate-300 transition-colors">
                  {dict.common.breadcrumbHome}
                </a>
                <span className="w-6 h-px bg-slate-800" />
                <span>{cs.label}</span>
              </nav>

              <h1 className="font-display font-normal text-paper text-[2.4rem] sm:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-[-0.02em] max-w-3xl text-balance">
                {study.h1}
              </h1>

              <p className="mt-7 text-slate-400 text-lg leading-relaxed max-w-2xl">
                {study.summary}
              </p>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex px-7 py-4 bg-paper hover:bg-white text-slate-950 rounded-lg font-semibold transition-all items-center justify-center gap-2"
                >
                  {cs.liveSite}
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </section>

          {/* --- Ümumi baxış: müştəri / rol / stack + metriklər --- */}
          <section className="px-6 py-20 md:py-24 border-b border-slate-900">
            <div className="max-w-7xl mx-auto">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 mb-8">
                {cs.overviewHeading}
              </div>

              <dl className="border-t border-slate-800">
                <div className="grid grid-cols-[6.5rem_1fr] sm:grid-cols-[10rem_1fr] gap-4 py-4 border-b border-slate-800">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-600 pt-1">
                    {cs.clientLabel}
                  </dt>
                  <dd className="text-slate-300">{study.client}</dd>
                </div>

                {/* Rol yalnız doldurulubsa görünür */}
                {study.role && (
                  <div className="grid grid-cols-[6.5rem_1fr] sm:grid-cols-[10rem_1fr] gap-4 py-4 border-b border-slate-800">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-600 pt-1">
                      {cs.roleLabel}
                    </dt>
                    <dd className="text-slate-300">{study.role}</dd>
                  </div>
                )}

                <div className="grid grid-cols-[6.5rem_1fr] sm:grid-cols-[10rem_1fr] gap-4 py-4 border-b border-slate-800">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-600 pt-1">
                    {cs.stackLabel}
                  </dt>
                  <dd className="font-mono text-sm text-slate-400">
                    {project.tech.join("  ·  ")}
                  </dd>
                </div>

                {metrics.map((metric) => (
                  <div
                    key={metric.key}
                    className="grid grid-cols-[6.5rem_1fr] sm:grid-cols-[10rem_1fr] gap-4 py-4 border-b border-slate-800"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-600 pt-1">
                      {cs.metricLabels[metric.key]}
                    </dt>
                    <dd className="text-slate-300">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* --- Problem (yalnız doldurulubsa) --- */}
          {study.problem && (
            <section className="px-6 py-20 md:py-24 border-b border-slate-900">
              <div className="max-w-3xl mx-auto">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 mb-6">
                  {cs.problemHeading}
                </div>
                <p className="font-display text-2xl md:text-3xl leading-[1.4] text-paper">
                  {study.problem}
                </p>
              </div>
            </section>
          )}

          {/* --- Sayta nə daxildir --- */}
          <section className="px-6 py-20 md:py-24 border-b border-slate-900">
            <div className="max-w-3xl mx-auto">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 mb-8">
                {cs.featuresHeading}
              </div>
              <ul className="border-t border-slate-800">
                {study.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-4 py-4 border-b border-slate-800 text-slate-300"
                  >
                    <Check size={17} className="shrink-0 mt-1 text-cyan-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* --- Arxitektura: yalnız full-stack layihələrdə doldurulur --- */}
          {study.architecture?.length ? (
            <section className="px-6 py-20 md:py-24 border-b border-slate-900">
              <div className="max-w-3xl mx-auto">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 mb-8">
                  {cs.architectureHeading}
                </div>
                <dl className="border-t border-slate-800">
                  {study.architecture.map((layer) => (
                    <div
                      key={layer.layer}
                      className="grid sm:grid-cols-[9rem_1fr] gap-2 sm:gap-6 py-6 border-b border-slate-800"
                    >
                      <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-300/80 pt-1.5">
                        {layer.layer}
                      </dt>
                      <dd className="text-slate-400 leading-relaxed">{layer.body}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          ) : null}

          {/* --- Texniki qərarlar: ekspertizanı göstərən hissə --- */}
          <section className="px-6 py-20 md:py-24 border-b border-slate-900">
            <div className="max-w-3xl mx-auto">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 mb-8">
                {cs.decisionsHeading}
              </div>
              <div className="border-t border-slate-800">
                {study.decisions.map((decision, index) => (
                  <div key={decision.title} className="py-7 border-b border-slate-800">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[11px] text-slate-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h2 className="font-display text-xl md:text-2xl text-paper mb-3">
                          {decision.title}
                        </h2>
                        <p className="text-slate-400 leading-relaxed">{decision.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- Nəticə (yalnız doldurulubsa) --- */}
          {study.results && (
            <section className="px-6 py-20 md:py-24 border-b border-slate-900">
              <div className="max-w-3xl mx-auto">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 mb-6">
                  {cs.resultsHeading}
                </div>
                <p className="font-display text-2xl md:text-3xl leading-[1.4] text-paper">
                  {study.results}
                </p>
              </div>
            </section>
          )}

          {/* --- Layihəyə aid suallar: eyni məzmun FAQPage sxeması kimi də verilir --- */}
          {study.faq?.length ? (
            <section className="px-6 py-20 md:py-24 border-b border-slate-900">
              <div className="max-w-3xl mx-auto">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 mb-8">
                  {cs.faqHeading}
                </div>
                <dl className="border-t border-slate-800">
                  {study.faq.map((item) => (
                    <div key={item.q} className="py-7 border-b border-slate-800">
                      <dt className="font-display text-xl md:text-2xl text-paper mb-3">
                        {item.q}
                      </dt>
                      <dd className="text-slate-400 leading-relaxed">{item.a}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          ) : null}

          {/* --- CTA --- */}
          <section className="px-6 py-20 md:py-28">
            <div className="max-w-3xl mx-auto rounded-xl border border-slate-800 bg-slate-900/60 p-8">
              <p className="font-display text-xl md:text-2xl text-paper mb-6">
                {dict.contact.statement}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                  {dict.projects.title}
                </a>
              </div>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-600">
                {person.name} — {person.locality}, {person.countryName}
              </p>
            </div>
          </section>
        </main>

        <SiteFooter dict={chrome} locale={locale} />
      </div>
    </>
  );
}
