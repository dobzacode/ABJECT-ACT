'use client';

import { H1 } from 'components/ui/text/h1';
import P from 'components/ui/text/p';
import { cn } from 'lib/utils';
import { useTranslations } from 'next-intl';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import NewsletterForm from './newsletter-form';

export default function NewsletterSection() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const t = useTranslations('newsletter');

  return (
    <section
      className={cn(
        'slideInFromBottom mx-small flex w-full gap-small overflow-hidden rounded-small border border-black70 bg-black90/60 p-medium  text-black5 shadow-medium-light mobile-large:mx-0 mobile-large:w-2/3 tablet:w-fit'
      )}
    >
      <div className="flex flex-col gap-medium">
        <H1 textType={'heading--sub-large'} className=" text-center text-black5">
          {t('heading')}
        </H1>
        <P textType="body" className=" text-center text-black5">
          {t('content')}
        </P>
        <NewsletterForm executeRecaptcha={executeRecaptcha as any}></NewsletterForm>
      </div>
    </section>
  );
}
