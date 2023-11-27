import { createLocalizedPathnamesNavigation, Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'fr'] as const;

export const pathnames = {
  // If locales use different paths, you can
  // specify each external path per locale.
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
  '/about/sizing': {
    en: '/about/sizing',
    fr: '/a-propos/guide-des-tailles'
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

  '/join-us': {
    en: '/join-us',
    fr: '/rejoins-nous'
  },

  '/event': {
    en: '/event',
    fr: '/concert'
  },

  '/label': 'label',

  '/legal': 'legal',
  '/legal/informations': '/legal/informations',
  '/legal/terms': {
    en: '/legal/terms',
    fr: '/legal/termes'
  },
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
