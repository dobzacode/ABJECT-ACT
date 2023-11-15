import AssaultSection from 'components/event/assault/assault-section';
import PulsarSection from 'components/event/pulsar/pulsar-section';
import ContentSection from 'components/media/photo-video/content-section';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function GalleryPage() {
  return (
    <main className="flex w-full flex-col items-center ">
      <nav className="z-0 flex h-[40rem] w-full flex-col laptop:flex-row">
        <PulsarSection fullWidth={false}></PulsarSection>
        <div className="border-2 border-black"></div>
        <AssaultSection fullWidth={false}></AssaultSection>
      </nav>
      <div className="flex w-full flex-col items-center gap-large">
        <ContentSection></ContentSection>
      </div>
    </main>
  );
}
