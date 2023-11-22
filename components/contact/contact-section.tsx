'use client';

import { joinUsAction } from 'app/_action';
import Input from 'components/ui/form/input';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import ContactForm from './contact-form';

export default function ContactSection({}) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const tForm = useTranslations('form');
  const t = useTranslations('navigation.secondaryNavigation');

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    router.replace(`${pathname}?type=${selectedOption.toLowerCase().replace(/ /g, '-')}`);
  }, [selectedOption, pathname, router]);

  return (
    <section className="flex w-[24rem] flex-col gap-small rounded-small bg-white p-small mobile-large:w-1/2 tablet:w-fit">
      <Input
        onChange={handleSelectChange}
        id={'formType'}
        value={selectedOption}
        choices={[t('join us'), t('partnership'), 'Contact']}
        type="select"
        className="bg-white text-black"
        hiddenlabel="true"
      ></Input>
      <ContactForm classname="flex flex-col gap-small" action={joinUsAction}>
        <div className="flex flex-col justify-between gap-small tablet:flex-row">
          <Input
            minLength={2}
            maxLength={30}
            required
            type="text"
            id={tForm('firstname')}
            placeholder={tForm('firstname')}
            hiddenlabel="true"
          ></Input>
          <Input
            minLength={2}
            maxLength={30}
            required
            type="text"
            id={tForm('lastname')}
            placeholder={tForm('lastname')}
            hiddenlabel="true"
          ></Input>
        </div>
        <Input required type="email" id={'email'} placeholder={'Email'} hiddenlabel="true"></Input>
        <Input
          minLength={2}
          maxLength={30}
          required
          type="text"
          id={tForm('subject')}
          placeholder={tForm('subject')}
          hiddenlabel="true"
        ></Input>
        <Input
          minLength={10}
          maxLength={500}
          required
          type="textarea"
          id={'message'}
          placeholder={'Message'}
          rows={5}
          cols={3}
          hiddenlabel="true"
        ></Input>
      </ContactForm>
    </section>
  );
}
