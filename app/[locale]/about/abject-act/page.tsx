import { H1 } from 'components/ui/text/h1';
import P from 'components/ui/text/p';
import { dynamicBlurDataUrl } from 'lib/utils';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata() {
  const t = await getTranslations('metadata.abject-act');
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
  const blurHash = await dynamicBlurDataUrl('/asset/background/abjectact-bg.webp');
  return (
    <main className="relative flex h-screen flex-col items-center gap-sub-large overflow-hidden py-extra-large tablet:pb-extra-large ">
      <div className=" fixed top-0 -z-20 h-screen w-screen overflow-hidden saturate-50">
        <Image
          blurDataURL={blurHash}
          placeholder={'blur'}
          sizes={'100vw'}
          fill
          alt={''}
          className="object-cover"
          priority={true}
          quality={100}
          src={'/asset/background/abjectact-bg.webp'}
        ></Image>
      </div>
      <H1
        textType={'heading--extra-large'}
        className="slideInFromRight relative z-10 text-center text-black5 max-mobile-large:text-heading-large max-mobile-large:leading-heading-large tablet:mt-small"
      >
        ABJECT ACT
      </H1>
      <div className="slideInFromLeft flex flex-col gap-small px-small tablet:px-0">
        <P textType={'sub-heading'} className="slideInLeft max-w-[600px] text-center text-black5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </P>
        <P textType={'sub-heading'} className="slideInLeft max-w-[600px] text-center text-black5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.
        </P>
      </div>
    </main>
  );
}
