import ContentSection from 'components/event/content-section';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata() {
  const t = await getTranslations('metadata.event');

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
  return (
    <main
      className=" relative flex h-full
 min-h-screen w-screen flex-col items-center justify-center gap-large overflow-x-hidden px-small py-extra-large tablet:pb-extra-large tablet:pt-[22rem]"
    >
      <div className=" fixed top-0 -z-20 h-screen w-screen overflow-hidden saturate-50">
        <Image
          sizes={'100vw'}
          fill
          alt={''}
          className="object-cover"
          priority={true}
          quality={100}
          src={'/asset/background/event-bg.webp'}
        ></Image>
      </div>
      <ContentSection></ContentSection>
    </main>
  );
}
