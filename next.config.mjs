/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Build çıxışının qovluğu.
   *
   * `next dev` və `next build` normalda eyni `.next` qovluğunu paylaşır — yəni
   * dev server işləyərkən build işlətmək onun chunk fayllarını əvəz edir və
   * "Cannot find module './xxx.js'" xətası verir. `NEXT_DIST_DIR` təyin edilərsə
   * build ayrı qovluğa yazılır, dev server isə toxunulmamış qalır.
   */
  distDir: process.env.NEXT_DIST_DIR || ".next",

  /**
   * Silinmiş case study-lərin ünvanları.
   *
   * Cyber Mine (ciso.az) və Reform/MyData (mydata.az) müştərinin qərarı ilə
   * bağlanıb — domenlər artıq cavab vermir, ona görə layihələr portfoliodan
   * çıxarıldı. Ünvanlar indeksdə qalmış ola bilər; 404 əvəzinə daimi (301)
   * yönləndirmə verilir ki, indeks çəkisi ana səhifədəki layihələr bölməsinə
   * keçsin. Fragment yalnız istifadəçi üçündür — axtarış sistemi onu nəzərə
   * almır və hədəfi ana səhifə kimi oxuyur.
   */
  async redirects() {
    const removed = ["cyber-mine", "reform-mydata"];
    const locales = ["az", "en", "ru"];

    return locales.flatMap((locale) =>
      removed.map((slug) => ({
        source: `/${locale}/projects/${slug}`,
        destination: `/${locale}#projects`,
        permanent: true,
      })),
    );
  },
};

export default nextConfig;
