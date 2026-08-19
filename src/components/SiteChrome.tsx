'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { EMAIL, PHONE_DISPLAY, PHONE_E164, person } from '@/data/site';
import { localeNames, locales, type Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries/az';
import { SERVICE_KEYS, paths } from '@/i18n/routes';

type Chrome = { dict: Dictionary; locale: Locale };

/**
 * Dil keçidi.
 *
 * Cari yolun ilk seqmentini dəyişməklə işləyir, yəni istifadəçi hansı
 * səhifədə olsa da eyni səhifənin başqa dilinə keçir — ana səhifəyə atmır.
 * Xidmət səhifələrində slug da dilə görə fərqlidir, ona görə orada açara
 * baxıb düzgün slug qurulur.
 */
const LocaleSwitcher = ({ locale }: { locale: Locale }) => {
  const [pathname, setPathname] = useState<string | null>(null);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const hrefFor = (target: Locale) => {
    if (!pathname) return paths.home(target);

    const segments = pathname.split('/').filter(Boolean);
    // ["az"] → ana səhifə
    if (segments.length <= 1) return paths.home(target);

    // ["az", "faq"]
    if (segments[1] === 'faq') return paths.faq(target);

    // ["az", "services"] → xidmətlər siyahısı
    if (segments[1] === 'services' && !segments[2]) return paths.services(target);

    // ["az", "services", "<slug>"]
    if (segments[1] === 'services' && segments[2]) {
      const key = SERVICE_KEYS.find(
        (candidate) =>
          paths.service(locale, candidate) === `/${locale}/services/${segments[2]}`,
      );
      if (key) return paths.service(target, key);
    }

    return paths.home(target);
  };

  return (
    <div className="flex items-center gap-1 font-mono text-[11px] tracking-[0.12em]">
      {locales.map((option, index) => (
        <React.Fragment key={option}>
          {index > 0 && <span className="text-slate-700">/</span>}
          <a
            href={hrefFor(option)}
            hrefLang={option}
            aria-current={option === locale ? 'true' : undefined}
            className={
              option === locale
                ? 'px-1 text-paper'
                : 'px-1 text-slate-600 hover:text-slate-300 transition-colors'
            }
          >
            {localeNames[option]}
          </a>
        </React.Fragment>
      ))}
    </div>
  );
};

export const SiteHeader = ({ dict, locale }: Chrome) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: dict.nav.about, href: `${paths.home(locale)}#about` },
    { label: dict.nav.services, href: paths.services(locale) },
    { label: dict.nav.projects, href: `${paths.home(locale)}#projects` },
    { label: dict.nav.faq, href: paths.faq(locale) },
    { label: dict.nav.contact, href: `${paths.home(locale)}#contact` },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <nav aria-label={dict.nav.mainNav} className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <a href={paths.home(locale)} className="font-mono text-xl tracking-tight text-paper cursor-pointer">
          Nurlan<span className="text-cyan-400">.</span><span className="text-slate-500">dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7 text-slate-300">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-cyan-200 transition-colors text-[15px] font-medium">
              {link.label}
            </a>
          ))}
          <LocaleSwitcher locale={locale} />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-paper"
          aria-label={mobileMenuOpen ? dict.nav.closeMenu : dict.nav.openMenu}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <LocaleSwitcher locale={locale} />
          </div>
        </div>
      )}
    </motion.header>
  );
};

export const SiteFooter = ({ dict, locale }: Chrome) => (
  <footer className="bg-slate-950 px-6 py-14 border-t border-slate-900">
    <div className="max-w-7xl mx-auto">
      {/* Xidmət keçidləri — hər səhifədən daxili linkləmə, crawler üçün faydalı */}
      <nav
        aria-label={dict.services.label}
        className="flex flex-wrap gap-x-6 gap-y-3 pb-10 mb-10 border-b border-slate-900"
      >
        {SERVICE_KEYS.map((key) => (
          <a
            key={key}
            href={paths.service(locale, key)}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-600 hover:text-slate-300 transition-colors"
          >
            {dict.services.pages[key].name}
          </a>
        ))}
        <a
          href={paths.faq(locale)}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-600 hover:text-slate-300 transition-colors"
        >
          {dict.faq.label}
        </a>
      </nav>

      {/*
        Əlaqə məlumatları HƏR səhifədə, düz mətn olaraq.

        Səbəb konkretdir: AI axtarışı "WhatsApp nömrəsi açıq göstərilən
        proqramçı" kimi sorğularda saytın İSTƏNİLƏN səhifəsinə düşə bilər.
        Nömrə yalnız ana səhifədə olsaydı, xidmət səhifəsinə düşən sorğu
        əlaqə məlumatı tapmadan geri qayıdardı.
      */}
      <address className="not-italic mb-10 pb-10 border-b border-slate-900 grid gap-6 sm:grid-cols-3">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-600 mb-2">
            {dict.contact.spec.whatsapp}
          </div>
          <a
            href={`tel:${PHONE_E164}`}
            dir="ltr"
            className="text-paper hover:text-cyan-200 transition-colors"
          >
            {PHONE_DISPLAY}
          </a>
        </div>

        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-600 mb-2">
            {dict.contact.spec.email}
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="text-paper hover:text-cyan-200 transition-colors break-words"
          >
            {EMAIL}
          </a>
        </div>

        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-600 mb-2">
            {dict.contact.spec.location}
          </div>
          <span className="text-slate-300">
            {person.locality}, {person.countryName}
          </span>
        </div>
      </address>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-600">
        <span>© {new Date().getFullYear()} {person.name}</span>
        <span>{person.jobTitle}</span>
      </div>
    </div>
  </footer>
);
