import { Header } from 'components/ui/header/header';

import CookieConsent from 'components/ui/div/cookie-consent';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import './globals.css';

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: 'fr' | 'en' };
}) {
  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="relative h-full  w-full overflow-x-hidden bg-black ">
        <NextIntlClientProvider messages={messages}>
          <Header
            size={'medium'}
            textColor={'white'}
            className="overlay  absolute  w-full max-w-full px-sub-large pt-[40px] tablet:px-large tablet:pt-large"
          ></Header>
          {children}
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
