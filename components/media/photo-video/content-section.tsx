'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import AssaultBlock from './assault-block';
import PulsarBlock from './pulsar-block';

export default function ContentSection({}) {
  const [sectionToShow, setSectionToShow] = useState<'pulsar' | 'assault'>('pulsar');
  const searchParams = useSearchParams();

  useEffect(() => {
    const event =
      searchParams.get('event') === 'pulsar' || !searchParams.get('event') ? 'pulsar' : 'assault';

    setTimeout(() => {
      setSectionToShow(event);
    }, 600);
  }, [searchParams]);

  return (
    <>
      {sectionToShow !== 'pulsar' ? (
        <AssaultBlock></AssaultBlock>
      ) : (
        <PulsarBlock></PulsarBlock>
      )}
    </>
  );
}
