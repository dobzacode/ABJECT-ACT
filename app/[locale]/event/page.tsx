import ContentSection from 'components/event/content-section';
import { H1 } from 'components/ui/text/h1';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <main
      className="slideInFromRight relative flex h-full
 min-h-screen w-screen flex-col items-center justify-center gap-large overflow-x-hidden px-small py-extra-large"
    >
      <H1
        textType={'heading--extra-large'}
        className="relative z-10 -mb-medium text-black5   tablet:mt-small"
      >
        EVENT
      </H1>
      <ContentSection></ContentSection>
    </main>
  );
}
