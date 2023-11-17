import { cn } from 'lib/utils';
import Image from 'next/image';
import { HTMLProps } from 'react';
import CustomLink from '../header/custom-link';

interface MovingSectionProps extends HTMLProps<HTMLDivElement> {
  imageSrc: string;
  title: string;
  alt: string;
  comingFrom: 'bottom' | 'top' | 'right' | 'left';
  link: string;
  imageCSS?: string;
}

export default function MovingSection({
  imageSrc,
  title,
  alt,
  comingFrom,
  link,
  className,
  imageCSS
}: MovingSectionProps) {
  const comingFromAnimationBlock = () => {
    switch (comingFrom) {
      case 'top':
        return 'slideInFromTop';
      case 'bottom':
        return 'slideInFromBottom';
      case 'right':
        return 'slideInFromRight';
      case 'left':
        return 'slideInFromLeft';
    }
  };

  const textAnimation = () => {
    switch (comingFrom) {
      case 'top':
        return 'tablet:-translate-y-[500px] group-hover/parent:translate-y-0';
      case 'bottom':
        return 'tablet:translate-y-[500px] group-hover/parent:-translate-y-0';
      case 'right':
        return 'tablet:translate-x-[2000px] group-hover/parent:translate-x-0';
      case 'left':
        return 'tablet:-translate-x-[2000px] group-hover/parent:translate-x-0';
    }
  };

  return (
    <CustomLink href={link}>
      <section
        className={cn(
          `group/parent relative z-10 flex h-1/2 w-full items-center justify-center overflow-hidden `,
          comingFromAnimationBlock(),
          className
        )}
      >
        <Image
          alt={alt}
          className={cn(
            '-z-10 object-cover object-center duration-slowest group-hover/parent:grayscale-0 tablet:grayscale',
            imageCSS
          )}
          sizes="(max-width: 768px) 50vw, 100vw"
          placeholder="blur"
          blurDataURL={imageSrc}
          fill
          src={imageSrc}
        ></Image>
        <h2
          className={cn(
            'growText heading--extra-large z-10 h-fit w-fit cursor-pointer bg-transparent text-white opacity-100 duration-slowest   group-hover/parent:scale-100 group-hover/parent:opacity-100  tablet:scale-50 tablet:opacity-0',
            textAnimation()
          )}
        >
          {title}
        </h2>
      </section>
    </CustomLink>
  );
}
