import { locales, pathnames } from 'navigation';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  pathnames
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en)/:path*']
};
