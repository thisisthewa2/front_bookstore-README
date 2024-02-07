/** 카테고리 페이지
 * @param isDomestic: required, 불린형, 현재 페이지가 domestic인지 아닌지 판별하는 인자값
 * @param location: optional, 불린형, 현재 페이지가 domestic/하위 페이지 중 어디에 있는지 체크. 없다면 전체보기 페이지에 있다는 것으로 간주, "healthhobby" 이런 식으로 하위페이지 id 값이 들어옴.
 */

import { ReactNode } from 'react';

import MainLayout from './mainLayout';
import Sidebar from '@/components/sidebar/sidebar';
import { SidebarProps } from '@/types/sidebarType';

interface SidebarLayoutProps extends SidebarProps {
  children?: ReactNode;
}

function SidebarLayout({
  pageName,
  isDomestic,
  location,
  children,
}: SidebarLayoutProps) {
  return (
      <MainLayout>
        <section
          role="contents"
          className="flex h-full w-full flex-col items-start pl-245 pr-60 pt-20 mobile:px-15
            mobile:pt-0 tablet:pl-217 tablet:pr-40">
          <aside
            className="absolute top-40 left-40 w-[163px] h-[994px] tablet:w-[155px] mobile:static
              mobile:h-35 mobile:w-full">
            <Sidebar
              pageName={pageName}
              isDomestic={isDomestic}
              location={location}
            />
          </aside>
          <div>{children}</div>
        </section>
      </MainLayout>
  );
}

export default SidebarLayout;
