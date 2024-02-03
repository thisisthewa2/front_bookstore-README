import SidebarTabController from '@/components/button/sidebar/sidebarTabController';
import SidebarRegionButton from '@/components/button/sidebar/sidebarRegionButton';
interface CategoryLayoutProps {
  isDomestic: boolean;
  location?: string;
}

function Sidebar({ isDomestic = true, location }: CategoryLayoutProps) {
  return (
    <aside className="mobile:flex mobile:justify-between">
      <SidebarRegionButton isDomestic={isDomestic} />
      <SidebarTabController isDomestic={isDomestic} location={location} />
    </aside>
  );
}

export default Sidebar;
