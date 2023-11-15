import EventSection from 'components/media/photo-video/event-section';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function GalleryPage() {
  return (
    <div className="flex w-full flex-col items-center gap-large">
      <nav className="h-[40rem]"></nav>
      <main
        className="flex h-[200rem] w-full flex-col items-center gap-large py-large"
        style={{
          backgroundImage: 'url("/asset/background/pulsar-bg.jpg")',
          backgroundSize: 'cover'
        }}
      >
        <EventSection
          imageFolder="/asset/event/media/pulsar-lulu"
          videoSrc="/asset/background/video/1089037097-preview.mp4"
          title="Abject Act : Pulsar w/ LULU, Resonance"
          direction="right"
        ></EventSection>
        <EventSection
          imageFolder="/asset/event/media/pulsar-lulu"
          videoSrc="/asset/background/video/1089037097-preview.mp4"
          title="Abject Act : Pulsar w/ LULU, Resonance"
          direction="left"
        ></EventSection>
        <EventSection
          imageFolder="/asset/event/media/pulsar-lulu"
          videoSrc="/asset/background/video/1089037097-preview.mp4"
          title="Abject Act : Pulsar w/ LULU, Resonance"
          direction="right"
        ></EventSection>
      </main>
    </div>
  );
}
