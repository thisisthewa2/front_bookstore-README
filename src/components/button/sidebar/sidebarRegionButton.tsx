/* 카테고리 페이지의 사이드바 '국내 외국' 선택 버튼 */

import Link from 'next/link';
import { useAtom } from 'jotai';

import useSetLocatedCategory from '@/hooks/useSetLocatedCategory';
import { SidebarProps } from '@/types/sidebarType';
import { LocatedCategoryAtom } from '@/store/state';

function classNames<T>(...classes: Array<T>) {
  return classes.filter(Boolean).join(' ');
}

function StyledLink({
  title = '',
  link = '/',
  isLeft = true,
  isSelected = true,
}) {
  const SidebarLinkClassNames = classNames(
    `text-18 block relative mobile:text-[13px] font-bold mobile:font-light
    mobile:py-8 mobile:px-12`,
    isSelected
      ? 'text-gray-7 mobile:text-green mobile:border-[1px] mobile:border-green'
      : 'text-gray-2 mobile:text-black mobile:border-[1px] mobile:border-gray-1',
    isLeft
      ? 'pr-12 mobile:rounded-l-lg -right-1'
      : 'pl-12 mobile:rounded-r-lg -left-1',
  );

  const { updateLocatedCategory } = useSetLocatedCategory();

  return (
    <Link
      onClick={() => {
        let main = title === "국내" ? 0 : 1;
        updateLocatedCategory(main);
      }}
      className={SidebarLinkClassNames} href={link}>
      {title}
    </Link>
  );
}

function SidebarRegionButton({ pageName }: SidebarProps) {
  const [locatedCategory] = useAtom(LocatedCategoryAtom);
  
  return (
    <div className="mobile:flex-center flex items-center justify-start">
      <StyledLink
        title="국내"
        link={`/domestic/${pageName ?? ''}`}
        isLeft={true}
        isSelected={locatedCategory.mainId === 0}
      />
      <div className="relative z-10 h-11 w-[1px] bg-gray-1 mobile:h-37 mobile:bg-green"></div>
      <StyledLink
        title="외국"
        link={`/foreign/${pageName ?? ''}`}
        isLeft={false}
        isSelected={locatedCategory.mainId === 1}
      />
    </div>
  );
}

export default SidebarRegionButton;
