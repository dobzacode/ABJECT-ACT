import ContactSection from 'components/contact/contact-section';
import Providers from 'components/providers';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <main className="flex h-screen items-center justify-center overflow-hidden">
      <Providers>
        <ContactSection></ContactSection>
      </Providers>
    </main>
  );
}
