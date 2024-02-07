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
      <div
        role="container"
        className="basis-0pxr flex w-full shrink-0 grow flex-col overflow-hidden">
        <div role="header">{header}</div>
        <div
          role="sidebar-container"
          className="max-w-[1200px] m-auto flex p-y-40 relative">
          <section
            role="sidebar"
            className="flex h-full w-full flex-col items-start pl-245 pr-60 pt-40 mobile:px-15
              mobile:pt-0 tablet:pl-190 tablet:pr-40">
            <div className="w-full mobile:pt-20">
              <aside
                className="absolute left-40 top-40 h-[994px] w-[163px] mobile:static mobile:h-35
                  mobile:w-full tablet:w-[155px]">
                {sideBar}
              </aside>
            </div>
            <div
              role="contents"
              className="mobile:flex-center h-full w-full mobile:pt-30">
              {main}
            </div>
          </section>
        </div>
      </div>

      <ScrollToTopButton />
    </>
  );
}

export default BestSellerPageLayout;
