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
      className="glassmorphism-bg relative flex h-full w-full  flex-col gap-medium pt-sub-large  max-laptop:rounded-none laptop:w-10/12 laptop:gap-sub-large laptop:pb-sub-extra-large"
    >
      <div className="mx-medium flex justify-between laptop:mx-large">
        <H2 textType={'heading--large'}>{title}</H2>
      </div>
      <MediaPortion videoSrc={videoSrc} imageFolder={imageFolder}></MediaPortion>
    </motion.section>
  );
}
