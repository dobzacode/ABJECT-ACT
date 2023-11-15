import EventSection from 'components/media/photo-video/event-section';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function GalleryPage() {
  return (
    <main className="flex w-full flex-col gap-extra-large ">
      <section className="h-[40rem]"></section>
      <EventSection
        imageFolder="/asset/event/media/pulsar-lulu"
        videoSrc="/asset/background/video/1089037097-preview.mp4"
        title="Abject Act : Pulsar w/ LULU, Resonance"
      ></EventSection>
      <EventSection
        imageFolder="/asset/event/media/pulsar-lulu"
        videoSrc="/asset/background/video/1089037097-preview.mp4"
        title="Abject Act : Pulsar w/ LULU, Resonance"
      ></EventSection>
      <EventSection
        imageFolder="/asset/event/media/pulsar-lulu"
        videoSrc="/asset/background/video/1089037097-preview.mp4"
        title="Abject Act : Pulsar w/ LULU, Resonance"
      ></EventSection>
    </main>
  );
}
