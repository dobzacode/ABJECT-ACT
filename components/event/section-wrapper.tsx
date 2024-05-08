'use client';

import { motion } from 'framer-motion';
import { cn } from 'lib/utils';

export default function SectionWrapper({
  children,
  direction,
  isOlder
}: {
  children: React.ReactNode;
  direction: 'right' | 'left';
  isOlder: boolean;
}) {
  return (
    <motion.section
      className={cn(
        ' relative flex h-fit w-full max-w-[700px] flex-col overflow-x-hidden rounded-small    text-black5   ',
        isOlder ? 'opacity-100' : 'opacity-20 grayscale'
      )}
      initial={{ opacity: 0, translateX: direction === 'left' ? '-10%' : '10%' }}
      whileInView={{ opacity: 1, translateX: 0, transition: { type: 'spring' } }}
      viewport={{ margin: '-50% 0px -34% 0px' }}
    >
      {children}
    </motion.section>
  );
}
