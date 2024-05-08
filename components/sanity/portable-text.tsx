import { client } from '@/sanity/lib/client';
import { PortableText, PortableTextBlock, PortableTextComponents } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';
import urlBuilder from '@sanity/image-url';

export default function CustomPortableText({ value }: { value: PortableTextBlock[] }) {
  const SampleImageComponent = ({ value, isInline }: { value: any; isInline: string }) => {
    const { width, height } = getImageDimensions(value);
    return (
      <img
        src={urlBuilder(client)
          .image(value)
          .width(isInline ? 100 : 800)
          .fit('max')
          .auto('format')
          .url()}
        alt={value.alt || ' '}
        loading="lazy"
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? 'inline-block' : 'block',

          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height
        }}
      />
    );
  };

  const components: PortableTextComponents = {
    types: {
      //@ts-ignore
      image: SampleImageComponent
    },

    marks: {
      link: ({ children, value }) => {
        return (
          <a href={value?.href} rel="noreferrer noopener" className="text-blue-800 underline">
            {children}
          </a>
        );
      }
    }
  };

  return <PortableText components={components} value={value} />;
}
