'use client';

import { H1 } from 'components/ui/text/h1';
import { cn } from 'lib/utils';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/soundcloud';
import { v4 } from 'uuid';

interface ReleaseCardProps {
  releaseList: { name?: string; label?: string; link: string }[];
  className?: string;
}

export default function LastReleaseCard({ releaseList, className }: ReleaseCardProps) {
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
        'slideInFromBottom glassmorphism-bg flex h-fit w-full flex-col gap-sub-large overflow-hidden pt-medium',
        className
      )}
    >
      <H1
        className="mx-small flex w-[40rem] flex-col  gap-medium text-white max-mobile-large:w-full"
        textType={'heading--large'}
      >
        Last Release
      </H1>

      <div className="flex w-full flex-col rounded-b-small">
        {releaseList?.map(({ link }) => {
          return <ReactPlayer height={100} width={'100%'} key={v4()} url={link}></ReactPlayer>;
        })}
      </div>
    </div>
  );
}
