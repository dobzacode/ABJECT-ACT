import H2 from 'components/ui/text/h2';
import P from 'components/ui/text/p';

import { cn } from 'lib/utils';
import Image from 'next/image';
import React from 'react';

export interface DynamicSectionProps {
  title: string;
  direction: 'right' | 'left';
  style?: React.CSSProperties;
  children: string;
}

const DynamicSection: React.FC<DynamicSectionProps> = ({
  title,
  direction,
  children,
  ...props
}) => {
  return (
    <section
      className={cn(
        'relative flex h-fit w-full max-w-[600px] justify-end  gap-medium  pt-sub-large text-black5  laptop:gap-sub-large  '
      )}
      {...props}
    >
      <div
        className={cn(
          'absolute  -top-sub-large  z-10 h-[128px]   w-[128px] transform',
          direction === 'left'
            ? 'slideInFromLeft transition-delay-1000 -left-[0.5rem]'
            : 'slideInFromRight transition-delay-1000 -right-[0.5rem]'
        )}
      >
        <Image
          fill
          className="object-contain"
          src="/asset/additional-icon/bandcamp-button-circle-whiteblack-128.png"
          alt="LGBTQ+ logo"
        ></Image>
      </div>
      <div
        className={cn(
          ' flex flex-col gap-medium rounded-small bg-black95 p-medium  shadow-medium-light',
          direction === 'left'
            ? 'slideInFromRight ml-large pl-large'
            : 'slideInFromLeft mr-large pr-large'
        )}
      >
        <H2 className="font-extralight" textType={'heading--large'}>
          {title}
        </H2>
        <P intent="white" textType={'body'} className="font-extralight">
          {children}
        </P>
      </div>
    </section>
  );
};

export default DynamicSection;
