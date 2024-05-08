import { ReactNode } from 'react';

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-full w-full items-center justify-center overflow-hidden px-small py-extra-large tablet:pb-extra-large tablet:pt-[13.75rem]">
      {children}
    </main>
  );
}
