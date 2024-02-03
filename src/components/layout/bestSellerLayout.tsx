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
        className="flex flex-col grow shrink-0 overflow-hidden w-full basis-0pxr">
        <div role="header">{header}</div>
        <div role="sidebar-container" className="flex p-y-40 relative">
          <section
            role="sidebar"
            className="w-full h-full flex items-start flex-col pt-40 pl-245 pr-60 tablet:pr-40
              tablet:pl-190 mobile:pt-0 mobile:px-15">
            <div className="w-full mobile:pt-20">
              <aside
                className="absolute top-40 left-40 w-[163px] h-[994px] tablet:w-[155px] mobile:static
                  mobile:w-full mobile:h-35">
                {sideBar}
              </aside>
            </div>
            <div
              role="contents"
              className="w-full h-full mobile:pt-30 mobile:flex-center">
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
