'use client';

import { cn } from 'lib/utils';
import Image from 'next/image';
import { Ref } from 'react';
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';

function TempComp({ src }: { src: string }) {
  const parallax = useParallax({
    translateY: [0, -30]
  });

  return (
    <div className="fixed top-0 h-full w-screen">
      <Image
        ref={parallax.ref as Ref<HTMLImageElement>}
        alt={''}
        className={cn('object-cover object-top')}
        placeholder="blur"
        blurDataURL={src}
        fill
        priority={true}
        src={src}
      ></Image>
    </div>
  );
}

export default function ParallaxBackground({ src }: { src: string }) {
  return (
    <ParallaxProvider>
      <TempComp src={src}></TempComp>
    </ParallaxProvider>
  );
}
