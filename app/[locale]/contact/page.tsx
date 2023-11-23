import ContactSection from 'components/contact/contact-section';
import RecaptchaProvider from 'components/providers/recaptcha-provider';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden">
      <RecaptchaProvider>
        <ContactSection></ContactSection>
      </RecaptchaProvider>
    </main>
  );
}
