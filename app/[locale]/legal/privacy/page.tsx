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
  const t = await getTranslations('privacy');
  return (
    <main className="flex flex-col gap-sub-large px-small py-extra-large text-white mobile-large:px-large">
      <H1
        textType={'heading--extra-large'}
        className="relative z-10 text-black5   max-mobile-large:text-heading-large max-mobile-large:leading-heading-large mobile-large:text-center tablet:mt-small"
      >
        {t('title').toUpperCase()}
      </H1>

      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('objectives.heading')}
        </H2>
        <P textType={'body'}>{t('objectives.listInfo')}</P>
        <ol className=" body flex flex-col gap-extra-small pl-small">
          {[
            'objectives.list.1',
            'objectives.list.2',
            'objectives.list.3',
            'objectives.list.4',
            'objectives.list.5'
          ].map((item) => {
            return <li key={item}>- {t(item)}</li>;
          })}
        </ol>
        <P textType={'body'}>{t('objectives.additionalInfo')}</P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('applicabilityLaws.heading')}
        </H2>
        <P textType={'body'}>
          {t('applicabilityLaws.content')}
          <br></br>
          {t('applicabilityLaws.data')}
        </P>
        <ol className=" body flex flex-col gap-extra-small pl-small">
          {[
            'applicabilityLaws.list.1',
            'applicabilityLaws.list.2',
            'applicabilityLaws.list.3',
            'applicabilityLaws.list.4',
            'applicabilityLaws.list.5',
            'applicabilityLaws.list.6'
          ].map((item) => {
            return <li key={item}>{t(item)}</li>;
          })}
        </ol>
        <P textType={'body'}>{t('lawfulBasis.listCaption')}</P>
        <ol className=" body flex flex-col gap-extra-small pl-small">
          {[
            'lawfulBasis.list.1',
            'lawfulBasis.list.2',
            'lawfulBasis.list.3',
            'lawfulBasis.list.4',
            'lawfulBasis.list.5'
          ].map((item) => {
            return <li key={item}>{t(item)}</li>;
          })}
        </ol>
        <P textType={'body'}>{t('californiaResidentsInfo')}</P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('consent.heading')}
        </H2>
        <P textType={'body'}>{t('consent.content')}</P>
        <ol className=" body flex flex-col gap-extra-small pl-small">
          {['consent.list.1', 'consent.list.2'].map((item) => {
            return <li key={item}>{t(item)}</li>;
          })}
        </ol>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('automaticDataCollection.heading')}
        </H2>
        <P textType={'body'}>{t('automaticDataCollection.content')}</P>
        <ol className=" body flex flex-col gap-extra-small pl-small">
          <li>{t('automaticDataCollection.list')}</li>
        </ol>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('nonAutomaticDataCollection.heading')}
        </H2>
        <P textType={'body'}>{t('nonAutomaticDataCollection.content')}</P>
        <ol className=" body flex flex-col gap-extra-small pl-small">
          {['nonAutomaticDataCollection.list.1', 'nonAutomaticDataCollection.list.2'].map(
            (item) => {
              return <li key={item}>{t(item)}</li>;
            }
          )}
        </ol>
        <P textType={'body'}>
          {t('nonAutomaticDataCollection.additionalInfo')}
          <br />
          <br />
          {t('nonAutomaticDataCollection.additionalInfo2')}
        </P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('dataUsage.heading')}
        </H2>
        <P textType={'body'}>
          {t('dataUsage.automaticDataUsage')}
          <br></br>
          <br></br> {t('dataUsage.automaticDataUsage2')}
        </P>
        <ol className=" body flex flex-col gap-extra-small pl-small">
          <li>{t('dataUsage.automaticDataUsageList')}</li>
        </ol>
        <P textType={'body'}>{t('dataUsage.nonAutomaticDataUsage')}</P>
        <ol className=" body flex flex-col gap-extra-small pl-small">
          <li>{t('dataUsage.nonAutomaticDataUsageList')}</li>
        </ol>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('dataAccess.heading')}
        </H2>
        <P textType={'body'}>
          <strong>{t('dataAccess.members')}</strong>
          <br></br>
          {t('dataAccess.membersAccess')}
          <br />
          <br />
          <strong>{t('dataAccess.disclosures')}</strong>
          <br />
          {t('dataAccess.otherDisclosures')}
        </P>
        <ol className=" body flex flex-col gap-extra-small pl-small">
          {[
            'dataAccess.otherDisclosuresList.1',
            'dataAccess.otherDisclosuresList.2',
            'dataAccess.otherDisclosuresList.3'
          ].map((item) => {
            return <li key={item}>{t(item)}</li>;
          })}
        </ol>
        <P textType={'body'}>{t('dataAccess.disclaimer')}</P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('dataStorageDuration.heading')}
        </H2>
        <P textType={'body'}>{t('dataStorageDuration.content')}</P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('dataSecurity.heading')}
        </H2>
        <P textType={'body'}>
          {t('dataSecurity.content')}
          <br></br>
          <br></br>
          {t('dataSecurity.content2')}
          <br></br>
          <br></br>
          {t('dataSecurity.content3')}
        </P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('minors.heading')}
        </H2>
        <P textType={'body'}>{t('minors.content')}</P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('userRights.heading')}
        </H2>
        <P textType={'body'}>{t('userRights.content')}</P>{' '}
        <ol className=" body flex flex-col gap-extra-small pl-small">
          {[
            'userRights.userRightsList.1',
            'userRights.userRightsList.2',
            'userRights.userRightsList.3',
            'userRights.userRightsList.4',
            'userRights.userRightsList.5',
            'userRights.userRightsList.6',
            'userRights.userRightsList.7'
          ].map((item) => {
            return <li key={item}>{t(item)}</li>;
          })}
        </ol>
        <P textType={'body'}>{t('userRights.additionalInfo')}</P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('modifyDeleteData.heading')}
        </H2>
        <P textType={'body'}>{t('modifyDeleteData.content')}</P>
        <ol className=" body flex flex-col gap-extra-small pl-small">
          {['modifyDeleteData.list.1', 'modifyDeleteData.list.2', 'modifyDeleteData.list.3'].map(
            (item) => {
              return <li key={item}>{t(item)}</li>;
            }
          )}
        </ol>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('cookiePolicy.heading')}
        </H2>
        <P textType={'body'}>
          {t('cookiePolicy.content')}
          <br></br>
          <br></br>
          {t('cookiePolicy.content2')}
        </P>
        <ol className=" body flex flex-col gap-extra-small pl-small">
          <li>- {t('cookiePolicy.list')}</li>
        </ol>
        <P textType={'body'}>{t('cookiePolicy.additionalInfo')}</P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('changes.heading')}
        </H2>
        <P textType={'body'}>{t('changes.content')}</P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('contact.heading')}
        </H2>
        <P textType={'body'}>
          {t('contact.content')}
          <br />
          <br />
          {t('contact.contactInfo.1')}
          <br />
          {t('contact.contactInfo.2')}
          <br />
          {t('contact.contactInfo.3')}
        </P>
      </div>
    </main>
  );
}
