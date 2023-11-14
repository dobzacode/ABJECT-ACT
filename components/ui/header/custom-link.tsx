'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

export default function CustomLink({ href, children }: { href: string; children: ReactNode }) {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={(e: any) => {
        e.stopPropagation();
        e.preventDefault();
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
