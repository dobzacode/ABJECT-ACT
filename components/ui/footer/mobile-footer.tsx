import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { v4 } from 'uuid';
import Button from '../button/button';
import NavLink from '../header/nav-link';
import { FooterBlockProps, aboutUsLinks } from './about-us-block';
import { socialLinks } from './contact-block';
import { legalLinks } from './legal-block';

export default function MobileFooter({
  currentNavStyle,
  intent,
  customSetter,
  variants,
  custom
}: FooterBlockProps) {
  const [isActive, setIsActive] = useState<'contact' | 'about us' | 'legal'>('about us');

  const t = useTranslations('navigation.primaryNavigation');

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
      <ul
        className={`body flex h-sub-large flex-wrap items-start  ${
          isActive === 'legal' ? 'justify-center gap-large' : 'justify-between gap-extra-small'
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
    </motion.div>
  );
}
