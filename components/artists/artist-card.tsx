import Icon from '@mdi/react';
import { H1 } from 'components/ui/text/h1';
import P from 'components/ui/text/p';
import Image from 'next/image';
import Link from 'next/link';
import { v4 } from 'uuid';

interface ArtistCardProps {
  artist: 'Morsure' | 'Spore' | 'Krauss' | 'Black larsen';
  artistSrc: string;
  socials: { link: string; mdiPath: string }[];
}

export default function ArtistCard({ artist, artistSrc, socials }: ArtistCardProps) {
  return (
    <div className="slideInFromLeft glassmorphism-bg flex w-fit flex-col gap-medium overflow-hidden pb-medium">
      <div className="relative h-[30rem] w-full">
        <Image className="object-cover" fill src={artistSrc} alt={`${artist} picture`}></Image>
      </div>
      <div className="mx-small flex w-[40rem] flex-col gap-sub-medium text-white">
        <H1 textType={'heading--large'}>{artist}</H1>
        <P intent="white" textType={'sub-heading'} className="font-extralight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris
        </P>
        <div className="flex gap-small">
          {socials?.map(({ link, mdiPath }) => {
            return (
              <>
                {mdiPath === 'mdiEmail' ? (
                  <Link key={v4()} href={link}>
                    <Icon path={mdiPath} size={2} color="white"></Icon>
                  </Link>
                ) : (
                  <a key={v4()} href={link}>
                    <Icon path={mdiPath} size={2} color="white"></Icon>
                  </a>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
