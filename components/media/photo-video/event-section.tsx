import H2 from 'components/ui/text/h2';
import React from 'react';
import { Event } from 'sanity/lib/queries';
import MediaPortion from './media-portion';
import SectionWrapper from './section-wrapper';

export interface EventSectionProps {
  index: number;
  event: Event;
  title: string;
  direction: 'left' | 'right';
  style?: React.CSSProperties;
}

const EventSection: React.FC<EventSectionProps> = ({
  title,
  direction,
  index,
  event,
  ...props
}) => {
  return (
    <SectionWrapper direction={direction} {...props}>
      <div className="mx-medium flex justify-between ">
        <H2 className="font-extralight text-white" textType={'heading--sub-large'}>
          {title}
        </H2>
      </div>
      <MediaPortion event={event}></MediaPortion>
    </SectionWrapper>
  );
};

export default EventSection;
