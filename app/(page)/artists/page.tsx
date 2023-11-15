import BlackLarsenSection from 'components/artists/black-larsen/black-larsen-section';
import KraussSection from 'components/artists/krauss/krauss-section';
import MorsureSection from 'components/artists/morsure/morsure-section';
import SporeSection from 'components/artists/spore/spore-section';
import CustomLink from 'components/ui/header/custom-link';

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
      <CustomLink href="/artists/morsure">
        <MorsureSection></MorsureSection>
      </CustomLink>
      <div className="w-full border-2 border-black" />
      <CustomLink href="/artists/blacklarsen">
        <BlackLarsenSection></BlackLarsenSection>
      </CustomLink>
      <div className="w-full border-2 border-black" />
      <CustomLink href="/artists/spore">
        <SporeSection></SporeSection>
      </CustomLink>
      <div className="w-full border-2 border-black" />
      <CustomLink href="/artists/krauss">
        <KraussSection></KraussSection>
      </CustomLink>
    </main>
  );
}
