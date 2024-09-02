import DynamicSection from './dynamic-section';
import event3 from '/public/asset/event/cover_event_02-04-23.jpg';
import event7 from '/public/asset/event/cover_event_03-11-22.png';
import event1 from '/public/asset/event/cover_event_03-23-24.jpg';
import event6 from '/public/asset/event/cover_event_04-08-22.png';
import event5 from '/public/asset/event/cover_event_06-04-22.png';
import event2 from '/public/asset/event/cover_event_06-16-23.jpg';
import event9 from '/public/asset/event/cover_event_10-14-21.png';
import event4 from '/public/asset/event/cover_event_11-05-22.jpg';
import event8 from '/public/asset/event/cover_event_11-19-21.png';

const eventArr = [
  {
    title: 'Abject Act w/ CANCEL, BOTL',
    imageSrc: event1,
    place: 'Plaine des bouchers, 67000, Strasbourg',
    date: '03/23/2024'
  },
  {
    title: 'Assault w/ MA ČKA, OMBRAR (live)',
    imageSrc: event2,
    place: 'Le Molodoï, 67000, Strasbourg',
    date: '06/16/2023'
  },
  {
    title: 'Assault w/ LULU, RESONANCE',
    imageSrc: event3,
    place: 'Le Molodoï, 67000, Strasbourg',
    date: '02/04/2023'
  },
  {
    title: 'Assault w/ DRAUGR',
    imageSrc: event4,
    place: 'Le Molodoï, 67000, Strasbourg',
    date: '11/05/2022'
  },
  {
    title: 'Pulsar (12h RAVE)',
    imageSrc: event5,
    place: 'Plaine des bouchers, 67000, Strasbourg',
    date: '06/04/2022'
  },
  {
    title: 'Assault w/ [KRTM] (live)',
    imageSrc: event6,
    place: 'Le Molodoï, 67000, Strasbourg',
    date: '04/08/2022'
  },
  {
    title: 'Abject Act w/ Quartier Rouge',
    imageSrc: event7,
    place: 'Plaine des bouchers, 67000, Strasbourg',
    date: '03/11/2022'
  },
  {
    title: 'Abject Act w/ YA',
    imageSrc: event8,
    place: 'Le Studio Saglio, 67000, Strasbourg',
    date: '11/19/2021'
  },
  {
    title: 'Assault',
    imageSrc: event9,
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
            key={`${index}-${title}`}
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
