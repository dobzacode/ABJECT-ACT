import { ReactNode } from 'react';

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-full w-full items-center justify-center overflow-hidden px-small pt-sub-extra-large tablet:pt-extra-large">
      {children}
    </main>
  );
}
