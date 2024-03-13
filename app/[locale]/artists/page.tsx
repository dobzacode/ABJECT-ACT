import { mdiEmail, mdiFacebook, mdiInstagram, mdiSoundcloud, mdiSpotify } from '@mdi/js';
import ArtistCard from 'components/artists/artist-card';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('metadata.artists');

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <main className="  relative  flex min-h-screen flex-wrap items-center justify-center justify-items-center gap-sub-large overflow-hidden px-medium py-extra-large tablet:pb-extra-large tablet:pt-[22rem]">
      <ArtistCard
        className=""
        artistSrc="/asset/artist/morsure.jpg"
        artist="Morsure"
        isArtistPage={true}
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

      <ArtistCard
        className=""
        artistSrc="/asset/artist/black_larsen.jpg"
        artist="Black Larsen"
        isArtistPage={true}
        socials={[
          { mdiPath: mdiInstagram, link: 'https://www.instagram.com/black_larsen/' },
          { mdiPath: mdiFacebook, link: 'https://www.facebook.com/black.larsen.abject/' },
          { mdiPath: mdiEmail, link: 'mailto:blacklarsen.contact@gmail.com' },
          { mdiPath: mdiSoundcloud, link: 'https://soundcloud.com/black_larsen' }
        ]}
      ></ArtistCard>

      <ArtistCard
        className=""
        artistSrc="/asset/artist/spore.jpg"
        artist="Spore"
        isArtistPage={true}
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
      <ArtistCard
        className=""
        artistSrc="/asset/artist/krauss.jpg"
        artist="Krauss"
        isArtistPage={true}
        socials={[
          { mdiPath: mdiInstagram, link: 'https://www.instagram.com/krauss_music/?hl=fr' },
          { mdiPath: mdiFacebook, link: 'https://www.facebook.com/krausstekno?fref=ts' },

          { mdiPath: mdiSoundcloud, link: 'https://soundcloud.com/krausssss' },
          {
            mdiPath: mdiSpotify,
            link: 'https://open.spotify.com/intl-fr/artist/2yW301v7rO5F5TWplXjanF'
          },
          { mdiPath: 'bandcamp', link: 'https://technokrauss.bandcamp.com/' }
        ]}
      ></ArtistCard>
    </main>
  );
}
