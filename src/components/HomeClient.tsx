'use client';

import React, { useEffect, useRef, type RefObject } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { ArrowUpRight, ChevronRight, Code2, Github, Linkedin, Mail } from 'lucide-react';
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_E164,
  WHATSAPP_URL,
  person,
  projects,
  skills,
  type Project,
} from '@/data/site';
import type { Locale } from '@/i18n/config';
import type { ChromeDict, HomeDict } from '@/i18n/slices';
import { SiteFooter, SiteHeader } from '@/components/SiteChrome';
import { SERVICE_KEYS, paths } from '@/i18n/routes';

/**
 * Kartın hara aparacağı: case study varsa daxili səhifəyə, yoxsa birbaşa
 * canlı sayta. Daxili keçid üstünlük təşkil edir — istifadəçi saytda qalır
 * və layihə haqqında daha çox məlumat alır.
 */
const cardTarget = (project: Project, locale: Locale) =>
  project.caseStudy
    ? { href: paths.project(locale, project.caseStudy), external: false }
    : project.demoUrl
      ? { href: project.demoUrl, external: true }
      : null;

/**
 * Lüğət konteksti.
 *
 * Bütün bölmələr bir fayldadır, ona görə mətnləri hər komponentə prop kimi
 * ötürmək əvəzinə kontekstdən oxuyuruq — dizayn kodu toxunulmamış qalır.
 */
type Content = { dict: HomeDict; locale: Locale };
const ContentContext = React.createContext<Content | null>(null);
const useContent = (): Content => {
  const value = React.useContext(ContentContext);
  if (!value) throw new Error('ContentContext tapılmadı');
  return value;
};

// --- 2. Hero vizualı: orbital kompozisiya ---
// Token rəngləri — slate-950 / cyan-blue palitrası ilə eyni ailədən.
const tone = {
  comment: 'text-slate-600',
  keyword: 'text-blue-400',
  type: 'text-cyan-300',
  ident: 'text-slate-200',
  prop: 'text-slate-400',
  string: 'text-emerald-300',
  fn: 'text-cyan-400',
  punct: 'text-slate-500',
} as const;

/**
 * Şəkil fallback-ları.
 *
 * Diqqət: SSR-də <img> HTML parse olunan kimi yüklənməyə başlayır, ona görə
 * `error` hadisəsi React hidrasiyasından ƏVVƏL baş verə bilər — belə halda
 * `onError` heç vaxt çağrılmır. Buna görə mount-da `complete && naturalWidth === 0`
 * yoxlaması ilə eyni fallback-ı bir daha tətbiq edirik.
 */
const swapToLogo = (el: HTMLImageElement) => {
  if (el.dataset.fallback) return;
  el.dataset.fallback = '1';
  el.src = '/icon.png';
};

/**
 * Orbit nüvəsi üçün zəncirvari foto axtarışı: `/me.webp` → `/me.png` →
 * `/me.jpg` → `/me.jpeg` → son olaraq "N" loqosu. Beləliklə foto hansı
 * formatda qeyd olunub olunsun, kod dəyişmədən tapılır — yalnız faylı
 * `public/` qovluğuna `me.<uzantı>` adı ilə atmaq kifayətdir.
 *
 * `me.webp` ilk sıradadır: nüvə ekranda ~150px-dir, ona görə 384×384 kvadrat
 * WebP (~10 KB) retina üçün də kifayətdir. Orijinal `me.png` 462 KB idi və
 * mobil şəbəkədə ilk ekranın ən ağır resursu məhz o idi. Fotonu dəyişəndə
 * `me.webp`-ni də yenidən yaradın, yoxsa köhnə foto görünməyə davam edər.
 */
const HERO_PHOTO_CANDIDATES = ['/me.webp', '/me.png', '/me.jpg', '/me.jpeg'];
const advanceHeroPhoto = (el: HTMLImageElement) => {
  const step = Number(el.dataset.step ?? '0');
  const next = HERO_PHOTO_CANDIDATES[step + 1];
  if (next) {
    el.dataset.step = String(step + 1);
    el.src = next;
  } else {
    swapToLogo(el);
  }
};

const showGradientFallback = (el: HTMLImageElement) => {
  if (el.dataset.fallback) return;
  el.dataset.fallback = '1';
  el.style.display = 'none';
  el.parentElement?.classList.add('bg-gradient-to-br', 'from-slate-800', 'to-slate-900');
};

const useImageFallback = (
  ref: RefObject<HTMLImageElement>,
  onBroken: (el: HTMLImageElement) => void,
) => {
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) onBroken(el);
  }, [ref, onBroken]);
};

// Mərkəzi nüvə. `public/me.{png,jpg,jpeg}` varsa fotonuz göstərilir; yoxdursa
// səssizcə "N" loqosuna keçir — foto əlavə edildiyi an kod dəyişmədən yüksəlir.
const OrbitCore = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  useImageFallback(imgRef, advanceHeroPhoto);

  return (
    <div className="absolute inset-[34%]">
      <div aria-hidden="true" className="absolute -inset-5 rounded-full bg-cyan-500/25 blur-2xl" />
      <div className="relative w-full h-full rounded-full overflow-hidden border border-cyan-400/30 bg-slate-900 shadow-2xl shadow-cyan-950/60">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={HERO_PHOTO_CANDIDATES[0]}
          width={384}
          height={384}
          decoding="async"
          alt={`${person.name} — ${person.jobTitle}`}
          className="w-full h-full object-cover"
          onError={(e) => advanceHeroPhoto(e.currentTarget)}
        />
        {/* üstdən incə işıq keçidi ki, nüvə "yastı" görünməsin */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-transparent to-cyan-400/10"
        />
      </div>
    </div>
  );
};

/**
 * Bir orbit halqası: konteynerin mərkəzindən `radius` faiz məsafədə çipləri
 * bərabər paylayır və hamısını birlikdə fırladır. Çipin öz içindəki element
 * əks istiqamətdə eyni sürətlə fırlanır ki, yazı həmişə düz qalsın.
 */
const OrbitRing = ({
  radius,
  duration,
  items,
  reverse = false,
}: {
  radius: number;
  duration: number;
  items: string[];
  reverse?: boolean;
}) => {
  // CSS animasiyası: kompozitor axınında işləyir, JS gözləmir. `motion-safe`
  // "hərəkəti azalt" seçilibsə fırlanmanı tamamilə söndürür.
  const ring = reverse ? 'motion-safe:animate-orbit-reverse' : 'motion-safe:animate-orbit';
  const chip = reverse ? 'motion-safe:animate-orbit' : 'motion-safe:animate-orbit-reverse';
  const spin = { animationDuration: `${duration}s` };

  return (
    <div className={`absolute inset-0 ${ring}`} style={spin}>
      {items.map((label, i) => {
        const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2;
        return (
          <div
            key={label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${50 + radius * Math.cos(angle)}%`,
              top: `${50 + radius * Math.sin(angle)}%`,
            }}
          >
            <span
              className={`block rounded-full border border-slate-700 bg-slate-900/90 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 font-mono text-[10px] sm:text-[11px] text-slate-300 whitespace-nowrap shadow-lg shadow-slate-950/60 ${chip}`}
              style={spin}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

// Orbitin üstünə düşən kiçik kod kartı — kompozisiyaya dərinlik və qat verir.
const FLOATING_CODE: React.ReactNode[] = [
  <>
    <span className={tone.keyword}>const</span> <span className={tone.ident}>nurlan</span>
    <span className={tone.punct}>: </span>
    <span className={tone.type}>Engineer</span>
    <span className={tone.punct}> = {'{'}</span>
  </>,
  <>
    <span className={tone.prop}>  stack</span>
    <span className={tone.punct}>: [</span>
    <span className={tone.string}>&quot;Next.js&quot;</span>
    <span className={tone.punct}>, </span>
    <span className={tone.string}>&quot;TS&quot;</span>
    <span className={tone.punct}>],</span>
  </>,
  <>
    <span className={tone.prop}>  focus</span>
    <span className={tone.punct}>: </span>
    <span className={tone.string}>&quot;performance&quot;</span>
    <span className={tone.punct}>,</span>
  </>,
  <>
    <span className={tone.punct}>{'};'}</span>
  </>,
];

/**
 * Orbitin üstünə düşən kod kartı.
 *
 * Bütün ölçülər `cqw` — yəni orbital konteynerin eninin faizi. Əvvəl kart
 * sabit piksellə (`w-[264px]`, `text-[11px]`) qurulmuşdu; kompozisiya ekran
 * hündürlüyünə görə kiçiləndə kart kiçilmirdi və mərkəzdəki fotonun üstünə
 * çıxırdı. İndi kart kompozisiya ilə birlikdə miqyaslanır, ona görə foto ilə
 * arasındakı məsafə hər ekran ölçüsündə eyni qalır.
 *
 * İstinad ölçüsü konteyner 460px olanda əvvəlki dizaynla eynidir:
 * 57cqw ≈ 264px, 2.4cqw ≈ 11px, 4.3cqw ≈ 20px.
 */
const FloatingCodeCard = () => (
  <m.div
    initial={{ opacity: 0, y: 24, rotate: -8 }}
    animate={{ opacity: 1, y: 0, rotate: -5 }}
    transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="hidden lg:block absolute -left-[6cqw] -bottom-[6cqw] z-20 w-[57cqw] rounded-[2.6cqw] border border-slate-800 bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-slate-950/80"
  >
    <div className="flex items-center gap-[1.1cqw] px-[2.6cqw] py-[1.7cqw] border-b border-slate-800">
      <span className="w-[1.7cqw] h-[1.7cqw] rounded-full bg-slate-700" />
      <span className="w-[1.7cqw] h-[1.7cqw] rounded-full bg-slate-700" />
      <span className="w-[1.7cqw] h-[1.7cqw] rounded-full bg-slate-700" />
      <span className="ml-[1.7cqw] font-mono text-[2.2cqw] text-slate-500">engineer.ts</span>
    </div>
    <pre className="px-[2.6cqw] py-[2.6cqw] font-mono text-[2.4cqw] leading-[4.3cqw] overflow-x-auto">
      <code>
        {FLOATING_CODE.map((line, i) => (
          <m.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 + i * 0.07, duration: 0.3 }}
            className="block whitespace-pre"
          >
            {line}
          </m.span>
        ))}
      </code>
    </pre>
  </m.div>
);

const HeroVisual = () => {
  return (
    <div className="relative w-full max-w-[min(420px,80vw)] sm:max-w-[min(460px,52vh)] mx-auto aspect-square [container-type:inline-size] motion-safe:animate-pop-in">
      {/* nüvədən yayılan işıq */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_65%)]"
      />

      {/* statik halqalar — çiplərin qaçdığı "relslər" */}
      <div aria-hidden="true" className="absolute inset-[10%] rounded-full border border-slate-800" />
      <div aria-hidden="true" className="absolute inset-[23%] rounded-full border border-slate-800/70" />
      <div aria-hidden="true" className="absolute inset-[34%] rounded-full border border-cyan-500/20" />

      {/* fırlanan tech çipləri */}
      <OrbitRing radius={40} duration={46} items={['React', 'Node.js', 'Vite']} />
      <OrbitRing radius={27} duration={34} reverse items={['Next.js', 'TypeScript', 'Tailwind']} />

      <OrbitCore />
      <FloatingCodeCard />
    </div>
  );
};

// Hero-nun altındakı hərəkətli lent. Boşluğu dolduran, eyni zamanda
// real məlumat daşıyan element — siyahı `data/site.ts`-dəki `skills`-dən gəlir.
const StackTicker = () => {
  const items = [...skills];

  return (
    <div className="absolute inset-x-0 bottom-0 border-t border-slate-900 bg-slate-950/70 backdrop-blur-sm overflow-hidden">
      <div className="flex w-max py-3.5 motion-safe:animate-marquee">
        {/*
          İki eyni qrup. Boşluq qrupun İÇİNDƏ (`gap`) və sonunda (`pr-10`) olduğu
          üçün qrupun eni bir tam addıma bərabərdir — yəni `-50%` sürüşmə dəqiq
          bir qrup qədər olur və lent qırılmadan təkrarlanır. Sadəcə siyahını iki
          dəfə düzsək, sürüşmə yarım boşluq qədər sürüşərdi.
        */}
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-10 pr-10" aria-hidden={copy === 1}>
            {items.map((skill) => (
              <span
                key={skill}
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 3. Hero Hissəsi ---
const Hero = () => {
  const { dict } = useContent();
  // Yüklənmə ekranı yoxdur: animasiyalar ilk rəsmlə, qısa stagger ilə başlayır.
  // CSS-dədir ki, mətn JS hidrasiyasını gözləmədən görünsün (bax: tailwind.config).
  const reveal = (delay: number) => ({ style: { animationDelay: `${delay}s` } });

  return (
    /*
      Hündürlüyə həssas hero.

      `min-h-screen` + sabit `pt-32/pb-32` qısa ekranlarda (məs. 1536×776 —
      Windows 125% miqyasında tipik noutbuk) məzmunu ilk ekrana sığdırmırdı:
      yalnız padding 256px yeyirdi, başlıq isə beş sətir alırdı. İndi həm
      padding, həm tipografiya, həm də şaquli boşluqlar `vh`-ə bağlıdır —
      ekran alçaldıqca hamısı birlikdə yığılır, hündür ekranda isə əvvəlki
      ölçülərinə qayıdır. `svh` mobil brauzerin gizlənən paneli üçündür.
    */
    <section className="relative overflow-hidden bg-slate-950 min-h-[100svh] flex items-center pt-[clamp(6.5rem,11vh,9rem)] pb-[clamp(4.75rem,8vh,8rem)]">
      {/* Arxa fon.
          Böyük bulanıq rəng ləkələri ("aurora" blob) burada YOXDUR — məhz onlar
          template hissini yaradırdı. Boşluq rənglə deyil, struktur ilə doldurulur:
          nöqtəli matris + rəngsiz zəif işıq + dənəvərlik. */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* nöqtəli matris — xəttli şəbəkədən daha az nəzərəçarpan, daha "texniki" */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,#20202A_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_45%,transparent_100%)]" />
        {/* rəngsiz işıq: forma verir, amma heç bir rəng çaları qatmır */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[560px] bg-[radial-gradient(ellipse_at_top,rgba(237,237,236,0.05),transparent_70%)]" />
        {/* çox incə dənəvərlik — "rəqəmsal düzlüyü" qırır */}
        <div
          className="absolute inset-0 opacity-[0.16] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Redaksiya xətkeşləri — səhifəyə "tərtibat" hissi verir */}
        <div aria-hidden="true" className="hidden lg:block absolute inset-y-0 left-0 w-px bg-slate-800" />
        <div aria-hidden="true" className="hidden lg:block absolute inset-y-0 right-0 w-px bg-slate-800" />

        <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-[clamp(2.5rem,6vh,4rem)] lg:gap-10 items-center">
          {/* Sol sütun — mətn */}
          <div className="text-center lg:text-left">
            {/* Texniki metadata sətri — boşluğu məna ilə doldurur */}
            <div
              {...reveal(0)}
              className="motion-safe:animate-rise hidden lg:flex items-center gap-3 mb-[clamp(1rem,2.4vh,2rem)] font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600"
            >
              <span>01</span>
              <span className="w-10 h-px bg-slate-700" />
              <span>{dict.hero.metaLine}</span>
            </div>

            <div
              {...reveal(0.05)}
              className="motion-safe:animate-rise inline-flex items-center gap-2 px-4 py-[clamp(0.375rem,1vh,0.5rem)] rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-[clamp(0.875rem,1.8vh,1.5rem)] font-mono text-sm"
            >
              <Code2 size={16} /> {dict.hero.badge}
            </div>

            <h1
              {...reveal(0.12)}
              className="motion-safe:animate-settle font-display font-normal text-paper text-[min(clamp(2.3rem,1.1rem+3.2vw,4.25rem),7vh)] leading-[1.05] tracking-[-0.02em] mb-[clamp(1rem,2.4vh,1.75rem)] text-balance lg:text-pretty"
            >
              {dict.hero.titleLead}{' '}
              <em className="italic text-cyan-300">{dict.hero.titleAccent}</em>
              <br />
              {dict.hero.titleTail}
            </h1>

            <p
              {...reveal(0.2)}
              className="motion-safe:animate-rise text-slate-400 text-[clamp(1rem,1.9vh,1.125rem)] max-w-xl mx-auto lg:mx-0 mb-[clamp(1.25rem,3vh,2.5rem)] leading-relaxed"
            >
              {dict.hero.lede}
            </p>

            <div
              {...reveal(0.28)}
              className="motion-safe:animate-rise flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a href="#projects" className="px-8 py-[clamp(0.75rem,1.7vh,1rem)] bg-paper hover:bg-white text-slate-950 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group">
                {dict.hero.ctaProjects} <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={person.github} target="_blank" rel="noopener noreferrer" className="px-8 py-[clamp(0.75rem,1.7vh,1rem)] border border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                {dict.hero.ctaGithub} <Github size={18}/>
              </a>
            </div>

            {/* Kimlik sətri — ad və məkan düz mətn olaraq qalır (crawler üçün). */}
            <div
              {...reveal(0.36)}
              className="motion-safe:animate-rise mt-[clamp(1.25rem,2.6vh,2rem)] flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-3 gap-y-2 text-sm text-slate-500"
            >
              <span className="inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {dict.hero.available}
              </span>
              <span className="hidden sm:inline text-slate-700">•</span>
              <span>
                <strong className="font-medium text-slate-300">{person.name}</strong> — {person.locality}, {person.countryName}
              </span>
            </div>
          </div>

          {/* Sağ sütun — orbital vizual (mobildə mətnin altına düşür) */}
          <HeroVisual />
        </div>
      </div>

      <StackTicker />
    </section>
  );
};


// --- 4. Ortaq bölmə elementləri ---

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

// Nömrələnmiş redaksiya başlığı — hero-dakı "01 —— BAKI" sətri ilə eyni dil.
const SectionIntro = ({
  index,
  label,
  title,
  lede,
  id,
}: {
  index: string;
  label: string;
  title: string;
  lede?: string;
  id: string;
}) => (
  <m.div {...fadeUp} className="mb-14 md:mb-20">
    <div className="flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600">
      <span>{index}</span>
      <span className="w-10 h-px bg-slate-700" />
      <span>{label}</span>
    </div>
    <h2
      id={id}
      className="font-display font-normal text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-[-0.02em] text-paper max-w-3xl text-balance"
    >
      {title}
    </h2>
    {lede && (
      <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-2xl">{lede}</p>
    )}
  </m.div>
);

// Spesifikasiya cədvəlinin bir sətri — nazik xətlərlə, mono etiketlə.
const SpecRow = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="grid grid-cols-[6.5rem_1fr] sm:grid-cols-[10rem_1fr] gap-4 py-4 border-b border-slate-800">
    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-600 pt-1">
      {label}
    </dt>
    <dd className="text-slate-300">{children}</dd>
  </div>
);

// --- 5. Haqqımda ---
const About = () => {
  const { dict } = useContent();

  return (
  <section
    id="about"
    aria-labelledby="about-heading"
    className="relative bg-slate-950 px-6 py-28 md:py-36 border-t border-slate-900"
  >
    <div className="max-w-7xl mx-auto">
      <SectionIntro
        index="02"
        label={dict.about.label}
        title={dict.about.title}
        id="about-heading"
      />

      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
        {/* Sol: bəyanat + stack */}
        <m.div {...fadeUp}>
          <p className="font-display text-2xl md:text-3xl leading-[1.4] text-paper mb-8">
            {dict.about.statement}
          </p>
          <p className="text-slate-400 leading-relaxed mb-12">
            {dict.about.body}
          </p>

          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 mb-5">
            {dict.about.stackLabel}
          </div>
          <p className="font-mono text-sm text-slate-400 leading-7">
            {skills.join('  ·  ')}
          </p>
        </m.div>

        {/* Sağ: spesifikasiya cədvəli */}
        <m.dl {...fadeUp} className="border-t border-slate-800 self-start w-full">
          <SpecRow label={dict.about.spec.role}>{person.jobTitle}</SpecRow>
          <SpecRow label={dict.about.spec.location}>{dict.about.spec.locationValue}</SpecRow>
          <SpecRow label={dict.about.spec.experience}>{dict.about.spec.experienceValue}</SpecRow>
          <SpecRow label={dict.about.spec.projects}>
            {projects.length}+ {dict.about.spec.projectsValue}
          </SpecRow>
          <SpecRow label={dict.about.spec.languages}>{dict.about.spec.languagesValue}</SpecRow>
          <SpecRow label={dict.about.spec.status}>
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {dict.about.spec.statusValue}
            </span>
          </SpecRow>
        </m.dl>
      </div>
    </div>
  </section>
  );
};

// --- 6. Layihələr ---
const num = (n: number) => String(n).padStart(2, '0');

// Şəkil qutusu — sınıq şəkil halında səssizcə gradientə keçir.
const ProjectImage = ({
  project,
  className = '',
}: {
  project: Project;
  className?: string;
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  useImageFallback(imgRef, showGradientFallback);

  return (
    <div
      className={`relative overflow-hidden rounded-md border border-slate-800 bg-slate-900 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={project.image}
        alt={`${project.title} — ${project.category} layihəsi, ${person.name} tərəfindən hazırlanıb`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        onError={(e) => showGradientFallback(e.currentTarget)}
      />
    </div>
  );
};

// İlk layihə böyük formatda — bərabər ölçülü kartlar şəbəkəsi iyerarxiyasız
// göründüyü üçün "template" hissi verir.
const FeaturedProject = ({ project }: { project: Project }) => {
  const { dict, locale } = useContent();
  const target = cardTarget(project, locale);
  const isLive = Boolean(target);
  const Wrapper = isLive ? 'a' : 'div';

  return (
    <m.article {...fadeUp} className="border-t border-slate-800 pt-10">
      <Wrapper
        {...(target
          ? {
              href: target.href,
              ...(target.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {}),
            }
          : {})}
        className="group grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
      >
        <ProjectImage project={project} className="aspect-[16/10]" />

        <div>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 mb-5">
            <span>{num(1)}</span>
            <span className="w-8 h-px bg-slate-700" />
            <span>{project.category}</span>
          </div>

          <h3 className="font-display font-normal text-3xl md:text-4xl leading-[1.15] tracking-[-0.01em] text-paper mb-5">
            {project.title}
          </h3>

          <p className="text-slate-400 leading-relaxed mb-6">{dict.projects.desc[project.id]}</p>

          <p className="font-mono text-xs text-slate-600 mb-8">
            {project.tech.join('  ·  ')}
          </p>

          {isLive ? (
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-slate-300 group-hover:text-paper transition-colors">
              {project.caseStudy ? dict.caseStudies.label : dict.projects.viewSite}
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          ) : (
            <span className="inline-flex items-center font-mono text-xs uppercase tracking-[0.18em] text-slate-600">
              {dict.projects.comingSoon}
            </span>
          )}
        </div>
      </Wrapper>
    </m.article>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { dict, locale } = useContent();
  const target = cardTarget(project, locale);
  const Wrapper = target ? 'a' : 'div';

  return (
    <m.article {...fadeUp}>
      <Wrapper
        {...(target
          ? {
              href: target.href,
              ...(target.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {}),
            }
          : {})}
        className="group block"
      >
        <ProjectImage project={project} className="aspect-[4/3] mb-6" />

        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-600 mb-3">
          <span>{num(index)}</span>
          <span className="w-6 h-px bg-slate-800" />
          <span>{project.category}</span>
        </div>

        <h3 className="font-display font-normal text-xl md:text-2xl text-paper mb-3 transition-colors group-hover:text-cyan-200">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {dict.projects.desc[project.id]}
        </p>

        <p className="font-mono text-[11px] text-slate-600">
          {project.tech.join('  ·  ')}
        </p>
      </Wrapper>
    </m.article>
  );
};

const Projects = () => {
  const { dict } = useContent();
  const [featured, ...rest] = projects;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative bg-slate-950 px-6 py-28 md:py-36 border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <SectionIntro
          index="04"
          label={dict.projects.label}
          title={dict.projects.title}
          lede={dict.projects.lede}
          id="projects-heading"
        />

        <FeaturedProject project={featured} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 mt-20 pt-14 border-t border-slate-800">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Ana səhifədəki xidmətlər bölməsi.
 *
 * Qiymətlər qəsdən burada göstərilmir — onlar `/services` və hər xidmətin öz
 * səhifəsindədir. Ana səhifə eyni anda işəgötürənin də gördüyü səhifədir, ona
 * görə burada xidmətin adı və bir sətirlik izahı kifayətdir.
 */
const Services = () => {
  const { dict, locale } = useContent();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-slate-950 px-6 py-28 md:py-36 border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <SectionIntro
          index="03"
          label={dict.services.label}
          title={dict.services.title}
          lede={dict.services.lede}
          id="services-heading"
        />

        <div className="grid md:grid-cols-2 gap-x-10 border-t border-slate-800">
          {SERVICE_KEYS.map((key, i) => {
            const page = dict.services.pages[key];
            return (
              <m.a
                key={key}
                {...fadeUp}
                href={paths.service(locale, key)}
                className="group block py-9 border-b border-slate-800"
              >
                <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-600 mb-4">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <span className="w-8 h-px bg-slate-800" />
                </div>

                <h3 className="font-display font-normal text-2xl md:text-3xl text-paper mb-3 transition-colors group-hover:text-cyan-200">
                  {page.name}
                </h3>

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
              </m.a>
            );
          })}
        </div>

        {/* Suallar səhifəsi ayrıca durur — burada təkrarlanmır, sadəcə keçid verilir. */}
        <m.div {...fadeUp} className="mt-12">
          <a
            href={paths.faq(locale)}
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 hover:text-paper transition-colors"
          >
            {dict.faq.title}
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </m.div>
      </div>
    </section>
  );
};

// --- 7. Əlaqə ---
const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.305-1.654a11.9 11.9 0 0 0 5.734 1.459h.005c6.582 0 11.941-5.335 11.944-11.893a11.8 11.8 0 0 0-3.468-8.463" />
  </svg>
);

const Contact = () => {
  const { dict } = useContent();

  return (
  <section
    id="contact"
    aria-labelledby="contact-heading"
    className="relative bg-slate-950 px-6 py-28 md:py-36 border-t border-slate-900"
  >
    <div className="max-w-7xl mx-auto">
      <SectionIntro
        index="05"
        label={dict.contact.label}
        title={dict.contact.title}
        lede={dict.contact.lede}
        id="contact-heading"
      />

      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
        {/*
          Bütün əlaqə məlumatları TƏK yerdə, düz mətn olaraq — həm insan oxuyur,
          həm də crawler. `<address>` semantik olaraq məhz bunun üçündür.
        */}
        <m.address {...fadeUp} className="not-italic">
          <dl className="border-t border-slate-800">
            <SpecRow label={dict.contact.spec.name}>
              <span className="text-paper">{person.name}</span>
            </SpecRow>
            <SpecRow label={dict.contact.spec.role}>{person.jobTitle}</SpecRow>
            <SpecRow label={dict.contact.spec.location}>
              {person.locality}, {person.countryName}
            </SpecRow>
            <SpecRow label={dict.contact.spec.whatsapp}>
              <a
                href={`tel:${PHONE_E164}`}
                dir="ltr"
                className="text-paper hover:text-cyan-200 transition-colors"
              >
                {PHONE_DISPLAY}
              </a>
            </SpecRow>
            <SpecRow label={dict.contact.spec.email}>
              <a
                href={`mailto:${EMAIL}`}
                className="text-paper hover:text-cyan-200 transition-colors break-words"
              >
                {EMAIL}
              </a>
            </SpecRow>
            <SpecRow label={dict.contact.spec.network}>
              <span className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-paper transition-colors"
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
                <a
                  href={person.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-paper transition-colors"
                >
                  <Github size={15} /> GitHub
                </a>
              </span>
            </SpecRow>
          </dl>
        </m.address>

        {/* Sağ: çağırış */}
        <m.div {...fadeUp} className="lg:pt-4">
          <p className="font-display text-2xl md:text-3xl leading-[1.4] text-paper mb-10">
            {dict.contact.statement}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 bg-paper hover:bg-white text-slate-950 rounded-lg font-semibold transition-all flex items-center justify-center gap-2.5"
            >
              <WhatsAppIcon /> {dict.contact.ctaWhatsapp}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="px-7 py-4 border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-paper rounded-lg font-semibold transition-all flex items-center justify-center gap-2.5"
            >
              <Mail size={17} /> {dict.contact.ctaEmail}
            </a>
          </div>
        </m.div>
      </div>
    </div>
  </section>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function HomeClient({
  dict,
  chrome,
  locale,
}: Content & { chrome: ChromeDict }) {
  return (
    // `LazyMotion` + `m`: framer-motion-un tam `motion` paketi əvəzinə yalnız
    // istifadə olunan animasiya xüsusiyyətləri yüklənir — mobil JS həcmi kiçilir.
    // `strict` təsadüfən `motion.*` yazılsa xəta verir ki, qənaət itməsin.
    <LazyMotion features={domAnimation} strict>
      <ContentContext.Provider value={{ dict, locale }}>
        <div id="top" className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30">
          <SiteHeader dict={chrome} locale={locale} />

          <main>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Contact />
          </main>

          <SiteFooter dict={chrome} locale={locale} />
        </div>
      </ContentContext.Provider>
    </LazyMotion>
  );
}
