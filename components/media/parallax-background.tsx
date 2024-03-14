'use client';

import { cn, dynamicBlurDataUrl } from 'lib/utils';
import Image from 'next/image';
import { Ref, useEffect, useState } from 'react';
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';

function TempComp({ src }: { src: string }) {
  const [blurSrc, setBlurSrc] = useState<string>(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
  );

  const parallax = useParallax({
    translateY: [-1, 1]
  });

  useEffect(() => {
    const fetchBlurData = async () => {
      const blurImg = await dynamicBlurDataUrl(src);
      setBlurSrc(blurImg);
    };
    fetchBlurData();
  });

  return (
    <div className=" fixed top-0 h-screen w-screen overflow-hidden">
      <Image
        ref={parallax.ref as Ref<HTMLImageElement>}
        alt={''}
        className={cn('overlay ')}
        placeholder="blur"
        blurDataURL={blurSrc}
        width={1920}
        height={6000}
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
