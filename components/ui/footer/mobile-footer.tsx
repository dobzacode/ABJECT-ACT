import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import Button from '../button/button';
import NavLink from '../header/nav-link';
import { FooterBlockProps, aboutUsLinks } from './about-us-block';
import { socialLinks } from './contact-block';
import { legalLinks } from './legal-block';

export default function MobileFooter({ currentNavStyle, intent, customSetter }: FooterBlockProps) {
  const [isActive, setIsActive] = useState<'contact' | 'about us' | 'legal'>('about us');

  const t = useTranslations('navigation.primaryNavigation');

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes(t('about us'))) {
      return setIsActive('about us');
    }
    if (pathname.includes('contact')) {
      return setIsActive('contact');
    }
    if (
      pathname.includes(
        t('legal')
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
      )
    ) {
      return setIsActive('legal');
    }
  }, [pathname, t]);

  return (
    <div className="flex flex-col gap-small">
      <div className="flex justify-between">
        <Button
          onClick={() => setIsActive('about us')}
          className={`${isActive === 'about us' ? 'opacity-100' : 'opacity-40'} sub-heading`}
        >
          {t('about us')}
        </Button>
        <Button
          onClick={() => setIsActive('contact')}
          className={`${isActive === 'contact' ? 'opacity-100' : 'opacity-40'} sub-heading`}
        >
          Contact
        </Button>
        <Button
          onClick={() => setIsActive('legal')}
          className={`${isActive === 'legal' ? 'opacity-100' : 'opacity-40'} sub-heading`}
        >
          {t('legal')}
        </Button>
      </div>
      <ul
        className={`body flex h-sub-large flex-wrap items-center ${
          isActive === 'legal' ? 'justify-center gap-medium' : 'justify-between gap-extra-small'
        }`}
      >
        {isActive === 'about us' &&
          aboutUsLinks.map((link) => {
            return !link.param ? (
              <NavLink
                customSetter={customSetter}
                hover={true}
                currentNavStyle={currentNavStyle}
                intent={intent}
                key={v4()}
                href={link.href}
              >
                {t(link.name)}
              </NavLink>
            ) : (
              <NavLink
                param={t(link.param).toLowerCase()}
                customSetter={customSetter}
                hover={true}
                currentNavStyle={currentNavStyle}
                intent={intent}
                key={v4()}
                href={link.href}
              >
                {t(link.name)}
              </NavLink>
            );
          })}
        {isActive === 'contact' &&
          socialLinks.map((socialLink) => (
            <NavLink
              key={v4()}
              hover={true}
              customSetter={customSetter}
              intent={intent}
              currentNavStyle={currentNavStyle}
              href={socialLink.href}
            >
              {socialLink.name}
            </NavLink>
          ))}
        {isActive === 'legal' &&
          legalLinks.map((link, index) =>
            index === 0 ? (
              <NavLink
                customSetter={customSetter}
                hover={true}
                intent={intent}
                currentNavStyle={currentNavStyle}
                key={v4()}
                href={link.href}
              >
                {t(link.name)}
              </NavLink>
            ) : (
              <NavLink
                customSetter={customSetter}
                hover={true}
                intent={intent}
                currentNavStyle={currentNavStyle}
                key={v4()}
                href={link.href}
              >
                {t(link.name.split(' ')[0])}
                <span className="hidden mobile-medium:block">
                  {link.name.split('`').slice(1).join(' ')}
                </span>
              </NavLink>
            )
          )}
      </ul>
    </div>
  );
}
