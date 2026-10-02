import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Redaksiya serifi — yalnız başlıqlar üçün.
        display: ["var(--font-display)", "Georgia", ...defaultTheme.fontFamily.serif],
        // Kursiv ayrıca ailədir ki, preload-suz yüklənsin (bax: [locale]/layout.tsx).
        "display-italic": ["var(--font-display-italic)", "Georgia", ...defaultTheme.fontFamily.serif],
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
      },
      /**
       * İlk ekranın animasiyaları CSS-dədir, framer-motion-da yox.
       *
       * framer-motion `initial={{ opacity: 0 }}` SSR HTML-ə `opacity:0` yazır və
       * element yalnız JS yüklənib hidrasiya bitəndən sonra görünür. Mobil
       * şəbəkədə bu, başlığın (LCP elementi) saniyələrlə gizli qalması demək
       * idi. CSS animasiyası isə ilk rəsmlə birlikdə başlayır — JS gözləmir.
       * `both` doldurma rejimi gecikmə müddətində başlanğıc vəziyyəti saxlayır.
       */
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "none" },
        },
        /**
         * `rise`-ın şəffaflıqsız variantı — yalnız LCP elementi (hero başlığı)
         * üçün. Chrome `opacity:0` olan elementi LCP kimi saymır, yəni fade
         * başlığın LCP anını animasiya başlayana qədər gecikdirir. Sürüşmə isə
         * element ilk rəsmdən görünən qalır.
         */
        settle: {
          from: { transform: "translateY(16px)" },
          to: { transform: "none" },
        },
        "drop-in": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "none" },
        },
        "pop-in": {
          from: { opacity: "0", transform: "scale(0.94)" },
          to: { opacity: "1", transform: "none" },
        },
        orbit: { to: { transform: "rotate(360deg)" } },
        "orbit-reverse": { to: { transform: "rotate(-360deg)" } },
        marquee: { to: { transform: "translateX(-50%)" } },
      },
      animation: {
        rise: "rise 0.5s cubic-bezier(0.22,1,0.36,1) both",
        settle: "settle 0.5s cubic-bezier(0.22,1,0.36,1) both",
        "drop-in": "drop-in 0.5s cubic-bezier(0.22,1,0.36,1) both",
        "pop-in": "pop-in 0.9s cubic-bezier(0.22,1,0.36,1) both",
        orbit: "orbit 46s linear infinite",
        "orbit-reverse": "orbit-reverse 46s linear infinite",
        marquee: "marquee 50s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Saf ağ əvəzinə isti-neytral kağız tonu — ekranda daha yumşaq oxunur.
        paper: "#EDEDEC",
        /**
         * Slate-in tünd pillələri neytrallaşdırılıb. Tailwind-in öz slate-i
         * mavi çalarlıdır ("plastik" hiss verən hissə məhz odur); burada onu
         * mərkəzi olaraq yenidən kökləyirik ki, bütün mövcud `slate-*`
         * sinifləri saytda avtomatik yenilənsin.
         */
        /**
         * Cyan neon deyil, "soyuq polad" kimi köklənib. Parlaq cyan tünd fonda
         * template hissi verən ikinci böyük siqnaldır; burada onu bir dəfəyə
         * doyumsuzlaşdırırıq və saytdakı bütün `cyan-*` sinifləri yenilənir.
         * Yeganə doymuş rəng nöqtəsi loqonuz olaraq qalır.
         */
        cyan: {
          50: "#F3F6F7",
          100: "#E4EBED",
          200: "#CCD9DD",
          300: "#B1C4CB",
          400: "#93A9B2",
          500: "#748A95",
          600: "#5A6E79",
          700: "#43535C",
          800: "#2F3B42",
          900: "#20292E",
          950: "#151B1F",
        },
        slate: {
          ...colors.slate,
          200: "#DCDCE1",
          300: "#C2C2CB",
          400: "#9797A4",
          500: "#6E6E7C",
          600: "#4B4B57",
          700: "#2F2F3A",
          800: "#20202A",
          900: "#131319",
          950: "#0B0B0F",
        },
      },
    },
  },
  plugins: [],
};
export default config;
