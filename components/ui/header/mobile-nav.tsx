'use client';

import Icon from '@mdi/react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from 'lib/utils';
import { useTranslations } from 'next-intl';
import React, { FC, useRef, useState } from 'react';

import { mdiClose, mdiMenu } from '@mdi/js';
import useBetterMediaQuery from 'components/hooks/use-better-media-query';
import { Variants } from 'framer-motion';
import { CSSTransition } from 'react-transition-group';
import Logo from '../branding/logo';
import AboutUsBlock from '../footer/about-us-block';
import ContactBlock from '../footer/contact-block';
import LegalBlock from '../footer/legal-block';
import MobileFooter from '../footer/mobile-footer';
import LangageSwitch from './langage-switch';
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
  { href: '/event', name: 'event' },
  { href: '/artists', name: 'artists' },
  { href: '/values', name: 'values' },
  { href: '/shop', name: 'shop' },
  { href: '/contact', name: 'contact' },
  { href: '/gallery', name: 'gallery' },
  { href: '/label', name: 'label' }
];

const footerBlocks = [
  <AboutUsBlock key="aboutus"></AboutUsBlock>,
  <ContactBlock key="contact"></ContactBlock>,
  <LegalBlock key="legal"></LegalBlock>
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
  const isMobileLargePlus = useBetterMediaQuery('(min-width: 500px)');

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const t = useTranslations('navigation.primaryNavigation');

  const navRef = useRef();
  const footerRef = useRef();

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
      <header className={cn(className)}>
        <div className=" relative z-30 flex w-full items-center justify-between">
          <AnimatePresence>
            {!showMenu ? (
              <motion.button
                key="menu"
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
                key="close"
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

          <div className="fadeIn absolute  left-1/2 -translate-x-1/2 transform">
            <Logo
              customSetter={() => setShowMenu(false)}
              href="/"
              src={'/asset/aa_logo_white.png'}
              intent={intent}
              className=" relative z-[100]"
            ></Logo>
          </div>

          <LangageSwitch></LangageSwitch>
        </div>

        <CSSTransition nodeRef={navRef} timeout={600} unmountOnExit classNames="fade" in={showMenu}>
          <nav
            ref={navRef as any}
            className={cn(
              ' relative z-40 h-full w-fit self-start pt-medium mobile-large:pt-large tablet:pt-0',
              modalOffset()
            )}
          >
            <ul className={'flex w-fit flex-col justify-center '}>
              {navLinks.map((link, i) => {
                return (
                  <NavLink
                    isPrimaryNav={true}
                    className="max-tablet:text-[5rem] max-tablet:leading-[5rem] "
                    customSetter={() => {
                      setShowMenu(false);
                    }}
                    exit="exit"
                    variants={navLinksVariant}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    key={link.name}
                    hover={true}
                    size={linkSize}
                    intent={intent}
                    currentNavStyle={intent}
                    href={link.href}
                  >
                    {t(link.name).toUpperCase()}
                  </NavLink>
                );
              })}
            </ul>
          </nav>
        </CSSTransition>
      </header>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            onClick={() => {
              console.log('c');
              setShowMenu(false);
            }}
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9, transition: { duration: 0.6 } }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className={`fixed left-0 top-0 z-20 h-screen w-screen bg-black duration-slow`}
          ></motion.div>
        )}
      </AnimatePresence>
      <CSSTransition
        timeout={600}
        unmountOnExit
        classNames="fade"
        in={showMenu as boolean}
        nodeRef={footerRef}
      >
        {isMobileLargePlus ? (
          <footer
            ref={footerRef as any}
            key="footer"
            onClick={() => setShowMenu(false)}
            className={cn(
              'fixed bottom-0 left-small z-30 mb-small mr-large flex h-1/5 w-[90vw] flex-col justify-end  gap-medium text-white mobile-large:left-14  tablet:mb-sub-large  tablet:mt-large tablet:h-fit tablet:flex-row tablet:flex-wrap tablet:justify-between tablet:gap-sub-large laptop:left-auto',
              modalOffset()
            )}
          >
            {footerBlocks.map((block, i) => {
              return React.cloneElement(block, {
                custom: i,
                initial: 'hidden',
                animate: 'visible',
                exit: 'exit',
                variants: footerBlocksVariant,
                intent: intent,
                currentNavStyle: intent,
                customSetter: () => setShowMenu(false)
              });
            })}
          </footer>
        ) : (
          <footer
            ref={footerRef as any}
            key="footer"
            className={cn(
              'fixed bottom-small left-small z-30 mb-small mr-large flex h-1/5 w-[90vw] flex-col justify-end  gap-medium text-white mobile-large:left-14  tablet:mb-sub-large  tablet:mt-large tablet:h-fit tablet:flex-row tablet:flex-wrap tablet:justify-between tablet:gap-sub-large laptop:left-auto',
              modalOffset()
            )}
          >
            <MobileFooter
              custom={0.4}
              variants={footerBlocksVariant}
              intent={intent}
              currentNavStyle={intent}
              customSetter={() => setShowMenu(false)}
            ></MobileFooter>
          </footer>
        )}
      </CSSTransition>
    </>
  );
};

export default MobileNav;
