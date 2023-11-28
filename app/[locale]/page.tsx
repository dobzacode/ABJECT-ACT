import VideoBackground from 'components/ui/div/background-video';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('metadata.landing');

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function HomePage({}: { params: { lang: string; country: string } }) {
  return (
    <main>
      <VideoBackground src={'/asset/background/video/1089037097-preview.mp4'}></VideoBackground>
    </main>
  );
}
