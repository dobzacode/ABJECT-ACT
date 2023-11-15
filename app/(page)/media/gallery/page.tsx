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
    <div className="flex w-full flex-col items-center ">
      <nav className="flex h-[40rem] w-full ">
        <PulsarSection fullWidth={false}></PulsarSection>
        <div className="border-2 border-black"></div>
        <AssaultSection fullWidth={false}></AssaultSection>
      </nav>
      <main className="flex h-[200rem] w-full flex-col items-center gap-large py-large">
        <ContentSection></ContentSection>
      </main>
    </div>
  );
}
