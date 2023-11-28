import P from 'components/ui/text/p';
import { cn } from 'lib/utils';
import Image from 'next/image';

export interface ReleaseCardProps {
  direction: 'right' | 'left';
  link: string;
  pictureSrc: string;
  name: string;
}

export default function ReleaseCard({
  direction,
  link,
  pictureSrc,
  name,
  ...props
}: ReleaseCardProps) {
  return (
    <section
      className={cn(
        'relative mx-small flex  h-fit w-fit  justify-end   gap-medium  overflow-hidden rounded-small bg-black95  text-black5 shadow-medium-light mobile-large:mx-0 laptop:gap-sub-large',
        direction === 'left'
          ? 'slideInFromLeft transition-delay-1000 '
          : 'slideInFromRight transition-delay-1000'
      )}
      {...props}
    >
      <a
        href={link}
        className="absolute z-10 flex h-full w-full cursor-pointer items-center justify-center bg-black bg-opacity-0 opacity-0 duration-medium hover:bg-opacity-80 hover:opacity-100"
      >
        <P intent="white" textType={'heading--sub-large'} className="">
          {name}
        </P>
      </a>
      <div
        className={cn(
          'relative  h-[28.4rem] w-[28.4rem]   mobile-large:h-[40rem] mobile-large:w-[40rem]  '
        )}
      >
        <Image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="object-cover"
          src={pictureSrc}
          alt={`${name} artwork`}
        ></Image>
      </div>
    </section>
  );
}
