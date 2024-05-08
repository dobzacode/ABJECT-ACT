import { Header } from 'components/ui/header/header';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header
        size={'medium'}
        textColor={'white'}
        className="overlay  absolute  w-full max-w-full px-sub-large pt-[40px] tablet:px-large tablet:pt-large"
      ></Header>
      {children}
    </>
  );
}
