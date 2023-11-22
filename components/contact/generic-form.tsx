'use client';

import { SubmitButton } from 'components/ui/form/submit-button';
import P from 'components/ui/text/p';
import { cn } from 'lib/utils';
import { useTranslations } from 'next-intl';

import { FormEventHandler, ReactNode } from 'react';

interface ContactFormProps {
  children: ReactNode;
  // eslint-disable-next-line no-unused-vars
  action?: (payload: FormData) => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  classname: string;
}

export default function GenericForm({ children, action, classname, onSubmit }: ContactFormProps) {
  const t = useTranslations('reCaptcha');

  return (
    <>
      <form onSubmit={onSubmit} action={action} className={cn(classname)}>
        {children}
        <SubmitButton></SubmitButton>
      </form>
      {t && (
        <P className="caption text-start">
          {t('formPhrase.1')}
          <a className="text-info50" href="https://policies.google.com/privacy">
            {t('formPhrase.2')}
          </a>
          {t('formPhrase.3')}
          <a className="text-info50" href="https://policies.google.com/terms">
            {t('formPhrase.4')}
          </a>
          {t('formPhrase.5')}
        </P>
      )}
    </>
  );
}
