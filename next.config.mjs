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
};

export default nextConfig;
