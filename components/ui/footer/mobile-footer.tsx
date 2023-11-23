import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { v4 } from 'uuid';
import Button from '../button/button';
import NavLink from '../header/nav-link';
import { FooterBlockProps, aboutUsLinks } from './about-us-block';
import { socialLinks } from './contact-block';
import { legalLinks } from './legal-block';
import SocialIcon from './social-icon';

export default function MobileFooter({
  currentNavStyle,
  intent,
  customSetter,
  variants,
  custom
}: FooterBlockProps) {
  const [isActive, setIsActive] = useState<'contact' | 'about us' | 'legal'>('about us');

  const t = useTranslations('navigation.secondaryNavigation');

  return (
    <motion.div
      custom={custom}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col gap-small"
    >
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
      <ul className="body flex h-sub-large flex-wrap items-start gap-extra-small">
        {isActive === 'about us' &&
          aboutUsLinks.map((link) => {
            return (
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
            );
          })}
        {isActive === 'contact' &&
          socialLinks.map((socialLink) => (
            <NavLink
              key={v4()}
              hover={true}
              intent={intent}
              currentNavStyle={currentNavStyle}
              href={socialLink.href}
            >
              <SocialIcon
                className=""
                size={1.6}
                href={socialLink.href}
                mdiPath={socialLink.mdiPath}
              ></SocialIcon>
            </NavLink>
          ))}
        {isActive === 'legal' &&
          legalLinks.map((link, index) =>
            index === 0 ? (
              <NavLink
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
    </motion.div>
  );
}
