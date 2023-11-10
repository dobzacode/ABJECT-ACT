'use client';

import Icon from '@mdi/react';
import { motion } from 'framer-motion';
import { cn } from 'lib/utils';
import React, { FC, useState } from 'react';

import { mdiClose, mdiMenu } from '@mdi/js';
import { AnimatePresence, Variants } from 'framer-motion';
import { v4 as uuid } from 'uuid';
import Logo from '../branding/logo';
import AboutUsBlock from '../footer/about-us-block';
import ContactBlock from '../footer/contact-block';
import LegalBlock from '../footer/legal-block';
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

const footerBlocks = [
  <AboutUsBlock key={uuid()}></AboutUsBlock>,

  <LegalBlock key={uuid()}></LegalBlock>,
  <ContactBlock key={uuid()}></ContactBlock>
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

const footerBlocksVariant: Variants = {
  hidden: { y: 500 },
  visible: (i: number) => ({
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay: 1.2 + i * 0.4
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
    <>
      <header className={className}>
        <div className="relative z-30 flex w-full items-center justify-center">
          <AnimatePresence>
            {!showMenu ? (
              <motion.button
                key={uuid()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0 }}
                className="absolute left-0 h-fit w-fit"
                onClick={() => setShowMenu(true)}
              >
                <Icon
                  path={mdiMenu}
                  className=" text-white duration-fast hover:scale-105"
                  size={2.5}
                ></Icon>
              </motion.button>
            ) : (
              <motion.button
                key={uuid()}
                initial={{ opacity: 0, rotate: 360 }}
                animate={{ opacity: 1, rotate: 0, transition: { duration: 1, ease: 'easeOut' } }}
                exit={{ opacity: 0, transition: { duration: 0.4 } }}
                className="absolute left-0 h-fit w-fit"
                onClick={() => setShowMenu(false)}
              >
                <Icon
                  path={mdiClose}
                  className=" text-white duration-fast hover:scale-105"
                  size={2.5}
                ></Icon>
              </motion.button>
            )}
          </AnimatePresence>

          <div className="absolute left-1/2 -translate-x-1/2 transform">
            <Logo
              customSetter={() => setShowMenu(false)}
              href="/"
              src={'/asset/aa_logo_white.png'}
              intent={intent}
              className=" z-20 duration-slow"
            ></Logo>
          </div>

          <div />
        </div>
        <AnimatePresence>
          {showMenu && (
            <nav className={cn(' h-full w-full', modalOffset())}>
              <ul className={'relative z-30 flex flex-col justify-center'}>
                {navLinks.map((link, i) => {
                  return (
                    <NavLink
                      customSetter={() => {
                        setShowMenu(false);
                      }}
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
            </nav>
          )}
        </AnimatePresence>
      </header>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5, transition: { duration: 0.6 } }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className={`fixed left-0 top-0 z-20 h-screen w-screen bg-black duration-slow`}
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showMenu && (
          <>
            <footer
              onClick={() => setShowMenu(false)}
              className={cn(
                'fixed bottom-0 z-30 mb-large mr-large flex h-fit w-[90vw] flex-wrap justify-between text-white',
                modalOffset()
              )}
            >
              {footerBlocks.map((block, i) => {
                return React.cloneElement(block, {
                  key: uuid(),
                  custom: i,
                  initial: 'hidden',
                  animate: 'visible',
                  exit: 'exit',
                  variants: footerBlocksVariant,
                  intent: intent,
                  currentNavStyle: intent
                });
              })}
            </footer>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
