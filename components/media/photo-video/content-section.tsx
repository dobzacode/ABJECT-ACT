import ParallaxBackground from '../parallax-background';
import AssaultBlock from './assault-block';

export default function ContentSection({}) {
  return (
    <>
      <ParallaxBackground src="/asset/background/abject-bg.jpg"></ParallaxBackground>{' '}
      <AssaultBlock></AssaultBlock>
    </>
  );
}
