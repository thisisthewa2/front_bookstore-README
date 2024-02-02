import Header from '@/components/header/index';
import { ReactNode } from 'react';
import ScrollToTopButton from '@/components/button/scrollToTopButton';
import useInfinite from '@/hooks/useInfinite';
import { useAtom } from 'jotai';
import { pointVisibleAtom } from '@/store/state';

interface BestSellerPageLayoutProps {
  header: ReactNode;
  sideBar?: ReactNode;
  main?: ReactNode;
}

function BestSellerPageLayout({
  header,
  sideBar,
  main,
}: BestSellerPageLayoutProps) {
  const [ref, isIntersecting] = useInfinite();
  const [, setPointVisible] = useAtom(pointVisibleAtom);

  setPointVisible(isIntersecting);

  return (
    <>
      <div className="flex flex-col grow shrink-0 overflow-hidden w-full basis-0pxr">
        <div>{header}</div>
        <div className="flex w-screen h-screen">
          <div>{sideBar}</div>
          <div className="flex-1 overflow-scroll">{main}</div>
        </div>
      </div>

      <ScrollToTopButton />
    </>
  );
}

export default BestSellerPageLayout;
