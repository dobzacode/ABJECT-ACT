import Link, { LinkProps } from 'next/link';

import { cn } from '@/utils/utils';
import { VariantProps } from 'class-variance-authority';
import { FC } from 'react';
import { textVariants } from '../text/h1';
import H3 from '../text/h3';

interface LogoProps extends LinkProps, VariantProps<typeof textVariants> {
  className?: string;
  children?: React.ReactNode;
}

const Logo: FC<LogoProps> = ({
  className,
  children,
  textType,
  intent,
  hover,
  href = '/',
  ...props
}) => {
  return (
    <Link href={href} {...props}>
      <H3
        className={cn(
          textVariants({
            className,
            intent,
            textType,
            hover
          })
        )}
      >
        {children}
      </H3>
    </Link>
  );
};

export default Logo;
