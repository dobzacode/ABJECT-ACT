import { H1 } from 'components/ui/text/h1';
import P from 'components/ui/text/p';
import DynamicSection from 'components/values/dynamic-section';
import { getTranslations } from 'next-intl/server';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const t = await getTranslations('navigation.primaryNavigation');
  const tContent = await getTranslations('values');

  return (
    <main className="relative flex h-screen flex-col items-center gap-sub-extra-large overflow-x-hidden px-small py-extra-large tablet:px-0">
      <section className="relative flex flex-col ">
        <H1
          textType={'heading--extra-large'}
          className="slideInFromTop relative z-10 -mb-[4rem] text-center text-black5 max-mobile-large:text-heading-sub-extra-large  tablet:-mb-large tablet:mt-small"
        >
          {t('values').toUpperCase()}
        </H1>
        <div className="slideInFromBottom flex h-fit w-fit max-w-[600px] flex-col justify-between gap-medium overflow-hidden rounded-small bg-black95 p-medium pt-[6rem]  text-center text-black5 shadow-medium-light tablet:pt-[8rem]">
          <P intent="white" textType={'body'} className="pr-small font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris
          </P>
        </div>
      </section>
      <DynamicSection direction="left" title={'LGBTQ+ FRIENDLY'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </DynamicSection>
      <DynamicSection direction="right" title={tContent('risk-reduction').toUpperCase()}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </DynamicSection>
      <DynamicSection direction="left" title={'SAFE PLACE'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </DynamicSection>
    </main>
  );
}
