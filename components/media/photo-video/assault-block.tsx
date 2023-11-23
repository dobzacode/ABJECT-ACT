import { motion } from 'framer-motion';
import { cn } from 'lib/utils';
import { v4 } from 'uuid';
import EventSection from './event-section';

export default function AssaultBlock({}) {
  // const searchParams = useSearchParams();
  // const [triggerFade, setTriggerFade] = useState<boolean>(false);

  // useEffect(() => {
  //   if (searchParams.get('event') === 'assault') return;
  //   setTriggerFade(true);
  //   setTimeout(() => {
  //     setTriggerFade(false);
  //   }, 1000);
  // }, [searchParams]);

  const eventArr = [
    {
      imageFolder: '/asset/event/media/pulsar-lulu',
      videoSrc: '/asset/background/video/1089037097-preview.mp4',
      title: 'Abject Act : Assault w/ LULU, Resonance',
      direction: 'left'
    },
    {
      imageFolder: '/asset/event/media/pulsar-lulu',
      videoSrc: '/asset/background/video/1089037097-preview.mp4',
      title: 'Abject Act : Assault w/ LULU, Resonance',
      direction: 'right'
    },
    {
      imageFolder: '/asset/event/media/pulsar-lulu',
      videoSrc: '/asset/background/video/1089037097-preview.mp4',
      title: 'Abject Act : Assault w/ LULU, Resonance',
      direction: 'left'
    },
    {
      imageFolder: '/asset/event/media/pulsar-lulu',
      videoSrc: '/asset/background/video/1089037097-preview.mp4',
      title: 'Abject Act : Assault w/ LULU, Resonance',
      direction: 'right'
    }
  ];

  return (
    <motion.div
      className={cn(
        '  mt-large flex min-h-screen w-full flex-col items-center gap-small overflow-x-hidden   px-small text-secondary5'
      )}
    >
      {eventArr.map(({ imageFolder, videoSrc, title, direction }, index: number) => {
        return (
          <EventSection
            index={index}
            eventArr={eventArr.length}
            imageFolder={imageFolder}
            videoSrc={videoSrc}
            title={title}
            direction={direction as 'left' | 'right'}
            key={v4()}
          ></EventSection>
        );
      })}
    </motion.div>
  );
}
