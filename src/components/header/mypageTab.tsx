import React, { useState, useEffect } from 'react';
import TabButton from '../button/header/TabButton';
import SettingTab from '@/components/header/settingTab';
import { useRouter } from 'next/router';

// tabRoutes 객체의 타입 정의
interface TabRoutes {
  [key: string]: string;
}

const tabRoutes: TabRoutes = {
  myReview: '/mypage/review',
  setting: '/mypage/setting/editProfile',
  orderList: '/mypage/order',
  myCommunity: '/mypage/community',
};

function MyPageTab() {
  const [selectedTab, setSelectedTab] = useState('');
  const router = useRouter();

  useEffect(() => {
    const pathParts = router.asPath.split('/');
    const lastPathPart = pathParts[pathParts.length - 2];
    setSelectedTab(lastPathPart); //설정탭 하위에 해당하는 경로를 선택했을 때

    const pathname = router.pathname; //주문 조회, 나의리뷰, 나의 커뮤니티글, 설정 에 해당하는 경로
    const tabName = Object.keys(tabRoutes).find(
      (key) => tabRoutes[key] === pathname,
    );
    if (tabName) {
      setSelectedTab(tabName);
    }
  }, [router.asPath, router.pathname]);

  const handleButtonClick = (tabName: string) => {
    if (tabRoutes[tabName]) {
      // 해당하는 키가 있는지 확인
      setSelectedTab(tabName);
      router.push(tabRoutes[tabName]);
    } else {
      console.error(`Tab route for '${tabName}' is not defined`);
    }
  };

  return (
    <div>
      <div className="flex-center h-70 gap-48 border-y border-gray-1 mobile:h-50 mobile:gap-20">
        <TabButton
          selected={selectedTab === 'orderList'}
          onClick={() => handleButtonClick('orderList')}
          title={'주문 조회'}
          isSmall={false}
        />
        <TabButton
          selected={selectedTab === 'myReview'}
          onClick={() => handleButtonClick('myReview')}
          title={'나의 리뷰'}
        />
        <TabButton
          selected={selectedTab === 'myCommunity'}
          onClick={() => handleButtonClick('myCommunity')}
          title={'나의 커뮤니티 글'}
          isSmall={false}
        />
        <TabButton
          selected={selectedTab === 'setting'}
          onClick={() => handleButtonClick('setting')}
          title={'설정'}
          isSmall={false}
        />
      </div>

      {selectedTab === 'setting' && <SettingTab />}
    </div>
  );
}

export default MyPageTab;
