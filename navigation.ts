import { createLocalizedPathnamesNavigation, Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'fr'] as const;

export const pathnames = {
  '/': '/',

  '/about': {
    en: '/about',
    fr: '/a-propos'
  },
  '/about/abject-act': { en: '/about/abject-act', fr: '/a-propos/abject-act' },
  '/about/join-us': {
    en: '/about/join-us',
    fr: '/a-propos/rejoins-nous'
  },
  '/about/newsletter': { en: '/about/newsletter', fr: '/a-propos/newsletter' },

  '/about/partnership': {
    en: '/about/partnership',
    fr: '/a-propos/partenariat'
  },

  '/artists': {
    en: '/artists',
    fr: '/artistes'
  },
  '/artists/blacklarsen': {
    en: '/artists/blacklarsen',
    fr: '/artistes/blacklarsen'
  },
  '/artists/krauss': {
    en: '/artists/krauss',
    fr: '/artistes/krauss'
  },
  '/artists/morsure': {
    en: '/artists/morsure',
    fr: '/artistes/morsure'
  },
  '/artists/spore': {
    en: '/artists/spore',
    fr: '/artistes/spore'
  },

  '/contact': '/contact',

  '/event': {
    en: '/event',
    fr: '/concert'
  },

  '/label': 'label',

  '/legal': 'legal',
  '/legal/informations': '/legal/informations',

  '/legal/privacy': {
    en: '/legal/privacy',
    fr: '/legal/confidentialite'
  },

  '/gallery': {
    en: '/gallery',
    fr: '/galerie'
  },

  '/shop': {
    en: '/shop',
    fr: '/boutique'
  },

  '/values': {
    en: '/values',
    fr: '/valeurs'
  }
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames });
