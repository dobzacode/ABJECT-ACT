import H2 from 'components/ui/text/h2';
import H3 from 'components/ui/text/h3';
import P from 'components/ui/text/p';
import { cn } from 'lib/utils';
import Link from 'next/link';
import { v4 } from 'uuid';

interface NextEventCardProps {
  eventList: { eventLink: string; name: string; place: string; date: string }[];
  className?: string;
}

export default function NextEventCard({ eventList, className }: NextEventCardProps) {
  return (
    <div
      className={cn(
        'slideInFromRight bg-black95 shadow-medium-light flex h-fit w-fit flex-col gap-medium overflow-hidden rounded-small px-small py-medium',
        className
      )}
    >
      <div className=" flex w-full flex-col gap-medium text-white">
        <H2 className="font-extralight" textType={'heading--large'}>
          Next Event
        </H2>

        <div className="flex w-full flex-col gap-small">
          {eventList?.map(({ name, place, date, eventLink }) => {
            return (
              <Link className="flex flex-col gap-extra-small" key={v4()} href={eventLink}>
                <H3 className="font-thin" textType={'heading'}>
                  {name}
                </H3>
                <div className="flex flex-wrap items-end justify-between gap-small">
                  <P textType="body">{place}</P>
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
