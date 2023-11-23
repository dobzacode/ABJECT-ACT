'use client';

import { mdiCamera, mdiImageMultiple } from '@mdi/js';
import Icon from '@mdi/react';
import useBetterMediaQuery from 'components/hooks/use-better-media-query';
import ImageSlider from 'components/ui/div/image-slider/image-slider';
import VideoPlayer from 'components/ui/div/video-player';
import { useState } from 'react';
import { EventSectionProps } from './event-section';

interface MediaPortionProps
  extends Omit<
    EventSectionProps,
    'title' | 'direction' | 'scrollYProgress' | 'index' | 'eventArr'
  > {}

export default function MediaPortion({ videoSrc, imageFolder }: MediaPortionProps) {
  const [mediaType, setMediaType] = useState<'photo' | 'video'>('photo');
  const isBiggerThanLaptop = useBetterMediaQuery('(min-width: 1024px)');

  if (isBiggerThanLaptop === null) return;

  return (
    <>
      {!isBiggerThanLaptop && (
        <div className="right-large top-medium mx-medium flex gap-small pb-sub-large laptop:pb-0">
          <button
            onClick={() => setMediaType('photo')}
            className={`${
              mediaType === 'photo' ? 'opacity-100' : 'opacity-20'
            } duration-medium hover:opacity-100`}
          >
            <Icon color="white" path={mdiImageMultiple} size={3} />
          </button>
          <button
            onClick={() => setMediaType('video')}
            className={`${
              mediaType === 'video' ? 'opacity-100' : 'opacity-20'
            } duration-medium hover:opacity-100`}
          >
            <Icon color="white" path={mdiCamera} size={3} />
          </button>
        </div>
      )}

      {mediaType === 'photo' && !isBiggerThanLaptop ? (
        <ImageSlider fullWidth={true} imageFolder={imageFolder}></ImageSlider>
      ) : null}
      {mediaType === 'video' && !isBiggerThanLaptop ? (
        <div className="flex h-[40rem] w-full justify-center">
          <VideoPlayer
            fullWidth={true}
            sources={[{ src: videoSrc, type: 'video/mp4' }]}
          ></VideoPlayer>
        </div>
      ) : null}

      {isBiggerThanLaptop && (
        <div className="relative flex  h-[40rem] w-full justify-center gap-medium px-large">
          <ImageSlider imageFolder={imageFolder}></ImageSlider>
          <div className="w-full">
            <VideoPlayer sources={[{ src: videoSrc, type: 'video/mp4' }]}></VideoPlayer>
          </div>
        </div>
      )}
    </>
  );
}
