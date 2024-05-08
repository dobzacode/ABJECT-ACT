import H2 from 'components/ui/text/h2';
import P from 'components/ui/text/p';

import { mdiCalendarMonth, mdiMapMarker } from '@mdi/js';
import Icon from '@mdi/react';
import { cn, dynamicBlurDataUrl } from 'lib/utils';
import { getFormatter } from 'next-intl/server';
import Image from 'next/image';
import React from 'react';
import SectionWrapper from './section-wrapper';

export interface DynamicSectionProps {
  title: string;
  direction: 'right' | 'left';
  style?: React.CSSProperties;
  date: string;
  place: string;
  imageSrc: string;
  index: number;
}

export default async function DynamicSection({
  title,
  direction,
  date,
  imageSrc,
  place
}: DynamicSectionProps) {
  const blurHash = await dynamicBlurDataUrl(imageSrc);
  const format = await getFormatter();
  const dateTime = new Date(date);
  const today = new Date();
  const isOlder = dateTime > today;

  return (
    <SectionWrapper direction={direction} isOlder={isOlder}>
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
            <Icon path={mdiCalendarMonth} size={0.875} className="text-black5" />
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
            <Icon path={mdiMapMarker} size={0.875} className="text-black5" />
            <P intent="white" textType={'body'} className="font-extralight">
              {place}
            </P>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
