'use client';

import H2 from 'components/ui/text/h2';
import { cn } from 'lib/utils';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/soundcloud';
import { v4 } from 'uuid';

interface ReleaseCardProps {
  releaseList: { name?: string; label?: string; link: string }[];
  className?: string;
  isMix?: boolean;
}

export default function LastReleaseCard({ releaseList, className, isMix }: ReleaseCardProps) {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  if (!hasWindow) return;

  return (
    <div
      className={cn(
        'slideInFromBottom bg-black95 shadow-medium-light flex h-fit w-full flex-col gap-sub-large overflow-hidden rounded-small pt-medium',
        className
      )}
    >
      <H2
        className="mx-small flex w-[40rem] flex-col  gap-medium font-extralight text-white max-mobile-large:w-full"
        textType={'heading--large'}
      >
        {`Last ${!isMix ? 'Release' : 'Mix'}`}
      </H2>

      <div className="relative flex w-full flex-col rounded-b-small">
        {releaseList?.map(({ link }) => {
          return <ReactPlayer height={100} width={'100%'} key={v4()} url={link}></ReactPlayer>;
        })}
      </div>
    </div>
  );
}
