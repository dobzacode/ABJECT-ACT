import { cn } from 'lib/utils';
import { VariantProps } from 'class-variance-authority';
import { FC, HTMLProps } from 'react';
import { textVariants } from './h1';

interface H2Props extends HTMLProps<HTMLHeadingElement>, VariantProps<typeof textVariants> {
  children?: React.ReactNode;
}

const H2: FC<H2Props> = ({ children, className, textType, intent, hover, ...props }) => {
  return (
    <h2
      className={cn(
        textVariants({
          className,
          intent,
          textType,
          hover
        })
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default H2;
