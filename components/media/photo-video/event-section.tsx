'use client';

import H2 from 'components/ui/text/h2';
import { motion } from 'framer-motion';
import MediaPortion from './media-portion';

export interface EventSectionProps {
  title: string;
  videoSrc: string;
  imageFolder: string;
  direction: 'right' | 'left';
}

export default function EventSection({
  title,
  videoSrc,
  imageFolder,
  direction
}: EventSectionProps) {
  const value = direction === 'right' ? 2000 : -2000;

  return (
    <motion.section
      initial={{ x: value }}
      animate={{ x: 0, transition: { duration: 1 } }}
      exit={{ x: value }}
      className="glassmorphism-bg relative flex h-full   w-10/12 flex-col gap-medium  pb-sub-extra-large pt-sub-large laptop:gap-medium"
    >
      <div className="mx-medium flex justify-between laptop:mx-large">
        <H2 textType={'heading--large'} className=" text-white">
          {title}
        </H2>
      </div>
      <MediaPortion videoSrc={videoSrc} imageFolder={imageFolder}></MediaPortion>
    </motion.section>
  );
}
