import ParallaxBackground from '../parallax-background';
import AssaultBlock from './assault-block';

export default function ContentSection({}) {
  return (
    <>
      <ParallaxBackground src="/asset/background/abject-bg.png"></ParallaxBackground>{' '}
      <AssaultBlock></AssaultBlock>
    </>
  );
}
