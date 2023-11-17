import { H1 } from 'components/ui/text/h1';
import H2 from 'components/ui/text/h2';
import P from 'components/ui/text/p';
import Link from 'next/link';
import { v4 } from 'uuid';

interface PastEventCardProps {
  eventList: { eventLink: string; name: string; place: string; date: string }[];
}

export default function PastEventCard({ eventList }: PastEventCardProps) {
  return (
    <div className="slideInFromRight glassmorphism-bg flex h-fit w-fit flex-col gap-medium overflow-hidden py-medium">
      <div className="mx-small flex w-[40rem] flex-col gap-medium text-white">
        <H1 textType={'heading--large'}>Past Event</H1>

        <div className="flex w-full flex-col gap-small">
          {eventList?.map(({ name, place, date, eventLink }) => {
            return (
              <Link className="flex flex-col gap-extra-small" key={v4()} href={eventLink}>
                <H2 textType={'heading'}>{name}</H2>
                <div className="flex flex-wrap items-end justify-between">
                  <P textType="sub-heading">{place}</P>
                  <P textType="body">{date}</P>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
