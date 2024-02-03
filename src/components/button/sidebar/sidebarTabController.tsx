/** 사이드바 하위 내비게이션 탭을 보여줄지 말지 컨트롤하는 버튼과 사이드바 하위 내비게이션탭
 * 단, 데스크탑에선 컨트롤버튼이 안 보이고 하위 내비게이션 탭만 보임
 * 단, 모바일환경에서는 컨트롤버튼만 보이고 내비게이션 탭은 안 보임, 컨트롤 버튼을 눌러서 팝업으로 내비게이션 탭을 띄우는 형식
 * @params isDomestic: required, 불린
 * @params location: optional, string
 * @example
 */

import Image from 'next/image';
import { useRef } from 'react';

import SidebarTab from '@/components/button/sidebar/sidebarTab';
import useShowDropDown from '@/hooks/useShowDropDown';
import useCarouselEnv from '@/hooks/useCarouselEnv';
import {
  ReadMeDomesticCategoryList,
  ReadMeForeignCategoryList,
} from '@/pages/api/mock';
interface SidebarTabControllerProps {
  isDomestic: boolean;
  location?: string;
}

function SidebarTabController({
  isDomestic,
  location,
}: SidebarTabControllerProps) {
  const ref = useRef(null);
  const [showOptions, setShowOptions] = useShowDropDown(ref, false);
  const { env } = useCarouselEnv();
  const categoryList = isDomestic
    ? ReadMeDomesticCategoryList.categoryList
    : ReadMeForeignCategoryList.categoryList;

  let found = categoryList.find((e) => e.link === `/${location}`);
  let locatedTitle = location ? found?.title : '전체보기';

  const handleClick = () => setShowOptions(!showOptions);

  return (
    <>
      <button
        ref={ref}
        onClick={handleClick}
        className="pc:hidden tablet:hidden mobile:flex-center mobile:gap-4 text-[13px]">
        {locatedTitle}
        <div className="w-19 h-19 border-[1px] rounded-[100%] border-gray-1 overflow-hidden">
          <Image
            src={`${showOptions ? '/icons/UpArrow.svg' : '/icons/DownArrow.svg'}`}
            alt="카테고리 펼치기 버튼"
            width={19}
            height={19}
          />
        </div>
      </button>
      {(showOptions || env !== 'mobile') && (
        <SidebarTab isDomestic={isDomestic} location={location} />
      )}
    </>
  );
}

export default SidebarTabController;
