'use client';

import Input from 'components/ui/form/input';
import P from 'components/ui/text/p';
import { cn } from 'lib/utils';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import ContactForm from './contact/contact-form';
import JoinUsForm from './join-us/join-us-form';
import PartnershipForm from './partnership/partnership-form';

export default function ContactSection({ isJoinUs = false }: { isJoinUs?: boolean }) {
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
    if (isJoinUs) return;

    router.replace(`${pathname}?type=${selectedOption.toLowerCase().replace(/ /g, '-')}`);
  }, [selectedOption, pathname, router, isJoinUs]);

  return (
    <>
      <section
        className={cn(
          'slideInFromBottom mx-small flex w-full flex-col gap-small rounded-small border border-black70 bg-black90/60 p-small pt-0 text-black5 shadow-medium-light mobile-large:mx-0 mobile-large:w-2/3 tablet:w-fit'
        )}
      >
        {isJoinUs && (
          <div className="flex  justify-center">
            <P
              className="py- text-black-5 w-1/2 rounded-extra-small rounded-t-none border-b border-black50 bg-black p-extra-small text-center "
              textType={'body'}
            >
              {t('join us').toUpperCase()}
            </P>
          </div>
        )}
        {!isJoinUs ? (
          <>
            <Input
              onChange={handleSelectChange}
              id={'formType'}
              value={selectedOption}
              intent="black"
              choices={['Contact', t('partnership')]}
              type="select"
              hiddenlabel="true"
            ></Input>
            {searchParams.get('type') === t('partnership').toLowerCase().replace(/ /g, '-') ? (
              <PartnershipForm executeRecaptcha={executeRecaptcha as any}></PartnershipForm>
            ) : null}
            {searchParams.get('type') === 'contact' || !searchParams.get('type') ? (
              <ContactForm executeRecaptcha={executeRecaptcha as any}></ContactForm>
            ) : null}
          </>
        ) : (
          <JoinUsForm executeRecaptcha={executeRecaptcha as any}></JoinUsForm>
        )}
      </section>
    </>
  );
}
