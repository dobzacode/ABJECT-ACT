import ContactSection from 'components/contact/contact-section';
import RecaptchaProvider from 'components/providers/recaptcha-provider';
import { H1 } from 'components/ui/text/h1';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Suspense } from 'react';
import BACKGROUNDPIC from '/public/asset/background/joinus-bg.webp';

export async function generateMetadata() {
  const t = await getTranslations('metadata.join-us');

  return {
    title: t('title'),
    description: t('description'),
    opengraph: {
      title: t('title'),
      description: t('description'),
      images: 'url/opengraph-image.jpg'
    },
    twitter: {
      title: t('title'),
      description: t('description'),
      images: 'url/twitter-image.jpg'
    }
  };
}

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('navigation.primaryNavigation');

  return (
    <main className="relative flex h-screen flex-col items-center gap-sub-large overflow-hidden px-small py-extra-large tablet:pb-extra-large ">
      <div className=" fixed top-0 -z-20 h-screen w-screen overflow-hidden saturate-50">
        <Image
          placeholder={'blur'}
          sizes={'100vw'}
          width={1920}
          height={1080}
          alt={''}
          className="object-cover object-center min-[1920px]:h-screen min-[1920px]:w-screen"
          priority={true}
          quality={100}
          src={BACKGROUNDPIC}
        ></Image>
      </div>
      <H1
        textType={'heading--extra-large'}
        className="slideInFromTop relative z-10 text-center text-black5 max-mobile-large:text-heading-large max-mobile-large:leading-heading-large tablet:mt-small"
      >
        {t('join us')}
      </H1>
      <RecaptchaProvider>
        <Suspense>
          <ContactSection isJoinUs={true}></ContactSection>
        </Suspense>
      </RecaptchaProvider>
    </main>
  );
}
