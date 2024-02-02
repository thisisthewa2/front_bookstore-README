import NavigationTab from '@/components/header/navigationTab';
import React from 'react';

interface HeaderLayoutProps {
  isLoggedIn: boolean;
  children: React.ReactNode;
}
function HeaderLayout({ isLoggedIn, children }: HeaderLayoutProps) {
  return (
    <div className="min-w-fit w-full sticky top-0 flex-row h-90 tablet:h-170 pc:h-170 bg-white z-50">
      {children} <NavigationTab isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default HeaderLayout;
