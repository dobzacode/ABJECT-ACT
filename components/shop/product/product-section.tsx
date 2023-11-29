import Button from 'components/ui/button/button';
import H2 from 'components/ui/text/h2';
import P from 'components/ui/text/p';
import { cn, dynamicBlurDataUrl } from 'lib/utils';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

interface ProductSectionProps {
  className?: string;
  name: string;
  description: string;
  price: number;
  src: string;
  size: string[];
  link: string;
}

export default async function ProductSection({
  className,
  name,
  description,
  price,
  size,
  src,
  link
}: ProductSectionProps) {
  const t = await getTranslations('shop');
  const blurHash = await dynamicBlurDataUrl(src);

  return (
    <section>
      <div
        className={cn(
          ' slideInFromBottom relative flex h-fit w-fit flex-col items-center justify-center gap-medium rounded-small bg-black95 pb-large pt-[20rem] shadow-medium-light max-mobile-medium:mx-small',
          className
        )}
      >
        <Image
          placeholder="blur"
          blurDataURL={blurHash}
          width={300}
          height={300}
          className="drop-shadow-light absolute -top-[16rem] left-1/2 -translate-x-1/2 transform "
          src={src}
          alt={`${name} picture`}
        ></Image>

        <div className="relative mx-small flex flex-col items-center gap-medium text-white mobile-medium:w-[30rem]">
          <H2 className="font-extralight" textType={'heading--large'}>
            {name}
          </H2>
          <P intent="white" textType={'body'} className="px-small text-center font-extralight">
            {description}
          </P>
          <div className="flex w-1/2 justify-between gap-small">
            <div className="flex  gap-extra-small">
              {size.map((size) => {
                return (
                  <P key={size} intent="white" textType={'body'} className="font-extralight">
                    {size}
                  </P>
                );
              })}
            </div>
            <P intent="white" textType={'body'} className=" font-medium">
              {price}€
            </P>
          </div>

          <a href={link} className="absolute -bottom-[9rem]">
            <Button
              className={`border  border-info60 shadow-info-medium-light duration-medium hover:scale-110`}
              size="small"
              rounded="small"
              type="submit"
              intent="info"
            >
              {t('order')}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
