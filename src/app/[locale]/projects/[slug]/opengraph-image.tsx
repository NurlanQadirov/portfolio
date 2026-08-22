import { ImageResponse } from "next/og";
import { person, projects } from "@/data/site";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

/**
 * Case study üçün ayrıca paylaşım şəkli.
 *
 * NİYƏ AYRICA FAYL: kök `app/opengraph-image.tsx` yalnız o səhifələrə düşür ki,
 * onlar `openGraph` obyektini özləri yenidən təyin etmirlər. Bu səhifənin
 * `generateMetadata`-sı isə `openGraph`-ı təyin edir və bununla valideyndən
 * gələn şəkli də sıfırlayır — nəticədə LinkedIn və digər platformalar kartı
 * boş çərçivə ilə göstərirdi. Şəkli məhz bu seqmentə qoymaq problemi həll edir
 * və üstəlik hər layihəyə öz kartını verir.
 */
export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${person.name} — case study`;

/** Səhifə ilə eyni kombinasiyalar: case study olan hər layihə × hər dil. */
export const generateStaticParams = () =>
  locales.flatMap((locale) =>
    projects
      .filter((project) => project.caseStudy)
      .map((project) => ({ locale, slug: project.caseStudy as string })),
  );

export default function CaseStudyOpenGraphImage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = isLocale(params.locale) ? params.locale : "az";
  const project = projects.find((item) => item.caseStudy === params.slug);
  const label = getDictionary(locale).caseStudies.label;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0B0B0F",
          color: "#e2e8f0",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#22d3ee",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          NURLAN.DEV · {label}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 62,
            fontWeight: 700,
            color: "#ffffff",
            marginTop: 24,
            lineHeight: 1.12,
          }}
        >
          {project?.title ?? person.name}
        </div>

        {project ? (
          <div style={{ display: "flex", fontSize: 34, color: "#38bdf8", marginTop: 18 }}>
            {project.category}
          </div>
        ) : null}

        {project ? (
          <div style={{ display: "flex", fontSize: 28, color: "#94a3b8", marginTop: 26 }}>
            {project.tech.join("  ·  ")}
          </div>
        ) : null}

        <div style={{ display: "flex", fontSize: 25, color: "#64748b", marginTop: 40 }}>
          {person.name} — {person.jobTitle}
        </div>
      </div>
    ),
    size,
  );
}
