import BlackLarsenSection from 'components/artists/black-larsen/black-larsen-section';
import KraussSection from 'components/artists/krauss/krauss-section';
import MorsureSection from 'components/artists/morsure/morsure-section';
import SporeSection from 'components/artists/spore/spore-section';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <main className="h-screen overflow-x-hidden">
      <MorsureSection></MorsureSection>
      <div className="w-full border-2 border-black" />
      <BlackLarsenSection></BlackLarsenSection>
      <div className="w-full border-2 border-black" />
      <SporeSection></SporeSection>
      <div className="w-full border-2 border-black" />
      <KraussSection></KraussSection>
    </main>
  );
}
