'use client';

import { mdiClose, mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import { motion } from 'framer-motion';
import { cn } from 'lib/utils';
import React, { FC, useState } from 'react';

import { AnimatePresence, Variants } from 'framer-motion';
import { v4 as uuid } from 'uuid';
import Logo from '../branding/logo';
import NavLink from './nav-link';

interface NavProps {
  children?: React.ReactNode;
  className?: string;
  intent:
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
  linkSize: 'small' | 'medium' | 'large' | null | undefined;
  size?: 'small' | 'medium' | 'large' | null | undefined;
}

const navLinks = [
  { href: '/event', name: 'EVENT' },
  { href: '/artists', name: 'ARTISTS' },
  { href: '/values', name: 'VALUES' },
  { href: '/shop', name: 'SHOP' },
  { href: '/contact', name: 'CONTACT' },
  { href: '/media', name: 'MEDIA' },
  { href: '/label', name: 'LABEL' }
];

const navLinksVariant: Variants = {
  hidden: { x: -500 },
  visible: (i: number) => ({
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      delay: i * 0.115
    }
  }),
  exit: { opacity: 0, transition: { duration: 1 } }
};

const MobileNav: FC<NavProps> = ({ className, linkSize, intent, size }: NavProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const modalOffset = () => {
    switch (size) {
      case 'small':
        return 'top-large';
      case 'medium':
        return 'top-sub-extra-large';
      case 'large':
        return 'top-extra-large';
    }
  };

  return (
    <nav className={className}>
      <div className="relative flex w-full items-center justify-center">
        {!showMenu ? (
          <motion.button
            key={uuid()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            className="absolute left-0 h-fit w-fit"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Icon
              path={mdiMenu}
              className=" text-white duration-fast hover:scale-105"
              size={3.5}
            ></Icon>
          </motion.button>
        ) : (
          <motion.button
            key={uuid()}
            initial={{ opacity: 0, rotate: 360 }}
            animate={{ opacity: 1, rotate: 0, transition: { duration: 1, ease: 'easeOut' } }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="absolute left-0 h-fit w-fit"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Icon
              path={mdiClose}
              className=" text-white duration-fast hover:scale-105"
              size={3.5}
            ></Icon>
          </motion.button>
        )}
        <Logo
          href="/"
          src={'/asset/aa_logo_white.png'}
          className=" "
          intent={intent}
          textType="heading--sub-large"
        ></Logo>
        <div />
      </div>
      <AnimatePresence>
        {showMenu && (
          <div className={cn(' h-full w-full', modalOffset())}>
            <ul className={'flex flex-col justify-center  gap-sub-large '}>
              {navLinks.map((link, i) => {
                return (
                  <NavLink
                    exit="exit"
                    variants={navLinksVariant}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    key={uuid()}
                    hover={true}
                    size={linkSize}
                    intent={intent}
                    currentNavStyle={intent}
                    href={link.href}
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </ul>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
