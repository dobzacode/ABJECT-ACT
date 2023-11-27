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
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70">
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between bg-black pl-extra-small text-white ">
        <P className="body mr-16">{t('cookie')}</P>
        <div>
          <Button size="small" intent="error" onClick={() => declineCookie()}>
            Decline
          </Button>
          <Button size="small" intent="success" onClick={() => acceptCookie()}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
