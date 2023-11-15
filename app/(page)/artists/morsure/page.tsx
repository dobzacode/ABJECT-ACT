import { mdiEmail, mdiFacebook, mdiInstagram, mdiSoundcloud } from '@mdi/js';
import ArtistCard from 'components/artists/artist-card';
import NextEventCard from 'components/artists/next-event-card';
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
        className="fadeIn -z-10 object-cover object-[25%,35%] transition "
        fill
        src={'/asset/background/pulsar-bg.jpg'}
      ></Image>
      <section className="flex flex-wrap justify-around gap-medium">
        <div className="relative h-[30rem] w-full rounded-small">
          <Image
            className="rounded-small object-cover"
            fill
            src={'/asset/artist/morsure.jpg'}
            alt={`morsure picture`}
          ></Image>
        </div>
        <ArtistCard
          artist="Morsure"
          socials={[
            { mdiPath: mdiInstagram, link: 'https://www.instagram.com/morsure_music/' },
            { mdiPath: mdiFacebook, link: 'https://www.facebook.com/morsuremusic/' },
            { mdiPath: mdiEmail, link: 'mailto:contact.morsure@gmail.com' },
            { mdiPath: mdiSoundcloud, link: 'https://soundcloud.com/morsureofc' }
          ]}
        ></ArtistCard>
        <NextEventCard
          eventList={[
            {
              date: '02/04/2024',
              name: "La foire à l'oignon",
              place: 'Schwindratzheim',
              eventLink: 'https://schwindratzheim.com'
            },
            {
              date: '02/04/2024',
              name: "La foire à l'oignon",
              place: 'Schwindratzheim',
              eventLink: 'https://schwindratzheim.com'
            },
            {
              date: '02/04/2024',
              name: "La foire à l'oignon",
              place: 'Schwindratzheim',
              eventLink: 'https://schwindratzheim.com'
            }
          ]}
        ></NextEventCard>
      </section>
    </main>
  );
}
