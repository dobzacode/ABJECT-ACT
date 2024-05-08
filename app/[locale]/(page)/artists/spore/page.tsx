import { mdiEmail, mdiFacebook, mdiInstagram, mdiSoundcloud, mdiSpotify } from '@mdi/js';
import ArtistCard from 'components/artists/artist-card';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('metadata.spore');
  return {
    title: t('title'),
    description: t('description'),
    opengraph: {
      title: t('title'),
      description: t('description'),
      images: 'url/opengraph-image.jpg'
    },
    twitter: {
      title: t('title'),
      description: t('description'),
      images: 'url/twitter-image.jpg'
    }
  };
}

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <section className=" relative flex h-fit flex-col gap-medium max-[630px]:grid-cols-2 mobile-large:grid   tablet:grid-cols-none tablet:grid-rows-none">
        <ArtistCard
          className="max-[630px]:col-span-2 max-mobile-large:w-full min-[630px]:row-span-2 min-[630px]:w-[112%] tablet:w-auto"
          artistSrc="/asset/artist/spore.jpg"
          artist="Spore"
          socials={[
            { mdiPath: mdiInstagram, link: 'https://www.instagram.com/spore.abject/' },
            { mdiPath: mdiFacebook, link: 'https://www.facebook.com/Spore.Abject' },
            { mdiPath: mdiEmail, link: 'mailto:contact.sporemc@gmail.com' },
            { mdiPath: mdiSoundcloud, link: 'https://soundcloud.com/sporemc' },
            {
              mdiPath: mdiSpotify,
              link: 'https://open.spotify.com/intl-fr/artist/4ikPhgKSlQLR1VQgQuqP5n'
            }
          ]}
        ></ArtistCard>

        {/* <NextEventCard
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
            { link: 'https://soundcloud.com/sporemc/spore-exploring-horizons' },
            { link: 'https://soundcloud.com/sporemc/strike-them-harder' },
            { link: 'https://soundcloud.com/sporemc/spore-ame' }
          ]}
        ></LastReleaseCard> */}
      </section>
    </>
  );
}
