import VideoBackground from 'components/ui/div/background-video';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage({}: { params: { lang: string; country: string } }) {
  return (
    <main>
      <VideoBackground src={'/asset/background/video/1089037097-preview.mp4'}></VideoBackground>
    </main>
  );
}
