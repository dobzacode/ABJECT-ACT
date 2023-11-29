import ProductSection from 'components/shop/product/product-section';
import { H1 } from 'components/ui/text/h1';
import { getTranslations } from 'next-intl/server';
import { v4 } from 'uuid';

export async function generateMetadata() {
  const t = await getTranslations('metadata.shop');

  return {
    title: t('title'),
    description: t('description')
  };
}

const productArr = [
  {
    title: 'T-Shirt',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    price: 20,
    src: '/asset/product/t-shirt.png',
    size: ['S', 'M', 'L', 'XL'],
    link: ''
  }
];

export default async function HomePage() {
  const t = await getTranslations('navigation.primaryNavigation');
  return (
    <main className="relative flex h-screen flex-col items-center gap-sub-large overflow-hidden pt-extra-large">
      <H1
        textType={'heading--extra-large'}
        className="slideInFromTop relative z-10 mb-[16rem] text-center text-black5 max-mobile-large:text-heading-large max-mobile-large:leading-heading-large tablet:mt-small"
      >
        {t('shop').toUpperCase()}
      </H1>
      {productArr.map((product) => {
        return (
          <ProductSection
            link={product.link}
            size={product.size}
            key={v4()}
            name={product.title}
            description={product.description}
            price={product.price}
            src={product.src}
          />
        );
      })}
    </main>
  );
}
