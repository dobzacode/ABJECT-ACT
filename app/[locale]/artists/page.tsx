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
    <main className="h-screen overflow-x-hidden">
      <MovingSection
        alt="Morsure"
        imageSrc="/asset/artist/morsure.jpg"
        comingFrom="left"
        link="/artists/morsure"
        title="MORSURE"
        className="h-1/3"
        imageCSS="object-[10%,40%]"
      ></MovingSection>
      <div className="w-full border-2 border-black" />
      <MovingSection
        alt="Black Larsen"
        imageSrc="/asset/artist/black_larsen.jpg"
        comingFrom="right"
        link="/artists/blacklarsen"
        title="BLACK LARSEN"
        className="h-1/3"
        imageCSS="object-[10%,30%]"
      ></MovingSection>
      <div className="w-full border-2 border-black" />
      <MovingSection
        alt="Spore"
        imageSrc="/asset/artist/spore.jpg"
        comingFrom="left"
        link="/artists/spore"
        title="SPORE"
        className="h-1/3"
        imageCSS=" object-[25%,35%]"
      ></MovingSection>
      <div className="w-full border-2 border-black" />
      <MovingSection
        alt="Krauss"
        imageSrc="/asset/artist/black_larsen.jpg"
        comingFrom="right"
        link="/artists/krauss"
        title="KRAUSS"
        className="h-1/3"
        imageCSS=" object-[25%,35%]"
      ></MovingSection>
    </main>
  );
}
