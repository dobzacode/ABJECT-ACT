import { mdiEmail, mdiFacebook, mdiInstagram, mdiSoundcloud, mdiSpotify } from '@mdi/js';
import ArtistCard from 'components/artists/artist-card';
import NextEventCard from 'components/artists/next-event-card';
import PastEventCard from 'components/artists/past-event-card';
import LastReleaseCard from 'components/artists/release-card';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <main className="flex h-full items-center justify-center overflow-x-hidden py-extra-large">
      {/* <Image
        alt="Abject event picture"
        className="fadeIn -z-10 object-cover object-[25%,35%] transition "
        fill
        src={'/asset/background/pulsar-bg.jpg'}
      ></Image> */}
      <section className="flex flex-col flex-wrap justify-around gap-medium">
        <div className="flex gap-small">
          <ArtistCard
            artistSrc="/asset/artist/morsure.jpg"
            artist="Morsure"
            socials={[
              { mdiPath: mdiInstagram, link: 'https://www.instagram.com/morsure_music/' },
              { mdiPath: mdiFacebook, link: 'https://www.facebook.com/morsuremusic/' },
              { mdiPath: mdiEmail, link: 'mailto:contact.morsure@gmail.com' },
              { mdiPath: mdiSoundcloud, link: 'https://soundcloud.com/morsureofc' },
              {
                mdiPath: mdiSpotify,
                link: 'https://open.spotify.com/intl-fr/artist/7i2NAgDUSGr7whcVn5Azja'
              },
              { mdiPath: 'bandcamp', link: 'https://morsureofc.bandcamp.com/' }
            ]}
          ></ArtistCard>
          <div className="flex flex-col gap-medium">
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
            <PastEventCard
              eventList={[
                {
                  date: '02/04/2024',
                  name: 'La barmitzvah de Louis',
                  place: 'Schwindratzheim',
                  eventLink: 'https://schwindratzheim.com'
                },
                {
                  date: '02/04/2024',
                  name: 'La barmitzvah de Louis',
                  place: 'Schwindratzheim',
                  eventLink: 'https://schwindratzheim.com'
                },
                {
                  date: '02/04/2024',
                  name: 'La barmitzvah de Louis',
                  place: 'Schwindratzheim',
                  eventLink: 'https://schwindratzheim.com'
                }
              ]}
            ></PastEventCard>
          </div>
        </div>
        <LastReleaseCard
          releaseList={[
            { link: 'https://soundcloud.com/morsureofc/morsure-resleeved-1' },
            { link: 'https://soundcloud.com/morsureofc/morsure-mind-surge' },
            { link: 'https://soundcloud.com/morsureofc/kozlov-x-morsure-2auvage-1' }
          ]}
        ></LastReleaseCard>
      </section>
    </main>
  );
}
