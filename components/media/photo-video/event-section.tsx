import H2 from 'components/ui/text/h2';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { cn } from 'lib/utils';
import React, { useRef } from 'react';
import MediaPortion from './media-portion';

export interface EventSectionProps {
  index: number;
  eventArr: number;
  title: string;
  videoSrc: string;
  imageFolder: string;
  direction: 'right' | 'left';
  style?: React.CSSProperties;
}

const EventSection: React.FC<EventSectionProps> = ({
  title,
  videoSrc,
  imageFolder,
  direction,
  index,

  eventArr,
  ...props
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'center']
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref,
    offset: ['center center', '40%']
  });

  const directionValue = useTransform(
    scrollYProgress,
    [1, 0],
    [0, direction === 'right' ? 300 : -300]
  );

  const opacityValue = useTransform(scrollYProgress2, [0, 1], [1, 0.8]);

  const inView = useInView(ref, { margin: '25% 0%' });

  const defineOpacity = () => {
    return inView ? scrollYProgress : opacityValue;
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      ref={ref}
      className={cn(
        'glassmorphism-bg relative flex h-full w-full  flex-col gap-medium overflow-hidden  pt-sub-large laptop:w-10/12 laptop:gap-sub-large  laptop:pb-sub-extra-large',
        index === 0 && 'slideInFromLeft'
      )}
      style={{
        translateX: directionValue,
        opacity: defineOpacity(),
        scale: inView ? 1 : opacityValue
      }}
      {...props}
    >
      <div className="mx-medium flex justify-between laptop:mx-large">
        <H2 textType={'heading--large'}>{title}</H2>
      </div>
      <MediaPortion videoSrc={videoSrc} imageFolder={imageFolder}></MediaPortion>
    </motion.section>
  );
};

export default EventSection;
