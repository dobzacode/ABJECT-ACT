import { mdiArrowRight, mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import NavLink from 'components/ui/header/nav-link';
import { H1 } from 'components/ui/text/h1';
import P from 'components/ui/text/p';
import { cn, dynamicBlurDataUrl } from 'lib/utils';
import { getTranslations } from 'next-intl/server';

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
  const t = await getTranslations('more');
  return (
    <div
      className={cn(
        'slideInFromLeft transparent-card group group z-10 flex h-fit w-fit flex-col justify-between gap-sub-medium overflow-hidden rounded-small  pb-medium laptop:w-fit ',
        className
      )}
    >
      <div>
        <div
          className={cn(
            'relative  w-full ',
            isArtistPage ? 'h-[18.75rem]' : 'h-[15.625rem] mobile-large:h-[18.75rem]'
          )}
        >
          <Image
            placeholder="blur"
            blurDataURL={blurHash}
            className="object-cover"
            fill
            src={artistSrc}
            alt={`morsure picture`}
          ></Image>
        </div>
      </div>
      <div
        className={cn(
          'mx-small flex flex-col gap-sub-medium text-white ',
          isArtistPage ? 'w-[18.75rem] tablet:w-[25rem]' : 'w-[18.75rem] mobile-large:w-[25rem]'
        )}
      >
        <H1 className="font-extralight" textType={'heading--sub-large'}>
          {artist}
        </H1>
        {!isArtistPage && (
          <P intent="white" textType={'body'} className="pr-small font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris
          </P>
        )}

        <div className="flex flex-col justify-between gap-small tablet:flex-row tablet:items-center ">
          <div className="flex flex-wrap gap-3 [&>*:hover]:scale-110 [&>*]:duration-300">
            {socials?.map(({ link, mdiPath }) => {
              switch (mdiPath) {
                case 'mdiEmail':
                  return (
                    <a key={v4()} href={link} className="relative z-40">
                      <Icon path={mdiPath} size={0.9375} color="white"></Icon>
                    </a>
                  );
                case 'bandcamp':
                  return (
                    <a key={v4()} href={link} className="relative z-40 flex items-center">
                      <Image
                        alt="bandcamp icon"
                        width={16}
                        height={16}
                        src={'/asset/additional-icon/bandcamp-button-circle-whiteblack-32.png'}
                      ></Image>
                    </a>
                  );
                default:
                  return (
                    <a key={v4()} href={link} className="relative z-40">
                      <Icon path={mdiPath} size={0.8125} color="white"></Icon>
                    </a>
                  );
              }
            })}
            {isArtistPage && (
              <NavLink
                isPrimaryNav={false}
                href={`/artists/${artist.toLowerCase()}`}
                liClass={'tablet:hidden block '}
                className="items-center gap-2 duration-medium hover:scale-105 group-hover:opacity-100 tablet:flex laptop:opacity-0"
              >
                {' '}
                <Icon path={mdiPlus} size={0.8125} color="white"></Icon>
              </NavLink>
            )}
          </div>
          {isArtistPage && (
            <NavLink
              isPrimaryNav={false}
              href={`/artists/${artist.toLowerCase()}`}
              liClass={'hidden tablet:block '}
              className="items-center gap-2 duration-medium hover:scale-105 group-hover:opacity-100 tablet:flex laptop:opacity-0"
            >
              <p className="body">{t('text')}</p>
              <Icon className="pt-1" path={mdiArrowRight} size={0.8125} color="white"></Icon>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
