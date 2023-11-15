'use client';

import { cn } from 'lib/utils';
import Image from 'next/image';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import NextJsImage from './nextjs-image';

interface ImageSliderProps {
  imageFolder: string;
  fullWidth?: boolean;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imageFolder, fullWidth }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxIsOpen(false);
  };

  const images = Array.from({ length: 10 }, (_, i) => ({
    original: `${imageFolder}/pic${i + 1}.jpg`,
    originalAlt: `pic${i + 1}`,
    thumbnail: `${imageFolder}/pic${i + 1}.jpg`,
    description: `Photo ${i + 1}`
  }));

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

  const settings = {
    dots: !fullWidth ? true : false,
    infinite: true,
    arrows: false,
    speed: !fullWidth ? 500 : 2000,
    slidesToShow: !fullWidth ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 3000
  };

  return (
    <>
      <Slider {...settings} className={cn(' h-fit cursor-pointer laptop:w-1/2 ')}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative z-40 h-[40rem] w-[20rem]  "
            onClick={() => {
              console.log(lightboxIsOpen);
              openLightbox(index);
            }}
          >
            <Image
              className={cn('rounded-small object-cover')}
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
