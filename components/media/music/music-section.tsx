import CustomLink from 'components/ui/header/custom-link';

import Image from 'next/image';

export default function MusicSection() {
  return (
    <CustomLink href="/media/music">
      <section
        className={`group/parent slideInFromTop relative z-10 flex h-1/2 w-full items-center justify-center overflow-hidden `}
      >
        <Image
          alt="Pulsar"
          className="-z-10 object-cover object-center duration-slowest group-hover/parent:grayscale-0 tablet:grayscale"
          fill
          src={'/asset/event/pulsarph.jpg'}
        ></Image>
        <h2 className="growText heading--extra-large z-10 h-fit w-fit cursor-pointer bg-transparent text-white opacity-100 duration-slowest group-hover/parent:translate-x-0 group-hover/parent:scale-100 group-hover/parent:opacity-100 tablet:-translate-x-[2000px] tablet:scale-50 tablet:opacity-0">
          MUSIC
        </h2>
      </section>
    </CustomLink>
  );
}
