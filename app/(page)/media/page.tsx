import MusicSection from 'components/media/music/music-section';
import PhotoVideoSection from 'components/media/photo-video/photo-video-section';

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
      <MusicSection></MusicSection>
      <div className="w-full border-2 border-black" />
      <PhotoVideoSection></PhotoVideoSection>
    </main>
  );
}
