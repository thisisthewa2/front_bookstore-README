import Link from 'next/link';
import {
  ReadMeForeignCategoryList,
  ReadMeDomesticCategoryList,
} from '@/pages/api/mock';
import { SidebarProps } from '@/types/sidebarType';

function SidebarTab({ pageName, isDomestic, location }: SidebarProps) {
  const categoryList = isDomestic
    ? ReadMeDomesticCategoryList.categoryList
    : ReadMeForeignCategoryList.categoryList;
  return (
    <div
      className="absolute z-20 flex flex-col gap-12 bg-white pt-20
        mobile:right-0 mobile:top-65 mobile:h-[468px] mobile:w-270
        mobile:flex-wrap mobile:gap-5 mobile:rounded-[10px] mobile:border-[1px] mobile:border-gray-1 mobile:p-15">
      <Link
        className={`block text-[13px] ${location ? 'text-gray-2' : 'font-bold text-green'}`}
        href={`/${isDomestic ? 'domestic' : 'foreign'}`}>
        전체보기
      </Link>
      {categoryList.map((el) => {
        return (
          <Link
            className={`block text-[13px] ${
              el.link === `/${location}`
                ? 'font-bold text-green'
                : 'text-gray-2'
            }`}
            href={`/${isDomestic ? 'domestic' : 'foreign'}${el.link}${pageName ? `/${pageName}` : ''}`}
            key={el.title}>
            {el.title}
          </Link>
        );
      })}
    </div>
  );
}

export default SidebarTab;
