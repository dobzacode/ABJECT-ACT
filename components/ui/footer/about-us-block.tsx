'use client';

import { Variants, motion } from 'framer-motion';
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

const links = [
  { href: '/about/abject-act', name: 'Abject Act' },
  { href: '/about/newsletter', name: 'Newsletter' },
  { href: '/about/join-us', name: 'Join us' },
  { href: '/about/partnership', name: 'Partnership' },
  { href: '/about/sizing', name: 'Sizing' }
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

  return (
    <motion.div
      initial={initial}
      animate={animate}
      variants={variants}
      custom={custom}
      exit={exit}
      key={'about-block'}
      className="flex flex-col gap-small"
    >
      <H3 textType="sub-heading" className={`${isActive ? 'opacity-100' : 'opacity-40'}`}>
        ABOUT US
      </H3>
      <ul className="body flex gap-medium">
        {links.map((link) => {
          return (
            <NavLink
              customSetter={customSetter}
              hover={true}
              currentNavStyle={currentNavStyle}
              intent={intent}
              key={v4()}
              href={link.href}
            >
              {link.name}
            </NavLink>
          );
        })}
      </ul>
    </motion.div>
  );
}
