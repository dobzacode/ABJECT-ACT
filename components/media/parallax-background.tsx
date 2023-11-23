'use client';

import { cn } from 'lib/utils';
import Image from 'next/image';
import { Ref } from 'react';
import { useParallax } from 'react-scroll-parallax';

export default function ParallaxBackground({ src }: { src: string }) {
  const parallax = useParallax({
    translateY: [-20, 30]
  });

  return (
    <Image
      ref={parallax.ref as Ref<HTMLImageElement>}
      alt={''}
      className={cn('object-cover')}
      placeholder="blur"
      blurDataURL={src}
      fill
      priority={true}
      src={src}
    ></Image>
  );
}
