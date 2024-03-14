import ContentSection from 'components/media/photo-video/content-section';
import { dynamicBlurDataUrl } from 'lib/utils';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata() {
  const t = await getTranslations('metadata.gallery');

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

export default async function GalleryPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const blurHash = await dynamicBlurDataUrl('/asset/background/galery-bg.webp');

  return (
    <main
      className=" relative flex h-full
     min-h-screen w-screen flex-col items-center justify-center overflow-x-hidden py-extra-large tablet:pb-extra-large tablet:pt-[22rem]"
    >
      <div className=" fixed top-0 h-screen w-screen overflow-hidden saturate-50">
        <Image
          sizes={'100vw'}
          width={1920}
          height={1080}
          alt={''}
          className="object-cover"
          priority={true}
          quality={100}
          src={'/asset/background/galery-bg.webp'}
          blurDataURL={blurHash}
          placeholder={'blur'}
        ></Image>
      </div>
      <ContentSection></ContentSection>
    </main>
  );
}
