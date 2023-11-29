import NewsletterSection from 'components/about/newsletter/newsletter-section';
import RecaptchaProvider from 'components/providers/recaptcha-provider';
import { H1 } from 'components/ui/text/h1';
import { unstable_setRequestLocale } from 'next-intl/server';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <main className="relative flex h-screen flex-col items-center gap-sub-large overflow-hidden px-small pt-extra-large">
      <H1
        textType={'heading--extra-large'}
        className="slideInFromTop relative z-10 text-center text-black5 max-mobile-large:text-heading-large max-mobile-large:leading-heading-large tablet:mt-small"
      >
        NEWSLETTER
      </H1>
      <RecaptchaProvider>
        <NewsletterSection></NewsletterSection>
      </RecaptchaProvider>
    </main>
  );
}
