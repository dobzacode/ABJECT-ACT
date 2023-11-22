import ContactSection from 'components/contact/contact-section';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <ContactSection></ContactSection>
    </main>
  );
}
