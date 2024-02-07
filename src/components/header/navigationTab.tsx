import { useState } from 'react';
import { useRouter } from 'next/router';
import CategoryTabButton from '@/components/button/header/categoryTabButton';
import CategoryTab from '@/components/header/categoryTab';
import Link from 'next/link';
import WritePostButton from '@/components/button/header/writePostButton';
import AddCommunityCard from '../modal/addCommunityCard/addCommunityCard';
import CustomBookButton from '../button/header/customBookButton';

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
    currentPath === '/community' ||
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
        className="b flex h-40 min-w-fit max-w-full items-center border-y border-gray-1 tablet:h-70
          pc:h-70">
        <div className="flex items-center justify-between text-14 tablet:text-16 pc:text-16">
          <div className="mx-16 tablet:mx-30 pc:mx-60">
            <CategoryTabButton onClick={toggleCategoryTab} />
          </div>
          <div className="flex gap-18 pc:gap-40 tablet:gap-30">
            <Link href="/domestic/bestseller"> 베스트</Link>
            <Link href="/domestic/newest"> 신간</Link>
            <CustomBookButton isLoggedIn={isLoggedIn} />
            <div className="inline-block border-r w-1 h-14 mt-4 border-gray-1" />

            <Link href="/community"> 커뮤니티</Link>
          </div>
        </div>
        <div className="ml-auto flex items-center tablet:mr-40 pc:mr-60">
          <WritePostButton
            showButton={showWritePostButton}
            onClick={handleModalOpen}
          />
        </div>
      </div>
      {isCategoryTabVisible && <CategoryTab />}
      {isModalOpen && <AddCommunityCard onClick={handleModalOpen} />}
    </>
  );
}

export default NavigationTab;
