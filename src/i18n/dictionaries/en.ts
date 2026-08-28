import type { Dictionary } from "./az";

const dictionary: Dictionary = {
  meta: {
    titleDefault: "Nurlan Qadirov — Website Development | Frontend Developer",
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
      "I build e-commerce and corporate websites with React, Next.js and TypeScript — fast to load, secure, and working properly on mobile.",
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
      8: "A full-stack e-commerce site built with Next.js for a luxury brand selling handmade jewellery and natural silk kəlağayı. Trilingual storefront (AZ/EN/RU), lifestyle journal and an admin panel the brand runs itself — products, collections and articles.",
      9: "A full-stack membership site for an invitation-only B2B business club in Baku. Multi-step application flow, events calendar and an admin panel where the club manages events, news and incoming applications.",
      2: "Corporate site for a cybersecurity and IT consulting firm: four service areas, a staged delivery process and client testimonials.",
      3: "Corporate site for a digital transformation company covering software development, Cisco network infrastructure, cybersecurity and IT consulting.",
      4: "Single-page site for a 360° business consultancy — finance, marketing, legal, IT, HR and procurement.",
      6: "A corporate site for an IT company offering web development, cybersecurity, 1C optimisation and hosting. Four service tracks in a tabbed panel, a staged delivery process, testimonials and an FAQ accordion.",
      7: "Fast digital menu for restaurant guests.",
      10: "A three-language Next.js platform for luxury car rental in Baku: filtering by brand, class and daily budget, full specs on every car, a blog and a WhatsApp booking flow.",
      11: "A corporate site for an IT infrastructure company building data centres, cybersecurity and low-current systems: a live system-status panel, 25+ systems across four solution groups and animated statistics.",
      12: "A terminal-styled personal portfolio for a cybersecurity engineer: a live log panel, four roles of work history, a technical arsenal split into three groups and a certifications vault with credential IDs.",
    },
  },
  services: {
    label: "Services",
    title: "Website development services",
    lede:
      "Everything from idea to live site: corporate websites, online stores, landing pages and web design — code, performance optimisation and deployment included.",
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
    priceFrom: "from {amount} AZN",
    priceFromHour: "from {amount} AZN/hour",
    pages: {
      "web-development": {
        metaTitle: "Website development — Next.js & React",
        metaDescription:
          "Custom-coded website development with Next.js and React. Fast, mobile-ready, SEO-prepared corporate sites. Free estimate.",
        name: "Website Development",
        tagline: "Not a template — code written for your business.",
        h1: "Website development",
        intro:
          "Buying a template is easy, but a template does not know your business: it ships code you never use, loads slowly, and breaks the moment you need something changed. I write your website from scratch with Next.js and TypeScript — from web design through to deployment: only the features you actually need, a clean structure, and room to grow later.",
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
        a: "A landing page starts at 600 AZN, a corporate site at 1 200 AZN and an e-commerce build at 2 500 AZN. Those are starting points — the final figure depends on the number of pages, the functionality and how many languages you need. Once I understand your requirements I give a firm price that does not change after work begins. Message me for a free estimate.",
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

  caseStudies: {
    label: "Case study",
    liveSite: "Visit live site",
    featuresHeading: "What the site includes",
    decisionsHeading: "Technical decisions",
    architectureHeading: "Architecture",
    faqHeading: "Questions about this project",
    problemHeading: "The problem",
    resultsHeading: "Results",
    overviewHeading: "Overview",
    clientLabel: "Client",
    roleLabel: "Role",
    stackLabel: "Stack",
    dateLabel: "Date",
    monthNames: [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ],
    metricLabels: {
      lighthouseMobile: "Lighthouse (mobile)",
      lighthouseDesktop: "Lighthouse (desktop)",
      lcp: "LCP",
      languages: "Languages",
      pages: "Pages",
    },
    items: {
      9: {
        metaTitle:
          "Aristocrat Business Club — B2B membership site with an admin panel | Case study",
        metaDescription:
          "A full-stack Next.js site for an invitation-only B2B business club in Baku: a multi-step application form, an events calendar and an admin panel that runs on JSON files instead of a database.",
        h1: "Aristocrat — an invitation-only B2B club and its admin panel",
        summary:
          "A membership site for a Baku business club that admits members by invitation only. Built full-stack on Next.js: a multi-step application flow, an events calendar and an admin panel the club runs itself — for events, news and incoming applications. There is deliberately no database; all data lives in JSON files on the server.",
        client: "Aristocrat Social & Business Club — closed B2B network, Baku",
        role:
          "Full-stack development — page architecture, multi-step form logic, Next.js route handlers, a JSON-backed content layer, a JWT-protected admin panel, the component system, animations and the VPS deployment (PM2 + Nginx).",
        problem:
          "A site for an invitation-only club has to do two contradictory jobs at once: introduce the club without inviting everyone. A large “sign up” button breaks the claim of exclusivity on the very first screen; a site with no route to apply is simply non-functional. The second problem starts once the site is live. The events calendar is the only visible proof that the club is alive — and a calendar full of past dates says the opposite. Applications are the same: the club's entire intake runs through that form and it must not get lost in an inbox. The site did not just have to be built; it had to be maintainable by the club itself.",
        results:
          "The site has been live since August 2026. The club manages its events calendar, news and incoming membership applications from the admin panel itself, so keeping the calendar current — the site's main argument — no longer depends on a developer. Mobile performance has been measured and sits below target; optimisation is planned and the figure will be published here once it improves.",
        features: [
          "Multi-step application form — one question at a time, with a progress indicator",
          "2026 annual events calendar with dates and venue details",
          "Audience segments: entrepreneurs, startups, senior executives",
          "Benefits section: closed network, exclusive events, investment access, knowledge exchange",
          "Partners section",
          "Editorial sections explaining the philosophy of the club",
          "A dedicated events page — upcoming events by date and category (Closed Summit, Informal Meeting, Gala)",
          "A dedicated news page",
          "Membership split into two tracks: individual (Individuals) and corporate (Companies)",
          "Admin panel: create, edit and delete events, with date, venue and category",
          "News articles published from the admin panel",
          "Applications from the form listed inside the panel",
          "Event and news images uploaded straight from the panel",
          "JWT-protected admin login — panel routes are closed at middleware level",
        ],
        architecture: [
          {
            layer: "Frontend",
            body: "Next.js App Router. Home page, membership tracks, events, news and the application pages. The interface runs in three languages and the choice is kept in the browser — there is no separate URL per language, a trade-off explained under the technical decisions below.",
          },
          {
            layer: "Backend",
            body: "There is no separate API server — the backend is a set of route handlers inside the same Next.js app: receiving applications, writing events and news, handling image uploads. The admin panel lives on the `/admin` routes of that same project, so type definitions, components and the deployment pipeline are shared with the public site.",
          },
          {
            layer: "Data layer",
            body: "There is no database. Events, news and incoming applications are stored as JSON files on the server's disk: the admin panel writes the file, the pages read it. The reasoning is in the “Why no database?” decision below.",
          },
          {
            layer: "Authentication",
            body: "A hand-rolled JWT flow: the token is signed server-side and written into an `httpOnly` cookie. Everything under `/admin` is checked both at middleware level and inside each individual route handler.",
          },
          {
            layer: "Media",
            body: "Event and news images are uploaded from the admin panel and written to the VPS disk; on the site they are served through `next/image`.",
          },
          {
            layer: "Infrastructure",
            body: "The Next.js server process runs on a VPS under PM2, with Nginx in front as a reverse proxy — SSL, compression and static-file caching sit there.",
          },
        ],
        decisions: [
          {
            title: "Why a multi-step form?",
            body: "A membership application needs a lot of questions. Showing them all on one screen scares people off. I broke the form into steps and added a progress indicator — with one question per screen, people are far more likely to finish what they started.",
          },
          {
            title: "The design filters the audience",
            body: "The club is not mass-market, and the visual language has to say so: quiet colours, generous whitespace, editorial typography. A bright, cheerful design would have contradicted the message — the site signals who it is inviting through the way it looks, not only through what it says.",
          },
          {
            title: "Static generation for an instant open",
            body: "The content of the presentation pages rarely changes, so they are generated as ready HTML at build time. There is no server wait — someone arriving with an invitation finds the site already open. Content that does change, like events and news, is read from the server instead.",
          },
          {
            title: "Membership split into two separate tracks",
            body: "An entrepreneur's individual membership and a company's corporate package are not the same product — the price, the benefits and the person signing off all differ. Separating the two paths in the menu puts each buyer on their own page with the first click. A single “membership” page would have half-answered both.",
          },
          {
            title: "The events page offers a calendar instead of a promise",
            body: "The biggest doubt about a closed club is whether anything actually happens there. A list of events with dates and categories closes that doubt at a glance — the answer comes from the data itself, not from a paragraph of copy. This is the section that turns the site from a static brochure into the club's live shop window.",
          },
          {
            title: "The Baku skyline in the background, not a stock photo",
            body: "The club is not an international network; it is the business environment of one specific city. The hero carries the recognisable Baku skyline, so a visitor understands within a second where this club sits and among whom. A neutral stock photograph would have filled the same space and said nothing.",
          },
          {
            title: "Why no database?",
            body: "The club's entire dataset is a handful of records: dozens of events a year, a few dozen news items, a few applications a month. Setting up a relational database at that volume means another process, another backup regime and migration discipline — for no real gain. The data lives in JSON files on the server: the admin panel writes the file, the page reads it. A backup is a copied folder, and the history of the content is visible in the files themselves. This is not a “there was no time to set up a database” decision — it is a decision sized to the load. A database becomes necessary when the write rate rises and several people start editing at once; not before. The hard part of engineering is not adding technology, it is the discipline of not adding what is not needed.",
          },
          {
            title: "A calendar only counts as proof while it is current",
            body: "I argued above that the events page is the club's live shop window — that is true only while the calendar stays current. A page full of past dates shows a club that has stopped, not one that is running. So events do not live in code, they live in the admin panel: the club adds a new date itself, without me. Here the admin panel is not an extra feature — it is the mechanism keeping the site's main argument standing.",
          },
          {
            title: "Applications land in the panel, not in an inbox",
            body: "A membership application is the most valuable piece of data this club handles. A form that relies on an email notification alone disappears behind one spam filter, and the worst part is that nobody knows it disappeared. So every application is stored on the server and shown as a list in the admin panel — the club can go back to it whenever it wants.",
          },
          {
            title: "The session token lives in an httpOnly cookie",
            body: "The panel holds the club's event plan and the personal details of the business people applying to it — in a club whose whole proposition is privacy, that is the most sensitive part of the system. Had the token been kept in `localStorage`, any XSS hole could read it. An `httpOnly` cookie is invisible to JavaScript, and `SameSite` stops the token from riding along on requests issued by another site. The check is not only in middleware but inside every route handler: hiding an interface is not protection, only appearance.",
          },
          {
            title: "A VPS, because written files have to survive",
            body: "The site writes its own data to the server's disk: JSON files and uploaded images. In a serverless environment the file system is ephemeral — the panel writes something and the next deployment erases it. So the application runs on a VPS: PM2 keeps the Next.js process alive, Nginx handles SSL and static files in front. Working on JSON only makes sense where there is a persistent disk — the two are not separate choices, they are the same one.",
          },
          {
            title: "Three languages on one URL — a deliberate trade-off",
            body: "The interface runs in three languages, but each one does not get its own URL: the choice is kept in the browser. The price of that is that search engines do not index the three languages as separate pages. Here the trade-off is acceptable, because a club member does not arrive from a Google search — they arrive by invitation, from a direct link. If organic search were a channel, language would have to be split at route level; in this project that work would have been complexity serving nobody.",
          },
        ],
        faq: [
          {
            q: "Does the club need a developer to add an event or a news item?",
            a: "No. Events, news and their images are managed from the admin panel — the club updates the calendar itself, with no code change involved.",
          },
          {
            q: "Where do submissions from the application form go?",
            a: "Every application is stored on the server and listed in the admin panel, so nothing depends on an email notification alone. The club can go back to past applications at any time.",
          },
          {
            q: "Why does the project have no database?",
            a: "The club's data volume is small — dozens of events and news items a year, a few applications a month. At that load a relational database would demand another process and a backup regime without adding anything. The data is stored in JSON files on the server; moving to a database is a planned step for when the write rate rises, not an outstanding task.",
          },
          {
            q: "Who built the site and the admin panel?",
            a: "Every layer — the frontend, the Next.js route handlers, the content layer, the admin panel, the authentication and the VPS deployment — was written by Nurlan Qadirov.",
          },
          {
            q: "How many languages does the site run in?",
            a: "The interface runs in three: Azerbaijani, English and Russian. There is no separate URL per language — the choice is kept in the browser. That is a deliberate trade-off, because the club's audience arrives by invitation rather than through search.",
          },
        ],
      },
      2: {
        metaTitle: "Cyber Mine — cybersecurity company site | Case study",
        metaDescription:
          "A React site for a cybersecurity and IT consulting firm: service sections, a staged delivery process, testimonials and trust signals.",
        h1: "Cyber Mine — cybersecurity consulting",
        summary:
          "A corporate site for a cybersecurity and IT consulting firm. Built with React and Vite, organised around services, process and trust signals.",
        client: "Cyber Mine — cybersecurity and IT consulting firm",
        role:
          "Frontend development — page architecture, component system, responsive layout and deployment.",
        problem:
          "Cybersecurity is not a product you can inspect before buying — the client cannot verify what they are getting, so the decision rests entirely on trust. Explaining the service was never going to be enough: the site also had to show who the firm works with and in what order the work happens.",
        results:
          "The site has been live since August 2025 — more than a year in production. PageSpeed Insights measures performance at 91 on mobile and 98 on desktop.",
        features: [
          "Four service areas: MS Office 365 optimisation, cybersecurity consulting, CRM system services, technical documentation",
          "Client logo strip",
          "Four-stage delivery process: analysis, strategic planning, implementation, support",
          "Section explaining what sets the firm apart",
          "Client testimonials",
          "Closing contact call to action",
          "Four separate pages: home, services, about, contact",
          "A hexagonal network motif as the hero visual",
          "Three advantage blocks: expert team, tailored solutions, 24/7 support",
        ],
        decisions: [
          {
            title: "Why React + Vite rather than Next.js?",
            body: "The site is a handful of static sections with no dynamic content or server logic. Next.js would have added complexity that buys nothing here. Technology should follow the requirement rather than the other way round — Vite gives a lighter build and stays simple to maintain.",
          },
          {
            title: "Trust signals near the top",
            body: "Selling security is selling trust. Client logos and testimonials sit high on the page, so a visitor sees who already relies on the firm before reading the detail of what it offers.",
          },
          {
            title: "A process section removes uncertainty",
            body: "The main worry for anyone buying consulting is \"how will this actually go\". The four-stage process section answers exactly that, which makes it easier to decide before making first contact.",
          },
          {
            title: "The hero opens with a position, not a service list",
            body: "The first sentence on the page is “the architect of your digital architecture” — not what is being sold, but what role is being played. A site that opens with a service list reads as a supplier; one that opens with a role reads as a partner. In consulting, that difference feeds straight into the price.",
          },
          {
            title: "The three advantage blocks answer three objections",
            body: "Expert team, tailored solutions and 24/7 support are not slogans picked at random. Each one answers a specific hesitation the buyer has: who will actually do this work, will it fit my situation, and what happens if something breaks at night. The section closes those questions before they get asked.",
          },
          {
            title: "The navigation is four real pages, not anchors",
            body: "The sections could have been anchored on one page, but services, the company and contact are different intents and deserve their own addresses. This structure gives a link that can be shared and lets each page be targeted separately in search.",
          },
        ],
      },
      3: {
        metaTitle: "Reform (MyData) — IT infrastructure company site | Case study",
        metaDescription:
          "A React site for a digital transformation company: software development, Cisco networking, cybersecurity and IT consulting.",
        h1: "Reform — a digital transformation company",
        summary:
          "A corporate site for a company delivering software, network infrastructure and cybersecurity solutions. Built with React and Vite.",
        client: "Reform (MyData) — IT infrastructure and digital transformation company",
        role:
          "Frontend development — page architecture, per-service pages, component system and deployment.",
        problem:
          "The company sells to two different people at the same time: the technical specialist who picks the infrastructure and the executive who signs off the budget. The first is searching for exact names like Cisco Nexus, C9300 and FortiNAC; the second closes the tab the moment those names appear. One site had to speak to both without losing either.",
        results:
          "The site has been live since August 2025. PageSpeed Insights measures performance at 99 on mobile and 86 on desktop — on a page carrying vendor logos from Cisco, Fortinet and others, the mobile result comes from serving those images at the size the screen actually needs.",
        features: [
          "Four practice areas: software development, Cisco network infrastructure, cybersecurity solutions, IT consulting",
          "A dedicated detail page for each area",
          "Standalone technologies section",
          "Four-stage delivery process",
          "Client testimonials",
          "Flow closing on a contact call to action",
          "A hero visual that describes the company as a code object",
          "Eight technology partners: Cisco, Microsoft, Fortinet, DNSSENSE, VMware, Veeam, Dell, HP",
          "Three advantages: certified specialists, a tailored approach, post-delivery support",
        ],
        decisions: [
          {
            title: "A separate section for technologies",
            body: "The audience was split: technical decision-makers on one side, company directors on the other. Specific names like Cisco Nexus, C9300 or FortiNAC mean a great deal to the first group and read as noise to the second. Moving that detail into its own section lets each audience find its own depth while the home page stays legible.",
          },
          {
            title: "One page per service",
            body: "Four practice areas attract four different kinds of client. Rather than compressing them onto a single page, each got its own — easier to read, and each area can be targeted separately in search.",
          },
          {
            title: "For an infrastructure company, speed is part of the message",
            body: "A firm selling networking and infrastructure cannot afford a slow website; the contradiction undermines the pitch. An optimised static build with Vite avoids it.",
          },
          {
            title: "Vendor logos are the strongest evidence available",
            body: "In the infrastructure market the client does not go by what a company says about itself; they go by who it works with. The names Cisco, Fortinet, VMware and Veeam establish the level a company operates at in a single line. Carrying the same message in prose would take a full paragraph and still land softer.",
          },
          {
            title: "The code block in the hero divides the audience",
            body: "A visual that renders the company as a code object does not say the same thing to every visitor — and that is exactly the point. The technical decision-maker reads it immediately; the non-technical visitor reads the plain sentence beside it. One screen talks to two audiences in parallel and loses neither.",
          },
          {
            title: "Each service track lives at its own address",
            body: "All four tracks have their own page. This is not merely about avoiding a long home page: someone searching for software development and someone searching for Cisco networking type different queries and should land on different pages. A single combined page would rank weakly for both.",
          },
        ],
      },
      4: {
        metaTitle: "E-Partners — consultancy landing page | Case study",
        metaDescription:
          "A single-page site for a 360° business consultancy: finance, marketing, legal, IT, HR and procurement services.",
        h1: "E-Partners — 360° business consulting",
        summary:
          "A single-page presentation site for a consultancy working across seven disciplines. Built without a framework — light and fast.",
        client: "E-Partners — 360° business consultancy, Baku",
        role:
          "Frontend development — page structure, layout, multilingual copy architecture and deployment.",
        problem:
          "For a consultancy operating in seven separate fields, the main risk is looking scattered: the longer the list grows, the weaker the sense of specialism, and the visitor concludes that this firm simply does everything. The site had to present breadth as a position rather than as a weakness.",
        results:
          "The site has been live since October 2025. PageSpeed Insights measures performance at 93 on mobile and 99 on desktop — the direct result of a framework-free build in plain HTML and CSS.",
        features: [
          "Single-page flow: proposition, about, services, why us, contact",
          "Seven service areas: finance, marketing, legal, human resources, IT, procurement, training",
          "Company values and mission section",
          "Responsive layout",
          "Three languages (AZ / English / Русский) via a selector in the header",
          "Six concrete line items under every service area — no generic phrasing",
          "Six advantage blocks: agility, industry experience, customisation, client focus, innovation, 24/7 support",
          "A full contact block: two phone numbers, email and office address",
        ],
        decisions: [
          {
            title: "Why no framework?",
            body: "The site is entirely static content — no dynamic data, no form logic, no user accounts. Adding React would mean shipping JavaScript that does nothing for the visitor. A plain build opens faster here and is still straightforward to maintain years later.",
          },
          {
            title: "Seven services, one flow",
            body: "The firm works across many disciplines, which can scatter the message. Instead of splitting services into separate pages I kept them in a single flow — the visitor sees them in sequence, and the \"everything from one place\" positioning is carried by the structure itself.",
          },
          {
            title: "The services are written out item by item",
            body: "The phrase “legal services” tells nobody anything. So each area lists six concrete pieces of work beneath it — drafting contracts, tax and customs procedures, licensing, court representation. When a visitor sees their own problem spelled out word for word, they are ready to get in touch; a generic heading leaves them stuck at “I'll call and ask”.",
          },
          {
            title: "Three languages switch in JavaScript — a trade-off taken knowingly",
            body: "On a static site the language changes at the press of a button: instant for the user, no extra page load. The cost is that all three languages stay at one address and search engines do not index them as separate pages. At this project's scale that was an acceptable trade — the site is presentation material, not an organic search channel. Had multilingual SEO been a requirement, the languages would have had to be split at the routing level.",
          },
        ],
      },
      7: {
        metaTitle: "Deniz Restaurant — trilingual QR menu | Case study",
        metaDescription:
          "A trilingual digital QR menu for a restaurant: 14 categories, prices and chef's picks. Mobile-first, built to open fast.",
        h1: "Deniz Restaurant — digital QR menu",
        summary:
          "A trilingual digital menu opened from the QR code on the table. Mobile-first, with 14 categories, prices and a chef's picks section.",
        client: "Deniz Restaurant (Snap House) — Narimanov district, Baku",
        role:
          "Concept, interface design, frontend development and deployment.",
        problem:
          "A printed menu has to be reprinted on every price change, so the restaurant either runs on stale prices or keeps paying the printer. On top of that, a tourist arriving at a Baku restaurant cannot read an Azerbaijani menu and has to call a waiter over. The menu problem is a cost problem and a service problem at the same time.",
        results:
          "The menu has opened from the QR code on the tables since December 2025. Price and dish changes no longer require a new print run, and the three languages let a tourist read the menu without calling a waiter over.",
        features: [
          "Trilingual menu: Azerbaijani, English and Russian",
          "14 categories: breakfast, soups, salads, doner varieties, hot dishes, sides, desserts, drinks",
          "Price and short description for every dish",
          "Chef's picks highlight section",
          "WhatsApp and Instagram links",
          "Restaurant address",
          "A horizontal category strip for jumping between sections — all 14 reachable without long scrolling",
          "A chef's selection highlight card",
          "Price in AZN and a portion note (for one or two people) on every dish",
        ],
        decisions: [
          {
            title: "Mobile-first, because nothing else opens it",
            body: "This menu is opened almost exclusively on a phone, from the QR code on the table; the desktop version is barely used. So the design was built for the small screen directly, rather than designed wide and squeezed down afterwards.",
          },
          {
            title: "First load matters more here than usual",
            body: "The guest is sitting at a table waiting, and restaurant Wi-Fi is often weak. A slow menu is an immediate bad impression and sends people back to calling a waiter. The light build and properly sized images were chosen for exactly that scenario.",
          },
          {
            title: "Three languages for the tourist audience",
            body: "A share of the guests in a Baku restaurant do not read Azerbaijani. The language switch sits at the very top of the menu — a visitor can move to their own language the moment they scan, without asking for help.",
          },
          {
            title: "Ordering was deliberately left out",
            body: "A QR menu is not an ordering system. There is a waiter at the table, and ordering through them is both faster and consistent with how the restaurant already runs. An order button on the site would have created a second, unsynchronised channel between the kitchen and the floor. The menu does only its own job — that is a boundary, not a missing feature.",
          },
          {
            title: "The category strip replaces scrolling",
            body: "Stack fourteen sections vertically and the customer has to swipe dozens of times before reaching dessert. A horizontal category strip keeps every section in a single band — one tap to anywhere. On a small screen, navigation time translates directly into experience.",
          },
          {
            title: "Price and portion are shown together",
            body: "The price alone is not enough: “16 AZN” sounds expensive, “16 AZN — spread breakfast for two” does not. Putting the portion note next to the price resolves inside the menu a share of the questions that would otherwise go to the waiter.",
          },
        ],
      },
      8: {
        metaTitle:
          "Harmal — luxury jewellery e-commerce with a custom admin panel | Case study",
        metaDescription:
          "A full-stack e-commerce site built from scratch with Next.js for Harmal: trilingual storefront, Prisma + SQLite database, JWT-protected admin panel and a VPS deployment. Case study.",
        h1: "Harmal — luxury jewellery e-commerce and its admin panel",
        summary:
          "A trilingual e-commerce site for a Baku brand selling handmade jewellery and natural silk kelaghayi. Built full-stack on Next.js: an editorial storefront, a lifestyle journal and an admin panel the brand runs itself — for products, collections, journal articles and incoming enquiries.",
        client: "Harmal — handmade jewellery and silk kelaghayi brand, Baku",
        role:
          "Full-stack development — every layer of the project: trilingual frontend architecture, Next.js route handlers, the Prisma/SQLite data model, JWT-based admin authentication, the image upload flow, performance work and the VPS deployment (PM2 + Nginx).",
        problem:
          "Selling luxury jewellery online presents two separate problems. The first is trust: the customer has to pay a four-figure sum for something they have only seen as a photograph on a screen. A standard e-commerce template — dense product grids, discount badges, “buy now” buttons — does not build that trust; it actively cheapens the brand. The second problem starts the day the site goes live. Collections change with the season, prices follow the gold rate, the journal needs new articles. If every one of those changes has to go through a developer, the site is stale within a few months — in practice the brand simply stops updating it.",
        // TODO: Nəticə — satış artımı, müraciət sayı, yüklənmə sürəti və s.
        results:
          "The site has been live in three languages since August 2026. PageSpeed Insights measures performance at 93 on both mobile and desktop, with an SEO score of 100 — for a storefront built around product photography, that is the image sizing and static generation doing their job. Day-to-day content belongs to the brand: products, collections, prices and journal articles are changed from the admin panel, with no developer involved in routine updates.",
        features: [
          "Trilingual interface — Azerbaijani, English and Russian, each at its own URL",
          "Collection showcase with product categories",
          "Editorial sections telling the origin story of the brand",
          "Customer testimonials section",
          "Journal (blog) section with dated articles",
          "Frequently asked questions section",
          "\"The Harmal Standard\" section explaining quality principles",
          "A live search field in the header",
          "A dedicated journal page — articles filter by Culture, Guide and Style",
          "Dedicated shop, contact and FAQ pages",
          "A parallax-driven origin story for the brand",
          "Admin panel: create, edit and delete products and collections",
          "Journal articles written and published from the admin panel",
          "Enquiries and orders from the site listed inside the panel",
          "Product and journal images uploaded straight from the panel",
          "JWT-protected admin login — panel routes are closed at middleware level",
        ],
        architecture: [
          {
            layer: "Frontend",
            body: "Next.js App Router. Each language (AZ / EN / RU) lives on its own route; the storefront, shop, journal, contact and FAQ pages are rendered on the server. Images go through `next/image`, the origin story unfolds with parallax, and the header carries a live search field.",
          },
          {
            layer: "Backend",
            body: "There is no separate API server — the backend is a set of route handlers inside the same Next.js app. Products, collections, journal articles and enquiries all pass through them. Frontend and backend share the same TypeScript types, so a renamed field surfaces as a build error rather than as a bug a customer finds first.",
          },
          {
            layer: "Database",
            body: "Prisma + SQLite. The schema is declared in `schema.prisma` and changes ship as migrations, while the database itself lives as a single file on the server's own disk. Products, collections, journal articles and enquiries all sit in that one schema.",
          },
          {
            layer: "Authentication",
            body: "A hand-rolled JWT flow: on a successful login the token is signed server-side and written into an `httpOnly` cookie. Everything under `/admin` is checked both at middleware level and inside each individual route handler.",
          },
          {
            layer: "Media",
            body: "Product and journal images are uploaded from the admin panel and written to the VPS disk; on the site they are served through `next/image` at the size the screen actually needs.",
          },
          {
            layer: "Infrastructure",
            body: "The Next.js server process runs on a VPS under PM2, which handles restarts and brings the app back up after a crash. Nginx sits in front as a reverse proxy: SSL, compression and static-file caching are resolved there.",
          },
        ],
        decisions: [
          {
            title: "Why Next.js?",
            body: "A jewellery site is image-heavy, runs in three languages and needs its own management panel. Next.js brings all three into a single application: pages are served as ready HTML from the server, and the admin routes live inside the same project. With a classic SPA plus a separate API, the same work would have meant two repositories, two deployments and one set of type definitions written twice.",
          },
          {
            title: "Image optimisation",
            body: "Product photography is the heaviest part of the site. With `next/image` every image is served at the size the screen actually needs and in a modern format (WebP), so a phone never downloads a desktop-sized image. On a luxury brand the photography itself cannot be degraded, so the saving is taken out of dimensions, not out of quality.",
          },
          {
            title: "Three languages on separate routes, tied together with hreflang",
            body: "Each language lives at its own URL, so search engines index three separate pages — which is what lets the brand reach Azerbaijani- and Russian-speaking customers alike. But separate URLs alone are not enough: the engine also has to know these three pages are translations of the same content. That is what the hreflang links and the x-default marker on every page are for. Without them the three languages get indexed as rivals and the brand ends up competing with itself.",
          },
          {
            title: "Structured data explains the brand to machines",
            body: "The page carries four separate JSON-LD blocks. Rather than leaving a search engine or an AI model to infer what the brand sells, where it is based and what it publishes, it states all of it outright. That matters especially for a luxury brand, because the short description in a search result is often a customer's first contact with it.",
          },
          {
            title: "The journal is part of the sales funnel",
            body: "Someone reading about kelaghayi culture, someone looking for a diamond-buying guide and someone after everyday styling advice are three different people. The articles are split along exactly those three categories because each one arrives from a different search and leads to a different collection. The journal here is not a content section — it is the door into the shop pages.",
          },
          {
            title: "Why SQLite and not Postgres?",
            body: "Harmal's data profile is specific: hundreds of products and journal articles, a handful of writes a day, and thousands of reads against them. On that profile SQLite reads from the same machine with no network hop — there is no separate database server to query. Postgres would have added neither speed nor capability here; only another process, another chunk of memory and another point of failure. The Prisma schema stays in place, so if the shop grows to the point of needing many concurrent writes, changing the database is a migration a few lines long. Choosing technology for today's load is cheaper than paying up front for tomorrow's maybe.",
          },
          {
            title: "Without a panel the site is stale in three months",
            body: "Seasons change the collection, a rising gold price changes the prices, the journal needs new articles. Making those edits in code means the brand waits for a developer's free evening every time — and in practice it does not wait, it simply stops updating and the storefront freezes in last season. So products, collections and journal articles are managed from the admin panel: the brand maintains its own shop window, and I maintain the system underneath it.",
          },
          {
            title: "The session token lives in an httpOnly cookie",
            body: "The admin panel is the door to the brand's entire product catalogue and to its customer enquiries. Had the token been kept in `localStorage`, any XSS hole anywhere on the site could read it. An `httpOnly` cookie is invisible to JavaScript, and `SameSite` stops the token from riding along on requests issued by another site. The check itself is not only in middleware but inside every route handler: hiding an interface is not protection, only appearance — anyone who knows the API URL never sees the interface at all.",
          },
          {
            title: "Why a VPS instead of Vercel?",
            body: "Two parts of this project depend on a persistent disk: the SQLite file and the product images uploaded through the admin panel. In a serverless environment the file system is ephemeral — a written file survives until the next deployment, often only until the next request. Choosing Vercel would therefore have meant bolting on a paid service for the database and another one for image storage. On a VPS both sit right next to the application. SQLite, on-disk image storage and the VPS are not three independent decisions — they are three faces of the same one.",
          },
          {
            title: "PM2 and Nginx divide the work",
            body: "The Next.js server process cannot keep itself alive: it has to come back after a crash and start on its own when the server reboots — that is PM2's job. Nginx stands in front and takes on the work that does not belong to the app: TLS termination, compression, static-file caching. Without that split it would be running the application and doing cryptography on every request — meaning a product page would queue behind a certificate operation.",
          },
        ],
        faq: [
          {
            q: "Is Harmal built on a ready-made platform such as Shopify or WooCommerce?",
            a: "No. The site was written from scratch in Next.js and TypeScript, with its own database (Prisma + SQLite), its own backend routes and its own admin panel. There is no monthly subscription, no theme ceiling and no plugin dependency.",
          },
          {
            q: "Who adds the products and the journal articles?",
            a: "The brand does. Products, collections and journal articles are created, edited and deleted from the admin panel, and images are uploaded there too. No developer is involved in ordinary content changes.",
          },
          {
            q: "Who wrote the backend?",
            a: "Every layer of the project — the frontend, the Next.js route handlers, the Prisma data model, the admin panel, the authentication and the server deployment — was written by Nurlan Qadirov. Harmal is a frontend and a full-stack reference at the same time.",
          },
          {
            q: "How many languages does the site run in?",
            a: "Three: Azerbaijani, English and Russian. Each language lives at its own URL and is linked to the others with hreflang, so all three are independent pages as far as search engines are concerned.",
          },
          {
            q: "Where is the site hosted?",
            a: "On its own VPS. The Next.js server process runs under PM2 with Nginx in front as a reverse proxy. That choice exists so the SQLite database and the images uploaded through the panel stay on a persistent disk.",
          },
        ],
      },
      6: {
        metaTitle: "ZM Tech — corporate site for an IT services company | Case study",
        metaDescription:
          "A corporate site built with React and Vite for an IT services company: four service tracks in a tabbed panel, a staged delivery process, testimonials and an FAQ accordion.",
        h1: "ZM Tech — corporate site for an IT services company",
        summary:
          "A single-page corporate site for a company offering web development, cybersecurity, 1C optimisation and hosting. Built with React and Vite, with the four service tracks presented in a tabbed panel.",
        client: "ZM Tech — an IT company offering web development, cybersecurity and 1C services",
        role:
          "Frontend development — page architecture, tab and accordion components, responsive layout, motion and deployment.",
        problem:
          "The hard part on a site that sells IT services is that the services look alike from the outside: web development, cybersecurity, 1C optimisation and hosting are sold to completely different buyers, yet they all appear in the same list as generic “services”. A visitor had to be able to tell at a glance whether their problem was on that list — without reading four sections in sequence.",
        results:
          "The site has been live since August 2025. Desktop performance is strong, while the mobile measurement sits below target — the cause is image and font weight, and optimisation is planned. The figure will be published here once it improves.",
        features: [
          "Four service tracks in a tabbed panel: web development, cybersecurity, 1C optimisation, hosting and testing",
          "Each tab opens its description inside the same panel — the page never stretches",
          "A four-stage delivery process: discovery and planning, design and prototyping, development, deployment and support",
          "A continuously scrolling partner logo marquee",
          "A testimonials section with name, role and company",
          "An about section covering the team and the mission",
          "Frequently asked questions in an accordion",
          "A closing call to action",
        ],
        decisions: [
          {
            title: "Four services, one panel",
            body: "Stacking the services vertically makes the page four screens long, and the visitor has to scroll past three tracks that do not concern them to reach their own. A tabbed panel shows all four names at once and opens the detail only for the one selected. The visitor sees what the company does in a single glance, then reads only the part that applies to them.",
          },
          {
            title: "Why React + Vite rather than Next.js?",
            body: "The site is pure static marketing material: no server logic, no user accounts, no dynamic content. On that profile, Next.js server features never get used while its build and deployment complexity stays. Vite produces a smaller build and runs on ordinary static hosting without ceremony — the technology was chosen to match the size of the project, not the other way round.",
          },
          {
            title: "The FAQ is an accordion",
            body: "Showing every answer at once turns the page into a wall of text that nobody reads. An accordion lets the visitor scan the questions and open only the one that concerns them. The answers still live in the document, so they remain visible to both people and search engines — they simply do not take up space.",
          },
          {
            title: "The language choice is a positioning statement",
            body: "The site is entirely in English, and that is a strategic rather than a technical decision. Language tells a visitor within a second who is being addressed: a site aimed at the local market speaks Azerbaijani, while an English site signals readiness to work with international clients. One language done properly beats three languages done halfway.",
          },
          {
            title: "The process section removes uncertainty",
            body: "The first question anyone buying IT services asks is “how will this actually run”. The four-stage process section answers exactly that: discovery, design, development, support. It cuts down the questions asked before the first call and lets the conversation start with the substance of the work.",
          },
        ],
      },
      10: {
        metaTitle: "RentCar Baku — luxury car rental platform | Case study",
        metaDescription:
          "A Next.js platform for luxury car rental in Baku: filtering by brand, class and budget, a fleet catalogue, a blog and three-language routing. Case study.",
        h1: "RentCar Baku — a luxury car rental platform",
        summary:
          "A three-language Next.js platform for premium car rental. Filtering by brand, class and daily budget, full specs on every car, and a booking flow that finishes in WhatsApp.",
        client:
          "A self-initiated demo — not a client commission. Built as a production-ready platform for the Baku car rental market.",
        role:
          "Every stage of the project: concept, data model, interface design, frontend development, multilingual structure and deployment.",
        problem:
          "Luxury car rental in Baku runs almost entirely through Instagram and WhatsApp. To find out which car is available, what it costs per day and what it is capable of, the customer has to start a conversation — which means talking to a person before making any decision at all. That eats the agency’s time and loses most of the people who are simply comparing prices. The question behind this build was straightforward: can everything that happens before the conversation happen on the site instead?",
        results:
          "The platform is live as a demo and runs in three languages. PageSpeed Insights measures performance at 94 on mobile and 100 on desktop. For a real rental company only the catalogue data, the contact number and the branding need replacing — the structure stays as it is.",
        features: [
          "Three languages on separate routes: /az, /en, /ru — each language is an independent page for search engines",
          "A quick search panel: brand (Mercedes-Benz, Porsche, BMW, Rolls-Royce, Lamborghini, Bentley, Range Rover, Ferrari), class (SUV, Sport, Business, Luxury) and daily budget band",
          "A fleet catalogue — every card carries the daily price, top speed and horsepower",
          "Dedicated pages: cars, services, blog, about, contact",
          "Fleet classes: SUV, Sport, Business Sport, Ultra Luxury, Business, Supercar",
          "A three-step rental flow: choose the car, confirm the order, the car comes to your door",
          "A premium services section: full insurance, VIP delivery, 24/7 concierge, detailing, corporate package",
          "A blog section with dated articles",
          "Frequently asked questions in an accordion: documents, deposit, drop-off, insurance cover",
          "Direct ordering through WhatsApp",
        ],
        decisions: [
          {
            title: "The filter is the front door",
            body: "Someone renting a car does not arrive to browse; they arrive with a specific intent — an SUV, up to 500 AZN a day. So the filter panel sits directly below the first screen rather than buried inside the catalogue. Its three questions — brand, class, budget — are the three axes the real decision is made on; everything else follows from those three answers.",
          },
          {
            title: "Every car carries its spec sheet",
            body: "In luxury rental the price alone is not enough; the buyer also looks at horsepower and top speed. Putting those two numbers on the card itself removes the need to open a detail page — the comparison happens directly in the catalogue, on one screen. Fewer clicks, faster decision.",
          },
          {
            title: "The booking ends in WhatsApp, not on the site",
            body: "In this market the deal closes in conversation: dates shift, deposits get negotiated, corporate discounts are agreed. So I deliberately did not build a payment integration — it would have been complexity nobody used. The site does its own job: the choice and the price become clear, and the conversation continues in an app the customer already has open.",
          },
          {
            title: "Three languages at the routing level, not behind a button",
            body: "A site that switches language only in JavaScript is a single page as far as search engines are concerned — it simply does not appear in Russian-language searches. Here each language lives at its own address, so the /ru version is indexed independently. For a business with tourist and expat customers that is not a technical detail; it is a source of business.",
          },
          {
            title: "Fighting image weight",
            body: "A car rental site is really a photo site, and an unoptimised gallery kills it on a mobile connection. next/image serves every photograph at the size the screen actually needs and in a modern format, and catalogue images load only as they come into view. A mobile visitor downloads the three cars on their screen, not all twenty.",
          },
          {
            title: "The blog is not decoration",
            body: "An article like “renting a car in Baku: what to watch out for” is precisely the question a prospective renter types into a search engine. The blog is the entry point that catches those searches and routes them into the catalogue pages — a part of the sales channel rather than a content section.",
          },
        ],
      },
      11: {
        metaTitle: "Telco Group — corporate site for an IT infrastructure company | Case study",
        metaDescription:
          "A Next.js site for a company building data centres, cybersecurity and low-current systems: a live system-status panel, four solution groups and animated statistics.",
        h1: "Telco Group — IT infrastructure and cloud",
        summary:
          "A single-page corporate site for a company that builds data centres, NOC/SOC facilities, cybersecurity and low-current systems. Built with Next.js, around a live system-status panel and four solution groups.",
        client:
          "Telco Group LLC — IT infrastructure, cybersecurity and cloud solutions, Baku (Chinar Park BC)",
        role:
          "Frontend & Full-Stack development — information architecture, component system, the status panel and counter animations, performance and deployment.",
        problem:
          "Telco Group’s service list runs to more than twenty-five items — from servers and UPS systems to CCTV and fire suppression. Presented as a flat list, it turns the site into a catalogue in which no visitor can find their own need. The second difficulty runs deeper: the central sales argument for an infrastructure company is reliability, and writing it down is not convincing — every company in the field writes the same sentence.",
        results:
          "The site has been live since February 2026. The company's own domain (telcogroup.az) is not connected yet, so it currently runs on a Vercel address — when the domain is attached the URL changes and the content and structure stay as they are.",
        features: [
          "A live-looking system status panel in the hero: uptime percentage, blocked threats, active cloud nodes and response time",
          "A rotating-word animation in the headline that cycles the company’s fields of work through a single sentence",
          "Four numbered solution groups, each with its own sub-list: Data Center & Security, Building Management & Security, Electrical & Mechanical, Corporate IT Supply",
          "More than twenty-five named systems — from server and storage to BMS and video wall",
          "Three specialist service blocks: network infrastructure, cybersecurity, cloud services",
          "Statistics blocks that count up from zero as they enter the viewport",
          "Four trust indicators in the hero: uptime guarantee, protected servers, 24/7 support, ISO certification",
          "A partner vendor logo section",
          "A closing consultation call to action with full contact details",
        ],
        decisions: [
          {
            title: "Show reliability, do not write it",
            body: "Every infrastructure company writes “we are reliable” on its site, and the sentence has stopped meaning anything. So the right-hand side of the hero carries a live-looking status panel: uptime percentage, blocked threats, active nodes, response time. The visitor does not read a promise — they see what the screen the company works on every day looks like. That is a message text cannot carry.",
          },
          {
            title: "Twenty-five services, four groups",
            body: "Collapsing everything into one list loses the visitor; giving each item its own page produces a set of thin, near-identical pages on subjects this closely related. The middle path won: four numbered groups, each holding the concrete system names. Someone looking for a data centre stops at the first group, someone after building systems at the second — nobody reads twenty-five lines in sequence.",
          },
          {
            title: "The specific names were kept",
            body: "Instead of generalities like “network solutions”, the site names FortiNAC, BMS, IP telephony, diesel generators, structured cabling. Those are the words a technical decision-maker searches for; generic phrasing is neither findable nor convincing. Marketing language actively hurts here.",
          },
          {
            title: "One page, because the buyers are few",
            body: "Very few companies commission a data centre, and the decision is made by a handful of people. For that audience, building multi-page navigation matters less than delivering the full pitch in one scroll: the problem, the solution groups, the technical depth, the trust indicators, the contact. The visitor sees the whole argument without ever touching a menu.",
          },
          {
            title: "The statistics count up from zero",
            body: "The figures animate from zero to their target as they come into view. This is not decoration: the movement pulls the eye to the number and registers information the visitor would otherwise scroll straight past. A statically printed figure sits in the same place unnoticed.",
          },
          {
            title: "Images go through next/image",
            body: "Vendor logos and background images are sized and served in modern formats through next/image. Even a simple logo marquee delays the first paint on a mobile connection when it is left unoptimised — and on the site of a company that sells infrastructure, a slow load contradicts the message directly.",
          },
        ],
      },
      12: {
        metaTitle: "Aykhan Ashrafov — cybersecurity engineer portfolio | Case study",
        metaDescription:
          "A personal portfolio built with React and Vite for a cybersecurity engineer: terminal aesthetics, a live log panel, a work history timeline and a verifiable certifications vault.",
        h1: "Aykhan Ashrafov — a cybersecurity engineer's portfolio",
        summary:
          "A single-page personal portfolio for a security engineer working across blue team and red team. Built with React and Vite, around terminal aesthetics, a live log panel and a certifications section with verifiable credentials.",
        client: "Aykhan Ashrafov — cybersecurity engineer (Cortex XDR, incident response), Baku",
        role:
          "Every stage of the project: concept, visual language, frontend development, motion and deployment.",
        problem:
          "A security specialist's personal site cannot be an ordinary CV page. In this field the person hiring wants three questions answered within seconds: is this candidate blue team or red team, which tools have they actually worked with, and can the certifications be verified. A standard portfolio template answers none of the three — and a neutral design with no relationship to the field makes the candidate look like an outsider to their own craft.",
        results:
          "The site has been live since February 2026. PageSpeed Insights measures mobile performance at 97 — given the live log panel in the hero and the animations that run continuously, that means the effects are not holding up the loading of the actual content.",
        features: [
          "Terminal aesthetics: monospace type, command-line markers and status labels throughout the interface",
          "Rotating role labels in the hero: Blue Team, Red Team, Cortex XDR",
          "A live log panel — lines stream through a ROOT@AYKHAN-SEC:~ window (firewall, handshake, traffic scan)",
          "A “SYSTEM ONLINE” status indicator and a neutralised-threats counter",
          "Four roles in chronological order: company, date range, description and skill tags",
          "The technical arsenal split into three columns: defensive (Blue Team & SOC), offensive (Red Team & Pentest), engineering (Development & DB)",
          "A status label beside every tool: Active, Scanning, Logging, Engaged, Root Access, Standby",
          "A portfolio section using clearance labels: Classified, Public, Restricted",
          "A certifications vault: issuer, date, credential ID and a verification link",
          "A “REQUEST CV” call to action and an availability status",
        ],
        decisions: [
          {
            title: "The visual language was taken from the profession itself",
            body: "The site is built on monospace type, command-line markers and a terminal window. That is not decoration: the people hiring a security specialist look at exactly these screens all day and recognise the language. A neutral corporate template would carry the same content while making the candidate look like an outsider — here the design itself is a signal of expertise.",
          },
          {
            title: "Blue team and red team are shown side by side",
            body: "Candidates in this field usually belong to one camp. The hero rotates both labels and the arsenal is split explicitly into defensive and offensive columns. The visitor reads the dual profile from the structure rather than from a list — and whichever role they are hiring for, they find their own column.",
          },
          {
            title: "The log panel does what static copy cannot",
            body: "“I monitor threats” appears on every CV and proves nothing. In its place the hero carries a streaming log window: a firewall block, a handshake decrypt, a traffic scan. That is a demonstration of what the work looks like rather than a claim about it. The same principle drives the neutralised-threats counter — a number gets read when it moves.",
          },
          {
            title: "Every tool carries a status label",
            body: "The problem with skill lists is that everything on them looks equally weighted — someone who once played with Kali Linux writes the same line as someone who lives in it. The Active, Standby and Root Access labels beside each tool carry that difference in a single word and turn the list into a map of real usage.",
          },
          {
            title: "Certifications come with their credential IDs",
            body: "A certification name on its own cannot be checked. So each one sits next to its issuer, date, credential ID and a verification link. That does upfront the work a recruiter would otherwise do by hand — and it signals that the candidate has nothing to hide.",
          },
          {
            title: "One page, anchored navigation",
            body: "A personal portfolio is usually read top to bottom in one sitting. So the sections are anchors on a single page rather than separate routes: experience, arsenal, certifications, contact. The visitor gets the whole picture without waiting for a single navigation, while the menu still allows a direct jump to the part they came for.",
          },
        ],
      },
    },
  },
};

export default dictionary;
