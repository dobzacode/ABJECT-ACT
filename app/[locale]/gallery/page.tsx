import ContentSection from 'components/media/photo-video/content-section';
import { H1 } from 'components/ui/text/h1';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('metadata.gallery');

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function GalleryPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('title');
  return (
    <main
      className="slideInFromRight overflox-x-hidden relative flex
     h-full min-h-screen w-screen flex-col items-center justify-center py-extra-large"
    >
      <H1
        textType={'heading--extra-large'}
        className="relative z-10 -mb-medium text-black5   tablet:mt-small"
      >
        {t('gallery').toUpperCase()}
      </H1>
      <ContentSection></ContentSection>
    </main>
  );
}
