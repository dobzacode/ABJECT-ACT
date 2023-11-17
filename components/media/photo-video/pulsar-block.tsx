import { cn } from 'lib/utils';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import EventSection from './event-section';

export default function PulsarBlock({}) {
  const searchParams = useSearchParams();
  const [triggerFade, setTriggerFade] = useState<boolean>(false);

  useEffect(() => {
    if (searchParams.get('event') === 'pulsar') return;
    setTriggerFade(true);
    setTimeout(() => {
      setTriggerFade(false);
    }, 1000);
  }, [searchParams]);

  console.log(triggerFade);

  return (
    <div
      className={cn(
        'flex w-full flex-col items-center gap-large overflow-x-hidden px-small py-large  text-primary5',
        triggerFade && searchParams.get('event') ? 'hidden-div' : ''
      )}
    >
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
    </div>
  );
}
