import { cn } from 'lib/utils';
import { VariantProps } from 'class-variance-authority';
import { FC, HTMLProps } from 'react';
import { textVariants } from './h1';

interface H3Props extends HTMLProps<HTMLHeadingElement>, VariantProps<typeof textVariants> {
  children?: React.ReactNode;
}

const H3: FC<H3Props> = ({ children, className, textType, intent, hover, ...props }) => {
  return (
    <h3
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
    </h3>
  );
};

export default H3;
