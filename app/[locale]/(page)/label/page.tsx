import ReleaseCard from 'components/label/release-card';

import { H1 } from 'components/ui/text/h1';
import P from 'components/ui/text/p';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image, { StaticImageData } from 'next/image';
import { v4 } from 'uuid';
import BACKGROUNDPIC from '/public/asset/background/label-bg.webp';
import VA002PIC from '/public/asset/label/va1.jpg';

const RELEASES: { link: string; pictureSrc: StaticImageData; name: string }[] = [
  {
    link: 'https://abjectact.bandcamp.com/album/vandalism-va001',
    pictureSrc: VA002PIC,
    name: 'VA002'
  }
];

export async function generateMetadata() {
  const t = await getTranslations('metadata.label');

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
  const t = await getTranslations('label');

  return (
    <main className="relative flex min-h-screen flex-col items-center gap-large overflow-x-hidden px-small py-extra-large tablet:px-0 ">
      <div className=" fixed top-0 -z-20 h-[100vh] w-[100vw] overflow-hidden saturate-50">
        <Image
          width={1920}
          height={1080}
          sizes="100vw"
          alt={''}
          className="object-cover object-center min-[1920px]:h-screen min-[1920px]:w-screen"
          priority={true}
          quality={100}
          src={BACKGROUNDPIC}
          placeholder={'blur'}
        ></Image>
      </div>
      <section className="relative flex flex-col ">
        <H1
          textType={'heading--extra-large'}
          className="slideInFromTop relative z-10 -mb-[4rem]  text-center text-black5 max-mobile-large:text-heading-sub-extra-large  tablet:-mb-large tablet:mt-small"
        >
          LABEL
        </H1>
        <div className="slideInFromBottom transparent-card flex h-fit w-fit max-w-[600px] flex-col justify-between gap-medium overflow-hidden rounded-small  p-medium pt-[6rem]  text-center text-black5  tablet:pt-[6rem]">
          <P intent="white" textType={'body'} className="pr-small font-extralight">
            {t('description')}
            <br /> <br /> {t('description2')}
          </P>
        </div>
      </section>
      <div
        className="flex max-w-[1100px] flex-wrap items-center justify-center
      gap-large px-small"
      >
        {RELEASES.map(({ link, pictureSrc, name }, index) => {
          return (
            <ReleaseCard
              key={v4()}
              pictureSrc={pictureSrc}
              name={name}
              link={link}
              direction={index % 2 == 0 ? 'left' : 'right'}
            ></ReleaseCard>
          );
        })}
      </div>
    </main>
  );
}
