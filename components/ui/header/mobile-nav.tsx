'use client';

import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import { cn } from 'lib/utils';
import React, { FC, useState } from 'react';

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
      <div className="flex w-full justify-between">
        <button onClick={() => setShowMenu(!showMenu)}>
          <Icon path={mdiMenu} className="text-white" size={3.5}></Icon>
        </button>
        <Logo
          href="/"
          src={'/asset/aa_logo_white.png'}
          className=" "
          intent={intent}
          textType="heading--sub-large"
        ></Logo>
        <div />
      </div>

      <div
        className={cn(
          'h-full w-full duration-700',

          showMenu ? 'opacity-100' : 'opacity-0 ',
          modalOffset()
        )}
      >
        <ul className={'flex flex-col justify-center  gap-sub-large '}>
          <NavLink
            hover={true}
            size={linkSize}
            intent={intent}
            currentNavStyle={intent}
            href="/event"
          >
            EVENT
          </NavLink>
          <NavLink
            hover={true}
            size={linkSize}
            intent={intent}
            currentNavStyle={intent}
            href="/artists"
          >
            ARTISTS
          </NavLink>

          <NavLink
            hover={true}
            size={linkSize}
            intent={intent}
            currentNavStyle={intent}
            href="/values"
          >
            VALUES
          </NavLink>
          <NavLink
            hover={true}
            size={linkSize}
            intent={intent}
            currentNavStyle={intent}
            href="/shop"
          >
            SHOP
          </NavLink>
          <NavLink
            hover={true}
            size={linkSize}
            intent={intent}
            currentNavStyle={intent}
            href="/contact"
          >
            CONTACT
          </NavLink>
          <NavLink
            hover={true}
            size={linkSize}
            intent={intent}
            currentNavStyle={intent}
            href="/media"
          >
            MEDIA
          </NavLink>
          <NavLink
            hover={true}
            size={linkSize}
            intent={intent}
            currentNavStyle={intent}
            href="/label"
          >
            LABEL
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
