import ContactSection from 'components/contact/contact-section';
import RecaptchaProvider from 'components/providers/recaptcha-provider';
import { H1 } from 'components/ui/text/h1';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('metadata.join-us');

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function HomePage() {
  const t = await getTranslations('navigation.primaryNavigation');

  return (
    <main className="relative flex h-screen flex-col items-center gap-sub-large overflow-hidden pt-extra-large">
      <H1
        textType={'heading--extra-large'}
        className="slideInFromTop relative z-10 text-center text-black5 max-mobile-large:text-heading-large max-mobile-large:leading-heading-large tablet:mt-small"
      >
        {t('join us')}
      </H1>
      <RecaptchaProvider>
        <ContactSection isJoinUs={true}></ContactSection>
      </RecaptchaProvider>
    </main>
  );
}
