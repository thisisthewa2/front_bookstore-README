import NavigationTab from '@/components/header/navigationTab';
import React from 'react';

interface HeaderLayoutProps {
  isLoggedIn: boolean;
  children: React.ReactNode;
}
function HeaderLayout({ isLoggedIn, children }: HeaderLayoutProps) {
  return (
    <div className="sticky top-0 z-50 h-90 w-full min-w-fit flex-row bg-white tablet:h-170 pc:h-170">
      {children} <NavigationTab isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default HeaderLayout;
