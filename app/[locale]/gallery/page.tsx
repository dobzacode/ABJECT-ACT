import ContentSection from 'components/media/photo-video/content-section';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata() {
  const t = await getTranslations('metadata.gallery');

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function GalleryPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <main
      className=" relative flex h-full
     min-h-screen w-screen flex-col items-center justify-center overflow-x-hidden py-extra-large tablet:pb-extra-large tablet:pt-[22rem]"
    >
      <div className=" fixed top-0 h-[1080px] w-[1920px] overflow-hidden">
        <Image
          fill
          sizes={'100vw'}
          alt={''}
          priority={true}
          src={'/asset/background/galery-bg.webp'}
        ></Image>
      </div>
      <ContentSection></ContentSection>
    </main>
  );
}
