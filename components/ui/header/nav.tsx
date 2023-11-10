'use client';
import React, { FC, HTMLProps } from 'react';
import Logo from '../branding/logo';
import NavLink from './nav-link';

interface NavProps extends HTMLProps<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
  linkSize: 'small' | 'medium' | 'large' | null | undefined;
  intent:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'neutral'
    | 'black'
    | 'white'
    | null
    | undefined;
}

const Nav: FC<NavProps> = ({ className, linkSize, intent }) => {
  return (
    <nav className={className}>
      <Logo
        href="/"
        className="font-bold tracking-widest"
        intent={intent}
        textType="heading--sub-large"
      >
        DESIGN SYSTEM
      </Logo>
      <ul className="laptopL:gap-large flex justify-center tablet:gap-small laptop:gap-sub-large">
        <NavLink
          rounded="small"
          hover={true}
          size={linkSize}
          intent={intent}
          currentNavStyle={intent}
          href="/color"
        >
          Color
        </NavLink>
        <NavLink
          rounded="small"
          hover={true}
          size={linkSize}
          intent={intent}
          currentNavStyle={intent}
          href="/typography"
        >
          Typography
        </NavLink>
        <NavLink
          rounded="small"
          hover={true}
          size={linkSize}
          intent={intent}
          currentNavStyle={intent}
          href="/component"
        >
          Component
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
