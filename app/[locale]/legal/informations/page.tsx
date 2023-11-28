import { H1 } from 'components/ui/text/h1';
import H2 from 'components/ui/text/h2';
import P from 'components/ui/text/p';
import { getTranslations } from 'next-intl/server';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const t = await getTranslations('legal');
  return (
    <main className="slideInFromBottom flex flex-col gap-sub-large px-small py-extra-large text-white mobile-large:px-large">
      <H1
        textType={'heading--extra-large'}
        className="relative z-10 text-black5   max-mobile-large:text-heading-large max-mobile-large:leading-heading-large mobile-large:text-center tablet:mt-small"
      >
        {t('title').toUpperCase()}
      </H1>
      <P textType={'body'}>
        {t('law')}
        <br />
        <br />
        {t('law2')}
      </P>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('legalInformation.heading')}
        </H2>
        <P textType={'body'}>
          {t('legalInformation.content')}
          <br />
          <br /> {t('legalInformation.content2')}
          <br /> {t('legalInformation.content3')}
          <br /> {t('legalInformation.content4')} <br></br> {t('legalInformations.content5')}
          <br />
          <br /> {t('legalInformation.webmaster')} <br />
          {t('legalInformation.webmasterEmail')}
          <br />
          <br /> {t('legalInformation.hosting1')} <br /> {t('legalInformation.hosting2')} <br />
          {t('legalInformation.hosting3')}
        </P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('principles.heading')}
        </H2>
        <P textType={'body'}>{t('principles.content')}</P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('accessibility.heading')}
        </H2>
        <P textType={'body'}>{t('accessibility.content')}</P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('property.heading')}
        </H2>
        <P textType={'body'}>{t('property.content')}</P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('cookies.heading')}
        </H2>
        <P textType={'body'}>{t('cookies.content')}</P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('protection.heading')}
        </H2>
        <P textType={'body'}>
          {t('protection.content')}
          <br></br>
          <br></br> {t('protection.content2')}
          <br />
          <br /> {t('protection.content3')} <br></br>
          <br /> {t('protection.content4')}
        </P>
      </div>
    </main>
  );
}
