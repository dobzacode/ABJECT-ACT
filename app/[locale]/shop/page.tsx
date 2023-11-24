import ProductSection from 'components/shop/product/product-section';
import { v4 } from 'uuid';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

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
  return (
    <main className="flex h-full min-h-screen w-full items-center justify-center overflow-hidden pt-extra-large">
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
