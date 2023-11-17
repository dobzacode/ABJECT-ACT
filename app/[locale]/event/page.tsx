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
        alt="Pulsar"
        imageSrc="/asset/event/pulsarph.jpg"
        comingFrom="top"
        link="/event/pulsar"
        title="PULSAR"
        className="h-1/2"
      ></MovingSection>
      <div className="w-full border-2 border-black" />
      <MovingSection
        alt="Assault"
        imageSrc="/asset/event/assaultph.jpg"
        comingFrom="bottom"
        link="/event/assault"
        title="ASSAULT"
        className="h-1/2"
      ></MovingSection>
    </main>
  );
}
