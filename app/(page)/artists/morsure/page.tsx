import { mdiEmail, mdiFacebook, mdiInstagram, mdiSoundcloud } from '@mdi/js';
import ArtistCard from 'components/artists/artist-card';
import Image from 'next/image';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <main className="flex h-screen items-center justify-center overflow-x-hidden">
      <Image
        alt="Abject event picture"
        className="-z-10 object-cover object-[25%,35%] duration-slowest"
        fill
        src={'/asset/background/pulsar-bg.jpg'}
      ></Image>
      <section>
        <ArtistCard
          artist="Morsure"
          artistSrc="/asset/artist/morsure.jpg"
          socials={[
            { mdiPath: mdiInstagram, link: 'https://www.instagram.com/morsure_music/' },
            { mdiPath: mdiFacebook, link: 'https://www.facebook.com/morsuremusic/' },
            { mdiPath: mdiEmail, link: 'mailto:contact.morsure@gmail.com' },
            { mdiPath: mdiSoundcloud, link: 'https://soundcloud.com/morsureofc' }
          ]}
        ></ArtistCard>
      </section>
    </main>
  );
}
