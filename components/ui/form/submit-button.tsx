'use client';

import { useTranslations } from 'next-intl';
import { useFormStatus } from 'react-dom';
import Button from '../button/button';

export function SubmitButton() {
  const { pending } = useFormStatus();

  const t = useTranslations('form');

  return (
    <Button
      className="border bg-white text-black shadow-inner"
      size="small"
      rounded="small"
      type="submit"
      aria-disabled={pending}
    >
      {t('submit')}
    </Button>
  );
}
