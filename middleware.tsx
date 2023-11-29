import { locales, pathnames } from 'navigation';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  localePrefix: 'as-needed',
  defaultLocale: 'fr',
  locales,
  pathnames
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
