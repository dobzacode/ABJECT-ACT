import MovingSection from 'components/ui/div/moving-section';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('metadata.artists');

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <main
      className="relative flex h-full
    min-h-screen w-screen flex-col overflow-x-hidden"
    >
      <MovingSection
        alt="Morsure"
        imageSrc="/asset/artist/morsure.jpg"
        comingFrom="left"
        link="/artists/morsure"
        title="MORSURE"
        className="h-[33rem]"
        imageCSS="object-[10%,40%]"
      ></MovingSection>
      <div className="w-full border-2 border-black" />
      <MovingSection
        alt="Black Larsen"
        imageSrc="/asset/artist/black_larsen.jpg"
        comingFrom="right"
        link="/artists/blacklarsen"
        title="BLACK LARSEN"
        className="h-[33rem]"
        imageCSS="object-[10%,30%]"
      ></MovingSection>
      <div className="w-full border-2 border-black" />
      <MovingSection
        alt="Spore"
        imageSrc="/asset/artist/spore.jpg"
        comingFrom="left"
        link="/artists/spore"
        title="SPORE"
        className="h-[33rem]"
        imageCSS=" object-[25%,35%]"
      ></MovingSection>
      <div className="w-full border-2 border-black" />
      <MovingSection
        alt="Krauss"
        imageSrc="/asset/artist/black_larsen.jpg"
        comingFrom="right"
        link="/artists/krauss"
        title="KRAUSS"
        className="h-[33rem]"
        imageCSS=" object-[25%,35%]"
      ></MovingSection>
    </main>
  );
}
