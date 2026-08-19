import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";
import { locales } from "@/i18n/config";
import { allRoutes, paths, serviceKeyFromSlug } from "@/i18n/routes";

/**
 * Hər səhifə üç dildə mövcuddur, ona görə hər sətir `alternates.languages`
 * ilə digər dil variantlarına işarə edir — Google məhz bunu gözləyir.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return allRoutes().map(({ locale, path, priority }) => {
    const segments = path.split("/").filter(Boolean);

    const alternateFor = (target: (typeof locales)[number]) => {
      if (segments.length <= 1) return paths.home(target);
      if (segments[1] === "faq") return paths.faq(target);
      // ["az", "services"] → siyahı səhifəsi; ["az", "services", "<slug>"] → xidmət
      if (segments[1] === "services" && !segments[2]) return paths.services(target);
      const key = serviceKeyFromSlug(locale, segments[2] ?? "");
      return key ? paths.service(target, key) : paths.home(target);
    };

    return {
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((target) => [target, `${SITE_URL}${alternateFor(target)}`]),
        ),
      },
    };
  });
}
