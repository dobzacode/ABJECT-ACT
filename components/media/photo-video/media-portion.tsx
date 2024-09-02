import ImageSlider from 'components/ui/div/image-slider/image-slider';
import { Event, Image } from '../../../sanity/lib/queries';
import { urlForImage } from '../../../sanity/lib/utils';

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

export default async function MediaPortion({ event }: { event: Event }) {
  console.log(event);
  const imagesWithUrl = event.imageGallery
    ? await Promise.all(
        event.imageGallery.map(async (image: Image) => {
          if (!image.asset) return;
          image.url = await urlForImage(image).width(1920).height(1080).dpr(2).quality(100).url();
          image.blurSrc = await urlForImage(image).width(20).quality(20).url();
          return image;
        })
      )
    : null;

  if (!imagesWithUrl) return null;

  const imagesArr = imagesWithUrl.filter(notEmpty);

  return <ImageSlider images={imagesArr}></ImageSlider>;
}
