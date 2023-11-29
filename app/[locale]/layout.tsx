import { Header } from 'components/ui/header/header';

import CookieConsent from 'components/ui/div/cookie-consent';
import { locales } from 'navigation';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import './globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: 'fr' | 'en' | string };
}) {
  let messages;
  try {
    messages =
      locale !== 'en'
        ? (await import(`../../locales/fr.json`)).default
        : (await import(`../../locales/en.json`)).default;
  } catch (error) {
    console.log(error);
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
