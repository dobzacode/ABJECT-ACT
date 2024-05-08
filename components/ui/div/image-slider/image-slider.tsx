'use client';

import useBetterMediaQuery from 'components/hooks/use-better-media-query';
import { cn } from 'lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import Slider from 'react-slick';
import { Image as SanityImg } from 'sanity/lib/queries';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import NextJsImage from './nextjs-image';

interface ImageProps {
  images: SanityImg[];
}

export default function ImageSlider({ images }: ImageProps) {
  const [lightboxIsOpen, setLightboxIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const isMobile = useBetterMediaQuery('(max-width: 500px)');

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxIsOpen(false);
  };

  const settings = {
    infinite: true,
    arrows: isMobile ? false : true,
    slidesToShow: 3,
    slidesToScroll: 1,

    swipeToSlide: true
  };

  if (!images)
    return (
      <div className="flex">
        <div className="relative z-40 flex h-[30rem] w-[30rem] animate-pulse border-r border-black border-opacity-40 bg-black80 mobile-large:h-[40rem]"></div>
        <div className="relative z-40 flex h-[30rem] w-[30rem] animate-pulse border-r  border-black border-opacity-40 bg-black80 mobile-large:h-[40rem]"></div>
        <div className="relative z-40 flex h-[30rem] w-[30rem] animate-pulse   border-black bg-black80 mobile-large:h-[40rem]"></div>
      </div>
    );

  const slides = images.map((item) => ({
    src: item.url,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item.url, width: 320, height: 213 },
      { src: item.url, width: 640, height: 426 },
      { src: item.url, width: 1200, height: 800 },
      { src: item.url, width: 2048, height: 1365 },
      { src: item.url, width: 3840, height: 2560 }
    ]
  }));

  return (
    <>
      <Slider {...settings} className={cn(' h-[18.75rem]  cursor-pointer mobile-large:h-[25rem] ')}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative z-40 flex h-[18.75rem]  w-[12.5rem] border-r border-black  border-opacity-40 mobile-large:h-[25rem] "
            onClick={() => {
              console.log(lightboxIsOpen);
              openLightbox(index);
            }}
          >
            <Image
              placeholder="blur"
              blurDataURL={image.blurSrc}
              className={cn('object-cover ')}
              fill
              sizes={'500px'}
              src={image.url}
              alt={image.alt ? image.alt : `Image ${index + 1}`}
            ></Image>
          </div>
        ))}
      </Slider>

      <Lightbox
        index={currentImage}
        open={lightboxIsOpen}
        close={() => closeLightbox()}
        plugins={[Zoom]}
        slides={slides}
        render={{ slide: NextJsImage }}
      />
    </>
  );
}
