'use client';

import { VariantProps, cva } from 'class-variance-authority';
import { cn } from 'lib/utils';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

const linkVariants = cva('', {
  variants: {
    size: {
      small: 'py-small px-sub-large body leading-body font-medium',
      medium: 'py-sub-medium px-sub-large sub-heading',
      large: 'py-small px-sub-large heading'
    },
    intent: {
      primary: 'text-primary80 dark:text-primary1',
      secondary: 'text-secondary80 dark:text-secondary1',
      tertiary: 'text-tertiary80 dark:text-tertiary1',
      success: 'text-success80 dark:text-success1',
      error: 'text-error80 dark:text-error1',
      warning: 'text-warning80 dark:text-warning1',
      info: 'text-info80 dark:text-info1',
      neutral: 'text-neutral80 dark:text-neutral1'
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
      transparent: ''
    },
    hover: {
      true: 'hover:bg-neutral80 hover:text-primary1 duration-fast ease-in'
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
}

const NavLink: FC<NavLinkProps> = ({
  children,
  hover,
  rounded,
  size,
  intent,
  className,
  currentNavStyle,
  ...props
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <li>
      <Link
        // className={`${hover} ${
        //   isActive && currentNavStyle
        // } rounded-lg px-8 py-4  `}
        className={cn(
          linkVariants({
            className,
            size,
            rounded,
            hover,
            intent,
            currentNavStyle: isActive ? intent : 'transparent'
          })
        )}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
