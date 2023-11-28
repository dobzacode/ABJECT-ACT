import ReleaseCard from 'components/label/release-card';
import releases from 'components/label/release.json';
import { H1 } from 'components/ui/text/h1';
import P from 'components/ui/text/p';
import { v4 } from 'uuid';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center gap-sub-extra-large overflow-x-hidden px-small py-extra-large tablet:px-0">
      <section className="relative flex flex-col ">
        <H1
          textType={'heading--extra-large'}
          className="slideInFromTop relative z-10 -mb-large text-center text-black5 max-mobile-large:text-heading-large max-mobile-large:leading-heading-large tablet:mt-small"
        >
          LABEL
        </H1>
        <div className="slideInFromBottom flex h-fit w-fit max-w-[600px] flex-col justify-between gap-medium overflow-hidden rounded-small bg-black95 p-medium pt-[8rem] text-center text-black5 shadow-medium-light">
          <P intent="white" textType={'body'} className="pr-small font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris
          </P>
        </div>
      </section>
      <div className="flex max-w-[1100px] flex-wrap items-center justify-center gap-extra-large px-small">
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
