import { generateOpenGraphImage } from 'app/_action';
import VideoBackground from 'components/ui/div/background-video';
import { getLocale, getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('metadata.landing');
  const locale = await getLocale();

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      images: await generateOpenGraphImage(locale !== '/en' ? '' : locale)
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
