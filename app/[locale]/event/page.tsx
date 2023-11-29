import ContentSection from 'components/event/content-section';
import { H1 } from 'components/ui/text/h1';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('metadata.event');

  return {
    title: t('title'),
    description: t('description')
  };
}
export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <main
      className=" relative flex h-full
 min-h-screen w-screen flex-col items-center justify-center gap-large overflow-x-hidden px-small py-extra-large"
    >
      <H1
        textType={'heading--extra-large'}
        className="slideInFromRight relative z-10 -mb-medium   text-black5 tablet:mt-small"
      >
        EVENT
      </H1>
      <ContentSection></ContentSection>
    </main>
  );
}
