'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
import { v4 } from 'uuid';
import DynamicSection from './dynamic-section';

const eventArr = [
  {
    title: 'Assault w/ LULU, Resonance',
    imageSrc: '/asset/event/assault.jpg',
    place: 'Le Molodoï, 67000, Strasbourg',
    date: '01/03/2024'
  },
  {
    title: 'Assault w/ LULU, Resonance',
    imageSrc: '/asset/event/assault.jpg',
    place: 'Le Molodoï, 67000, Strasbourg',
    date: '01/07/2023'
  },
  {
    title: 'Assault w/ LULU, Resonance',
    imageSrc: '/asset/event/assault.jpg',
    place: 'Le Molodoï, 67000, Strasbourg',
    date: '01/05/2023'
  },
  {
    title: 'Assault w/ LULU, Resonance',
    imageSrc: '/asset/event/assault.jpg',
    place: 'Le Molodoï, 67000, Strasbourg',
    date: '01/03/2023'
  }
];

export default function ContentSection({}) {
  // const [sectionToShow, setSectionToShow] = useState<'pulsar' | 'assault'>(
  //   searchParams.get('event') === 'pulsar' || 'assault'
  //     ? (searchParams.get('event') as 'pulsar' | 'assault')
  //     : 'pulsar'
  // );
  // // const router = useRouter();
  // // const pathname = usePathname();

  // useEffect(() => {
  //   const event =
  //     searchParams.get('event') === 'pulsar' || !searchParams.get('event') ? 'pulsar' : 'assault';

  //   setTimeout(() => {
  //     setSectionToShow(event);
  //   }, 600);
  // }, [searchParams]);

  return (
    <ParallaxProvider>
      {/* <ParallaxBackground src="/asset/background/concert_bg.jpg"></ParallaxBackground> */}
      {/* <nav className="z-0 flex h-full w-full flex-col tablet:h-[30rem] tablet:flex-row">
        <button
          onClick={() => {
            if (searchParams.get('event') === 'pulsar' || !searchParams.get('event')) return;
            router.replace(`${pathname}?event=pulsar`);
          }}
          className="group/parent slideInFromLeft relative flex w-full items-center justify-center overflow-hidden tablet:w-1/2"
        >
          <Image
            alt={'pulsar'}
            className={cn(
              '-z-10 object-cover object-center grayscale duration-slowest group-hover/parent:grayscale-0',
              searchParams.get('event') === 'pulsar' || !searchParams.get('event')
                ? 'grayscale-0'
                : ''
            )}
            sizes="(max-width: 768px) 50vw, 100vw"
            placeholder="blur"
            blurDataURL={'/asset/event/pulsarph.jpg'}
            fill
            src={'/asset/event/pulsarph.jpg'}
          ></Image>
          <h2
            className={cn(
              'heading--extra-large z-10 h-fit w-fit scale-50 cursor-pointer bg-transparent text-white opacity-100 duration-slowest   hover:animate-pulse group-hover/parent:scale-75 group-hover/parent:opacity-100  tablet:group-hover/parent:scale-100 ',
              searchParams.get('event') === 'pulsar' || !searchParams.get('event')
                ? 'tablet:scale-75'
                : ''
            )}
          >
            PULSAR
          </h2>
        </button>
        <div className="border-2 border-black"></div>
        <button
          onClick={() => {
            if (searchParams.get('event') === 'assault') return;
            router.replace(`${pathname}?event=assault`);
          }}
          className="group/parent slideInFromRight relative flex w-full items-center justify-center overflow-hidden tablet:w-1/2"
        >
          <Image
            alt={'assault'}
            className={cn(
              '-z-10 object-cover object-center grayscale duration-slowest group-hover/parent:grayscale-0',
              searchParams.get('event') === 'assault' && 'grayscale-0'
            )}
            sizes="(max-width: 768px) 50vw, 100vw"
            placeholder="blur"
            blurDataURL={'/asset/event/assaultph.jpg'}
            fill
            src={'/asset/event/assaultph.jpg'}
          ></Image>
          <h2
            className={cn(
              'heading--extra-large z-10 h-fit w-fit scale-50 cursor-pointer bg-transparent text-white opacity-100 duration-slowest   hover:animate-pulse group-hover/parent:scale-75 group-hover/parent:opacity-100  tablet:group-hover/parent:scale-100',
              searchParams.get('event') === 'assault' && 'tablet:scale-75'
            )}
          >
            ASSAULT
          </h2>
        </button>
      </nav> */}
      {eventArr.map(({ title, imageSrc, place, date }, index) => {
        return (
          <DynamicSection
            index={index}
            direction={index % 2 == 0 ? 'left' : 'right'}
            key={v4()}
            title={title}
            imageSrc={imageSrc}
            place={place}
            date={date}
          ></DynamicSection>
        );
      })}
    </ParallaxProvider>
  );
}