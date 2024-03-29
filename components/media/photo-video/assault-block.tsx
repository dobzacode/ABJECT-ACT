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
      imageFolder: '/asset/event/media/assault-macka',
      videoSrc: '/asset/background/video/1089037097-preview.mp4',
      title: 'Abject Act : Assault w/ Ma Čka, Ombrar, Morsure, Spore, Krauss',
      direction: 'left',
      pictureAmount: 128
    },
    {
      imageFolder: '/asset/event/media/pulsar-lulu',
      videoSrc: '/asset/background/video/1089037097-preview.mp4',
      title: 'Assault w/ LULU, Resonance',
      direction: 'right'
    },
    {
      imageFolder: '/asset/event/media/pulsar-lulu',
      videoSrc: '/asset/background/video/1089037097-preview.mp4',
      title: 'Assault w/ LULU, Resonance',
      direction: 'left'
    },
    {
      imageFolder: '/asset/event/media/pulsar-lulu',
      videoSrc: '/asset/background/video/1089037097-preview.mp4',
      title: 'Assault w/ LULU, Resonance',
      direction: 'right'
    }
  ];

  return (
    <div
      className={cn(
        ' flex min-h-screen w-full max-w-5xl flex-col items-center gap-large overflow-x-hidden px-extra-small  text-secondary5  mobile-large:px-medium  laptop:max-w-[100rem] laptop:px-small'
      )}
    >
      {eventArr.map(({ imageFolder, videoSrc, title, direction, pictureAmount }, index: number) => {
        return (
          <EventSection
            pictureAmount={pictureAmount}
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
    </div>
  );
}
