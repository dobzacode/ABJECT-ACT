'use client';

import { deleteCookie, hasCookie, setCookie } from 'cookies-next';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import Button from '../button/button';
import P from '../text/p';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);
  const t = useTranslations('consent');

  useEffect(() => {
    setShowConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie('localConsent', 'true', {});
  };

  const declineCookie = () => {
    setShowConsent(true);
    deleteCookie('NEXT_LOCALE');
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] h-full bg-black bg-opacity-40">
      <div className="fixed bottom-0 left-0 right-0 flex h-fit items-center justify-between bg-black bg-opacity-40   text-white max-mobile-large:flex-col">
        <P className="body mr-16 py-extra-small pl-extra-small">{t('cookie')}</P>
        <div className="items flex flex-wrap max-mobile-large:w-full    mobile-large:h-full tablet:whitespace-nowrap min-[800px]:flex-nowrap">
          <Button
            className="w-full min-[800px]:h-large min-[1451px]:h-auto"
            size="small"
            intent="error"
            onClick={() => declineCookie()}
          >
            {t('deny')}
          </Button>
          <Button
            className=" w-full min-[800px]:h-large min-[1451px]:h-auto"
            size="small"
            intent="success"
            onClick={() => acceptCookie()}
          >
            {t('accept')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
