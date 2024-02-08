import React from 'react';
import { useRouter } from 'next/router';
import MyPageTab from '@/components/header/mypageTab';
import NavigationTab from '@/components/header/navigationTab';

interface HeaderLayoutProps {
  isLoggedIn: boolean;
  children: React.ReactNode;
}

function HeaderLayout({ isLoggedIn, children }: HeaderLayoutProps) {
  const router = useRouter();
  const isMypage = router.pathname.startsWith('/mypage');

  return (
    <div
      className={`sticky top-0 z-50 min-h-fit w-full min-w-fit flex-row bg-white ${isMypage ? 'min-h-fit' : 'h-110 tablet:h-170 pc:h-170'}`}>
      {children}
      {isMypage ? <MyPageTab /> : <NavigationTab isLoggedIn={isLoggedIn} />}
    </div>
  );
}

export default HeaderLayout;
