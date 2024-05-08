import ContactSection from 'components/contact/contact-section';
import RecaptchaProvider from 'components/providers/recaptcha-provider';
import { dynamicBlurDataUrl } from 'lib/utils';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Suspense } from 'react';

export async function generateMetadata() {
  const t = await getTranslations('metadata.contact');

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

  const blurHash = await dynamicBlurDataUrl('/asset/background/contact-bg.webp');

  return (
    <main className=" relative flex h-screen flex-col items-center gap-sub-large overflow-hidden px-small py-extra-large tablet:pb-extra-large tablet:pt-[22rem]">
      <div className=" fixed top-0 -z-20 h-screen w-screen overflow-hidden saturate-50">
        <Image
          blurDataURL={blurHash}
          placeholder={'blur'}
          sizes={'100vw'}
          alt={''}
          className="object-cover object-center min-[1920px]:h-screen min-[1920px]:w-screen"
          priority={true}
          quality={100}
          src={'/asset/background/contact-bg.webp'}
          width={1920}
          height={1080}
        ></Image>
      </div>

      <RecaptchaProvider>
        <Suspense>
          <ContactSection></ContactSection>
        </Suspense>
      </RecaptchaProvider>
    </main>
  );
}