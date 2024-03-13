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
    translateY: [0, 30],
    easing: 'easeInOut'
  });

  useEffect(() => {
    const fetchBlurData = async () => {
      const blurImg = await dynamicBlurDataUrl(src);
      setBlurSrc(blurImg);
    };
    fetchBlurData();
  });

  return (
    <div className="absolute -top-[100px] h-[3000px] w-screen overflow-hidden">
      <Image
        ref={parallax.ref as Ref<HTMLImageElement>}
        alt={''}
        className={cn(' ')}
        placeholder="blur"
        blurDataURL={blurSrc}
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
