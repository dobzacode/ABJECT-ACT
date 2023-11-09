import { VariantProps, cva } from 'class-variance-authority';
import { cn } from 'lib/utils';
import { FC, HTMLProps } from 'react';

const textVariants = cva('', {
  variants: {
    textType: {
      'heading--extra-large': 'heading--extra-large',
      'heading--large': 'heading--large',
      'heading--sub-large': 'heading--sub-large',
      heading: 'heading',
      'sub-heading': 'sub-heading',
      body: 'body',
      caption: 'caption'
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
    hover: {
      true: 'duration-fast hover:scale-[102%]'
    }
  }
});

interface H1Props extends HTMLProps<HTMLHeadingElement>, VariantProps<typeof textVariants> {
  children?: React.ReactNode;
}

const H1: FC<H1Props> = ({ children, className, textType, intent, hover, ...props }) => {
  return (
    <h1
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
    </h1>
  );
};

export { H1, textVariants };
