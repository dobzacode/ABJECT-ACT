'use client';

import { Variants, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { v4 } from 'uuid';
import NavLink from '../header/nav-link';
import H3 from '../text/h3';

export interface FooterBlockProps {
  variants?: Variants;
  animate?: string;
  initial?: string;
  custom?: number;
  exit?: string;
  customSetter?: Function;
  currentNavStyle?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'neutral'
    | 'white'
    | 'black'
    | 'transparent'
    | null
    | undefined;
  intent?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'neutral'
    | 'white'
    | 'black'
    | null
    | undefined;
}

export const aboutUsLinks = [
  { href: '/about/abject-act', name: 'abject act' },
  { href: '/about/newsletter', name: 'newsletter' },
  { href: '/about/join-us', name: 'join us', param: 'join us' }

  // { href: '/about/sizing', name: 'sizing' }
];

export default function AboutUsBlock({
  variants,
  initial,
  animate,
  custom,
  exit,
  currentNavStyle,
  intent,
  customSetter
}: FooterBlockProps) {
  const pathname = usePathname();
  const isActive = pathname.includes('about');
  const t = useTranslations('navigation.primaryNavigation');

  return (
    <motion.div
      initial={initial}
      animate={animate}
      variants={variants}
      custom={custom}
      exit={exit}
      key={'about-block'}
      className="flex flex-col gap-small tablet:gap-medium"
    >
      <H3
        textType="sub-heading"
        className={`${
          isActive ? 'opacity-100' : 'opacity-40'
        } max-mobile-medium:text-body max-mobile-medium:font-medium`}
      >
        {t('about us')}
      </H3>
      <ul className="body flex flex-wrap gap-extra-small  mobile-medium:gap-small mobile-large:gap-medium">
        {aboutUsLinks.map((link) => {
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
      </ul>
    </motion.div>
  );
}
