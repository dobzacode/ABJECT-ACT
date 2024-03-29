import { H1 } from 'components/ui/text/h1';
import P from 'components/ui/text/p';
import DynamicSection from 'components/values/dynamic-section';
import { dynamicBlurDataUrl } from 'lib/utils';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

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

  const blurHash = await dynamicBlurDataUrl('/asset/background/value-bg.webp');

  return (
    <main className="relative flex h-full min-h-screen flex-col items-center gap-sub-extra-large overflow-x-hidden px-small py-extra-large tablet:px-0 tablet:pb-extra-large ">
      <div className=" fixed top-0 -z-20 h-screen w-screen overflow-hidden saturate-50">
        <Image
          sizes={'100vw'}
          alt={''}
          className="object-cover"
          priority={true}
          quality={100}
          blurDataURL={blurHash}
          placeholder={'blur'}
          src={'/asset/background/value-bg.webp'}
          width={1920}
          height={1080}
        ></Image>
      </div>
      <section className="relative flex flex-col ">
        <H1
          textType={'heading--extra-large'}
          className="slideInFromTop relative z-10 -mb-[4rem] text-center text-black5 max-mobile-large:text-heading-sub-extra-large  tablet:-mb-large tablet:mt-small"
        >
          {t('values').toUpperCase()}
        </H1>
        <div className="slideInFromBottom transparent-card flex h-fit w-fit max-w-[600px] flex-col justify-between gap-medium overflow-hidden rounded-small  p-medium pt-[6rem]  text-center text-black5  tablet:pt-[8rem]">
          <P intent="white" textType={'body'} className="pr-small font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris
          </P>
        </div>
      </section>
      <DynamicSection
        src="/asset/pride_flag.png"
        alt="LGBTQ+ "
        direction="left"
        title={'LGBTQ+ FRIENDLY'}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </DynamicSection>
      <DynamicSection
        src="/asset/risk-reduction.png"
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
        src="/asset/safe-place.png"
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
