import Header from '@/components/header/index';
import { ReactNode, useEffect } from 'react';
import ScrollToTopButton from '@/components/button/scrollToTopButton';
import useInfinite from '@/hooks/useInfinite';
import { useAtom } from 'jotai';
import { pointVisibleAtom } from '@/store/state';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const [ref, isIntersecting] = useInfinite();
  const [, setPointVisible] = useAtom(pointVisibleAtom);

  useEffect(() => {
    setPointVisible(isIntersecting);
  }, [isIntersecting]);

  return (
    <>
      <Header isLoggedIn={false} numItemsOfCart={1} />
      <div className="relative grid auto-rows-auto place-items-center">
        <div className="h-20 w-300" ref={ref} />
        {children}
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default MainLayout;
