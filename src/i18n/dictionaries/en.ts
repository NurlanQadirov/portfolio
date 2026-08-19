import type { Dictionary } from "./az";

const dictionary: Dictionary = {
  meta: {
    titleDefault: "Nurlan Qadirov — Frontend & Full-Stack Developer in Baku",
    titleTemplate: "%s | Nurlan Qadirov",
    description:
      "Frontend & Full-Stack developer based in Baku, Azerbaijan. I build fast, secure e-commerce and corporate websites with React, Next.js and TypeScript.",
    keywords: [
      "frontend developer Baku",
      "full stack developer Azerbaijan",
      "Next.js developer Azerbaijan",
      "React developer Baku",
      "hire freelance web developer",
      "ecommerce development Azerbaijan",
      "website development Baku",
      "TypeScript developer",
      "Nurlan Qadirov",
    ],
  },
  nav: {
    about: "About",
    services: "Services",
    projects: "Projects",
    faq: "FAQ",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
  },
  hero: {
    metaLine: "BAKU 40.4093° N, 49.8671° E",
    badge: "Next.js & TypeScript Specialist",
    titleLead: "Frontend & Full-Stack Engineer",
    titleAccent: "Building",
    titleTail: "Complex Web Applications",
    lede:
      "I specialise in the TypeScript, React and Next.js ecosystem, architecting digital products that are fast, secure and built around the people using them.",
    ctaProjects: "View my work",
    ctaGithub: "GitHub",
    available: "Available for new projects",
  },
  about: {
    label: "About",
    title: "Experience & Stack",
    statement:
      "I have been working professionally in frontend development for over two years.",
    body:
      "I currently work inside a cybersecurity company, which taught me to look at code through more than just a visual lens — performance and security matter equally. Every interface I build has to answer three questions at once: is it fast, is it secure, is it clear to the person using it?",
    stackLabel: "Stack",
    spec: {
      role: "Role",
      location: "Location",
      locationValue: "Baku, Azerbaijan — remote & on-site",
      experience: "Experience",
      experienceValue: "2+ years",
      projects: "Projects",
      projectsValue: "delivered",
      languages: "Languages",
      languagesValue: "Azerbaijani, English, Russian",
      status: "Status",
      statusValue: "Available for new projects",
    },
  },
  projects: {
    label: "Work",
    title: "Selected Projects",
    lede:
      "E-commerce platforms, corporate sites and product interfaces built with React, Next.js, TypeScript and Tailwind CSS.",
    viewSite: "Visit site",
    comingSoon: "Link coming soon",
    desc: {
      1: "A complete e-commerce experience for a modern furniture brand: component-driven architecture, category filtering, detailed product pages and persistent cart state. Vite's optimised build keeps loading fast and transitions smooth.",
      8: "An editorial-style e-commerce site for a luxury brand selling handmade jewellery and natural silk kəlağayı. Curated collection showcase, lifestyle journal and full trilingual support (AZ/EN/RU).",
      9: "A membership site for an invitation-only B2B business club in Baku. Multi-step application flow, events calendar and a deliberately exclusive editorial identity aimed at a high-net-worth audience.",
      2: "Corporate platform for a company providing cybersecurity services.",
      3: "Corporate data management platform built for internal company records.",
      4: "Unified e-commerce platform connecting customers and business partners.",
      5: "Tour showcase for a travel agency.",
      6: "Company platform for an IT services provider.",
      7: "Fast digital menu for restaurant guests.",
    },
  },
  services: {
    label: "Services",
    title: "What I do",
    lede:
      "Everything from idea to live site: design, code, performance optimisation and deployment.",
    seeMore: "Learn more",
    metaTitle: "Services — website and e-commerce development",
    metaDescription:
      "Website development, e-commerce builds, Next.js development and landing pages. React, Next.js and TypeScript, delivered from Baku.",
    includesHeading: "What's included",
    stepsHeading: "How it works",
    faqHeading: "Frequently asked questions",
    otherServices: "Other services",
    priceHeading: "Pricing",
    priceNote:
      "Final pricing depends on scope — message me for a free estimate.",
    priceOnRequest: "On request",
    pages: {
      "web-development": {
        metaTitle: "Website development — Next.js & React",
        metaDescription:
          "Custom-coded website development with Next.js and React. Fast, mobile-ready, SEO-prepared corporate sites. Free estimate.",
        name: "Website Development",
        tagline: "Not a template — code written for your business.",
        h1: "Website development",
        intro:
          "Buying a template is easy, but a template does not know your business: it ships code you never use, loads slowly, and breaks the moment you need something changed. I write your site from scratch with Next.js and TypeScript — only the features you actually need, a clean structure, and room to grow later.",
        includes: [
          "Custom design — no off-the-shelf templates",
          "Full responsive behaviour across mobile, tablet and desktop",
          "Technical SEO foundation: metadata, structured data, sitemap, robots.txt",
          "Core Web Vitals performance optimisation",
          "Multilingual structure (AZ/EN/RU) where needed",
          "Admin panel or content management where needed",
          "Deployment on Vercel with your own domain connected",
        ],
        steps: [
          {
            title: "Conversation and requirements",
            body: "We clarify your business, your audience and what the site actually needs to achieve. This stage is free.",
          },
          {
            title: "Structure and design",
            body: "Page structure first, then visual design. Once you approve, we move to code.",
          },
          {
            title: "Development",
            body: "Built with Next.js. You see progress on a live link and give feedback as we go.",
          },
          {
            title: "Testing and launch",
            body: "Performance, mobile and SEO checks, then launch on your own domain.",
          },
        ],
        faq: [
          {
            q: "How long does a website take?",
            a: "A straightforward corporate site usually takes 1–2 weeks; heavier projects 3–6 weeks. I give a firm timeline once the requirements are clear.",
          },
          {
            q: "WordPress or custom code — which is better?",
            a: "For a content-heavy blog, WordPress is a reasonable choice. But if speed, security and custom functionality matter, a Next.js site is clearly stronger: it loads faster and carries no plugin dependencies or the security holes that come with them.",
          },
        ],
      },
      ecommerce: {
        metaTitle: "E-commerce development — online store builds",
        metaDescription:
          "E-commerce website development: product catalogue, filtering, cart and payment integration. Fast online stores built with Next.js.",
        name: "E-commerce Development",
        tagline: "From product catalogue to checkout — a complete store.",
        h1: "E-commerce development",
        intro:
          "In an online store, every second of delay is a customer who did not buy. I build e-commerce sites with speed as the first priority: product pages open instantly, filters respond without waiting, and the cart survives navigation.",
        includes: [
          "Product catalogue, categories and search",
          "Filtering and sorting (price, category, attributes)",
          "Cart and checkout flow",
          "Payment gateway integration",
          "Admin panel for products, pricing and orders",
          "Product structured data so price and stock appear in Google",
          "Multi-language and multi-currency structure where needed",
        ],
        steps: [
          {
            title: "Catalogue structure",
            body: "We plan product types, categories, filter logic and the order flow.",
          },
          {
            title: "Design",
            body: "Product card, product page, cart and checkout screens — designed around conversion.",
          },
          {
            title: "Development and integration",
            body: "Frontend, admin panel and payment gateway connected, with test orders run end to end.",
          },
          {
            title: "Data load and launch",
            body: "Initial product import, performance testing and go-live.",
          },
        ],
        faq: [
          {
            q: "Can you integrate a payment gateway?",
            a: "Yes — both local bank acquiring and international payment providers. Which one fits depends on your company documents and expected volume, and we choose it together.",
          },
          {
            q: "Will I be able to add products myself?",
            a: "Yes, an admin panel is included. You manage products, prices, stock and images without touching code.",
          },
        ],
      },
      nextjs: {
        metaTitle: "Next.js developer — freelance Next.js & React specialist",
        metaDescription:
          "Freelance Next.js developer: App Router, SSR/ISR, TypeScript and performance optimisation. Join your existing project or build from scratch.",
        name: "Next.js Development",
        tagline: "App Router, SSR, performance — deep Next.js work.",
        h1: "Next.js developer",
        intro:
          "I use Next.js knowing how it actually works, not by copying a starter: the server/client component boundary, choosing a render strategy (SSG, ISR or SSR), caching behaviour and bundle size. Those details decide how fast the finished site really is.",
        includes: [
          "Greenfield builds with the Next.js App Router",
          "Joining an existing codebase, or migrating Pages Router to App Router",
          "Render strategy selection: static, ISR or server-side",
          "Core Web Vitals optimisation (LCP, CLS, INP)",
          "Structured data and technical SEO",
          "Type safety with TypeScript",
          "Vercel deployment, environment and domain configuration",
        ],
        steps: [
          {
            title: "Audit",
            body: "If a project already exists, we start with a performance and architecture audit — you get a written list of issues.",
          },
          {
            title: "Plan",
            body: "We prioritise changes by what each one will actually gain you.",
          },
          {
            title: "Execution",
            body: "Applied step by step, with a measurable result at each stage.",
          },
          {
            title: "Measurement",
            body: "Before and after numbers: load time, Lighthouse score, bundle size.",
          },
        ],
        faq: [
          {
            q: "My existing site is slow — can you help?",
            a: "Yes. We start with an audit to find the actual cause (images, bundle size, render strategy, third-party scripts) and I give you a prioritised fix plan. A handful of targeted changes usually makes a large difference.",
          },
          {
            q: "Can you join our team temporarily?",
            a: "Yes — hourly or project-based engagement with an existing team works fine.",
          },
        ],
      },
      landing: {
        metaTitle: "Landing page development — built for conversion",
        metaDescription:
          "Single-page landing sites built for conversion: fast, mobile-first and campaign-ready. Ideal for paid advertising traffic.",
        name: "Landing Page",
        tagline: "One page, one goal: an enquiry.",
        h1: "Landing page development",
        intro:
          "A landing page has exactly one job: turn a visitor into an enquiry. So every element serves that goal — the order of the copy, where the form sits, how fast it loads. If you are going to spend money on advertising, the page that traffic lands on has to be fast and unambiguous.",
        includes: [
          "Conversion-focused structure and copy sequence",
          "Enquiry form routed to email and/or WhatsApp",
          "Very fast loading — critical for paid traffic",
          "Mobile-first design",
          "Analytics setup (Google Analytics / Meta Pixel)",
          "Structure ready for A/B testing",
        ],
        steps: [
          {
            title: "Offer and audience",
            body: "What you sell, to whom, and which objection you need to answer — the copy structure follows from this.",
          },
          {
            title: "Design",
            body: "A single flow: attention → value → proof → enquiry.",
          },
          {
            title: "Development",
            body: "Build, form wiring and analytics.",
          },
          {
            title: "Launch",
            body: "Deploy, speed test, campaign-ready.",
          },
        ],
        faq: [
          {
            q: "What is the difference between a landing page and a normal site?",
            a: "A normal site presents your business fully across many pages. A landing page exists for one campaign, one product, one goal — nothing competes for attention, which is why it converts better on advertising traffic.",
          },
          {
            q: "How long does it take?",
            a: "Usually 3–7 working days, faster if the copy and images are ready.",
          },
        ],
      },
    },
  },
  faq: {
    label: "FAQ",
    title: "Frequently asked questions",
    lede: "The questions clients ask most, answered honestly.",
    metaTitle: "Frequently asked questions — website development",
    metaDescription:
      "Common questions about website development: pricing, timelines, technology choices, support and domains.",
    items: [
      {
        q: "How much does a website cost?",
        a: "Pricing depends on the number of pages and the functionality involved. A single-page landing site sits at the lower end, a multilingual e-commerce build at the upper end. Once I understand your requirements I give a firm price that does not change — message me for a free estimate.",
      },
      {
        q: "How long does it take?",
        a: "Landing page 3–7 working days, corporate site 1–2 weeks, e-commerce 3–6 weeks. The slowest part is usually not the code — it is preparing the content, meaning the copy and images.",
      },
      {
        q: "Template (WordPress) or custom code?",
        a: "Honest answer: both have their place. For a simple blog, WordPress is enough and cheaper. But if speed, security and custom functionality matter, a Next.js build is clearly stronger — no plugin dependency, faster loading and better results on Google's performance metrics.",
      },
      {
        q: "Are the domain and hosting included?",
        a: "I help you register the domain in your own name — you own it, and that matters. For hosting I use Vercel; for small and mid-sized sites the free tier is usually sufficient, so there is often no monthly hosting cost.",
      },
      {
        q: "Will I be able to manage the site myself?",
        a: "Yes, an admin panel is built where it is needed — you change products, prices, text and images without code. I walk you through how it works at handover.",
      },
      {
        q: "Is there support after launch?",
        a: "Yes. Small fixes and any bugs are handled free for a period after handover. Beyond that we agree either hourly work or a monthly support arrangement.",
      },
      {
        q: "What does it take to rank on Google?",
        a: "I build the technical side: fast loading, correct metadata, structured data, sitemap, mobile readiness. But to be honest — technical SEO is a foundation, not a guarantee. Real results also need content on your topic and links from other sites, and that is ongoing work.",
      },
      {
        q: "Do you work remotely, or do we need to meet?",
        a: "Either works. I am based in Baku so we can meet; most projects, though, run entirely remotely over WhatsApp and email. I work in Azerbaijani, English and Russian.",
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "Let's work together",
    lede:
      "Have a project in mind, or looking for a frontend developer to join your team? Message me directly on WhatsApp or by email.",
    statement: "Tell me about your project — I usually reply the same day.",
    ctaWhatsapp: "Message on WhatsApp",
    ctaEmail: "Send an email",
    spec: {
      name: "Name",
      role: "Role",
      location: "Location",
      whatsapp: "WhatsApp",
      email: "Email",
      network: "Profiles",
    },
  },
  common: {
    backHome: "Home",
    breadcrumbHome: "Home",
  },
};

export default dictionary;
