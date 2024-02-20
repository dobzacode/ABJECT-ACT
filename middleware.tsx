import { locales, pathnames } from 'navigation';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  localePrefix: 'as-needed',
  defaultLocale: 'fr',
  locales,
  pathnames,
  localeDetection: false
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
