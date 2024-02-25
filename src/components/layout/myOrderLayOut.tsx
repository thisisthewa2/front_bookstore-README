import { ReactNode, useEffect } from 'react';
import ScrollToTopButton from '@/components/button/scrollToTopButton';
import { useAtom } from 'jotai';
import { pointVisibleAtom } from '@/store/state';
import useInfinite from '@/hooks/useInfinite';
import MainLayout from './mainLayout';

interface MyOrderPageLayoutProps {
  dropDown: ReactNode;
  overview: ReactNode;
  orderDate?: ReactNode;
  main: ReactNode;
}

function MyOrderPageLayout({
  dropDown,
  overview,
  orderDate,
  main,
}: MyOrderPageLayoutProps) {
  const [ref, isIntersecting] = useInfinite();
  const [, setPointVisible] = useAtom(pointVisibleAtom);

  useEffect(() => {
    setPointVisible(isIntersecting);
  }, [isIntersecting]);
  return (
    <MainLayout>
      <div role="container">
        <div className="mx-auto flex max-w-[1080px] flex-col items-center px-40 py-60">
          <div
            role="overview"
            className="mb-40 w-[1080px] w-full mobile:w-330 tablet:w-[688px]">
            {overview}
          </div>
          <div role="order-date" className="w-full">
            <div className="mb-27 flex justify-start gap-8 mobile:flex-col">
              <div className="z-10 mobile:w-120">{dropDown}</div>
              <div>{orderDate}</div>
            </div>
            <div role="content">
              <div className="h-1" ref={ref} />
              {main}
              <ScrollToTopButton />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default MyOrderPageLayout;
