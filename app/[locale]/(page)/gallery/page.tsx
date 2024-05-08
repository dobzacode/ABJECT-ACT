import EventSection from 'components/media/photo-video/event-section';
import { dynamicBlurDataUrl } from 'lib/utils';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { draftMode } from 'next/headers';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { sanityFetch } from '../../../../sanity/lib/fetch';

import { EVENTS_QUERY, Event, EventsQueryResponse } from '../../../../sanity/lib/queries';

export async function generateMetadata() {
  const t = await getTranslations('metadata.gallery');

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

export default async function GalleryPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const events = await sanityFetch<EventsQueryResponse>({
    query: EVENTS_QUERY,
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  if (!events) {
    return notFound();
  }

  const sortedEvents = events.sort((a: Event, b: Event) => {
    return Date.parse(a.date) - Date.parse(b.date);
  });

  console.log(sortedEvents);

  const blurHash = await dynamicBlurDataUrl('/asset/background/galery-bg.webp');

  return (
    <main
      className=" relative flex h-full
     min-h-screen w-screen flex-col items-center justify-center overflow-x-hidden px-small py-extra-large tablet:pb-extra-large tablet:pt-[9rem]"
    >
      <div className=" fixed top-0 h-screen w-screen overflow-hidden saturate-50 ">
        <Image
          sizes={'100vw'}
          width={1920}
          height={1080}
          alt={''}
          className="object-cover object-center min-[1920px]:h-screen min-[1920px]:w-screen"
          priority={true}
          quality={100}
          src={'/asset/background/galery-bg.webp'}
          blurDataURL={blurHash}
          placeholder={'blur'}
        ></Image>
      </div>
      {sortedEvents.map((event: Event, index: number) => {
        return (
          <EventSection
            direction={index % 2 === 0 ? 'left' : 'right'}
            index={index}
            event={event}
            title={event.titre}
            key={`${event.titre}-${index}`}
          ></EventSection>
        );
      })}
    </main>
  );
}
