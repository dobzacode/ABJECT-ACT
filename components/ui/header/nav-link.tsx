'use client';

import { VariantProps, cva } from 'class-variance-authority';
import { Variants, motion } from 'framer-motion';
import { cn } from 'lib/utils';
import { Link } from 'navigation';
import { useTranslations } from 'next-intl';
import { LinkProps } from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { FC, useRef } from 'react';

const linkVariants = cva('', {
  variants: {
    size: {
      small: 'body leading-body font-medium',
      medium: 'sub-heading',
      large: 'heading--large '
    },
    intent: {
      primary: 'text-primary80 dark:text-primary1',
      secondary: 'text-secondary80 dark:text-secondary1',
      tertiary: 'text-tertiary80 dark:text-tertiary1',
      success: 'text-success80 dark:text-success1',
      error: 'text-error80 dark:text-error1',
      warning: 'text-warning80 dark:text-warning1',
      info: 'text-info80 dark:text-info1',
      neutral: 'text-neutral80 dark:text-neutral1',
      white: 'text-white opacity-40',
      black: 'text-black'
    },
    currentNavStyle: {
      primary: 'bg-primary80 dark:bg-primary1 text-primary1 dark:text-primary80',
      secondary: 'bg-secondary80 dark:bg-secondary1',
      tertiary: 'bg-tertiary80 dark:bg-tertiary1',
      success: 'bg-success80 dark:bg-success1',
      error: 'bg-error80 dark:bg-error1',
      warning: 'bg-warning80 dark:bg-warning1',
      info: 'bg-info80 dark:bg-info1',
      neutral: 'bg-neutral80 dark:bg-neutral1 text-neutral1 dark:text-neutral80',
      white: ' opacity-100',
      black: 'text-black',
      transparent: ''
    },
    hover: {
      true: ''
    },
    rounded: {
      small: 'rounded-extra-small',
      medium: 'rounded-small',
      large: 'rounded-medium',
      full: 'rounded-full'
    }
  },
  compoundVariants: [
    {
      intent: 'primary',
      hover: true,
      className: ' hover:bg-primary80 hover:text-primary1 duration-fast ease-in'
    },
    {
      intent: 'white',
      hover: true,
      className: 'hover:opacity-100   duration-fast ease-in'
    },
    {
      intent: 'secondary',
      hover: true,
      className: 'hover:bg-secondary80 hover:text-secondary1 duration-fast ease-in'
    },
    {
      intent: 'tertiary',
      hover: true,
      className: 'hover:bg-tertiary80 hover:text-tertiary1 duration-fast ease-in'
    },
    {
      intent: 'info',
      hover: true,
      className: 'hover:bg-info80 hover:text-info1 duration-fast ease-in'
    },
    {
      intent: 'success',
      hover: true,
      className: 'hover:bg-success80 hover:text-success1 duration-fast ease-in'
    },
    {
      intent: 'error',
      hover: true,
      className: 'hover:bg-error80 hover:text-error1 duration-fast ease-in'
    },
    {
      intent: 'warning',
      hover: true,
      className: 'hover:bg-warning80 hover:text-warning1 duration-fast ease-in'
    },
    {
      intent: 'neutral',
      hover: true,
      className: 'hover:bg-neutral80 hover:text-neutral1 duration-fast ease-in'
    }
  ]
});
interface NavLinkProps extends LinkProps, VariantProps<typeof linkVariants> {
  children?: React.ReactNode;
  className?: string;
  variants?: Variants;
  animate?: string;
  initial?: string;
  custom?: number;
  exit?: string;
  isPrimaryNav?: boolean;
  customSetter?: Function;
  param?: string;
  liClass?: string;
}

const NavLink: FC<NavLinkProps> = React.forwardRef<HTMLLIElement, NavLinkProps>(
  (
    {
      children,
      hover,
      rounded,
      size,
      intent,
      className,
      currentNavStyle,
      variants,
      initial,
      animate,
      custom,
      exit,
      customSetter,
      isPrimaryNav,
      param,
      liClass,
      ...props
    }: NavLinkProps,
    ref
  ) => {
    const t = useTranslations('navigation');

    const pathname = usePathname();
    const router = useRouter();
    let isActive;
    if (isPrimaryNav) {
      isActive =
        pathname === props.href ||
        pathname.includes(t(`primaryNavigation.${(props.href as string).replace(/\//g, '')}`));
    }

    const linkRef = useRef() as React.MutableRefObject<HTMLAnchorElement | null>;
    const linkRefWithoutVariants = useRef() as React.MutableRefObject<HTMLAnchorElement | null>;

    if (!variants)
      return (
        <li ref={ref} className={`list-none ${liClass}`}>
          <Link
            ref={linkRefWithoutVariants}
            className={cn(
              linkVariants({
                size,
                rounded,
                hover,
                intent,
                currentNavStyle: isActive ? intent : 'transparent',
                className
              })
            )}
            onClick={(e: any) => {
              e.preventDefault();
              e.stopPropagation();

              customSetter ? customSetter() : '';
              if (!linkRefWithoutVariants.current) return;
              const href = linkRefWithoutVariants.current.getAttribute('href');

              console.log(href, pathname);

              if (pathname === href) return;
              document.querySelector('main')?.classList.add('hidden-div');

              setTimeout(() => {
                router.push(href as string);
              }, 600);
            }}
            {...(props as any)}
          >
            {children}
          </Link>
        </li>
      );

    return (
      <motion.li
        ref={ref}
        initial={initial}
        animate={animate}
        exit={exit}
        variants={variants}
        custom={custom}
        key={children as string}
      >
        <Link
          ref={linkRef}
          passHref
          className={cn(
            linkVariants({
              size,
              rounded,
              hover,
              intent,
              currentNavStyle: isActive ? intent : 'transparent',
              className
            })
          )}
          onClick={(e: any) => {
            e.preventDefault();
            e.stopPropagation();
            customSetter ? customSetter() : '';
            if (!linkRef.current) return;
            const href = linkRef.current.getAttribute('href');
            if (pathname === href) return;
            document.querySelector('main')?.classList.add('hidden-div');
            setTimeout(() => {
              router.push(href as string);
            }, 600);
          }}
          {...(props as any)}
        >
          {children}
        </Link>
      </motion.li>
    );
  }
);

NavLink.displayName = 'NavLink';

export default NavLink;
