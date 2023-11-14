'use client';

import { cn } from 'lib/utils';
import { FunctionComponent, useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface VideoPlayerProps {
  sources: { src: string; type: string }[];
  className?: string;
  fullWidth?: boolean;
}

const VideoPlayer: FunctionComponent<VideoPlayerProps> = ({ sources, className, fullWidth }) => {
  const videoNode = useRef<HTMLVideoElement | null>(null);

  console.log(fullWidth);

  useEffect(() => {
    const options = {
      autoplay: false,
      controls: true,
      sources,
      fill: fullWidth ? false : true,
      fluid: fullWidth ? true : false
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
  }, [sources, fullWidth]);

  return (
    <div className="relative h-full w-full laptop:w-small" data-vjs-player>
      <video
        ref={videoNode}
        className={cn('video-js vjs-big-play-centered w-full laptop:w-small', className)}
      />
    </div>
  );
};

export default VideoPlayer;
