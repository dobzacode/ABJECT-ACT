'use client';

import { VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';
import { FC, InputHTMLAttributes, forwardRef } from 'react';
import { inputVariants } from '../input';

interface TextProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const InputText: FC<TextProps> = forwardRef<HTMLInputElement, TextProps>(
  ({ className, id, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'body placeholder:body box-border  rounded-lg border p-extra-small shadow-inner',
          className
        )}
        name={id}
        id={id?.toLowerCase()}
        {...props}
      ></input>
    );
  }
);

InputText.displayName = 'InputText';

export default InputText;
