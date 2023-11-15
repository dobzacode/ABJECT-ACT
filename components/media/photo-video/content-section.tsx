'use client';

import { AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import EventSection from './event-section';

export default function ContentSection({}) {
  const [sectionToShow, setSectionToShow] = useState<'pulsar' | 'assault'>('pulsar');
  const searchParams = useSearchParams();

  useEffect(() => {
    const event =
      searchParams.get('event') === 'pulsar' || !searchParams.get('event') ? 'pulsar' : 'assault';
    setSectionToShow(event);
  }, [searchParams]);

  return (
    <AnimatePresence>
      {sectionToShow === 'pulsar' ? (
        <>
          <EventSection
            imageFolder="/asset/event/media/pulsar-lulu"
            videoSrc="/asset/background/video/1089037097-preview.mp4"
            title="Abject Act : Pulsar w/ LULU, Resonance"
            direction="right"
          ></EventSection>
          <EventSection
            imageFolder="/asset/event/media/pulsar-lulu"
            videoSrc="/asset/background/video/1089037097-preview.mp4"
            title="Abject Act : Pulsar w/ LULU, Resonance"
            direction="left"
          ></EventSection>
          <EventSection
            imageFolder="/asset/event/media/pulsar-lulu"
            videoSrc="/asset/background/video/1089037097-preview.mp4"
            title="Abject Act : Pulsar w/ LULU, Resonance"
            direction="right"
          ></EventSection>
        </>
      ) : (
        <>
          <EventSection
            imageFolder="/asset/event/media/pulsar-lulu"
            videoSrc="/asset/background/video/1089037097-preview.mp4"
            title="Abject Act : Assault w/ LULU, Resonance"
            direction="right"
          ></EventSection>
          <EventSection
            imageFolder="/asset/event/media/pulsar-lulu"
            videoSrc="/asset/background/video/1089037097-preview.mp4"
            title="Abject Act : Assault w/ LULU, Resonance"
            direction="left"
          ></EventSection>
          <EventSection
            imageFolder="/asset/event/media/pulsar-lulu"
            videoSrc="/asset/background/video/1089037097-preview.mp4"
            title="Abject Act : Assault w/ LULU, Resonance"
            direction="right"
          ></EventSection>
        </>
      )}
    </AnimatePresence>
  );
}
