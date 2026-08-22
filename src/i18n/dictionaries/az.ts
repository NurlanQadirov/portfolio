import type { ServiceKey } from "../routes";

export type QA = { q: string; a: string };

export type ServicePage = {
  /** `<title>` — axtarış nəticəsində görünən sətir. */
  metaTitle: string;
  metaDescription: string;
  /** Kartda və siyahıda görünən qısa ad. */
  name: string;
  /** Kart üçün bir sətirlik izah. */
  tagline: string;
  h1: string;
  intro: string;
  /** "Nə daxildir" siyahısı. */
  includes: string[];
  /** İş prosesi addımları. */
  steps: { title: string; body: string }[];
  faq: QA[];
};

export type CaseStudyContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Səhifənin başındakı bir cümləlik xülasə. */
  summary: string;
  client: string;
  /**
   * Aşağıdakılar YALNIZ Nurlanın bildiyi məlumatlardır. Boş sətir qoyulubsa
   * həmin bölmə səhifədə ümumiyyətlə render olunmur — uydurma mətn çıxmır.
   */
  role: string;
  problem: string;
  results: string;
  /** Saytda birbaşa müşahidə olunan funksiyalar. */
  features: string[];
  /** Texniki qərar və səbəbi — ekspertizanı göstərən hissə. */
  decisions: { title: string; body: string }[];
  /**
   * Qat-qat texniki quruluş. YALNIZ full-stack layihələrdə doldurulur —
   * frontend işlərində boş qalır və bölmə səhifədə render olunmur.
   *
   * Məqsəd: "full-stack developer" iddiasını cümlə ilə yox, konkret qatlarla
   * təsdiqləmək. AI modelləri stack sualına cavab verərkən məhz bu siyahını
   * oxuyur — `Next.js, Tailwind` üçlüyü ilə admin paneli olan tam tətbiq
   * arasındakı fərq başqa cür görünmür.
   */
  architecture?: { layer: string; body: string }[];
  /**
   * Layihəyə aid konkret suallar.
   *
   * `FAQPage` struktur datası kimi də verilir — AI cavabına düşməyin ən
   * birbaşa formatı budur, çünki sual-cavab cütü modelin axtardığı formadadır.
   * Boş qalarsa nə bölmə, nə sxema qovşağı yaranır.
   */
  faq?: QA[];
};

export type Dictionary = {
  meta: {
    titleDefault: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
  };
  nav: {
    about: string;
    services: string;
    projects: string;
    faq: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    mainNav: string;
  };
  hero: {
    metaLine: string;
    badge: string;
    titleLead: string;
    titleAccent: string;
    titleTail: string;
    lede: string;
    ctaProjects: string;
    ctaGithub: string;
    available: string;
  };
  about: {
    label: string;
    title: string;
    statement: string;
    body: string;
    stackLabel: string;
    spec: {
      role: string;
      location: string;
      locationValue: string;
      experience: string;
      experienceValue: string;
      projects: string;
      projectsValue: string;
      languages: string;
      languagesValue: string;
      status: string;
      statusValue: string;
    };
  };
  projects: {
    label: string;
    title: string;
    lede: string;
    viewSite: string;
    comingSoon: string;
    /** Layihə id-si → azərbaycanca təsvir. */
    desc: Record<number, string>;
  };
  services: {
    label: string;
    title: string;
    lede: string;
    seeMore: string;
    metaTitle: string;
    metaDescription: string;
    pages: Record<ServiceKey, ServicePage>;
    /** Xidmət səhifələrində ortaq başlıqlar. */
    includesHeading: string;
    stepsHeading: string;
    faqHeading: string;
    otherServices: string;
    priceHeading: string;
    priceNote: string;
    priceOnRequest: string;
  };
  faq: {
    label: string;
    title: string;
    lede: string;
    metaTitle: string;
    metaDescription: string;
    items: QA[];
  };
  contact: {
    label: string;
    title: string;
    lede: string;
    statement: string;
    ctaWhatsapp: string;
    ctaEmail: string;
    spec: {
      name: string;
      role: string;
      location: string;
      whatsapp: string;
      email: string;
      network: string;
    };
  };
  common: {
    backHome: string;
    breadcrumbHome: string;
  };
  caseStudies: {
    label: string;
    liveSite: string;
    featuresHeading: string;
    decisionsHeading: string;
    architectureHeading: string;
    faqHeading: string;
    problemHeading: string;
    resultsHeading: string;
    overviewHeading: string;
    clientLabel: string;
    roleLabel: string;
    stackLabel: string;
    metricLabels: Record<
      "lighthouseMobile" | "lighthouseDesktop" | "lcp" | "languages" | "pages",
      string
    >;
    /** Ümumi baxışdakı tarix sətrinin etiketi. */
    dateLabel: string;
    /**
     * Ay adları, yanvardan dekabra.
     *
     * `Intl` ilə formatlamaq əvəzinə açıq siyahı saxlanılır, çünki Azərbaycan
     * dili üçün ICU dəstəyi mühitdən mühitə dəyişir — burada nəticə hər yerdə
     * eynidir.
     */
    monthNames: string[];
    items: Record<number, CaseStudyContent>;
  };
};

const dictionary: Dictionary = {
  meta: {
    titleDefault:
      "Nurlan Qadirov — Bakıda Frontend & Full-Stack Developer",
    titleTemplate: "%s | Nurlan Qadirov",
    description:
      "Bakıda fəaliyyət göstərən Frontend & Full-Stack developer. React, Next.js və TypeScript ilə sürətli, təhlükəsiz e-ticarət və korporativ saytlar hazırlayıram.",
    keywords: [
      "veb sayt hazırlanması Bakı",
      "e-ticarət saytı hazırlanması",
      "frontend developer Bakı",
      "full stack developer Azərbaycan",
      "Next.js developer Azərbaycan",
      "React developer Bakı",
      "sayt hazırlayan freelancer",
      "korporativ sayt hazırlanması",
      "Nurlan Qadirov",
    ],
  },
  nav: {
    about: "Haqqımda",
    services: "Xidmətlər",
    projects: "Layihələr",
    faq: "Suallar",
    contact: "Əlaqə",
    openMenu: "Menyunu aç",
    closeMenu: "Menyunu bağla",
    mainNav: "Əsas naviqasiya",
  },
  hero: {
    metaLine: "BAKI 40.4093° N, 49.8671° E",
    badge: "Next.js & TypeScript Specialist",
    titleLead: "Mürəkkəb Veb Tətbiqlər",
    titleAccent: "Yaradan",
    titleTail: "Frontend & Full-Stack Mühəndis",
    lede:
      "TypeScript, React və Next.js ekosistemində ixtisaslaşmışam. Yüksək performanslı, təhlükəsiz və istifadəçi mərkəzli rəqəmsal həllər arxitekturası qururam.",
    ctaProjects: "Layihələrimə Bax",
    ctaGithub: "GitHub",
    available: "Yeni layihələr üçün açığam",
  },
  about: {
    label: "Haqqımda",
    title: "Təcrübə & Stack",
    statement:
      "2+ ildir ki, peşəkar səviyyədə frontend development ilə məşğulam.",
    body:
      "Hazırda kibertəhlükəsizlik şirkətində çalışıram — bu da mənə koda təkcə vizual deyil, həm də təhlükəsizlik və performans prizmasından yanaşmağı öyrətdi. Hər interfeysi eyni anda üç sualla qururam: sürətlidirmi, təhlükəsizdirmi, istifadəçi üçün aydındırmı.",
    stackLabel: "Stack",
    spec: {
      role: "Rol",
      location: "Məkan",
      locationValue: "Bakı, Azərbaycan — Remote & Ofis",
      experience: "Təcrübə",
      experienceValue: "2+ il",
      projects: "Layihə",
      projectsValue: "tamamlanmış",
      languages: "Dil",
      languagesValue: "Azərbaycan, İngilis, Rus",
      status: "Status",
      statusValue: "Yeni layihələr üçün açıq",
    },
  },
  projects: {
    label: "İşlər",
    title: "Seçilmiş Layihələr",
    lede:
      "React, Next.js, TypeScript və Tailwind CSS ilə hazırladığım e-ticarət, korporativ və məhsul saytları.",
    viewSite: "Sayta bax",
    comingSoon: "Link tezliklə",
    desc: {
      8: "Əl işi zərgərlik və təbii ipək kəlağayı satan lüks marka üçün Next.js ilə full-stack qurulmuş e-ticarət saytı. Üç dilli vitrin (AZ/EN/RU), jurnal bölməsi və brendin özünün idarə etdiyi admin panel — məhsul, kolleksiya və yazılar üçün.",
      9: "Bakıda eksklüziv B2B biznes klubu üçün full-stack üzvlük saytı. Çoxaddımlı müraciət forması, tədbir təqvimi və klubun tədbir, xəbər və gələn müraciətləri idarə etdiyi admin panel.",
      2: "Kibertəhlükəsizlik və İT konsaltinq şirkəti üçün korporativ sayt: dörd xidmət istiqaməti, mərhələli iş prosesi və müştəri rəyləri.",
      3: "Rəqəmsal transformasiya şirkəti üçün korporativ sayt: proqram təminatı, Cisco şəbəkə infrastrukturu, kibertəhlükəsizlik və İT konsaltinq istiqamətləri.",
      4: "360° biznes konsaltinq şirkəti üçün tək səhifəli təqdimat saytı — maliyyə, marketinq, hüquq, İT, HR və satınalma istiqamətləri.",
      6: "Veb development, kibertəhlükəsizlik, 1C optimizasiyası və hostinq xidmətləri təklif edən İT şirkəti üçün korporativ sayt. Dörd xidmət tab sistemində, iş prosesi, rəylər və FAQ akkordeonu.",
      7: "Restoran müştəriləri üçün sürətli rəqəmsal menyu.",
      10: "Bakıda lüks avtomobil icarəsi üçün üç dilli Next.js platforması: marka, kateqoriya və gündəlik büdcə üzrə filtr, hər avtomobilin texniki göstəriciləri, bloq və WhatsApp üzərindən sifariş axını.",
      11: "Data mərkəzi, kibertəhlükəsizlik və zəif axın sistemləri quran İT infrastruktur şirkəti üçün korporativ sayt: canlı sistem statusu paneli, dörd həll qrupunda 25-dən çox sistem və animasiyalı statistika.",
      12: "Kibertəhlükəsizlik mühəndisi üçün terminal estetikalı şəxsi portfolio: canlı log paneli, dörd iş təcrübəsi, üç qrupa bölünmüş texniki arsenal və doğrulama kodları olan sertifikat bölməsi.",
    },
  },
  services: {
    label: "Xidmətlər",
    title: "Nə iş görürəm",
    lede:
      "Fikirdən canlı sayta qədər bütün mərhələ: dizayn, kod, performans optimizasiyası və deploy.",
    seeMore: "Ətraflı",
    metaTitle: "Xidmətlər — veb sayt və e-ticarət hazırlanması",
    metaDescription:
      "Bakıda veb sayt hazırlanması, e-ticarət saytı, Next.js development və landing page xidmətləri. React, Next.js, TypeScript.",
    includesHeading: "Nə daxildir",
    stepsHeading: "İş prosesi",
    faqHeading: "Tez-tez verilən suallar",
    otherServices: "Digər xidmətlər",
    priceHeading: "Qiymət",
    priceNote: "Dəqiq qiymət layihənin həcmindən asılıdır — pulsuz qiymətləndirmə üçün yazın.",
    priceOnRequest: "Sorğu ilə",
    pages: {
      "web-development": {
        metaTitle: "Bakıda veb sayt hazırlanması — Next.js & React",
        metaDescription:
          "Bakıda fərdi kodla veb sayt hazırlanması. Next.js və React ilə sürətli, mobil uyğun, SEO hazır korporativ saytlar. Pulsuz qiymətləndirmə.",
        name: "Veb Sayt Hazırlanması",
        tagline: "Şablon deyil, sizin biznesinizə uyğun fərdi kod.",
        h1: "Bakıda veb sayt hazırlanması",
        intro:
          "Hazır şablon almaq asandır, amma şablon sizin biznesinizi bilmir: lazımsız kod gətirir, yavaş yüklənir, dəyişiklik istəyəndə hər şey sınır. Mən saytınızı sıfırdan, Next.js və TypeScript ilə yazıram — yalnız sizə lazım olan funksiyalar, təmiz struktur və gələcəkdə asan genişlənmə imkanı ilə.",
        includes: [
          "Fərdi dizayn — hazır şablon istifadə olunmur",
          "Mobil, planşet və desktop üçün tam uyğunlaşdırma",
          "Texniki SEO təməli: metadata, struktur data, sitemap, robots.txt",
          "Core Web Vitals üzrə performans optimizasiyası",
          "Çoxdilli struktur (AZ/EN/RU) — ehtiyac olarsa",
          "Admin panel və ya məzmun idarəetməsi — ehtiyac olarsa",
          "Vercel-də deploy və domen bağlanması",
        ],
        steps: [
          {
            title: "Söhbət və tələblər",
            body: "Biznesinizi, hədəf auditoriyanı və saytdan gözləntinizi dəqiqləşdiririk. Bu mərhələ pulsuzdur.",
          },
          {
            title: "Struktur və dizayn",
            body: "Səhifə strukturu, sonra vizual dizayn. Təsdiqinizdən sonra koda keçirik.",
          },
          {
            title: "Development",
            body: "Next.js ilə kodlaşdırma. Ara nəticələri canlı linkdə görürsünüz, rəy verirsiniz.",
          },
          {
            title: "Test və deploy",
            body: "Performans, mobil uyğunluq və SEO yoxlanışı, sonra öz domeninizdə canlıya çıxış.",
          },
        ],
        faq: [
          {
            q: "Sayt hazırlanması nə qədər vaxt aparır?",
            a: "Sadə korporativ sayt üçün adətən 1–2 həftə, funksionallığı çox olan layihələr üçün 3–6 həftə. Dəqiq müddəti tələbləri dəqiqləşdirdikdən sonra deyirəm.",
          },
          {
            q: "WordPress yoxsa fərdi kod — hansı daha yaxşıdır?",
            a: "Məzmunu tez-tez dəyişən bloq üçün WordPress məqbuldur. Amma sürət, təhlükəsizlik və fərdi funksionallıq lazımsa, Next.js ilə yazılmış sayt açıq şəkildə üstündür: daha sürətli yüklənir, plagin asılılığı və onlardan gələn təhlükəsizlik boşluqları yoxdur.",
          },
        ],
      },
      ecommerce: {
        metaTitle: "E-ticarət saytı hazırlanması Bakı — onlayn mağaza",
        metaDescription:
          "Bakıda e-ticarət saytı hazırlanması. Məhsul kataloqu, filtrlər, səbət, ödəniş entegrasiyası. Next.js ilə sürətli onlayn mağaza.",
        name: "E-ticarət Saytı",
        tagline: "Məhsul kataloqundan ödənişə qədər tam onlayn mağaza.",
        h1: "E-ticarət saytı hazırlanması",
        intro:
          "Onlayn mağazada hər saniyə gecikmə satışa çevrilməyən müştəri deməkdir. Mən e-ticarət saytlarını sürət prioriteti ilə qururam: məhsul səhifələri dərhal açılır, filtrlər gözləmə olmadan işləyir, səbət isə səhifə dəyişəndə itmir.",
        includes: [
          "Məhsul kataloqu, kateqoriyalar və axtarış",
          "Filtrləmə və çeşidləmə (qiymət, kateqoriya, xüsusiyyət)",
          "Səbət və sifariş prosesi",
          "Ödəniş sistemi entegrasiyası",
          "Admin panel — məhsul, qiymət və sifariş idarəetməsi",
          "Məhsul səhifələri üçün struktur data (Google-da qiymət və stok görünür)",
          "Çoxdilli və çoxvalyutalı struktur — ehtiyac olarsa",
        ],
        steps: [
          {
            title: "Kataloq strukturu",
            body: "Məhsul növləri, kateqoriyalar, filtr məntiqi və sifariş axını planlaşdırılır.",
          },
          {
            title: "Dizayn",
            body: "Məhsul kartı, məhsul səhifəsi, səbət və ödəniş ekranları — konversiyaya fokuslanmış şəkildə.",
          },
          {
            title: "Development və entegrasiya",
            body: "Frontend, admin panel və ödəniş sistemi qoşulur, test sifarişləri keçirilir.",
          },
          {
            title: "Yüklənmə və deploy",
            body: "Məhsulların ilk yüklənməsi, performans testi və canlıya çıxış.",
          },
        ],
        faq: [
          {
            q: "Ödəniş sistemi qoşula bilər?",
            a: "Bəli. Yerli bank ekvayringi və beynəlxalq ödəniş sistemləri qoşula bilər. Hansının uyğun olduğunu biznesinizin sənədlərinə və satış həcminə görə birlikdə seçirik.",
          },
          {
            q: "Məhsulları özüm əlavə edə biləcəyəm?",
            a: "Bəli — admin panel daxildir. Məhsul, qiymət, stok və şəkilləri kod bilmədən idarə edirsiniz.",
          },
        ],
      },
      nextjs: {
        metaTitle: "Next.js developer — freelance Next.js & React mütəxəssisi",
        metaDescription:
          "Freelance Next.js developer. App Router, SSR/ISR, TypeScript, performans optimizasiyası. Mövcud layihənizə qoşulma və ya sıfırdan qurulma.",
        name: "Next.js Development",
        tagline: "App Router, SSR, performans — dərin Next.js işi.",
        h1: "Next.js developer",
        intro:
          "Next.js-i şablondan istifadə etməklə deyil, necə işlədiyini bilərək istifadə edirəm: server və client komponent sərhədi, render strategiyası seçimi (SSG/ISR/SSR), keşləmə davranışı və bundle ölçüsü. Bu detallar saytın nə qədər sürətli olacağını müəyyən edir.",
        includes: [
          "Next.js App Router ilə sıfırdan qurulma",
          "Mövcud layihəyə qoşulma və ya Pages Router → App Router miqrasiyası",
          "Render strategiyası seçimi: statik, ISR və ya server-side",
          "Core Web Vitals optimizasiyası (LCP, CLS, INP)",
          "Struktur data və texniki SEO",
          "TypeScript ilə tip təhlükəsizliyi",
          "Vercel-də deploy, environment və domen konfiqurasiyası",
        ],
        steps: [
          {
            title: "Audit",
            body: "Mövcud layihə varsa, performans və arxitektura auditindən başlayırıq — problemlərin siyahısını alırsınız.",
          },
          {
            title: "Plan",
            body: "Hansı dəyişikliyin nə qazandıracağını prioritet sırası ilə müəyyən edirik.",
          },
          {
            title: "İcra",
            body: "Addım-addım tətbiq, hər mərhələdə ölçülə bilən nəticə.",
          },
          {
            title: "Ölçmə",
            body: "Əvvəl/sonra rəqəmləri: yüklənmə vaxtı, Lighthouse balı, bundle ölçüsü.",
          },
        ],
        faq: [
          {
            q: "Mövcud saytım var, sürətlə problemi var — kömək edə bilərsiniz?",
            a: "Bəli. Audit ilə başlayırıq: yavaşlığın səbəbini (şəkillər, bundle ölçüsü, render strategiyası, üçüncü tərəf skriptlər) tapıb prioritetli düzəliş planı verirəm. Çox vaxt bir neçə hədəfli dəyişiklik böyük fərq yaradır.",
          },
          {
            q: "Komandaya müvəqqəti qoşula bilərsiniz?",
            a: "Bəli, saatlıq və ya layihə əsaslı formatda mövcud komandaya qoşulmaq mümkündür.",
          },
        ],
      },
      landing: {
        metaTitle: "Landing page hazırlanması Bakı — konversiya üçün",
        metaDescription:
          "Bakıda landing page hazırlanması. Tək səhifəli, sürətli, konversiyaya fokuslanmış təqdimat saytları. Reklam kampaniyaları üçün ideal.",
        name: "Landing Page",
        tagline: "Tək səhifə, tək məqsəd: müştəri müraciəti.",
        h1: "Landing page hazırlanması",
        intro:
          "Landing page-in bir işi var: gələn ziyarətçini müraciətə çevirmək. Ona görə burada hər element bu məqsədə tabedir — mətn ardıcıllığı, forma yerləşməsi, yüklənmə sürəti. Reklam kampaniyasına pul xərcləyəcəksinizsə, ziyarətçinin düşdüyü səhifə sürətli və aydın olmalıdır.",
        includes: [
          "Konversiyaya fokuslanmış struktur və mətn ardıcıllığı",
          "Müraciət forması — e-mail və/və ya WhatsApp-a yönləndirmə",
          "Çox sürətli yüklənmə (reklam trafiki üçün kritik)",
          "Mobil-öncə dizayn",
          "Analitika qoşulması (Google Analytics / Meta Pixel)",
          "A/B test üçün hazır struktur",
        ],
        steps: [
          {
            title: "Təklif və auditoriya",
            body: "Nə satırsınız, kimə və hansı etiraza cavab verməlisiniz — mətn strukturu buradan çıxır.",
          },
          {
            title: "Dizayn",
            body: "Tək ekranlıq axın: diqqət → dəyər → sübut → müraciət.",
          },
          {
            title: "Development",
            body: "Kodlaşdırma, forma və analitika qoşulması.",
          },
          {
            title: "Canlıya çıxış",
            body: "Deploy, sürət testi, kampaniyaya hazır vəziyyət.",
          },
        ],
        faq: [
          {
            q: "Landing page ilə adi sayt arasında fərq nədir?",
            a: "Adi sayt biznesinizi hərtərəfli təqdim edir və çoxlu səhifədən ibarətdir. Landing page bir kampaniya, bir məhsul və bir hədəf üçündür — diqqəti yayan heç nə olmur, ona görə reklam trafikində konversiyası daha yüksək olur.",
          },
          {
            q: "Nə qədər vaxt aparır?",
            a: "Adətən 3–7 iş günü. Mətn və şəkillər hazırdırsa, daha tez.",
          },
        ],
      },
    },
  },
  faq: {
    label: "Suallar",
    title: "Tez-tez verilən suallar",
    lede: "Müştərilərin ən çox soruşduğu suallar və dürüst cavablar.",
    metaTitle: "Tez-tez verilən suallar — sayt hazırlanması",
    metaDescription:
      "Bakıda sayt hazırlanması ilə bağlı ən çox verilən suallar: qiymət, müddət, texnologiya seçimi, dəstək və domen.",
    items: [
      {
        q: "Bakıda veb sayt hazırlatmaq nə qədərə başa gəlir?",
        a: "Qiymət səhifə sayından və funksionallıqdan asılıdır. Tək səhifəli landing page ən aşağı, çoxdilli e-ticarət saytı isə ən yuxarı diapazondadır. Tələblərinizi eşidəndən sonra dəqiq və dəyişməyən qiymət verirəm — pulsuz qiymətləndirmə üçün WhatsApp-da yazın.",
      },
      {
        q: "Sayt hazırlanması nə qədər vaxt aparır?",
        a: "Landing page 3–7 iş günü, korporativ sayt 1–2 həftə, e-ticarət saytı 3–6 həftə. Ən çox vaxt aparan hissə adətən kod deyil, məzmunun (mətn və şəkillərin) hazırlanmasıdır.",
      },
      {
        q: "Hazır şablon (WordPress) yoxsa fərdi kod?",
        a: "Dürüst cavab: hər ikisinin yeri var. Sadə bloq üçün WordPress kifayətdir və daha ucuzdur. Amma sürət, təhlükəsizlik və fərdi funksionallıq lazımsa, Next.js ilə yazılmış sayt açıq üstünlükdədir — plagin asılılığı yoxdur, daha sürətli yüklənir, Google-un performans göstəricilərində daha yaxşı nəticə verir.",
      },
      {
        q: "Domen və hostinq daxildir?",
        a: "Domeni sizin adınıza almaqda kömək edirəm — sahibi siz olursunuz, bu vacibdir. Hostinq üçün Vercel istifadə edirəm; kiçik və orta saytlar üçün adətən pulsuz plan kifayət edir, yəni aylıq hostinq xərci olmur.",
      },
      {
        q: "Saytı özüm idarə edə biləcəyəm?",
        a: "Bəli, ehtiyac varsa admin panel qurulur — məhsul, qiymət, mətn və şəkilləri kod bilmədən dəyişirsiniz. Panelin necə işlədiyini təhvil zamanı göstərirəm.",
      },
      {
        q: "Sayt təhvil verildikdən sonra dəstək olur?",
        a: "Bəli. Təhvildən sonra bir müddət kiçik düzəlişlər və xətalar pulsuz aradan qaldırılır. Sonrakı dəyişikliklər üçün ya saatlıq, ya da aylıq dəstək formatı seçirik.",
      },
      {
        q: "Saytımın Google-da yuxarı çıxması üçün nə lazımdır?",
        a: "Texniki tərəfi mən qururam: sürətli yüklənmə, düzgün metadata, struktur data, sitemap, mobil uyğunluq. Amma dürüst olmaq lazımdır — texniki SEO təmindir, zəmanət deyil. Reallıqda nəticə üçün məzmun (mövzunuza uyğun yazılar) və digər saytlardan gələn linklər də lazımdır, bu isə davamlı işdir.",
      },
      {
        q: "Uzaqdan işləyirsiniz, yoxsa görüşmək lazımdır?",
        a: "Hər ikisi mümkündür. Bakıdayam, ona görə görüşə bilərik; əksər layihələri isə tamamilə uzaqdan, WhatsApp və e-mail üzərindən aparıram. Azərbaycan, ingilis və rus dillərində işləyirəm.",
      },
    ],
  },
  contact: {
    label: "Əlaqə",
    title: "Birgə İşləyək?",
    lede:
      "Yeni layihə ideyanız var və ya komandanıza frontend developer axtarırsınız? WhatsApp və ya e-mail vasitəsilə birbaşa mənə yazın.",
    statement: "Layihənizi danışaq — adətən eyni gün cavab verirəm.",
    ctaWhatsapp: "WhatsApp-da yazın",
    ctaEmail: "E-mail göndərin",
    spec: {
      name: "Ad",
      role: "Rol",
      location: "Məkan",
      whatsapp: "WhatsApp",
      email: "E-mail",
      network: "Şəbəkə",
    },
  },
  common: {
    backHome: "Ana səhifə",
    breadcrumbHome: "Ana səhifə",
  },
  caseStudies: {
    label: "Layihə təhlili",
    liveSite: "Canlı sayta bax",
    featuresHeading: "Sayta nə daxildir",
    decisionsHeading: "Texniki qərarlar",
    architectureHeading: "Arxitektura",
    faqHeading: "Bu layihə haqqında suallar",
    problemHeading: "Problem",
    resultsHeading: "Nəticə",
    overviewHeading: "Ümumi baxış",
    clientLabel: "Müştəri",
    roleLabel: "Rol",
    stackLabel: "Stack",
    dateLabel: "Tarix",
    monthNames: [
      "Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun",
      "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr",
    ],
    metricLabels: {
      lighthouseMobile: "Lighthouse (mobil)",
      lighthouseDesktop: "Lighthouse (masaüstü)",
      lcp: "LCP",
      languages: "Dil",
      pages: "Səhifə",
    },
    items: {
      9: {
        metaTitle:
          "Aristocrat Business Club — B2B üzvlük saytı və admin panel | Layihə təhlili",
        metaDescription:
          "Bakıda dəvətnamə ilə işləyən B2B biznes klubu üçün Next.js ilə yazılmış full-stack sayt: çoxaddımlı müraciət forması, tədbir təqvimi və məlumat bazası olmadan, JSON fayllar üzərində işləyən admin panel.",
        h1: "Aristocrat — qapalı B2B biznes klubu və idarəetmə paneli",
        summary:
          "Bakıda yalnız dəvətnamə ilə üzv qəbul edən biznes klubu üçün üzvlük saytı. Next.js ilə full-stack qurulub: çoxaddımlı müraciət axını, tədbir təqvimi və klubun öz idarə etdiyi admin panel — tədbirlər, xəbərlər və gələn müraciətlər üçün. Məlumat bazası bilərəkdən qurulmayıb; bütün data serverdəki JSON fayllarında yaşayır.",
        client: "Aristocrat Social & Business Club — qapalı B2B şəbəkə, Bakı",
        role:
          "Full-stack development — səhifə arxitekturası, çoxaddımlı forma məntiqi, Next.js route handler-ləri, JSON əsaslı məzmun qatı, JWT ilə qorunan admin paneli, komponent sistemi, animasiyalar və VPS-də deploy (PM2 + Nginx).",
        problem:
          "Dəvətnamə ilə işləyən klub üçün sayt eyni anda iki ziddiyyətli işi görməlidir: klubu tanıtmalı, amma hər kəsi dəvət etməməlidir. Böyük «qeydiyyatdan keç» düyməsi eksklüzivlik iddiasını elə birinci ekranda pozur; müraciət yolu olmayan sayt isə funksiyasız qalır. İkinci problem sayt yayımlandıqdan sonra başlayır. Tədbir təqvimi klubun canlı olduğunun yeganə görünən sübutudur — keçmiş tarixlərlə dolu təqvim isə əks mesaj verir. Müraciətlər də eyni cürdür: klubun bütün üzv axını o formadan keçir və bir poçt qutusunda itməməlidir. Yəni sayt yalnız qurulmalı deyil, klubun özü tərəfindən saxlanıla bilməli idi.",
        results:
          "Sayt 2026-cı ilin avqustundan canlıdır. Klub tədbir təqvimini, xəbərləri və gələn üzvlük müraciətlərini admin paneldən özü idarə edir — yəni saytın əsas arqumenti olan təqvimin təzə qalması artıq developerdən asılı deyil. Mobil performans ölçülüb və hədəfin altındadır; optimallaşdırma planlaşdırılır, rəqəm yaxşılaşandan sonra bura yazılacaq.",
        features: [
          "Çoxaddımlı müraciət forması — suallar bir-bir, irəliləyiş göstəricisi ilə",
          "2026 illik tədbir təqvimi, tarix və məkan detalları",
          "Auditoriya seqmentləri: sahibkarlar, startaplar, top menecerlər",
          "İmtiyazlar bölməsi: qapalı şəbəkə, eksklüziv tədbirlər, investisiya imkanları, bilik mübadiləsi",
          "Tərəfdaşlar bölməsi",
          "Klubun fəlsəfəsini izah edən redaksiya üslublu bölmələr",
          "Ayrıca tədbirlər səhifəsi — qarşıdan gələn tədbirlər tarix və kateqoriya ilə (Qapalı Sammit, Qeyri-rəsmi Görüş, Qala)",
          "Ayrıca xəbərlər səhifəsi",
          "Üzvlük iki trekə bölünüb: fərdi (Şəxslər) və korporativ (Şirkətlər)",
          "Admin panel: tədbirlərin əlavəsi, redaktəsi və silinməsi — tarix, məkan və kateqoriya ilə",
          "Admin paneldən xəbər yazılarının dərci",
          "Müraciət formasından gələn cavabların panel daxilində siyahılanması",
          "Tədbir və xəbər şəkillərinin birbaşa paneldən yüklənməsi",
          "JWT ilə qorunan admin girişi — panel marşrutları middleware səviyyəsində bağlıdır",
        ],
        architecture: [
          {
            layer: "Frontend",
            body: "Next.js App Router. Ana səhifə, üzvlük trekləri, tədbirlər, xəbərlər və müraciət səhifələri. İnterfeys üç dildədir və seçim brauzerdə saxlanılır — hər dilin ayrıca ünvanı yoxdur, bu güzəşt aşağıda ayrıca izah olunur.",
          },
          {
            layer: "Backend",
            body: "Ayrıca API serveri yoxdur — backend eyni Next.js tətbiqinin route handler-ləridir: müraciətlərin qəbulu, tədbir və xəbərlərin yazılması, şəkillərin yüklənməsi. Admin paneli də eyni layihənin `/admin` marşrutlarındadır, yəni tip tərifləri, komponentlər və deploy prosesi saytla ortaqdır.",
          },
          {
            layer: "Məlumat qatı",
            body: "Məlumat bazası yoxdur. Tədbirlər, xəbərlər və gələn müraciətlər serverin diskində JSON faylları kimi saxlanılır: admin panel faylı yazır, səhifələr onu oxuyur. Səbəbi aşağıdakı «Niyə məlumat bazası qurulmadı?» qərarındadır.",
          },
          {
            layer: "Autentifikasiya",
            body: "Öz JWT axını: token serverdə imzalanır və `httpOnly` cookie-yə yazılır. `/admin` altındakı marşrutlar həm middleware səviyyəsində, həm də hər route handler-in içində yoxlanılır.",
          },
          {
            layer: "Media",
            body: "Tədbir və xəbər şəkilləri admin paneldən yüklənir və VPS-in diskinə yazılır; saytda `next/image` üzərindən ölçülərək verilir.",
          },
          {
            layer: "İnfrastruktur",
            body: "VPS üzərində Next.js prosesi PM2 ilə saxlanılır, qarşıda Nginx reverse proxy dayanır — SSL, sıxılma və statik faylların keşi onun üzərindədir.",
          },
        ],
        decisions: [
          {
            title: "Niyə çoxaddımlı forma?",
            body: "Üzvlük müraciəti çoxlu sual tələb edir. Hamısını bir ekranda göstərmək istifadəçini qaçırır. Formanı addımlara böldüm və irəliləyiş göstəricisi əlavə etdim — hər ekranda bir sual olduqda insan başladığı işi tamamlamağa daha meyilli olur.",
          },
          {
            title: "Dizayn auditoriyanı süzür",
            body: "Klub kütləvi deyil. Vizual dil də bunu deməlidir: sakit rənglər, geniş boşluq, redaksiya tipografiyası. Parlaq və şən dizayn burada mesajla ziddiyyət təşkil edərdi — sayt kimi dəvət etdiyini görünüşü ilə də bildirir.",
          },
          {
            title: "Statik generasiya ilə dərhal açılış",
            body: "Tanıtım səhifələrinin məzmunu tez-tez dəyişmir, ona görə onlar build zamanı hazır HTML kimi yaradılır. Nəticədə server gözləməsi olmur — dəvətnamə ilə gələn adam saytı dərhal açılmış görür. Tədbir və xəbər kimi dəyişən məzmun isə serverdən oxunur.",
          },
          {
            title: "Üzvlük iki ayrı trekə bölündü",
            body: "Sahibkarın fərdi üzvlüyü ilə şirkətin korporativ paketi eyni məhsul deyil — qiymət, imtiyazlar və qərar verən adam fərqlidir. Menyuda bu iki yolu ayırmaq hər iki alıcının ilk klikdə öz səhifəsinə düşməsini təmin edir. Vahid «üzvlük» səhifəsi hər ikisinə yarımçıq cavab verərdi.",
          },
          {
            title: "Tədbirlər səhifəsi vəd yerinə təqvim verir",
            body: "Qapalı klub barədə ən böyük şübhə «burada həqiqətən nəsə olurmu» sualıdır. Tarixi və kateqoriyası olan tədbirlər siyahısı bu şübhəni bir baxışda bağlayır — cavabı mətn yox, məlumatın özü verir. Bu, saytı statik broşürdən klubun canlı vitrininə çevirən bölmədir.",
          },
          {
            title: "Fonda Bakı silueti dayanır, stok şəkil yox",
            body: "Klub beynəlxalq şəbəkə deyil, konkret bir şəhərin biznes mühitidir. Hero-da Bakının tanınan silueti var — ziyarətçi ilk saniyədə bu klubun harada və kimlərin arasında qurulduğunu anlayır. Neytral stok fotoğraf eyni yeri tutar, amma heç nə deməzdi.",
          },
          {
            title: "Niyə məlumat bazası qurulmadı?",
            body: "Klubun bütün datası bir ovucdur: ildə onlarla tədbir, bir neçə onlarla xəbər, ayda bir neçə müraciət. Bu həcmdə relyasion baza qurmaq ayrıca proses, ayrıca yedəkləmə rejimi və migrasiya intizamı deməkdir — heç bir real fayda vermədən. Data serverdəki JSON fayllarında saxlanılır: admin panel faylı yazır, səhifə onu oxuyur. Yedəkləmə bir qovluğun kopyalanmasıdır, məzmunun tarixçəsi isə faylların özündə görünür. Bu, «baza qurmağa vaxt olmadı» qərarı deyil — yükə uyğun qərardır. Yazma tezliyi artıb eyni anda bir neçə nəfər redaktə etməyə başlayanda baza əlavə edilməlidir; ondan əvvəl yox. Mühəndislikdə çətin olan texnologiyanı əlavə etmək deyil, lazım olmayanı əlavə etməmək intizamıdır.",
          },
          {
            title: "Təqvim yalnız təzə qaldıqca sübutdur",
            body: "Yuxarıda tədbirlər səhifəsinin klubun canlı vitrini olduğunu yazmışdım — bu, yalnız təqvim təzə qaldıqda doğrudur. Keçmiş tarixlərlə dolu səhifə klubun işlədiyini yox, dayandığını göstərir. Ona görə tədbirlər kodda deyil, admin paneldə yaşayır: klub yeni tarixi özü əlavə edir, mənim iştirakım olmadan. Bu layihədə admin panel əlavə funksiya deyil — saytın əsas arqumentini ayaqda saxlayan mexanizmdir.",
          },
          {
            title: "Müraciətlər poçt qutusuna yox, panelə düşür",
            body: "Üzvlük müraciəti bu klub üçün ən dəyərli məlumatdır. Yalnız e-poçt bildirişinə söykənən forma bir spam süzgəci ilə itir və ən pisi odur ki, heç kim itdiyini bilmir. Ona görə hər müraciət serverdə saxlanılır və admin paneldə siyahı kimi görünür — klub istənilən vaxt geri qayıdıb baxa bilir.",
          },
          {
            title: "Giriş tokeni httpOnly cookie-də saxlanılır",
            body: "Paneldə klubun tədbir planı və müraciət edən iş adamlarının şəxsi məlumatları var — yəni qapalılıq iddiası olan bir klubda ən həssas hissə məhz oradadır. Token `localStorage`-da saxlanılsaydı, istənilən XSS boşluğu onu oxuya bilərdi. `httpOnly` cookie JavaScript üçün görünmür, `SameSite` isə tokenin başqa saytdan gələn sorğuya qoşulmasının qarşısını alır. Yoxlama yalnız middleware-də deyil, hər route handler-in öz içindədir: interfeysi gizlətmək qorunma deyil, sadəcə görünüşdür.",
          },
          {
            title: "VPS, çünki yazılan fayllar qalmalıdır",
            body: "Sayt öz datasını serverin diskinə yazır: JSON faylları və yüklənən şəkillər. Serverless mühitdə fayl sistemi müvəqqətidir — panel bir şey yazır, növbəti deploy onu silir. Ona görə tətbiq VPS-də işləyir: Next.js prosesini PM2 ayaqda saxlayır, Nginx qarşıda SSL və statik faylları idarə edir. JSON üzərində işləmək qərarı yalnız davamlı disk olan yerdə mənalıdır — bu ikisi ayrı seçim deyil, eyni seçimdir.",
          },
          {
            title: "Üç dil bir ünvanda — güzəşt bilərəkdən edilib",
            body: "İnterfeys üç dildədir, amma hər dilin ayrıca ünvanı yoxdur: seçim brauzerdə saxlanılır. Bunun qiyməti odur ki, axtarış sistemləri üç dili ayrı səhifə kimi indeksləmir. Bu layihədə güzəşt məqbuldur, çünki klub üzvü Google axtarışından gəlmir — dəvətnamə ilə, birbaşa linkdən gəlir. Üzvi axtarış kanal olsaydı, dil marşrut səviyyəsində ayrılmalı olardı; burada isə həmin iş heç kimə xidmət etməyən mürəkkəblik olardı.",
          },
        ],
        faq: [
          {
            q: "Klub tədbir və ya xəbər əlavə etmək üçün developerə müraciət etməlidir?",
            a: "Xeyr. Tədbirlər, xəbərlər və onların şəkilləri admin paneldən idarə olunur — klub təqvimi özü yeniləyir, kod dəyişikliyi tələb olunmur.",
          },
          {
            q: "Müraciət formasından gələn məlumat hara düşür?",
            a: "Hər müraciət serverdə saxlanılır və admin paneldə siyahı kimi görünür, yəni yalnız e-poçt bildirişinə söykənmir. Klub istənilən vaxt keçmiş müraciətlərə qayıda bilir.",
          },
          {
            q: "Niyə layihədə məlumat bazası yoxdur?",
            a: "Klubun data həcmi kiçikdir — ildə onlarla tədbir və xəbər, ayda bir neçə müraciət. Bu yükdə relyasion baza əlavə fayda vermədən ayrıca proses və yedəkləmə intizamı tələb edərdi. Data serverdəki JSON fayllarında saxlanılır; yazma tezliyi artanda bazaya keçid planlanmış addımdır, təcili iş deyil.",
          },
          {
            q: "Saytı və admin paneli kim hazırlayıb?",
            a: "Bütün qatlar — frontend, Next.js route handler-ləri, məzmun qatı, admin paneli, autentifikasiya və VPS-də deploy — Nurlan Qadirov tərəfindən yazılıb.",
          },
          {
            q: "Sayt neçə dildə işləyir?",
            a: "İnterfeys üç dildədir: azərbaycan, ingilis və rus. Hər dilin ayrıca ünvanı yoxdur — seçim brauzerdə saxlanılır. Bu, klubun auditoriyası axtarışdan yox, dəvətnamədən gəldiyi üçün bilərəkdən verilmiş güzəştdir.",
          },
        ],
      },
      2: {
        metaTitle: "Cyber Mine — kibertəhlükəsizlik şirkəti saytı | Layihə təhlili",
        metaDescription:
          "Kibertəhlükəsizlik və İT konsaltinq şirkəti üçün React saytı: xidmət bölmələri, mərhələli iş prosesi, müştəri rəyləri və etibar siqnalları.",
        h1: "Cyber Mine — kibertəhlükəsizlik konsaltinqi",
        summary:
          "Kibertəhlükəsizlik və İT konsaltinq şirkəti üçün korporativ sayt. React və Vite ilə qurulub; xidmətlər, iş prosesi və etibar siqnalları ətrafında təşkil olunub.",
        client: "Cyber Mine — kibertəhlükəsizlik və İT konsaltinq şirkəti",
        role:
          "Frontend development — səhifə arxitekturası, komponent sistemi, responsiv tərtibat və deploy.",
        problem:
          "Kibertəhlükəsizlik gözlə görünən məhsul deyil — müştəri nə alacağını əvvəlcədən yoxlaya bilmir və qərarı tamamilə etibara söykənir. Sayt yalnız xidməti izah etməklə kifayətlənə bilməzdi: şirkətin bu işi kiminlə, hansı ardıcıllıqla gördüyünü də göstərməli idi.",
        results:
          "Sayt 2025-ci ilin avqustundan canlıdır — bir ildən artıqdır fəaliyyətdədir. PageSpeed Insights ölçməsində performans mobildə 91, masaüstündə 98 baldır.",
        features: [
          "Dörd xidmət istiqaməti: MS Office 365 optimizasiyası, kibertəhlükəsizlik məsləhəti, CRM sistem xidmətləri, texniki sənədləşdirmə",
          "Etibar edən şirkətlərin loqo lenti",
          "Dörd mərhələli iş prosesi: analiz, strateji planlama, tətbiq, dəstək",
          "Fərqləndirici üstünlükləri izah edən bölmə",
          "Müştəri rəyləri",
          "Səhifə sonunda əlaqə çağırışı",
          "Dörd ayrıca səhifə: ana səhifə, xidmətlər, haqqımızda, əlaqə",
          "Hexagon şəbəkə motivli hero vizualı",
          "Üç üstünlük bloku: ekspert komanda, fərdi həllər, 24/7 dəstək",
        ],
        decisions: [
          {
            title: "Niyə React + Vite, Next.js yox?",
            body: "Sayt bir neçə statik bölmədən ibarətdir; dinamik məzmun və ya server məntiqi yoxdur. Belə halda Next.js lazımsız mürəkkəblik gətirərdi. Texnologiyanı layihənin ehtiyacına görə seçmək lazımdır, əksinə yox — burada Vite həm daha yüngül build verir, həm də saxlanılması sadədir.",
          },
          {
            title: "Etibar siqnalları yuxarıda",
            body: "Təhlükəsizlik xidməti satmaq etibar satmaqdır. Ona görə müştəri loqoları və rəylər səhifədə yuxarı yerləşdirilib — ziyarətçi xidmətlərin təfərrüatını oxumazdan əvvəl şirkətə kimin etibar etdiyini görür.",
          },
          {
            title: "Proses bölməsi qeyri-müəyyənliyi azaldır",
            body: "Konsaltinq alan adamın əsas narahatlığı \"bu iş necə gedəcək\" sualıdır. Dörd mərhələli proses bölməsi məhz ona cavab verir və ilk əlaqədən əvvəl qərar verməyi asanlaşdırır.",
          },
          {
            title: "Hero xidmət siyahısı ilə yox, mövqe ilə açılır",
            body: "Səhifənin ilk cümləsi «Rəqəmsal Arxitekturanızın Memarı»dır — nə satıldığı deyil, hansı rolun oynandığı. Xidmət siyahısı ilə açılan sayt təchizatçı kimi oxunur, rolla açılan sayt isə tərəfdaş kimi. Konsaltinq satışında bu fərq birbaşa qiymətə təsir edir.",
          },
          {
            title: "Üç üstünlük bloku üç etiraza cavabdır",
            body: "Ekspert komanda, fərdi həllər və 24/7 dəstək təsadüfi seçilmiş şüarlar deyil. Hər biri alıcının konkret tərəddüdünə cavab verir: bu işi kim edəcək, mənim vəziyyətimə uyğun gələcəkmi, problem gecə çıxsa nə olacaq. Bölmə bu sualları verilməmişdən əvvəl bağlayır.",
          },
          {
            title: "Naviqasiya dörd real səhifədir, anker deyil",
            body: "Bölmələri bir səhifədə ankerlə bağlamaq mümkün idi, amma xidmətlər, şirkət və əlaqə fərqli niyyətlərdir və ayrıca ünvana layiqdirlər. Bu quruluş həm paylaşıla bilən link verir, həm də hər səhifənin axtarışda ayrıca hədəflənməsinə imkan yaradır.",
          },
        ],
      },
      3: {
        metaTitle: "Reform (MyData) — İT infrastruktur şirkəti saytı | Layihə təhlili",
        metaDescription:
          "Rəqəmsal transformasiya şirkəti üçün React saytı: proqram təminatı, Cisco şəbəkə, kibertəhlükəsizlik və İT konsaltinq istiqamətləri.",
        h1: "Reform — rəqəmsal transformasiya şirkəti",
        summary:
          "Proqram təminatı, şəbəkə infrastrukturu və kibertəhlükəsizlik həlləri təklif edən şirkət üçün korporativ sayt. React və Vite ilə qurulub.",
        client: "Reform (MyData) — İT infrastruktur və rəqəmsal transformasiya şirkəti",
        role:
          "Frontend development — səhifə arxitekturası, xidmət səhifələri, komponent sistemi və deploy.",
        problem:
          "Şirkət eyni anda iki fərqli adama satış edir: infrastruktur seçimini edən texniki mütəxəssisə və büdcəni təsdiqləyən rəhbərə. Birincisi Cisco Nexus, C9300, FortiNAC kimi konkret adlar axtarır; ikincisi həmin adları görəndə saytı bağlayır. Bir sayt hər ikisini itirmədən danışmalı idi.",
        results:
          "Sayt 2025-ci ilin avqustundan canlıdır. PageSpeed Insights ölçməsində mobil performans 99, masaüstü 86 baldır — Cisco və Fortinet kimi vendor loqoları ilə dolu bir səhifə üçün mobil nəticə şəkillərin ölçülü verilməsinin nəticəsidir.",
        features: [
          "Dörd fəaliyyət istiqaməti: proqram təminatı, Cisco şəbəkə infrastrukturu, kibertəhlükəsizlik həlləri, İT konsaltinq",
          "Hər istiqamət üçün ayrıca detal səhifəsi",
          "Müstəqil texnologiyalar bölməsi",
          "Dörd mərhələli iş prosesi",
          "Müştəri rəyləri",
          "Əlaqə çağırışı ilə bitən axın",
          "Hero-da şirkəti kod obyekti kimi təsvir edən vizual blok",
          "Səkkiz texnoloji tərəfdaş: Cisco, Microsoft, Fortinet, DNSSENSE, VMware, Veeam, Dell, HP",
          "Üç üstünlük: sertifikatlaşdırılmış mütəxəssislər, fərdi yanaşma, layihə sonrası dəstək",
        ],
        decisions: [
          {
            title: "Texnologiyalar üçün ayrıca bölmə",
            body: "Auditoriya qarışıq idi: bir tərəfdə texniki qərar verənlər, digər tərəfdə şirkət rəhbərləri. Cisco Nexus, C9300 və ya FortiNAC kimi konkret adlar birincilər üçün mənalıdır, ikincilər üçün isə səs-küy. Bu detalları ayrıca bölməyə çıxardım — hər auditoriya öz dərinliyini tapır, ana səhifə isə aydın qalır.",
          },
          {
            title: "Xidmət başına ayrıca səhifə",
            body: "Dörd istiqamət dörd fərqli müştəri tipini maraqlandırır. Hamısını bir səhifədə sıxmaq əvəzinə hər birinə öz səhifəsini verdim — oxumaq asanlaşır və hər istiqamət axtarışda ayrıca hədəflənə bilir.",
          },
          {
            title: "İnfrastruktur şirkəti üçün sürət mesajın bir hissəsidir",
            body: "Şəbəkə və infrastruktur satan şirkətin öz saytının yavaş açılması ziddiyyət yaradır. Vite ilə optimallaşdırılmış statik build bunun qarşısını alır.",
          },
          {
            title: "Vendor loqoları ən güclü sübutdur",
            body: "İnfrastruktur bazarında müştəri şirkətin öz sözünə deyil, kiminlə işlədiyinə baxır. Cisco, Fortinet, VMware və Veeam adları şirkətin hansı səviyyədə fəaliyyət göstərdiyini bir sətirdə bildirir. Eyni mesajı mətnlə çatdırmaq üçün bütöv bir abzas lazım olardı və yenə də bu qədər inandırıcı olmazdı.",
          },
          {
            title: "Hero-da kod bloku auditoriyanı bölür",
            body: "Şirkəti kod obyekti kimi göstərən vizual hər ziyarətçiyə eyni şeyi demir — və məqsəd elə budur. Texniki qərar verən adam onu dərhal oxuyur, qeyri-texniki ziyarətçi isə yanındakı düz mətni. Bir ekran iki fərqli auditoriyaya paralel danışır və heç birini itirmir.",
          },
          {
            title: "Xidmət səhifələri ayrı ünvanlardadır",
            body: "Dörd istiqamətin hər biri öz səhifəsində yaşayır. Bu, sadəcə uzun ana səhifədən qaçmaq üçün deyil: proqram təminatı axtaran adamla Cisco şəbəkəsi axtaran adam fərqli sorğu yazır və fərqli səhifəyə düşməlidir. Vahid səhifə hər iki axtarış üçün zəif nəticə verərdi.",
          },
        ],
      },
      4: {
        metaTitle: "E-Partners — konsaltinq şirkəti üçün landing | Layihə təhlili",
        metaDescription:
          "360° biznes konsaltinq şirkəti üçün tək səhifəli təqdimat saytı: maliyyə, marketinq, hüquq, İT, HR və satınalma istiqamətləri.",
        h1: "E-Partners — 360° biznes konsaltinq",
        summary:
          "Yeddi fərqli sahədə konsaltinq təklif edən şirkət üçün tək səhifəli təqdimat saytı. Çərçivə (framework) olmadan qurulub — yüngül və sürətli.",
        client: "E-Partners — 360° biznes konsaltinq şirkəti, Bakı",
        role:
          "Frontend development — səhifə strukturu, tərtibat, çoxdilli mətn quruluşu və deploy.",
        problem:
          "Yeddi ayrı sahədə xidmət göstərən konsaltinq şirkətinin əsas riski dağınıq görünməkdir: siyahı uzandıqca ixtisas hissi azalır və ziyarətçi «bunlar hər işi görürlər» nəticəsinə gəlir. Sayt genişliyi zəiflik kimi yox, mövqe kimi təqdim etməli idi.",
        results:
          "Sayt 2025-ci ilin oktyabrından canlıdır. PageSpeed Insights ölçməsində performans mobildə 93, masaüstündə 99 baldır — çərçivəsiz, sadə HTML və CSS quruluşunun birbaşa nəticəsi.",
        features: [
          "Tək səhifəli axın: təklif, haqqımızda, xidmətlər, üstünlüklər, əlaqə",
          "Yeddi xidmət sahəsi: maliyyə, marketinq, hüquq, insan resursları, İT, satınalma, təlim",
          "Şirkət dəyərləri və məqsəd bölməsi",
          "Mobil uyğun quruluş",
          "Üç dil (AZ / English / Русский) başlıqdakı seçici ilə",
          "Hər xidmət sahəsi altında altı konkret iş maddəsi — ümumi ifadə yoxdur",
          "Altı üstünlük bloku: çeviklik, sənaye təcrübəsi, fərdiləşdirmə, müştəri mərkəzlilik, innovasiya, 24/7 dəstək",
          "Tam əlaqə bloku: iki telefon nömrəsi, e-poçt və ofis ünvanı",
        ],
        decisions: [
          {
            title: "Niyə çərçivə istifadə olunmadı?",
            body: "Sayt tamamilə statik məzmundan ibarətdir — dinamik data, forma məntiqi və ya istifadəçi hesabı yoxdur. Belə layihəyə React qoşmaq ziyarətçiyə heç bir fayda verməyən JavaScript yükləmək deməkdir. Sadə quruluş burada həm daha sürətli açılır, həm də illər sonra saxlanılması asan olur.",
          },
          {
            title: "Yeddi xidmət, bir axın",
            body: "Şirkət çox sahədə işləyir və bu, mesajı dağıda bilər. Xidmətləri ayrı səhifələrə bölmək əvəzinə vahid axında saxladım — ziyarətçi hamısını ardıcıl görür və şirkətin \"tək nöqtədən 360° həll\" mövqeyi elə struktur vasitəsilə çatdırılır.",
          },
          {
            title: "Xidmətlər maddə-maddə yazıldı",
            body: "«Hüquq xidmətləri» ifadəsi heç kimə heç nə demir. Ona görə hər sahə altında altı konkret iş sadalanır — müqavilələrin hazırlanması, vergi və gömrük prosedurları, lisenziyalaşdırma, məhkəmələrdə təmsilçilik kimi. Ziyarətçi öz problemini sözbəsöz siyahıda görəndə əlaqə saxlamağa hazır olur; ümumi başlıq isə onu «zəng edib soruşum» mərhələsində saxlayır.",
          },
          {
            title: "Üç dil JavaScript ilə dəyişir — güzəşt bilərəkdən edilib",
            body: "Statik saytda dil düymə ilə dəyişir: istifadəçi üçün ani, əlavə səhifə yüklənməsi yoxdur. Bunun qiyməti odur ki, üç dil eyni ünvanda qalır və axtarış sistemləri onları ayrıca səhifə kimi indeksləmir. Bu layihənin ölçüsündə güzəşt məqbul idi — sayt təqdimat materialıdır, üzvi axtarış kanalı deyil. Çoxdilli SEO tələb olunsaydı, dil marşrut səviyyəsində ayrılmalı olardı.",
          },
        ],
      },
      7: {
        metaTitle: "Dəniz Restaurant — üç dilli QR menyu | Layihə təhlili",
        metaDescription:
          "Restoran üçün üç dilli rəqəmsal QR menyu: 14 kateqoriya, qiymətlər və şefin seçimi. Mobil-öncə, sürətli açılış.",
        h1: "Dəniz Restaurant — rəqəmsal QR menyu",
        summary:
          "Masadakı QR kodu ilə açılan üç dilli rəqəmsal menyu. Mobil-öncə qurulub; 14 kateqoriya, qiymətlər və şefin seçimi bölməsi ilə.",
        client: "Dəniz Restaurant (Snap House) — Nərimanov rayonu, Bakı",
        role:
          "Konsepsiya, interfeys dizaynı, frontend development və deploy.",
        problem:
          "Çap menyu hər qiymət dəyişikliyində yenidən çap tələb edir — restoran ya köhnə qiymətlə işləyir, ya da davamlı xərcə girir. Üstəlik Bakı restoranına gələn turist azərbaycanca menyunu oxuya bilmir və ofisiantı çağırmalı olur. Yəni menyu problemi eyni anda həm xərc, həm də xidmət problemidir.",
        results:
          "Menyu 2025-ci ilin dekabrından masalardakı QR kodu ilə açılır. Qiymət və yemək dəyişikliyi artıq yeni çap sifarişi tələb etmir, üç dil isə turistin ofisiant çağırmadan menyunu oxumasına imkan verir.",
        features: [
          "Üç dilli menyu: azərbaycan, ingilis və rus dilləri",
          "14 kateqoriya: səhər yeməyi, şorbalar, salatlar, dönər növləri, isti yeməklər, qarnirlər, desertlər, içkilər",
          "Hər yeməkdə qiymət və qısa təsvir",
          "Şefin seçimi vurğu bölməsi",
          "WhatsApp və Instagram keçidləri",
          "Restoran ünvanı",
          "Kateqoriyalar arasında sürətli keçid üçün üfüqi lent — 14 bölmə uzun sürüşdürmə olmadan əlçatandır",
          "Şefin seçimi vurğu kartı",
          "Hər yeməkdə AZN qiymət və porsiya izahı (1 və 2 nəfərlik)",
        ],
        decisions: [
          {
            title: "Mobil-öncə, çünki başqa cür açılmır",
            body: "Bu menyu praktiki olaraq yalnız telefonda, masadakı QR koddan açılır. Desktop versiyası demək olar işlənmir. Ona görə dizayn birbaşa kiçik ekran üçün quruldu — böyük ekran üçün qurub sonra sıxışdırmaq əvəzinə.",
          },
          {
            title: "İlk yüklənmə burada xüsusilə kritikdir",
            body: "Müştəri masada oturub gözləyir, restoran Wi-Fi-ı isə çox vaxt zəif olur. Yavaş açılan menyu birbaşa mənfi təəssüratdır və ofisiant çağırmağa səbəb olur. Yüngül build və ölçülmüş şəkillər məhz bu ssenariyə görə seçildi.",
          },
          {
            title: "Üç dil turist auditoriyası üçün",
            body: "Bakı restoranına gələnlərin bir hissəsi azərbaycanca oxumur. Dil keçidi menyunun ən üstündədir — turist QR-ı skan edən kimi kömək istəmədən öz dilinə keçir.",
          },
          {
            title: "Sifariş funksiyası bilərəkdən qoyulmayıb",
            body: "QR menyu sifariş sistemi deyil. Masada ofisiant var və sifarişi ondan vermək həm sürətlidir, həm də restoranın mövcud iş axınına uyğundur. Saytda sifariş düyməsi mətbəxlə zalın arasında ikinci, sinxronlaşmayan kanal yaradardı. Menyu yalnız öz işini görür — bu, funksiya əskikliyi deyil, sərhəd qoymaqdır.",
          },
          {
            title: "Kateqoriya lenti sürüşdürməni əvəz edir",
            body: "On dörd bölməni alt-alta düzsək müştəri desertə çatana qədər telefonu ovucunda onlarla dəfə sürüşdürməli olur. Üfüqi kateqoriya lenti bütün bölmələri bir zolaqda saxlayır — bir toxunuşla istənilən yerə keçid. Kiçik ekranda naviqasiya vaxtı birbaşa təcrübə deməkdir.",
          },
          {
            title: "Qiymət və porsiya bir yerdə göstərilir",
            body: "Yeməyin qiyməti tək başına kifayət etmir: «16 AZN» bahadır, «16 AZN — 2 nəfərlik sərpmə səhər yeməyi» isə deyil. Porsiya izahını qiymətin yanına qoymaq ofisiantdan soruşulan sualların bir hissəsini menyunun öz içində həll edir.",
          },
        ],
      },
      8: {
        metaTitle:
          "Harmal — lüks zərgərlik e-ticarəti və admin panel | Layihə təhlili",
        metaDescription:
          "Harmal üçün Next.js ilə sıfırdan yazılmış full-stack e-ticarət saytı: üç dilli vitrin, Prisma + SQLite məlumat bazası, JWT ilə qorunan admin panel və VPS-də deploy. Layihə təhlili.",
        h1: "Harmal — lüks zərgərlik e-ticarəti və idarəetmə paneli",
        summary:
          "Bakıda əl işi zərgərlik və təbii ipək kəlağayı satan lüks marka üçün üç dilli e-ticarət saytı. Next.js ilə full-stack qurulub: redaksiya üslublu vitrin, jurnal bölməsi və brendin özünün idarə etdiyi admin panel — məhsul, kolleksiya, jurnal yazıları və gələn müraciətlər üçün.",
        client: "Harmal — əl işi zərgərlik və ipək kəlağayı brendi, Bakı",
        role:
          "Full-stack development — layihənin bütün qatları: üç dilli frontend arxitekturası, Next.js route handler-ləri, Prisma/SQLite məlumat modeli, JWT əsaslı admin autentifikasiyası, şəkil yükləmə axını, performans və VPS-də deploy (PM2 + Nginx).",
        problem:
          "Lüks zərgərliyin onlayn satışında iki ayrı problem var. Birincisi güvəndir: müştəri əşyanı əlinə almadan, dörd rəqəmli məbləği ekrandakı fotoya baxaraq ödəməlidir. Adi e-ticarət şablonu — sıx məhsul şəbəkəsi, endirim etiketləri, «tez al» düymələri — bu güvəni qurmur, əksinə brendi ucuzlaşdırır. İkincisi sayt yayımlandıqdan sonra başlayır: kolleksiya mövsümlə dəyişir, qiymət qızılın kursundan asılıdır, jurnala müntəzəm yazı düşür. Hər belə dəyişiklik üçün developerə yazmaq lazımdırsa, sayt bir neçə aya köhnəlir — praktikada brend saytı yeniləməkdən sadəcə əl çəkir.",
        // TODO: Nəticə — satış artımı, müraciət sayı, yüklənmə sürəti və s.
        results:
          "Sayt 2026-cı ilin avqustundan üç dildə canlıdır. PageSpeed Insights ölçməsində performans həm mobildə, həm masaüstündə 93, SEO isə 100 baldır — məhsul fotoları ilə dolu bir vitrin üçün bu, şəkillərin ölçülməsinin və statik generasiyanın işlədiyini göstərir. Gündəlik məzmun brendin öz əlindədir: məhsul, kolleksiya, qiymət və jurnal yazıları admin paneldən dəyişir, adi yeniləmə üçün developer müdaxiləsi lazım gəlmir.",
        features: [
          "Üç dilli interfeys — azərbaycan, ingilis və rus dilləri, hər biri ayrıca ünvanda",
          "Kolleksiya vitrini və məhsul kateqoriyaları",
          "Brendin mənşəyini danışan redaksiya üslublu bölmələr",
          "Müştəri rəyləri bölməsi",
          "Tarixli yazılarla jurnal (bloq) bölməsi",
          "Tez-tez verilən suallar bölməsi",
          "Keyfiyyət prinsiplərini izah edən «Harmal Standartı» bölməsi",
          "Başlıqda canlı axtarış sahəsi",
          "Ayrıca jurnal səhifəsi — yazılar Mədəniyyət, Bələdçi və Stil kateqoriyalarına görə süzülür",
          "Ayrıca mağaza, əlaqə və tez-tez verilən suallar səhifələri",
          "Parallax ilə açılan brend mənşəyi hekayəsi",
          "Admin panel: məhsul və kolleksiyaların əlavəsi, redaktəsi, silinməsi",
          "Admin paneldən jurnal yazılarının yazılması və dərci",
          "Saytdan gələn müraciət və sifarişlərin panel daxilində siyahılanması",
          "Məhsul və jurnal şəkillərinin birbaşa paneldən yüklənməsi",
          "JWT ilə qorunan admin girişi — panel marşrutları middleware səviyyəsində bağlıdır",
        ],
        architecture: [
          {
            layer: "Frontend",
            body: "Next.js App Router. Hər dil (AZ / EN / RU) öz marşrutundadır; vitrin, mağaza, jurnal, əlaqə və FAQ səhifələri server tərəfdə render olunur. Şəkillər `next/image` ilə ölçülür, brend mənşəyi parallax ilə açılır, başlıqda canlı axtarış işləyir.",
          },
          {
            layer: "Backend",
            body: "Ayrıca API serveri yoxdur — backend eyni Next.js tətbiqinin route handler-ləridir. Məhsul, kolleksiya, jurnal və müraciət əməliyyatları bu marşrutlardan keçir. Frontend ilə backend eyni TypeScript tiplərini bölüşür, yəni sahə adı dəyişəndə səhv build zamanı üzə çıxır — istifadəçi onu görməmişdən əvvəl.",
          },
          {
            layer: "Məlumat bazası",
            body: "Prisma + SQLite. Sxem `schema.prisma` faylında tərif olunur və dəyişikliklər migrasiya ilə gedir; baza isə serverin öz diskində tək fayl kimi yaşayır. Məhsullar, kolleksiyalar, jurnal yazıları və müraciətlər eyni sxemin içindədir.",
          },
          {
            layer: "Autentifikasiya",
            body: "Öz JWT axını: giriş uğurlu olanda token serverdə imzalanır və `httpOnly` cookie-yə yazılır. `/admin` altındakı marşrutlar həm middleware səviyyəsində, həm də hər route handler-in içində yoxlanılır.",
          },
          {
            layer: "Media",
            body: "Məhsul və jurnal şəkilləri admin paneldən yüklənir və VPS-in diskinə yazılır; saytda `next/image` üzərindən ekran ölçüsünə uyğun formada verilir.",
          },
          {
            layer: "İnfrastruktur",
            body: "VPS üzərində Next.js prosesi PM2 ilə saxlanılır — yenidən başlatma və çökmə halında qaldırma onun üzərindədir. Qarşıda Nginx reverse proxy dayanır: SSL, sıxılma və statik faylların keşi orada həll olunur.",
          },
        ],
        decisions: [
          {
            title: "Niyə Next.js?",
            body: "Zərgərlik saytı şəkil ağırlıqlıdır, üç dildə işləyir və eyni zamanda öz idarəetmə panelinə ehtiyac duyur. Next.js bu üçünü tək tətbiqdə birləşdirir: səhifələr server tərəfdə hazır HTML kimi verilir, admin marşrutları isə eyni layihənin içində yaşayır. Klassik SPA və ayrıca API quruluşunda eyni iş iki repo, iki deploy və iki dəfə təkrarlanan tip tərifi demək olardı.",
          },
          {
            title: "Şəkillərin optimallaşdırılması",
            body: "Məhsul fotoları saytın ən ağır hissəsidir. `next/image` ilə hər şəkil ekran ölçüsünə uyğun ölçüdə və müasir formatda (WebP) verilir — beləliklə mobil istifadəçi desktop ölçülü şəkil yükləmir. Lüks brenddə foto keyfiyyəti aşağı salına bilməz, ona görə qazanc keyfiyyətdən deyil, ölçüdən çıxarılır.",
          },
          {
            title: "Üç dil ayrıca marşrutda, hreflang ilə bir-birinə bağlı",
            body: "Hər dil öz ünvanında yaşayır, yəni axtarış sistemləri üç ayrı səhifə indeksləyir — bu, brendin həm azərbaycandilli, həm rusdilli müştəriyə çatması üçün vacibdir. Amma ayrı ünvan tək başına azdır: sistem bu üç səhifənin eyni məzmunun tərcüməsi olduğunu da bilməlidir. Ona görə hər səhifədə hreflang bağlantıları və x-default göstəricisi var. Bunsuz üç dil bir-birinin rəqibi kimi indeksləşir və brend faktiki olaraq öz-özü ilə yarışır.",
          },
          {
            title: "Struktur data brendi maşına izah edir",
            body: "Səhifədə dörd ayrıca JSON-LD bloku var. Bu, axtarış sisteminə və AI modellərinə brendin nə satdığını, harada yerləşdiyini və hansı yazıları dərc etdiyini təxmin etdirmir — birbaşa deyir. Lüks brend üçün bu xüsusilə vacibdir, çünki axtarış nəticəsində çıxan qısa təsvir çox vaxt müştərinin brendlə ilk təması olur.",
          },
          {
            title: "Jurnal satış kanalının bir hissəsidir",
            body: "Kəlağayı mədəniyyəti oxuyan, brilyant seçmə bələdçisi axtaran və gündəlik stil məsləhəti istəyən üç fərqli adamdır. Yazılar məhz bu üç kateqoriyaya bölünüb, çünki hər biri fərqli axtarışdan gəlir və fərqli kolleksiyaya aparır. Jurnal burada məzmun bölməsi deyil, mağaza səhifələrinə açılan giriş qapısıdır.",
          },
          {
            title: "Niyə SQLite seçildi, Postgres yox?",
            body: "Harmal-ın data profili konkretdir: yüzlərlə məhsul və jurnal yazısı, gündə bir neçə yazma əməliyyatı, bunun qarşısında minlərlə oxunuş. Bu profildə SQLite eyni maşında, şəbəkə gedişi olmadan oxuyur — sorğu üçün ayrıca baza serverinə müraciət yoxdur. Postgres burada nə sürət qazandırardı, nə də yeni funksiya verərdi: yalnız ayrıca proses, ayrıca yaddaş və ayrıca nasazlıq nöqtəsi əlavə edərdi. Prisma sxemi isə yerindədir — mağaza böyüyüb eyni anda çoxlu yazma tələb edəndə baza dəyişikliyi bir neçə sətirlik migrasiyadır. Texnologiyanı bugünkü yükə görə seçmək, sabahkı ehtimal üçün əvvəlcədən ödəməkdən ucuzdur.",
          },
          {
            title: "Panel olmasa, sayt üç aya köhnəlir",
            body: "Mövsüm dəyişəndə kolleksiya dəyişir, qızıl bahalaşanda qiymət yenilənir, jurnala yazı düşür. Bu dəyişiklikləri kodda etmək o deməkdir ki, brend hər dəfə developerin boş vaxtını gözləyir — praktikada isə gözləmir, sadəcə saytı yeniləməkdən əl çəkir və vitrin keçmiş mövsümdə donub qalır. Ona görə məhsul, kolleksiya və jurnal admin paneldən idarə olunur: brend öz vitrinini özü saxlayır, mən yalnız sistemi saxlayıram.",
          },
          {
            title: "Giriş tokeni httpOnly cookie-də saxlanılır",
            body: "Admin paneli brendin bütün məhsul bazasına və müştəri müraciətlərinə açılan qapıdır. Token `localStorage`-da saxlanılsaydı, saytdakı istənilən XSS boşluğu onu oxuya bilərdi. `httpOnly` cookie JavaScript üçün görünmür, `SameSite` isə tokenin başqa saytdan göndərilən sorğuya qoşulmasının qarşısını alır. Yoxlama isə yalnız middleware-də deyil, hər route handler-in öz içindədir: interfeysi gizlətmək qorunma deyil, sadəcə görünüşdür — API ünvanını bilən adam interfeysi heç görmür.",
          },
          {
            title: "Niyə Vercel yox, öz VPS-i?",
            body: "Bu layihənin iki hissəsi davamlı diskə söykənir: SQLite faylı və admindən yüklənən məhsul şəkilləri. Serverless mühitdə fayl sistemi müvəqqətidir — yazılan fayl növbəti deploy-a, çox vaxt isə növbəti sorğuya qədər yaşayır. Yəni Vercel seçilsəydi, həm baza, həm də şəkil saxlama üçün ayrıca ödənişli xidmət qoşulmalı olardı. VPS-də hər ikisi elə tətbiqin yanındadır. Yəni SQLite, disk üzərində şəkil saxlama və VPS bir-birindən asılı olmayan üç qərar deyil — eyni qərarın üç üzüdür.",
          },
          {
            title: "PM2 və Nginx işi bölür",
            body: "Next.js-in server prosesi tək başına yaşamağı bacarmır: çökəndə qalxmalı, server yenidən başlayanda özü işə düşməlidir — bunu PM2 edir. Nginx isə qarşıda dayanıb ona aid olmayan işi öz üzərinə götürür: SSL sonlandırması, sıxılma, statik faylların keşi. Bu bölgü olmadan həmin proses həm tətbiqi işlətməli, həm də hər sorğuda şifrələmə ilə məşğul olmalı olardı — yəni məhsul səhifəsi sertifikat əməliyyatının arxasında növbə gözləyərdi.",
          },
        ],
        faq: [
          {
            q: "Harmal hazır platforma (Shopify, WooCommerce) üzərində qurulub?",
            a: "Xeyr. Sayt sıfırdan Next.js və TypeScript ilə yazılıb — öz məlumat bazası (Prisma + SQLite), öz backend marşrutları və öz admin paneli ilə. Aylıq abunə haqqı, tema məhdudiyyəti və ya plagin asılılığı yoxdur.",
          },
          {
            q: "Məhsulları və jurnal yazılarını kim əlavə edir?",
            a: "Brendin özü. Məhsul, kolleksiya və jurnal yazıları admin paneldən əlavə olunur, redaktə edilir və silinir; şəkillər də birbaşa paneldən yüklənir. Adi məzmun dəyişikliyi üçün developer müdaxiləsi lazım deyil.",
          },
          {
            q: "Saytın backend hissəsini kim yazıb?",
            a: "Layihənin bütün qatları — frontend, Next.js route handler-ləri, Prisma məlumat modeli, admin paneli, autentifikasiya və serverdə deploy — Nurlan Qadirov tərəfindən yazılıb. Harmal həm frontend, həm də full-stack iş nümunəsidir.",
          },
          {
            q: "Sayt neçə dildə işləyir?",
            a: "Üç dildə: azərbaycan, ingilis və rus. Hər dil ayrıca ünvanda yaşayır və hreflang ilə digərlərinə bağlanır, yəni üçü də axtarış sistemləri üçün müstəqil səhifədir.",
          },
          {
            q: "Sayt harada yerləşdirilib?",
            a: "Öz VPS-ində. Next.js prosesi PM2 ilə saxlanılır, qarşıda Nginx reverse proxy dayanır. Bu seçim SQLite bazasının və admindən yüklənən şəkillərin davamlı diskdə qalması üçündür.",
          },
        ],
      },
      6: {
        metaTitle: "ZM Tech — İT xidmətləri şirkəti üçün korporativ sayt | Layihə təhlili",
        metaDescription:
          "İT xidmətləri şirkəti üçün React və Vite ilə qurulmuş korporativ sayt: dörd xidmət tab sistemində, mərhələli iş prosesi, rəylər və FAQ akkordeonu.",
        h1: "ZM Tech — İT xidmətləri şirkətinin korporativ saytı",
        summary:
          "Veb development, kibertəhlükəsizlik, 1C optimizasiyası və hostinq xidmətləri təklif edən şirkət üçün tək səhifəli korporativ sayt. React və Vite ilə qurulub; dörd xidmət istiqaməti tab sistemində təqdim olunur.",
        client: "ZM Tech — veb development, kibertəhlükəsizlik və 1C xidmətləri təklif edən İT şirkəti",
        role:
          "Frontend development — səhifə arxitekturası, tab və akkordeon komponentləri, responsiv tərtibat, animasiyalar və deploy.",
        problem:
          "İT xidməti satan şirkətin saytında əsas çətinlik xidmətlərin bir-birinə oxşamasıdır: veb sayt hazırlanması, kibertəhlükəsizlik, 1C optimizasiyası və hostinq tamam fərqli alıcılara satılır, amma hamısı eyni siyahıda sadəcə «xidmət» kimi görünür. Ziyarətçi öz probleminin bu siyahıda olub-olmadığını bir baxışda anlamalı idi — dörd bölməni ardıcıl oxumadan.",
        results:
          "Sayt 2025-ci ilin avqustundan canlıdır. Masaüstü performansı yüksəkdir, mobil ölçmə isə hədəfin altındadır — səbəb şəkil və şrift yüküdür, optimallaşdırma planlaşdırılır. Rəqəm yaxşılaşandan sonra bura yazılacaq.",
        features: [
          "Dörd xidmət istiqaməti tab sistemində: veb sayt hazırlanması, kibertəhlükəsizlik, 1C optimizasiyası, hostinq və test",
          "Hər tab öz təsviri ilə eyni panelin içində açılır — səhifə uzanmır",
          "Dörd mərhələli iş prosesi: kəşf və planlama, dizayn və prototip, development, deploy və dəstək",
          "Fasiləsiz sürüşən tərəfdaş loqoları lenti",
          "Müştəri rəyləri bölməsi — ad, vəzifə və şirkət göstərilməklə",
          "Komanda və missiyanı izah edən «haqqımızda» bölməsi",
          "Akkordeon formatında tez-tez verilən suallar",
          "Səhifə sonunda əlaqə çağırışı",
        ],
        decisions: [
          {
            title: "Dörd xidmət, bir panel",
            body: "Xidmətləri alt-alta düzsək səhifə dörd ekran uzanır və ziyarətçi öz istiqamətini tapana qədər sürüşdürməli olur. Tab sistemi hamısının adını eyni anda göstərir, detalı isə yalnız seçilənə açır. Nəticədə ziyarətçi bir baxışda şirkətin nə etdiyini görür və yalnız özünə aid olanı oxuyur.",
          },
          {
            title: "Niyə React + Vite, Next.js yox?",
            body: "Sayt tam statik marketinq materialıdır: server məntiqi, istifadəçi hesabı və dinamik məzmun yoxdur. Bu profildə Next.js-in server imkanları heç vaxt işə düşmür, amma build və deploy mürəkkəbliyi qalır. Vite ilə build həm daha kiçikdir, həm də adi statik hostinqdə problemsiz işləyir — texnologiya layihənin ölçüsünə uyğun seçilib.",
          },
          {
            title: "FAQ akkordeon kimi qurulub",
            body: "Bütün sualları açıq göstərmək səhifəni mətn divarına çevirir və heç kim oxumur. Akkordeon ziyarətçiyə yalnız başlıqları gözdən keçirib özünə aid olanı açmaq imkanı verir. Sual mətnləri isə sənəddə qalır — yəni həm insan, həm axtarış sistemi üçün görünən olur, sadəcə yer tutmur.",
          },
          {
            title: "Dil seçimi mövqe bəyanatıdır",
            body: "Sayt tamamilə ingilis dilindədir və bu, texniki deyil, strateji qərardır. Dil ziyarətçiyə ilk saniyədə kimə xitab edildiyini bildirir: yerli bazara yönəlmiş sayt azərbaycanca danışır, ingiliscə sayt isə beynəlxalq müştəri ilə işləməyə hazır olduğunu göstərir. Bir dildə səliqəli sayt üç dildə yarımçıq saytdan güclüdür.",
          },
          {
            title: "İş prosesi bölməsi qeyri-müəyyənliyi azaldır",
            body: "İT xidməti alan adamın birinci sualı «bu iş necə gedəcək» olur. Dörd mərhələli proses bölməsi məhz buna cavab verir: kəşf, dizayn, development, dəstək. Bu bölmə ilk əlaqədən əvvəl verilən sualların sayını azaldır və danışığı birbaşa məsələnin mahiyyətindən başlamağa imkan verir.",
          },
        ],
      },
      10: {
        metaTitle: "RentCar Baku — lüks avtomobil icarəsi platforması | Layihə təhlili",
        metaDescription:
          "Bakıda lüks avtomobil icarəsi üçün Next.js platforması: marka, kateqoriya və büdcə filtri, avtomobil kataloqu, bloq və üç dilli marşrutlaşdırma. Layihə təhlili.",
        h1: "RentCar Baku — lüks avtomobil icarəsi platforması",
        summary:
          "Premium avtomobil icarəsi üçün üç dilli Next.js platforması. Marka, kateqoriya və gündəlik büdcə üzrə filtr, hər avtomobilin texniki pasportu və WhatsApp üzərindən sifariş axını.",
        client:
          "Şəxsi demo layihə — real müştəri sifarişi deyil. Bakı avtomobil icarəsi bazarı üçün istifadəyə hazır platforma kimi qurulub.",
        role:
          "Layihənin bütün mərhələləri: konsepsiya, məlumat modeli, interfeys dizaynı, frontend development, çoxdilli struktur və deploy.",
        problem:
          "Bakıda lüks avtomobil icarəsi əsasən Instagram və WhatsApp üzərindən gedir. Müştəri hansı avtomobilin mövcud olduğunu, gündəlik qiymətini və texniki göstəricilərini görmək üçün yazışmağa məcbur qalır — yəni qərar verməzdən əvvəl artıq bir insanla danışmalı olur. Bu, həm agentliyin vaxtını yeyir, həm də sadəcə qiymət araşdıran müştərilərin böyük hissəsini itirir. Sual belə qoyuldu: söhbətdən əvvəlki bütün mərhələ saytda bitə bilərmi?",
        results:
          "Platforma demo olaraq canlıdır və üç dildə işləyir. PageSpeed Insights ölçməsində performans mobildə 94, masaüstündə 100 baldır. Real icarə şirkəti üçün yalnız kataloq məlumatlarının, əlaqə nömrəsinin və brend elementlərinin dəyişdirilməsi kifayətdir — struktur olduğu kimi qalır.",
        features: [
          "Üç dil ayrıca marşrutda: /az, /en, /ru — hər dil axtarış sistemləri üçün müstəqil səhifədir",
          "Sürətli axtarış paneli: marka (Mercedes-Benz, Porsche, BMW, Rolls-Royce, Lamborghini, Bentley, Range Rover, Ferrari), kateqoriya (SUV, Sport, Business, Luxury) və gündəlik büdcə aralığı",
          "Avtomobil kataloqu — hər kartda gündəlik qiymət, maksimal sürət və at gücü",
          "Ayrıca səhifələr: avtomobillər, xidmətlər, bloq, haqqımızda, əlaqə",
          "Avtoparkda sinif bölgüsü: SUV, Sport, Business Sport, Ultra Luxury, Business, Supercar",
          "Üç addımlı icarə axını: avtomobili seç, sifarişi təsdiqlə, avtomobil qapına gəlsin",
          "Premium xidmətlər bölməsi: tam kasko sığorta, VIP çatdırılma, 24/7 konsyerj, deteylinq, korporativ paket",
          "Tarixli məqalələrlə bloq bölməsi",
          "Akkordeon formatında tez-tez verilən suallar: sənədlər, depozit, təhvil yeri, sığorta əhatəsi",
          "WhatsApp üzərindən birbaşa sifariş",
        ],
        decisions: [
          {
            title: "Filtr saytın giriş qapısıdır",
            body: "İcarə müştərisi kataloqa «nəyə baxım» deyə yox, konkret niyyətlə gəlir: SUV lazımdır, büdcə gündə 500 manata qədərdir. Ona görə filtr paneli kataloqun içində deyil, ilk ekranın dərhal altındadır. Üç sual — marka, kateqoriya, büdcə — real qərarın verildiyi üç oxdur; qalan hər şey bu üç cavabdan sonra gəlir.",
          },
          {
            title: "Hər avtomobil texniki pasportla",
            body: "Lüks avtomobil icarəsində qiymət tək başına kifayət etmir; alıcı at gücünə və maksimal sürətə də baxır. Bu iki rəqəmi kartın üzərinə çıxarmaq detal səhifəsinə keçidi lazımsız edir — müqayisə birbaşa kataloqda, tək ekranda aparılır. Az klik, tez qərar.",
          },
          {
            title: "Sifariş WhatsApp-da bitir, saytda yox",
            body: "Bu bazarda razılaşma söhbətdə bağlanır: tarix dəyişir, depozit müzakirə olunur, korporativ endirim danışılır. Ona görə saytda ödəniş inteqrasiyası qurmadım — qurulsaydı, istifadə olunmayan mürəkkəblik olardı. Sayt öz işini görür: seçim və qiymət aydınlaşır, sonra söhbət müştərinin onsuz da açıq olan tətbiqində davam edir.",
          },
          {
            title: "Üç dil marşrut səviyyəsində, düymə ilə deyil",
            body: "Dili yalnız JavaScript ilə dəyişən sayt axtarış sistemləri üçün tək səhifədir — rusdilli axtarışda ümumiyyətlə görünmür. Burada hər dil öz ünvanında yaşayır, yəni /ru variantı müstəqil indeksləşir. Turist və ekspat auditoriyası olan bir biznesdə bu, texniki detal deyil, birbaşa müştəri mənbəyidir.",
          },
          {
            title: "Şəkil ağırlığı ilə mübarizə",
            body: "Avtomobil saytı əslində foto saytıdır və optimallaşdırılmamış qalereya mobil bağlantıda saytı öldürür. next/image hər şəkli ekran ölçüsünə uyğun ölçüdə və müasir formatda verir, kataloqdakı şəkillər isə yalnız görünəndə yüklənir. Nəticədə mobil istifadəçi iyirmi avtomobilin fotosunu deyil, ekranındakı üçünü yükləyir.",
          },
          {
            title: "Bloq təsadüfi əlavə deyil",
            body: "«Bakıda avtomobil icarəsi: nələrə diqqət etməli» tipli yazılar məhz icarə axtaran adamın axtarış sisteminə yazdığı sualdır. Bloq bu axtarışları tutub kataloq səhifələrinə gətirən giriş nöqtəsidir — yəni məzmun bölməsi deyil, satış kanalının bir hissəsidir.",
          },
        ],
      },
      11: {
        metaTitle: "Telco Group — İT infrastruktur şirkəti üçün korporativ sayt | Layihə təhlili",
        metaDescription:
          "Data mərkəzi, kibertəhlükəsizlik və zəif axın sistemləri quran şirkət üçün Next.js saytı: canlı sistem statusu paneli, dörd həll qrupu, animasiyalı statistika.",
        h1: "Telco Group — İT infrastruktur və bulud şirkəti",
        summary:
          "Data mərkəzi, NOC/SOC, kibertəhlükəsizlik və zəif axın sistemləri quran şirkət üçün tək səhifəli korporativ sayt. Next.js ilə qurulub; canlı sistem statusu paneli və dörd həll qrupu ilə.",
        client:
          "Telco Group MMC — İT infrastruktur, kibertəhlükəsizlik və bulud həlləri şirkəti, Bakı (Chinar Park BC)",
        role:
          "Frontend & Full-Stack development — informasiya arxitekturası, komponent sistemi, status paneli və sayğac animasiyaları, performans və deploy.",
        problem:
          "Telco Group-un xidmət siyahısı iyirmi beşdən çox maddədən ibarətdir — serverdən UPS sisteminə, CCTV-dən yanğınsöndürmə sistemlərinə qədər. Bunları düz siyahı kimi vermək saytı kataloqa çevirir və ziyarətçi öz ehtiyacını tapa bilmir. İkinci çətinlik daha dərindir: infrastruktur şirkətinin əsas satış arqumenti dayanıqlılıqdır, amma bunu mətnlə yazmaq inandırıcı deyil — bu sahədəki hər şirkət eyni cümləni yazır.",
        results:
          "Sayt 2026-cı ilin fevralından canlıdır. Şirkətin öz domeni (telcogroup.az) hələ qoşulmadığı üçün hazırda Vercel ünvanında yayımlanır — domen bağlananda ünvan dəyişəcək, məzmun və struktur olduğu kimi qalır.",
        features: [
          "Hero-da canlı görünüşlü sistem statusu paneli: uptime faizi, bloklanmış təhdid sayı, aktiv bulud node-ları və cavab müddəti",
          "Başlıqda dəyişən söz animasiyası — şirkətin fəaliyyət sahələrini bir cümlədə növbələşdirir",
          "Dörd nömrələnmiş həll qrupu, hər biri öz alt siyahısı ilə: Data Center & Security, Building Management & Security, Electrical & Mechanical, Korporativ İT Təchizat",
          "İyirmi beşdən çox konkret sistem adı — server və storage-dən BMS və video wall sistemlərinə qədər",
          "Üç xüsusi xidmət bloku: şəbəkə infrastrukturu, kibertəhlükəsizlik, bulud xidmətləri",
          "Ekranda görünəndə sıfırdan hədəf rəqəmə qədər sayılan statistika blokları",
          "Hero-da dörd etibar göstəricisi: uptime zəmanəti, qorunan server sayı, 24/7 dəstək, ISO sertifikatı",
          "Tərəfdaş vendor loqoları bölməsi",
          "Səhifə sonunda konsultasiya çağırışı və tam əlaqə məlumatları",
        ],
        decisions: [
          {
            title: "Dayanıqlılığı yazmaq yox, göstərmək",
            body: "Hər infrastruktur şirkəti saytında «etibarlıyıq» yazır və bu cümlə artıq heç nə demir. Ona görə hero-nun sağ tərəfinə canlı görünüşlü status paneli qoydum: uptime faizi, bloklanan təhdidlərin sayı, aktiv node-lar, cavab müddəti. Ziyarətçi vədi oxumur — şirkətin gündəlik işlədiyi ekranın necə göründüyünü görür. Bu, mətnlə çatdırıla bilməyən mesajdır.",
          },
          {
            title: "İyirmi beş xidmət, dörd qrup",
            body: "Xidmətlərin hamısını bir siyahıya yığmaq ziyarətçini itirir; hər birinə ayrıca səhifə vermək isə bu qədər yaxın mövzuda bir-birini təkrarlayan zəif səhifələr yaradır. Aralıq həll seçildi: dörd nömrələnmiş qrup, hər qrupun içində konkret sistem adları. Data mərkəzi axtaran adam birinci qrupda dayanır, bina sistemləri axtaran ikincidə — heç kim iyirmi beş sətri ardıcıl oxumur.",
          },
          {
            title: "Konkret adlar saxlanıldı",
            body: "«Şəbəkə həlləri» kimi ümumi ifadələr əvəzinə saytda FortiNAC, BMS, IP telephony, diesel generator, structured cabling kimi konkret sistem adları var. Bu adlar texniki qərar verən adamın axtardığı sözlərdir; ümumi ifadələr isə nə axtarışda tapılır, nə də ekspertiza hissi verir. Marketinq dili burada ziyandır.",
          },
          {
            title: "Tək səhifə, çünki alıcı azdır",
            body: "Data mərkəzi tikdirən şirkətlərin sayı azdır və qərar bir neçə nəfər tərəfindən verilir. Belə auditoriya üçün çoxsəhifəli naviqasiya qurmaq yox, bir sürüşmədə tam təqdimat vermək daha effektivdir: problem, həll qrupları, texniki dərinlik, etibar göstəriciləri, əlaqə. Ziyarətçi menyu ilə tanış olmadan bütün arqumenti görür.",
          },
          {
            title: "Statistika sıfırdan sayılır",
            body: "Rəqəmlər ekranda görünən kimi sıfırdan hədəf dəyərə qədər sayılır. Bu, dekorativ effekt deyil: hərəkət gözü rəqəmə cəlb edir və sürüşdürərkən ötüb keçiləcək məlumat qeydə düşür. Statik yazılmış rəqəm eyni yerdə fərq edilmədən qalır.",
          },
          {
            title: "Şəkillər next/image üzərindən",
            body: "Vendor loqoları və fon şəkilləri next/image ilə ölçülənir və müasir formatda verilir. Sadə loqo lenti belə optimallaşdırılmadıqda mobil bağlantıda ilk açılışı gecikdirir — infrastruktur satan şirkətin saytında isə yavaş açılış birbaşa mesajla ziddiyyət təşkil edir.",
          },
        ],
      },
      12: {
        metaTitle: "Aykhan Ashrafov — kibertəhlükəsizlik mühəndisi portfoliosu | Layihə təhlili",
        metaDescription:
          "Kibertəhlükəsizlik mühəndisi üçün React və Vite ilə qurulmuş şəxsi portfolio: terminal estetikası, canlı log paneli, iş təcrübəsi xronologiyası və sertifikat bölməsi.",
        h1: "Aykhan Ashrafov — kibertəhlükəsizlik mühəndisi portfoliosu",
        summary:
          "Blue team və red team istiqamətlərində çalışan kibertəhlükəsizlik mühəndisi üçün tək səhifəli şəxsi portfolio. React və Vite ilə qurulub; terminal estetikası, canlı log paneli və doğrulana bilən sertifikat bölməsi ilə.",
        client: "Aykhan Ashrafov — kibertəhlükəsizlik mühəndisi (Cortex XDR, incident response), Bakı",
        role:
          "Konsepsiya, vizual dil, frontend development, animasiyalar və deploy — layihənin bütün mərhələləri.",
        problem:
          "Kibertəhlükəsizlik mütəxəssisinin şəxsi saytı adi CV səhifəsi ola bilməz. Bu sahədə işə götürən adam üç sualı bir neçə saniyəyə cavablandırmaq istəyir: bu adam blue team-dir yoxsa red team, hansı alətlərlə real işləyib və sertifikatları doğrulana biləndirmi. Standart portfolio şablonu bu üç sualın heç birinə cavab vermir — sahəyə aid olmayan neytral dizayn isə namizədi öz sənətindən kənar göstərir.",
        results: "",
        features: [
          "Terminal estetikası: mono şrift, komanda sətri işarələri və status etiketləri bütün interfeys boyunca",
          "Hero-da rolu növbələşdirən etiketlər: Blue Team, Red Team, Cortex XDR",
          "Canlı log paneli — ROOT@AYKHAN-SEC:~ pəncərəsində sətirlər ardıcıl axır (firewall, handshake, trafik skanı)",
          "«SYSTEM ONLINE» status göstəricisi və neytrallaşdırılmış təhdid sayğacı",
          "Dörd iş təcrübəsi xronoloji sıra ilə: şirkət, tarix aralığı, vəzifə təsviri və bacarıq etiketləri",
          "Texniki arsenal üç sütuna bölünüb: müdafiə (Blue Team & SOC), hücum (Red Team & Pentest), mühəndislik (Development & DB)",
          "Hər alətin yanında status etiketi: Active, Scanning, Logging, Engaged, Root Access, Standby",
          "Portfolio bölməsi «məxfilik səviyyəsi» etiketləri ilə: Classified, Public, Restricted",
          "Sertifikat bölməsi: verən təşkilat, tarix, kredensial nömrəsi və doğrulama linki",
          "«REQUEST CV» çağırışı və işə hazır olma statusu",
        ],
        decisions: [
          {
            title: "Vizual dil peşənin özündən götürüldü",
            body: "Sayt mono şrift, komanda sətri işarələri və terminal pəncərəsi üzərində qurulub. Bu, dekorativ seçim deyil: kibertəhlükəsizlik mütəxəssisinin işə götürəni gün ərzində məhz belə ekranlara baxır və bu dili tanıyır. Neytral korporativ şablon eyni məzmunu daşıyardı, amma namizədi sahədən kənar göstərərdi — burada dizaynın özü ixtisas siqnalıdır.",
          },
          {
            title: "Blue team və red team eyni anda göstərilir",
            body: "Bu sahədə namizədlər adətən bir tərəfə aid olur. Hero-da hər iki etiket növbələşir, arsenal isə müdafiə və hücum sütunlarına açıq şəkildə bölünüb. Beləliklə ziyarətçi ikili profili siyahını oxumadan, strukturun özündən görür — və hansı vakansiya üçün baxırsa, öz sütununu tapır.",
          },
          {
            title: "Log paneli statik mətnin edə bilmədiyini edir",
            body: "«Təhdidləri izləyirəm» cümləsi hər CV-də var və heç nə sübut etmir. Onun yerinə hero-da axan log pəncərəsi dayanır: firewall bloku, handshake deşifrəsi, trafik skanı. Bu, iddia deyil, işin necə göründüyünün nümayişidir. Eyni prinsip neytrallaşdırılmış təhdid sayğacına da aiddir — rəqəm hərəkət edəndə oxunur.",
          },
          {
            title: "Alətlərin yanında status etiketi var",
            body: "Bacarıq siyahılarının problemi odur ki, hamısı eyni çəkidə görünür — Kali Linux ilə bir dəfə oynamış adamla onu gündəlik işlədən adam eyni sətri yazır. Hər alətin yanındakı Active, Standby, Root Access kimi etiketlər bu fərqi bir sözlə verir və siyahını real istifadə xəritəsinə çevirir.",
          },
          {
            title: "Sertifikatlar kredensial nömrəsi ilə birlikdə",
            body: "Sertifikat adı tək başına yoxlanıla bilməz. Ona görə hər sertifikatın yanında verən təşkilat, tarix, kredensial nömrəsi və doğrulama keçidi var. Bu, işə götürənin adətən əl ilə etdiyi işi əvvəlcədən görür — və namizədin gizlədəcək bir şeyi olmadığını göstərir.",
          },
          {
            title: "Tək səhifə, ankerli naviqasiya",
            body: "Şəxsi portfolio çox vaxt bir oturuşda, yuxarıdan aşağı oxunur. Ona görə bölmələr ayrı səhifələr deyil, eyni səhifədəki lövbərlərdir: təcrübə, arsenal, sertifikatlar, əlaqə. Ziyarətçi heç bir keçid gözləmədən tam mənzərəni alır, menyu isə ona lazım olan bölməyə birbaşa tullanma imkanı verir.",
          },
        ],
      },
    },
  },
};

export default dictionary;
