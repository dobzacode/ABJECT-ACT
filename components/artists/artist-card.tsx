import Icon from '@mdi/react';
import { H1 } from 'components/ui/text/h1';
import P from 'components/ui/text/p';
import { cn, dynamicBlurDataUrl } from 'lib/utils';
import { Link } from 'navigation';

import Image from 'next/image';

import { v4 } from 'uuid';

interface ArtistCardProps {
  artist: 'Morsure' | 'Spore' | 'Krauss' | 'Black Larsen';
  artistSrc: string;
  socials: { link: string; mdiPath: string }[];
  className?: string;
  isArtistPage?: boolean;
}

export default async function ArtistCard({
  artist,
  socials,
  artistSrc,
  className,
  isArtistPage
}: ArtistCardProps) {
  const blurHash = await dynamicBlurDataUrl(artistSrc);
  return (
    <div
      className={cn(
        'slideInFromLeft z-10 flex h-fit w-fit flex-col justify-between gap-medium overflow-hidden rounded-small bg-black95 pb-medium shadow-medium-light',
        className
      )}
    >
      <Link href={`/artists/${artist.toLowerCase().replace(/\s/g, '')}`}>
        <div className="relative h-[30rem] w-full ">
          <Image
            placeholder="blur"
            blurDataURL={blurHash}
            className="l object-cover"
            fill
            src={artistSrc}
            alt={`morsure picture`}
          ></Image>
        </div>
      </Link>
      <div className="mx-small flex flex-col gap-medium text-white tablet:w-[40rem]">
        <H1 className="font-extralight" textType={'heading--large'}>
          {artist}
        </H1>
        <P intent="white" textType={'body'} className="pr-small font-extralight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris
        </P>

        <div className="flex flex-wrap gap-small">
          {socials?.map(({ link, mdiPath }) => {
            switch (mdiPath) {
              case 'mdiEmail':
                return (
                  <a key={v4()} href={link}>
                    <Icon path={mdiPath} size={2} color="white"></Icon>
                  </a>
                );
              case 'bandcamp':
                return (
                  <Link key={v4()} href={link} className="flex items-center">
                    <Image
                      alt="bandcamp icon"
                      width={24}
                      height={24}
                      src={'/asset/additional-icon/bandcamp-button-circle-whiteblack-32.png'}
                    ></Image>
                  </Link>
                );
              default:
                return (
                  <Link key={v4()} href={link}>
                    <Icon path={mdiPath} size={1.5} color="white"></Icon>
                  </Link>
                );
            }
          })}
        </div>
      </div>
    </div>
  );
}
