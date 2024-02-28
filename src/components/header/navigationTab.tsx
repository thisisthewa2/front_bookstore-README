import { useState } from 'react';
import { useRouter } from 'next/router';
import CategoryTabButton from '@/components/button/header/categoryTabButton';
import CategoryTab from '@/components/header/categoryTab';
import Link from 'next/link';
import WritePostButton from '@/components/button/header/writePostButton';
import AddCommunityCard from '@/components/modal/addCommunityCard';
import CustomBookButton from '@/components/button/header/customBookButton';

interface NavigationTabProps {
  isLoggedIn: boolean;
}
function NavigationTab({ isLoggedIn }: NavigationTabProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoryTabVisible, setCategoryTabVisibility] = useState(false);
  const router = useRouter();
  // 현재 페이지 경로 확인
  const currentPath = router.pathname;

  // 특정 페이지에서만 WritePostButton을 보이도록 조건을 설정
  const showWritePostButton =
    (currentPath === '/community' && isLoggedIn) ||
    (currentPath === '/community/writeme' && isLoggedIn);

  const toggleCategoryTab = () => {
    setCategoryTabVisibility(!isCategoryTabVisible);
  };

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        className="flex h-40 min-w-fit items-center mobile:max-w-360 mobile:justify-start tablet:h-70
          pc:mx-auto pc:h-70 pc:max-w-[1200px]">
        <div className="flex items-center justify-between text-14 tablet:text-16 pc:text-16">
          <div className="mx-26 tablet:ml-40 pc:ml-70">
            <CategoryTabButton onClick={toggleCategoryTab} />
          </div>
          <div className="flex gap-18 tablet:ml-86 tablet:gap-30 pc:ml-106 pc:gap-40">
            <Link href="/domestic/bestseller"> 베스트</Link>
            <Link href="/domestic/newest"> 신간</Link>
            <CustomBookButton isLoggedIn={isLoggedIn} />
            <div className="mt-4 inline-block h-14 w-1 border-r border-gray-1" />

            <Link href="/community"> 커뮤니티</Link>
          </div>
        </div>
        {showWritePostButton && (
          <div className="ml-auto flex items-center tablet:mr-40 pc:mr-60">
            <WritePostButton onClick={handleModalOpen} />
          </div>
        )}
      </div>
      <hr className="h-1 border-0 bg-gray-1"></hr>
      {isCategoryTabVisible && <CategoryTab />}
      {isModalOpen && <AddCommunityCard onClick={handleModalOpen} />}
    </>
  );
}

export default NavigationTab;
