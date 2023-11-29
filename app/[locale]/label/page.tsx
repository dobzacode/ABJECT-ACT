import ReleaseCard from 'components/label/release-card';
import releases from 'components/label/release.json';
import { H1 } from 'components/ui/text/h1';
import P from 'components/ui/text/p';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { v4 } from 'uuid';

export async function generateMetadata() {
  const t = await getTranslations('metadata.label');

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <main className="relative flex min-h-screen flex-col items-center gap-large overflow-x-hidden px-small py-extra-large tablet:px-0">
      <section className="relative flex flex-col ">
        <H1
          textType={'heading--extra-large'}
          className="slideInFromTop relative z-10 -mb-[4rem] text-center text-black5 max-mobile-large:text-heading-sub-extra-large  tablet:-mb-large tablet:mt-small"
        >
          LABEL
        </H1>
        <div className="slideInFromBottom flex h-fit w-fit max-w-[600px] flex-col justify-between gap-medium overflow-hidden rounded-small bg-black95 p-medium pt-[6rem]  text-center text-black5 shadow-medium-light tablet:pt-[8rem]">
          <P intent="white" textType={'body'} className="pr-small font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris
          </P>
        </div>
      </section>
      <div
        className="flex max-w-[1100px] flex-wrap items-center justify-center
      gap-large px-small"
      >
        {releases.map(({ link, pictureSrc, name }, index) => {
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
