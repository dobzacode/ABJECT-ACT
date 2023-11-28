import { mdiEmail, mdiFacebook, mdiInstagram, mdiSoundcloud, mdiSpotify } from '@mdi/js';
import ArtistCard from 'components/artists/artist-card';
import NextEventCard from 'components/artists/next-event-card';
import PastEventCard from 'components/artists/past-event-card';
import LastReleaseCard from 'components/artists/release-card';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('metadata.morsure');
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function HomePage() {
  return (
    <>
      <section className=" relative flex h-fit flex-col gap-medium max-[630px]:grid-cols-2 mobile-large:grid   min-[630px]:mb-[400px] tablet:grid-cols-none tablet:grid-rows-none">
        <ArtistCard
          className="max-[630px]:col-span-2 max-mobile-large:w-full min-[630px]:row-span-2 min-[630px]:w-[112%] tablet:w-auto"
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

        <NextEventCard
          className="max-mobile-large:w-full"
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
          className="max-mobile-large:col-span-2 max-mobile-large:w-full mobile-large:col-start-2 mobile-large:row-start-2 tablet:row-start-auto"
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

        <LastReleaseCard
          className="-z-10 row-start-3 max-[630px]:col-span-2 max-mobile-large:w-full min-[630px]:absolute   min-[630px]:-bottom-[290px] tablet:col-span-2 tablet:mt-0"
          releaseList={[
            { link: 'https://soundcloud.com/morsureofc/morsure-resleeved-1' },
            { link: 'https://soundcloud.com/morsureofc/morsure-mind-surge' },
            { link: 'https://soundcloud.com/morsureofc/kozlov-x-morsure-2auvage-1' }
          ]}
        ></LastReleaseCard>
      </section>
    </>
  );
}
