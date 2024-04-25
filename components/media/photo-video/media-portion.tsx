import ImageSlider from 'components/ui/div/image-slider/image-slider';

import { EventSectionProps } from './event-section';

interface MediaPortionProps
  extends Omit<
    EventSectionProps,
    'title' | 'direction' | 'scrollYProgress' | 'index' | 'eventArr' | 'videoSrc'
  > {}

export default function MediaPortion({ imageFolder, pictureAmount }: MediaPortionProps) {
  return <ImageSlider pictureAmount={pictureAmount} imageFolder={imageFolder}></ImageSlider>;
}
