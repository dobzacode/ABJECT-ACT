import MovingSection from 'components/ui/div/moving-section';

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
      <MovingSection
        link="/media/music"
        imageSrc={'/asset/event/assaultph.jpg'}
        alt={'Music'}
        title="MUSIC"
        comingFrom="top"
      ></MovingSection>
      <div className="w-full border-2 border-black" />
      <MovingSection
        imageSrc={'/asset/event/pulsarph.jpg'}
        link="/media/gallery"
        alt={'Gallery'}
        title="GALLERY"
        comingFrom="bottom"
      ></MovingSection>
    </main>
  );
}
