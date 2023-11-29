import { buttonVariants } from 'components/ui/button/button';
import { H1 } from 'components/ui/text/h1';
import P from 'components/ui/text/p';
import { Link } from 'navigation';
import { getTranslations } from 'next-intl/server';

export const metadata = {
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default async function NotFound() {
  const t = await getTranslations('not-found');
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-medium px-small text-black5">
      <H1 textType="heading--extra-large">404</H1>
      <P textType="body" className="max-w-[400px] text-center">
        {t('content')}{' '}
      </P>
      <Link
        className={buttonVariants({ size: 'small', rounded: 'small', intent: 'pastelNeutral' })}
        href="/"
      >
        {t('button').toUpperCase()}
      </Link>
    </main>
  );
}
