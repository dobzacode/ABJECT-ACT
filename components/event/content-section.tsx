import { v4 } from 'uuid';
import DynamicSection from './dynamic-section';

const eventArr = [
  {
    title: 'Abject Act w/ CANCEL, BOTL',
    imageSrc: '/asset/event/cover_event_03-23-24.jpg',
    place: 'Plaine des bouchers, 67000, Strasbourg',
    date: '03/23/2024'
  },
  {
    title: 'Assault w/ MA ČKA, OMBRAR (live)',
    imageSrc: '/asset/event/cover_event_06-16-23.jpg',
    place: 'Le Molodoï, 67000, Strasbourg',
    date: '06/16/2023'
  },
  {
    title: 'Assault w/ LULU, RESONANCE',
    imageSrc: '/asset/event/cover_event_02-04-23.jpg',
    place: 'Le Molodoï, 67000, Strasbourg',
    date: '02/04/2023'
  },
  {
    title: 'Assault w/ DRAUGR',
    imageSrc: '/asset/event/cover_event_11-05-22.jpg',
    place: 'Le Molodoï, 67000, Strasbourg',
    date: '11/05/2022'
  },
  {
    title: 'Pulsar (12h RAVE)',
    imageSrc: '/asset/event/cover_event_06-04-22.png',
    place: 'Plaine des bouchers, 67000, Strasbourg',
    date: '06/04/2022'
  },
  {
    title: 'Assault w/ [KRTM] (live)',
    imageSrc: '/asset/event/cover_event_04-08-22.png',
    place: 'Le Molodoï, 67000, Strasbourg',
    date: '04/08/2022'
  },
  {
    title: 'Abject Act w/ Quartier Rouge',
    imageSrc: '/asset/event/cover_event_03-11-22.png',
    place: 'Plaine des bouchers, 67000, Strasbourg',
    date: '03/11/2022'
  },
  {
    title: 'Abject Act w/ YA',
    imageSrc: '/asset/event/cover_event_11-19-21.png',
    place: 'Le Studio Saglio, 67000, Strasbourg',
    date: '11/19/2021'
  },
  {
    title: 'Assault',
    imageSrc: '/asset/event/cover_event_10-14-21.png',
    place: 'Le Molodoï, 67000, Strasbourg',
    date: '10/14/2021'
  }
];

export default function ContentSection({}) {
  return (
    <>
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
    </>
  );
}
