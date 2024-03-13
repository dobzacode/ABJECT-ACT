import { H1 } from 'components/ui/text/h1';
import { dynamicBlurDataUrl } from 'lib/utils';
import Image from 'next/image';

export default async function ArtistSnippet({
  artistSrc,
  artist
}: {
  artistSrc: string;
  artist: string;
}) {
  const blurHash = await dynamicBlurDataUrl(artistSrc);
  return (
    <div
      className={
        'slideInFromLeft z-10 flex h-fit w-fit  cursor-pointer flex-col justify-between gap-medium overflow-hidden rounded-small bg-black95  shadow-medium-light duration-fast hover:scale-105 laptop:w-fit'
      }
    >
      <div className="relative aspect-[4/5] h-[45rem]  ">
        <Image
          placeholder="blur"
          blurDataURL={blurHash}
          className="object-cover"
          fill
          src={artistSrc}
          alt={`morsure picture`}
        ></Image>
        <H1
          className="absolute right-1/2 z-10 translate-x-1/2 font-extralight text-white"
          textType={'heading--large'}
        >
          {artist}
        </H1>
      </div>
    </div>
  );
}
