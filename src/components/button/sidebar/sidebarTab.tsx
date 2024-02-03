import Link from 'next/link';
import {
  ReadMeForeignCategoryList,
  ReadMeDomesticCategoryList,
} from '@/pages/api/mock';

interface SidebarTabProps {
  isDomestic: boolean;
  location?: string;
}

function SidebarTab({ isDomestic, location }: SidebarTabProps) {
  const categoryList = isDomestic
    ? ReadMeDomesticCategoryList.categoryList
    : ReadMeForeignCategoryList.categoryList;
  return (
    <div
      className="absolute flex flex-col gap-12 pt-20 mobile:p-15 mobile:border-[1px]
        mobile:border-gray-1 mobile:rounded-[10px] mobile:h-[468px] mobile:w-270
        mobile:flex-wrap mobile:gap-5 mobile:right-0 mobile:top-65 bg-white z-20">
      <Link
        className={`text-[13px] block ${location ? 'text-gray-2' : 'font-bold text-green'}`}
        href={`/${isDomestic ? 'domestic' : 'foreign'}`}>
        전체보기
      </Link>
      {categoryList.map((el) => {
        return (
          <Link
            className={`text-[13px] block ${
              el.link === `/${location}`
                ? 'font-bold text-green'
                : 'text-gray-2'
            }`}
            href={`/${isDomestic ? 'domestic' : 'foreign'}${el.link}`}
            key={el.title}>
            {el.title}
          </Link>
        );
      })}
    </div>
  );
}

export default SidebarTab;
