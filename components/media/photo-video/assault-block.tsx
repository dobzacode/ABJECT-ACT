import { cn } from 'lib/utils';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import EventSection from './event-section';

export default function AssaultBlock({}) {
  const searchParams = useSearchParams();
  const [triggerFade, setTriggerFade] = useState<boolean>(false);

  useEffect(() => {
    if (searchParams.get('event') === 'assault') return;
    setTriggerFade(true);
    setTimeout(() => {
      setTriggerFade(false);
    }, 1000);
  }, [searchParams]);

  return (
    <div
      className={cn(
        'flex  w-full flex-col items-center gap-large overflow-x-hidden px-small  py-large text-secondary5',
        triggerFade && 'hidden-div'
      )}
    >
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
      <EventSection
        imageFolder="/asset/event/media/pulsar-lulu"
        videoSrc="/asset/background/video/1089037097-preview.mp4"
        title="Abject Act : Assault w/ LULU, Resonance"
        direction="left"
      ></EventSection>
    </div>
  );
}
