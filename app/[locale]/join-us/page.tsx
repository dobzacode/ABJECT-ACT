import ContactSection from 'components/contact/contact-section';
import RecaptchaProvider from 'components/providers/recaptcha-provider';
import { H1 } from 'components/ui/text/h1';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <main className="relative flex h-screen flex-col items-center gap-sub-large overflow-hidden pt-extra-large">
      <H1
        textType={'heading--extra-large'}
        className="slideInFromTop relative z-10 text-center text-black5 max-mobile-large:text-heading-large max-mobile-large:leading-heading-large tablet:mt-small"
      >
        NEWSLETTER
      </H1>
      <RecaptchaProvider>
        <ContactSection isJoinUs={true}></ContactSection>
      </RecaptchaProvider>
    </main>
  );
}
