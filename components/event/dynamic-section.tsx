'use client';

import H2 from 'components/ui/text/h2';
import P from 'components/ui/text/p';

import { mdiCalendarMonth, mdiMapMarker } from '@mdi/js';
import Icon from '@mdi/react';
import { motion } from 'framer-motion';
import { cn, dynamicBlurDataUrl } from 'lib/utils';
import { useFormatter } from 'next-intl';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export interface DynamicSectionProps {
  title: string;
  direction: 'right' | 'left';
  style?: React.CSSProperties;
  date: string;
  place: string;
  imageSrc: string;
  index: number;
}

const DynamicSection: React.FC<DynamicSectionProps> = ({
  title,
  direction,
  date,
  imageSrc,
  index,
  place,
  ...props
}) => {
  const [blurHash, setBlurHash] = useState<string | undefined>(undefined);
  const format = useFormatter();
  const dateTime = new Date(date);
  const today = new Date();
  const isOlder = dateTime > today;

  useEffect(() => {
    const getBlurHash = async () => {
      const blurHash = await dynamicBlurDataUrl(imageSrc);
      setBlurHash(blurHash);
    };

    getBlurHash();
  });

  return (
    <motion.section
      className={cn(
        ' relative flex h-fit w-full max-w-[700px] flex-col overflow-x-hidden rounded-small    text-black5   ',
        isOlder ? 'opacity-100' : 'opacity-20 grayscale'
      )}
      initial={{ opacity: 0, translateX: direction === 'left' ? '-10%' : '10%' }}
      whileInView={{ opacity: 1, translateX: 0, transition: { type: 'spring' } }}
      viewport={{ margin: '-50% 0px -30% 0px' }}
      {...props}
    >
      <div
        className={cn('relative h-[170px]  w-full bg-black bg-opacity-40 mobile-large:h-[300px]')}
      >
        {blurHash && (
          <Image
            blurDataURL={blurHash}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            fill
            className="object-cover object-center"
            src={imageSrc}
            alt={`${title} picture`}
          ></Image>
        )}
      </div>
      <div className={cn(' transparent-card flex flex-col gap-medium p-medium')}>
        <H2 className="font-extralight" textType={'heading--sub-large'}>
          {title}
        </H2>
        <div className="flex flex-col gap-extra-small">
          <div className="flex items-center gap-extra-small">
            <Icon path={mdiCalendarMonth} size={1.4} className="text-black5" />
            <P intent="white" textType={'body'} className="font-extralight">
              {format.dateTime(dateTime, {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
                weekday: 'long'
              })}
            </P>
          </div>
          <div className="flex items-center gap-extra-small">
            <Icon path={mdiMapMarker} size={1.4} className="text-black5" />
            <P intent="white" textType={'body'} className="font-extralight">
              {place}
            </P>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DynamicSection;
