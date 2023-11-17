import { ReactNode } from 'react';

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-full w-full items-center justify-center overflow-x-hidden px-small pt-extra-large">
      {children}
    </main>
  );
}
