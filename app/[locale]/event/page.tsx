import ContentSection from 'components/event/contect-section';
import { H1 } from 'components/ui/text/h1';
import { getTranslations } from 'next-intl/server';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const t = await getTranslations('navigation.primaryNavigation');

  return (
    <main
      className="slideInFromRight overflox-x-hidden relative flex
 h-full min-h-screen w-full flex-col items-center justify-center gap-large py-extra-large"
    >
      <H1
        textType={'heading--extra-large'}
        className="relative z-10 -mb-medium text-black5   tablet:mt-small"
      >
        {t('event').toUpperCase()}
      </H1>
      <ContentSection></ContentSection>
    </main>
  );
}
