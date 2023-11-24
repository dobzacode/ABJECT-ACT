'use client';

import { useTranslations } from 'next-intl';
import { useFormStatus } from 'react-dom';
import { BarLoader } from 'react-spinners';
import Button from '../button/button';

export function SubmitButton() {
  const { pending } = useFormStatus();

  const t = useTranslations('form');

  return (
    <Button
      className={`border border-info60 shadow-info-low`}
      size="small"
      rounded="small"
      type="submit"
      intent="info"
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
