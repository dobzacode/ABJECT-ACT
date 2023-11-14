import { ReactNode } from 'react';

const VideoGlitchEffect = ({ videoSrc, children }: { videoSrc: string; children: ReactNode }) => {
  return (
    <>
      <video autoPlay muted loop className="glitch-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {children}
    </>
  );
};

export default VideoGlitchEffect;
