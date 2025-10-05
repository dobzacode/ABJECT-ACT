import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

import DynamicSection from 'components/event/dynamic-section';
import { sanityFetch } from '../../../../sanity/lib/fetch';

import { EventItem, EVENTS_LIST_QUERY } from '../../../../sanity/lib/queries';
import { urlForImage } from '../../../../sanity/lib/utils';
import BACKGROUNDPIC from '/public/asset/background/event-bg.webp';

export async function generateMetadata() {
  const t = await getTranslations('metadata.event');

  return {
    title: t('title'),
    description: t('description'),
    opengraph: {
      title: t('title'),
      description: t('description'),
      images: 'url/opengraph-image.jpg'
    },
    twitter: {
      title: t('title'),
      description: t('description'),
      images: 'url/twitter-image.jpg'
    }
  };
}
export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const events = await sanityFetch<EventItem[]>({ query: EVENTS_LIST_QUERY });
  if (!events) return null;

  const sortedEvents = events.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  const viewModel = await Promise.all(
    sortedEvents.map(async (event) => {
      const imageUrl = event.image?.asset ? urlForImage(event.image).dpr(2).quality(100).url() : '';
      return {
        title: event.titre,
        imageSrc: imageUrl,
        place: event.lieu,
        date: event.date
      };
    })
  );

  return (
    <main
      className=" relative flex h-full
 min-h-screen w-screen flex-col items-center justify-center gap-large overflow-x-hidden px-small py-extra-large tablet:pb-extra-large tablet:pt-[13.75rem]"
    >
      <div className=" fixed top-0 -z-20 h-screen w-screen overflow-hidden saturate-50">
        <Image
          placeholder={'blur'}
          sizes={'100vw'}
          alt={''}
          className="object-cover object-center min-[1920px]:h-screen min-[1920px]:w-screen"
          priority={true}
          quality={100}
          src={BACKGROUNDPIC}
          width={1920}
          height={1080}
        ></Image>
      </div>
      {viewModel.map(({ title, imageSrc, place, date }, index) => (
        <DynamicSection
          index={index}
          direction={index % 2 == 0 ? 'left' : 'right'}
          key={`${index}-${title}`}
          title={title}
          imageSrc={imageSrc}
          place={place}
          date={date}
        ></DynamicSection>
      ))}
    </main>
  );
}
