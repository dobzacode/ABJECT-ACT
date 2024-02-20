import ContentSection from 'components/event/content-section';
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
 min-h-screen w-screen flex-col items-center justify-center gap-large overflow-x-hidden px-small py-extra-large tablet:pb-extra-large tablet:pt-[22rem]"
    >
      <ContentSection></ContentSection>
    </main>
  );
}
