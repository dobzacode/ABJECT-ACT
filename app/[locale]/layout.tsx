import { Header } from 'components/ui/header/header';

import AlertBanner from 'components/sanity/alert-banner';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, unstable_setRequestLocale } from 'next-intl/server';
import { VisualEditing } from 'next-sanity';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import './globals.css';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export const generateMetadata = async () => {
  const locale = await getLocale();
  return {
    metadataBase: new URL(
      `${locale === 'en' ? 'https://abjectact.com/en' : 'https://abjectact.com'} `
    )
  };
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: 'en' | string };
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

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className="relative h-full  w-full overflow-x-hidden bg-black ">
        {draftMode().isEnabled && <AlertBanner />}

        <NextIntlClientProvider messages={messages}>
          <Header
            size={'medium'}
            textColor={'white'}
            className="overlay  absolute  w-full max-w-full px-sub-large pt-[40px] tablet:px-large tablet:pt-large"
          ></Header>
          {children}
        </NextIntlClientProvider>
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
