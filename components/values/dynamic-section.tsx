import H2 from 'components/ui/text/h2';
import P from 'components/ui/text/p';

import { cn } from 'lib/utils';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

export interface DynamicSectionProps {
  title: string;
  direction: 'right' | 'left';
  style?: React.CSSProperties;
  children: string;
  src: StaticImageData;
  alt: string;
  imgCss?: string;
}

export default async function DynamicSection({
  title,
  direction,
  children,
  src,
  alt,
  imgCss,
  ...props
}: DynamicSectionProps) {
  return (
    <section
      className={cn(
        'relative flex h-fit w-full max-w-[600px] justify-end  gap-medium  pt-sub-large text-black5  laptop:gap-sub-large  '
      )}
      {...props}
    >
      <div
        className={cn(
          'absolute  -top-sub-large  z-10 h-[128px]   w-[128px] transform overflow-hidden rounded-full',
          imgCss,
          direction === 'left'
            ? 'slideInFromLeft transition-delay-1000 -left-[0.5rem]'
            : 'slideInFromRight transition-delay-1000 -right-[0.5rem]'
        )}
      >
        <Image
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="object-cover"
          src={src}
          alt={`${alt} image`}
        ></Image>
      </div>
      <div
        className={cn(
          ' transparent-card flex flex-col gap-medium  rounded-small p-medium  ',
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
}
