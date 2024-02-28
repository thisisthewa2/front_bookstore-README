import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import TabButton from '@/components/button/header/TabButton';
import { useAtom } from 'jotai';
import { SigninMethodAtom } from '@/store/state';

function SettingTab() {
  const [selectedTab, setSelectedTab] = useState('');
  const router = useRouter();
  const [signinMethod] = useAtom(SigninMethodAtom);

  useEffect(() => {
    // 페이지 로드 시 URL 경로 파싱하여 선택된 탭 설정
    const pathParts = router.asPath.split('/');
    const lastPathPart = pathParts[pathParts.length - 1];
    setSelectedTab(lastPathPart);
  }, [router.asPath]);

  const handleButtonClick = (buttonName: string) => {
    setSelectedTab(buttonName);
    router.push(`/mypage/setting/${buttonName}`);
  };

  return (
    <div className="border-t border-gray-1">
      <div className="flex-center h-69 min-w-fit  max-w-[1200px] gap-48 mobile:h-50">
        <TabButton
          selected={selectedTab === 'editProfile'}
          onClick={() => handleButtonClick('editProfile')}
          title={'프로필 수정'}
          isSmall={true}
        />
        <TabButton
          selected={selectedTab === 'selectGenre'}
          onClick={() => handleButtonClick('selectGenre')}
          title={'선호장르 선택'}
          isSmall={true}
        />
        {!signinMethod && (
          <TabButton
            selected={selectedTab === 'editPassword'}
            onClick={() => handleButtonClick('editPassword')}
            title={'비밀번호 변경'}
            isSmall={true}
          />
        )}
      </div>
    </div>
  );
}

export default SettingTab;
