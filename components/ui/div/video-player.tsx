'use client';

import { cn } from 'lib/utils';
import { FunctionComponent, useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface VideoPlayerProps {
  sources: { src: string; type: string }[];
  className?: string;
}

const VideoPlayer: FunctionComponent<VideoPlayerProps> = ({ sources, className }) => {
  const videoNode = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const options = {
      autoplay: false,
      controls: true,
      sources,
      fill: true
    };

    if (videoNode.current) {
      const player = videojs(videoNode.current, options);

      return () => {
        if (player) {
          player.dispose();
        }
      };
    }

    return undefined;
  }, [sources]);

  return (
    <div
      className="relative h-[30rem] w-full cursor-pointer rounded-small mobile-large:h-full "
      data-vjs-player
    >
      <video
        ref={videoNode}
        className={cn(
          'video-js vjs-big-play-centered w-full cursor-pointer rounded-small ',
          className
        )}
      />
    </div>
  );
};

export default VideoPlayer;
