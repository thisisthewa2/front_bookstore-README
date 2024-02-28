/** 카테고리 페이지 */

import { ReactNode } from 'react';

import MainLayout from '@/components/layout/mainLayout';
import Sidebar from '@/components/sidebar/sidebar';
import { SidebarProps } from '@/types/api/sidebarType';

interface SidebarLayoutProps extends SidebarProps {
  children?: ReactNode;
}

function SidebarLayout({ pageName, children }: SidebarLayoutProps) {
  return (
    <div className="flex-center flex-col">
      <MainLayout>
        <section
          role="contents"
          className="flex h-full w-full flex-col items-start pl-245 pt-20 mobile:px-15
            mobile:pt-0 tablet:pl-217 tablet:pr-40">
          <aside
            className="absolute left-40 top-40 h-[994px] w-[163px] mobile:static mobile:h-35
              mobile:w-full tablet:w-[155px]">
            <Sidebar pageName={pageName} />
          </aside>
          <div>{children}</div>
        </section>
      </MainLayout>
    </div>
  );
}

export default SidebarLayout;
