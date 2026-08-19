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
      1: "Müasir mebel brendi üçün tam e-ticarət təcrübəsi: komponent əsaslı arxitektura, kateqoriya filtrləri, məhsul detalları və səbət idarəetməsi. Vite ilə optimallaşdırılmış build sayəsində sürətli yüklənmə və hamar keçidlər.",
      8: "Əl işi zərgərlik və təbii ipək kəlağayı satan lüks marka üçün redaksiya üslublu e-ticarət saytı. Kolleksiya vitrini, jurnal bölməsi və üç dilli dəstək (AZ/EN/RU).",
      9: "Bakıda eksklüziv B2B biznes klubu üçün üzvlük saytı. Çoxaddımlı müraciət forması, tədbir təqvimi və seçilmiş auditoriya üçün nüfuzlu, redaksiya üslublu dizayn dili.",
      2: "Kibertəhlükəsizlik xidmətləri təklif edən şirkət platforması.",
      3: "Şirkət üçün korporativ məlumat idarəetmə platforması.",
      4: "Müştərilər və partnyorlar üçün vahid elektron ticarət platforması.",
      5: "Səyahət agentliyi üçün turlar vitrini.",
      6: "İT xidmətləri təklif edən şirkət platforması.",
      7: "Restoran müştəriləri üçün sürətli rəqəmsal menyu.",
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
};

export default dictionary;
