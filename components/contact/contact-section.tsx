'use client';

import Input from 'components/ui/form/input';
import { cn } from 'lib/utils';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import ContactForm from './contact/contact-form';
import JoinUsForm from './join-us/join-us-form';
import PartnershipForm from './partnership/partnership-form';

export default function ContactSection({}) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const { executeRecaptcha } = useGoogleReCaptcha();

  const t = useTranslations('navigation.primaryNavigation');

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    router.replace(`${pathname}?type=${selectedOption.toLowerCase().replace(/ /g, '-')}`);
  }, [selectedOption, pathname, router]);

  return (
    <>
      <section
        className={cn(
          'mx-small flex w-full flex-col gap-small rounded-small border border-black70 bg-neutral5 p-small text-neutral90 shadow-medium-light mobile-large:mx-0 mobile-large:w-2/3 tablet:w-fit'
        )}
      >
        <Input
          onChange={handleSelectChange}
          id={'formType'}
          value={selectedOption}
          intent="neutral"
          choices={[t('join us'), t('partnership'), 'Contact']}
          type="select"
          hiddenlabel="true"
        ></Input>
        {searchParams.get('type') === t('join us').toLowerCase().replace(/ /g, '-') ||
        !searchParams.get('type') ? (
          <JoinUsForm executeRecaptcha={executeRecaptcha as any}></JoinUsForm>
        ) : null}
        {searchParams.get('type') === t('partnership').toLowerCase().replace(/ /g, '-') ? (
          <PartnershipForm executeRecaptcha={executeRecaptcha as any}></PartnershipForm>
        ) : null}
        {searchParams.get('type') === 'contact' ? (
          <ContactForm executeRecaptcha={executeRecaptcha as any}></ContactForm>
        ) : null}
      </section>
    </>
  );
}
