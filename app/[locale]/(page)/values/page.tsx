import { H1 } from 'components/ui/text/h1';
import P from 'components/ui/text/p';
import DynamicSection from 'components/values/dynamic-section';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import BACKGROUNDPIC from '/public/asset/background/value-bg.webp';
import ASSET1 from '/public/asset/pride_flag.png';
import ASSET2 from '/public/asset/risk-reduction.png';
import ASSET3 from '/public/asset/safe-place.png';

export async function generateMetadata() {
  const t = await getTranslations('metadata.values');

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
  const t = await getTranslations('navigation.primaryNavigation');
  const tContent = await getTranslations('values');

  return (
    <main className="relative flex h-full min-h-screen flex-col items-center gap-sub-extra-large overflow-x-hidden px-small py-extra-large tablet:px-0 tablet:pb-extra-large ">
      <div className=" fixed top-0 -z-20 h-screen w-screen overflow-hidden saturate-50">
        <Image
          sizes={'100vw'}
          alt={''}
          className="object-cover object-center min-[1920px]:h-screen min-[1920px]:w-screen"
          priority={true}
          quality={100}
          src={BACKGROUNDPIC}
          placeholder={'blur'}
          width={1920}
          height={1080}
        ></Image>
      </div>
      <section className="relative flex flex-col ">
        <H1
          textType={'heading--extra-large'}
          className="slideInFromTop relative z-10 -mb-[2.5rem] text-center text-black5 max-mobile-large:text-heading-sub-extra-large  tablet:-mb-large tablet:mt-small"
        >
          {t('values').toUpperCase()}
        </H1>
        <div className="slideInFromBottom transparent-card flex h-fit w-fit max-w-[600px] flex-col justify-between gap-medium overflow-hidden rounded-small  p-medium pt-[3.75rem]  text-center text-black5  tablet:pt-[5rem]">
          <P intent="white" textType={'body'} className="pr-small font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris
          </P>
        </div>
      </section>
      <DynamicSection src={ASSET1} alt="LGBTQ+ " direction="left" title={'LGBTQ+ FRIENDLY'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </DynamicSection>
      <DynamicSection
        src={ASSET2}
        alt="Risk reduction"
        direction="right"
        title={tContent('risk-reduction').toUpperCase()}
        imgCss="scale-[130%] mr-2"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </DynamicSection>
      <DynamicSection
        imgCss="ml-[10px]"
        src={ASSET3}
        alt="Safe place"
        direction="left"
        title={'SAFE PLACE'}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </DynamicSection>
    </main>
  );
}
