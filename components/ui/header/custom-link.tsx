'use client';

import { Link } from 'navigation';
import { useRouter } from 'next/navigation';
import { ReactNode, useRef } from 'react';

export default function CustomLink({ href, children }: { href: string; children: ReactNode }) {
  const router = useRouter();
  const ref = useRef() as React.MutableRefObject<HTMLAnchorElement | null>;

  return (
    <Link
      ref={ref}
      href={href as any}
      onClick={(e: any) => {
        e.preventDefault();
        e.stopPropagation();
        if (!ref.current) return;
        const href = ref.current.getAttribute('href');

        document.querySelector('main')?.classList.add('hidden-div');
        setTimeout(() => {
          router.push(href as string);
        }, 600);
      }}
    >
      {children}
    </Link>
  );
}
