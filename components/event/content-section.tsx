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
  return (
    <ParallaxProvider>
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
