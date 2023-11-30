import ProductSection from 'components/shop/product/product-section';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
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

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <main className="relative flex h-screen flex-col items-center justify-center gap-sub-large overflow-hidden pt-extra-large">
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
