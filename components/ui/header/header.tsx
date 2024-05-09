import { VariantProps, cva } from 'class-variance-authority';
import { cn } from 'lib/utils';
import { HTMLAttributes } from 'react';
import HeaderWrapper from './header-wrapper';
import MobileNav from './mobile-nav';

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
    | 'black'
    | 'white'
    | null
    | undefined;
}

function Header({ children, className, size, intent, textColor, ...props }: HeaderProps) {
  return (
    <HeaderWrapper className={cn(sectionVariants({ className, size, intent }))} {...props}>
      {children}

      <MobileNav
        className="fixed left-small right-large z-40 flex w-full flex-col items-center justify-between gap-sub-large pr-sub-large mobile-large:left-sub-large mobile-large:pr-large tablet:gap-large laptop:left-large laptop:pr-extra-large"
        linkSize="large"
        intent={textColor}
      ></MobileNav>
    </HeaderWrapper>
  );
}

export { Header, sectionVariants };
