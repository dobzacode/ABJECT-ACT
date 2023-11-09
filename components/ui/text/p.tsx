import { VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';
import { FC, HTMLProps } from 'react';
import { textVariants } from './h1';

interface PProps extends HTMLProps<HTMLParagraphElement>, VariantProps<typeof textVariants> {
  children?: React.ReactNode;
}

const P: FC<PProps> = ({ children, className, textType, intent, hover, ...props }) => {
  return (
    <p
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
    </p>
  );
};

export default P;
