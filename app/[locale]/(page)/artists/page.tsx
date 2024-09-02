import { mdiEmail, mdiFacebook, mdiInstagram, mdiSoundcloud, mdiSpotify } from '@mdi/js';
import ArtistSnippet from 'components/artists/artist-snippet';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import BLANKARPIC from '/public/asset/artist/black_larsen.jpg';
import MORSUREPIC from '/public/asset/artist/morsure.jpg';
import SPOREPIC from '/public/asset/artist/spore.jpg';
import BACKGROUNDPIC from '/public/asset/background/artists-bg.webp';

export async function generateMetadata() {
  const t = await getTranslations('metadata.artists');

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
    <main className="  relative  flex min-h-screen flex-wrap items-center justify-center justify-items-center gap-large overflow-hidden px-medium py-extra-large tablet:gap-sub-large tablet:pb-extra-large tablet:pt-[13.75rem]">
      <div className=" fixed bottom-0 top-0 -z-20 h-screen w-screen overflow-hidden saturate-50">
        <Image
          placeholder={'blur'}
          sizes={'100vw'}
          alt={''}
          className="object-cover object-center min-[1920px]:h-screen min-[1920px]:w-screen"
          priority={true}
          quality={100}
          src={BACKGROUNDPIC}
          width={1920}
          height={1080}
        ></Image>
      </div>
      <ArtistSnippet
        artistSrc={MORSUREPIC}
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
      ></ArtistSnippet>

      <ArtistSnippet
        artistSrc={BLANKARPIC}
        artist="Black Larsen"
        socials={[
          { mdiPath: mdiInstagram, link: 'https://www.instagram.com/black_larsen/' },
          { mdiPath: mdiFacebook, link: 'https://www.facebook.com/black.larsen.abject/' },
          { mdiPath: mdiEmail, link: 'mailto:blacklarsen.contact@gmail.com' },
          { mdiPath: mdiSoundcloud, link: 'https://soundcloud.com/black_larsen' }
        ]}
      ></ArtistSnippet>

      <ArtistSnippet
        artistSrc={SPOREPIC}
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
      ></ArtistSnippet>
    </main>
  );
}
