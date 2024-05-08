'use client';

import { MotionProps, motion } from 'framer-motion';
import { cn } from 'lib/utils';

interface SectionWrapperProps extends MotionProps {
  children: React.ReactNode;
  direction: 'left' | 'right';
}

export default function SectionWrapper({ children, direction, ...props }: SectionWrapperProps) {
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
      {children}
    </motion.section>
  );
}
