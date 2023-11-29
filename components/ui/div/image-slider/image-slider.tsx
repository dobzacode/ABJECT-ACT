'use client';

import { cn, dynamicBlurDataUrl } from 'lib/utils';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import NextJsImage from './nextjs-image';

interface ImageSliderProps {
  imageFolder: string;
}

interface imageProps {
  original: string;
  originalAlt: string;
  thumbnail: string;
  description: string;
  blurHash: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imageFolder }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [images, setImages] = useState<imageProps[] | null>(null);

  useEffect(() => {
    const defineImg = async () => {
      const images = Array.from({ length: 10 }, async (_, i) => ({
        original: `${imageFolder}/pic${i + 1}.jpg`,
        originalAlt: `pic${i + 1}`,
        thumbnail: `${imageFolder}/pic${i + 1}.jpg`,
        description: `Photo ${i + 1}`,
        blurHash: await dynamicBlurDataUrl(`${imageFolder}/pic${i + 1}.jpg`)
      }));
      setImages(await Promise.all(images));
    };
    defineImg();
  }, [imageFolder]);

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
    arrows: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 3000
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
    src: item.original,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item.original, width: 320, height: 213 },
      { src: item.original, width: 640, height: 426 },
      { src: item.original, width: 1200, height: 800 },
      { src: item.original, width: 2048, height: 1365 },
      { src: item.original, width: 3840, height: 2560 }
    ]
  }));

  return (
    <>
      <Slider {...settings} className={cn(' h-[30rem] cursor-pointer mobile-large:h-[40rem] ')}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative z-40 flex h-[30rem]  w-[20rem] border-r border-black  border-opacity-40 mobile-large:h-[40rem] "
            onClick={() => {
              console.log(lightboxIsOpen);
              openLightbox(index);
            }}
          >
            <Image
              placeholder="blur"
              blurDataURL={image.blurHash}
              className={cn('object-cover ')}
              fill
              src={image.thumbnail}
              alt={image.description}
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
};

export default ImageSlider;
