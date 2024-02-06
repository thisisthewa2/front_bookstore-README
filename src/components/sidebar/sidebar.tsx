import SidebarTabController from '@/components/button/sidebar/sidebarTabController';
import SidebarRegionButton from '@/components/button/sidebar/sidebarRegionButton';
import { SidebarProps } from '@/types/sidebarType';

function Sidebar({ pageName, isDomestic = true, location }: SidebarProps) {
  return (
    <aside className="mobile:flex mobile:justify-between">
      <SidebarRegionButton pageName={pageName} isDomestic={isDomestic} />
      <SidebarTabController
        pageName={pageName}
        isDomestic={isDomestic}
        location={location}
      />
    </aside>
  );
}

export default Sidebar;
