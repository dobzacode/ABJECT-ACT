'use client';

import { buttonVariants } from 'components/ui/button/button';
import H2 from 'components/ui/text/h2';
import P from 'components/ui/text/p';
import { Link } from 'navigation';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

export default function Error({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const t = useTranslations('error');

  return (
    <section className="relative z-50 flex h-screen w-screen flex-col items-center justify-center gap-medium px-small text-black5">
      <H2 textType="heading--extra-large">500</H2>
      <P textType="body" className="max-w-[400px] text-center">
        {t('content')}{' '}
      </P>
      <Link
        className={buttonVariants({ size: 'small', rounded: 'small', intent: 'pastelNeutral' })}
        href="/"
      >
        {t('button').toUpperCase()}
      </Link>
    </section>
  );
}
