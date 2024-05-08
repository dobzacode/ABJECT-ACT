import ImageSlider from 'components/ui/div/image-slider/image-slider';
import { Event, Image } from '../../../sanity/lib/queries';
import { urlForImage } from '../../../sanity/lib/utils';

export default async function MediaPortion({ event }: { event: Event }) {
  const imagesWithUrl = event.imageGallery
    ? await Promise.all(
        event.imageGallery.map(async (image: Image) => {
          image.url = await urlForImage(image).width(1920).height(1080).dpr(2).quality(100).url();

          image.blurSrc = urlForImage(image).width(20).quality(20).url();
          return image;
        })
      )
    : null;

  if (!imagesWithUrl) return null;

  return <ImageSlider images={imagesWithUrl}></ImageSlider>;
}
