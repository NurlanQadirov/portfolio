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
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
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
