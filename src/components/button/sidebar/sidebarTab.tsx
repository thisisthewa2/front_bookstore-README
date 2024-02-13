import Link from 'next/link';
import { useAtom } from 'jotai';

import { CategoryListAtom, LocatedCategoryAtom } from '@/store/state';
import useSetLocatedCategory from '@/hooks/useSetLocatedCategory';
import { SidebarProps } from '@/types/sidebarType';

function SidebarTab({ pageName}: SidebarProps) {
  const [categoryList,] = useAtom(CategoryListAtom);
  const [locatedCategory] = useAtom(LocatedCategoryAtom);
  const { updateLocatedCategory } = useSetLocatedCategory();

  return (
    <div
      className="absolute z-20 flex flex-col gap-12 bg-white pt-20
        mobile:right-0 mobile:top-65 mobile:h-[468px] mobile:w-270
        mobile:flex-wrap mobile:gap-5 mobile:rounded-[10px] mobile:border-[1px] mobile:border-gray-1 mobile:p-15">
      <Link
        onClick={() => {
          updateLocatedCategory(locatedCategory.mainId);
        }}
        className={`block text-[13px] ${locatedCategory.subId ? 'text-gray-2' : 'font-bold text-green'}`}
        href={`/${locatedCategory.mainId === 0 ? 'domestic' : 'foreign'}`}>
        전체보기
      </Link>
      {(categoryList) && categoryList[locatedCategory.mainId === 0 ? "domestic" : "foreign"].map((el, ind) => {
        return (
          <Link
              onClick={() => {
                let main = el.mainId;
                let sub = el.subId
                updateLocatedCategory(main, sub);
              }}
              className={`block text-[13px] ${
                (el.mainId, el.subId) === (locatedCategory.mainId, locatedCategory.subId)
                  ? 'font-bold text-green'
                  : 'text-gray-2'
              }`}
              href={`/${locatedCategory.mainId === 0 ? 'domestic' : 'foreign'}${el.link}${pageName ? `/${pageName}` : ''}`}
              key={el?.categoryId}>
            {el?.subName}
          </Link>
        );
      })}
    </div>
  );
}

export default SidebarTab;
