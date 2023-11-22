import ContentSection from 'components/media/photo-video/content-section';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function GalleryPage() {
  return (
    <main className="relative flex h-full min-h-screen w-full flex-col items-center pt-extra-large tablet:pt-0">
      <ContentSection></ContentSection>
    </main>
  );
}
