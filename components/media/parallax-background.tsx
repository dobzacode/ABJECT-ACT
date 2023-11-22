'use client';

import { cn } from 'lib/utils';
import Image from 'next/image';
import { Ref } from 'react';
import { useParallax } from 'react-scroll-parallax';

export default function ParallaxBackground() {
  const parallax = useParallax({
    translateY: [-20, 20]
  });

  return (
    <Image
      ref={parallax.ref as Ref<HTMLImageElement>}
      alt={''}
      className={cn('object-cover')}
      placeholder="blur"
      blurDataURL={'/asset/artist/spore.jpg'}
      fill
      priority={true}
      src={'/asset/artist/spore.jpg'}
    ></Image>
  );
}
