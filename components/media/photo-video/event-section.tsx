'use client';

import H2 from 'components/ui/text/h2';
import { motion } from 'framer-motion';
import { cn } from 'lib/utils';
import React from 'react';
import MediaPortion from './media-portion';

export interface EventSectionProps {
  index: number;
  eventArr: number;
  title: string;
  videoSrc: string;
  imageFolder: string;
  direction: 'right' | 'left';
  style?: React.CSSProperties;
  pictureAmount?: number;
}

const EventSection: React.FC<EventSectionProps> = ({
  title,
  videoSrc,
  imageFolder,
  direction,
  index,
  pictureAmount,
  eventArr,
  ...props
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, translateX: direction === 'left' ? '-10%' : '10%' }}
      whileInView={{ opacity: 1, translateX: 0, transition: { type: 'spring' } }}
      viewport={{ margin: '-50% 0px -30% 0px' }}
      className={cn(
        'relative flex h-[50rem] w-full flex-col gap-medium overflow-hidden rounded-small border border-black border-opacity-40 bg-black95 bg-opacity-60  pt-medium  backdrop-blur-sm    mobile-large:h-full laptop:w-10/12  '
      )}
      {...props}
    >
      <div className="mx-medium flex justify-between ">
        <H2 className="font-extralight" textType={'heading--sub-large'}>
          {title}
        </H2>
      </div>
      <MediaPortion pictureAmount={pictureAmount} imageFolder={imageFolder}></MediaPortion>
    </motion.section>
  );
};

export default EventSection;
