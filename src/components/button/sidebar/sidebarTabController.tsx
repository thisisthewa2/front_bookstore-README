/** 사이드바 하위 내비게이션 탭을 보여줄지 말지 컨트롤하는 버튼과 사이드바 하위 내비게이션탭
 * 단, 데스크탑에선 컨트롤버튼이 안 보이고 하위 내비게이션 탭만 보임
 * 단, 모바일환경에서는 컨트롤버튼만 보이고 내비게이션 탭은 안 보임, 컨트롤 버튼을 눌러서 팝업으로 내비게이션 탭을 띄우는 형식
 * @params isDomestic: required, 불린
 * @params location: optional, string
 * @example
 */

import Image from 'next/image';
import { useAtom } from 'jotai';
import { useRef } from 'react';

import SidebarTab from '@/components/button/sidebar/sidebarTab';
import useShowDropDown from '@/hooks/useShowDropDown';
import useCarouselEnv from '@/hooks/useCarouselEnv';
import { SidebarProps } from '@/types/sidebarType';
import { CategoryListAtom, LocatedCategoryAtom } from '@/store/state';

function SidebarTabController({pageName}: SidebarProps) {
  const ref = useRef(null);
  const [showOptions, setShowOptions] = useShowDropDown(ref, false);
  const { env } = useCarouselEnv();
  const [categoryList,] = useAtom(CategoryListAtom);
  const [locatedCategory] = useAtom(LocatedCategoryAtom);
  const locatedTitle = locatedCategory.subId ? categoryList[locatedCategory.mainId === 0 ? "domestic" : "foreign"][locatedCategory.subId-1].subName : '전체보기';

  const handleClick = () => setShowOptions(!showOptions);

  return (
    <>
      <button
        ref={ref}
        onClick={handleClick}
        className="mobile:flex-center text-[13px] mobile:gap-4 tablet:hidden pc:hidden">
        {locatedTitle}
        <div className="h-19 w-19 overflow-hidden rounded-[100%] border-[1px] border-gray-1">
          <Image
            src={`${showOptions ? '/icons/UpArrow.svg' : '/icons/DownArrow.svg'}`}
            alt="카테고리 펼치기 버튼"
            width={19}
            height={19}
          />
        </div>
      </button>
      {(showOptions || env !== 'mobile') && (
        <SidebarTab
          pageName={pageName}
        />
      )}
    </>
  );
}

export default SidebarTabController;
