'use client';

import { useTranslations } from 'next-intl';
import { useFormStatus } from 'react-dom';
import { BarLoader } from 'react-spinners';
import Button from '../button/button';

export function SubmitButton({ isEmail = false }: { isEmail?: boolean }) {
  const { pending } = useFormStatus();

  const t = useTranslations('form');

  console.log(pending);

  return (
    <Button
      className={`relative mt-small border-b-2 border-info10`}
      size="small"
      rounded="small"
      type="submit"
      intent="info"
      aria-disabled={pending}
    >
      {!isEmail ? t('submit') : t('subscribe')}
      {pending && (
        <BarLoader
          className="bg-info80"
          height="4px"
          cssOverride={{ width: '100%', position: 'absolute', bottom: '0' }}
        ></BarLoader>
      )}
    </Button>
  );
}
