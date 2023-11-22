'use client';

import { useTranslations } from 'next-intl';
import { useFormStatus } from 'react-dom';
import { BarLoader } from 'react-spinners';
import Button from '../button/button';

export function SubmitButton() {
  const { pending } = useFormStatus();

  const t = useTranslations('form');

  console.log(pending);

  return (
    <Button
      className={`relative overflow-hidden border bg-white text-black shadow-inner`}
      size="small"
      rounded="small"
      type="submit"
      aria-disabled={pending}
    >
      {t('submit')}
      {pending && (
        <BarLoader
          color="black"
          height="2px"
          cssOverride={{ width: '100%', position: 'absolute', bottom: '0' }}
        ></BarLoader>
      )}
    </Button>
  );
}
