import H2 from 'components/ui/text/h2';
import { cn } from 'lib/utils';
import MediaPortion from './media-portion';

export interface EventSectionProps {
  title: string;
  videoSrc: string;
  imageFolder: string;
  direction: 'right' | 'left';
}

export default function EventSection({
  title,
  videoSrc,
  imageFolder,
  direction
}: EventSectionProps) {
  return (
    <section
      className={cn(
        'glassmorphism-bg relative flex h-full w-full  flex-col gap-medium pt-sub-large   laptop:w-10/12 laptop:gap-sub-large laptop:pb-sub-extra-large',
        direction === 'right' ? 'slideInFromRight' : 'slideInFromLeft'
      )}
    >
      <div className="mx-medium flex justify-between laptop:mx-large">
        <H2 textType={'heading--large'}>{title}</H2>
      </div>
      <MediaPortion videoSrc={videoSrc} imageFolder={imageFolder}></MediaPortion>
    </section>
  );
}
