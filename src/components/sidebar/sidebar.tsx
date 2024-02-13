import SidebarTabController from '@/components/button/sidebar/sidebarTabController';
import SidebarRegionButton from '@/components/button/sidebar/sidebarRegionButton';
import { SidebarProps } from '@/types/sidebarType';

function Sidebar({ pageName}: SidebarProps) {
  return (
    <aside className="mobile:flex mobile:justify-between">
      <SidebarRegionButton pageName={pageName} />
      <SidebarTabController
        pageName={pageName}
      />
    </aside>
  );
}

export default Sidebar;
