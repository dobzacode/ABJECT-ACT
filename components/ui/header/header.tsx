import { VariantProps, cva } from 'class-variance-authority';
import { cn } from 'lib/utils';
import { HTMLAttributes } from 'react';
import MobileNav from './mobile-nav';
import Nav from './nav';

const sectionVariants = cva('', {
  variants: {
    size: {
      small: 'h-large',
      medium: 'h-sub-extra-large',
      large: 'h-extra-large'
    },
    intent: {
      neutral: 'bg-neutral90 text-neutral1 ',
      pastelPrimary:
        'bg-primary40 text-primary1 border-primary80 dark:border-primary1  dark:text-primary1',
      pastelSecondary: 'bg-secondary40 text-secondary1 border-secondary80',
      pastelTertiary: 'bg-tertiary40 text-tertiary1 border-tertiary80',
      pastelSuccess: 'bg-success40 text-success1 border-success80',
      pastelError: 'bg-error40 text-error1 border-error80 dark:border-error1  dark:text-error1',
      pastelWarning: 'bg-warning40 text-warning1 border-warning 80',
      pastelInfo: 'bg-info40 text-info1 border-info80',
      pastelNeutral: 'bg-neutral40 text-neutral1 border-neutral80'
    }
  }
});
interface HeaderProps
  extends HTMLAttributes<HTMLHeadElement>,
    VariantProps<typeof sectionVariants> {
  children?: React.ReactNode;
  textColor:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'neutral'
    | null
    | undefined;
}

function Header({ children, className, size, intent, textColor, ...props }: HeaderProps) {
  return (
    <header className={cn(sectionVariants({ className, size, intent }))} {...props}>
      {children}
      <Nav
        linkSize="medium"
        intent={textColor}
        className="mx-large hidden w-full items-center justify-between gap-large tablet:flex"
      ></Nav>
      <MobileNav
        linkSize="medium"
        intent={textColor}
        size={size}
        className="mx-small flex w-full items-center justify-between gap-large mobile-large:mx-sub-large tablet:hidden"
      ></MobileNav>
    </header>
  );
}

export { Header, sectionVariants };
