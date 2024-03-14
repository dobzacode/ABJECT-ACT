import VideoBackground from 'components/ui/div/background-video';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('metadata.landing');

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
    <main>
      <VideoBackground src={'/asset/background/video/1089037097-preview.mp4'}></VideoBackground>
    </main>
  );
}
