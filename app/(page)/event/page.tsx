import AssaultSection from 'components/event/assault/assault-section';
import PulsarSection from 'components/event/pulsar/pulsar-section';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <main className="h-screen overflow-hidden">
      <PulsarSection></PulsarSection>
      <div className="w-full border-2 border-black" />
      <AssaultSection></AssaultSection>
    </main>
  );
}
