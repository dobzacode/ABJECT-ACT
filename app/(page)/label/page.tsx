import ImageSlider from 'components/ui/div/image-slider/image-slider';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <ImageSlider imageFolder="/asset/event/media/pulsar-lulu"></ImageSlider>
    </>
  );
}
