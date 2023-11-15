import { H1 } from 'components/ui/text/h1';

interface ReleaseCardProps {
  releaseList: { name: string; label: string; link: string }[];
}

export default function LastReleaseCard({ releaseList }: ReleaseCardProps) {
  return (
    <div className="slideInFromLeft glassmorphism-bg flex h-fit w-fit flex-col gap-medium overflow-hidden py-medium">
      <div className="mx-small flex w-[40rem] flex-col gap-medium text-white">
        <H1 textType={'heading--large'}>Last Release</H1>

        <div className="flex w-full flex-col gap-small">
          {releaseList?.map(({ name, label, link }) => {
            return <></>;
          })}
        </div>
      </div>
    </div>
  );
}
