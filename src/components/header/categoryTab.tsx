import React from 'react';
import { SetStateAction, useState } from 'react';
import Link from 'next/link';
import SelectedAllButton from '@/components/button/header/selectedAllButton';
import CategoryButton from '@/components/button/header/categoryButton';
import { CategoryListAtom } from '@/store/state';
import { useAtom } from 'jotai';
import useCheckCategoryUrl from '@/hooks/useCheckCategoryUrl';

function CategoryTab() {
  const [categoryList] = useAtom(CategoryListAtom);
  const { mainId } = useCheckCategoryUrl();
  const [selectedCategory, setSelectedCategory] = useState<
    'domestic' | 'foreign'
  >(mainId ? 'foreign' : 'domestic');
  const selectedAll =
    selectedCategory == 'domestic' ? '국내도서 전체보기' : '외국도서 전체보기';

  const handleCategoryClick = (categoryType: SetStateAction<string>) => {
    setSelectedCategory(categoryType as 'domestic' | 'foreign');
  };

  const getButtonStyle = (categoryType: string) => ({
    borderBottom:
      selectedCategory === categoryType
        ? 'border-b-2 border-primary'
        : 'border-b-2 border-transparent',
    color: selectedCategory === categoryType ? 'text-primary' : 'text-black',
    marginBottom: selectedCategory === categoryType ? '-22px' : '-12px',
    '@screen tablet': {
      marginBottom: selectedCategory === categoryType ? '-33px' : '-23px',
    },
  });

  const getLinkLayoutClass = () => {
    return 'bg-white pc:grid pc:grid-cols-4 pc:gap-4 tablet:grid tablet:grid-cols-4 tablet:gap-x-16 mobile:grid mobile:grid-cols-2 mobile:gap-4 ';
  };

  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="z-100 relative mx-15 flex min-h-fit flex-wrap rounded-md border border-t-0 border-gray-1 bg-white opacity-100 mobile:w-280 tablet:mx-30 tablet:h-437 tablet:w-[600px] pc:mx-60 pc:h-437 pc:w-[600px]">
        <div className="flex w-full justify-between border-b border-gray-1">
          <div className="relative mx-60 flex h-60 items-center gap-60 mobile:mx-20 mobile:h-50 mobile:gap-35">
            <CategoryButton
              label="국내도서"
              onClick={() => {
                handleCategoryClick('domestic');
              }}
              selected={selectedCategory == 'domestic'}
            />

            <CategoryButton
              label="외국도서"
              onClick={() => {
                handleCategoryClick('foreign');
              }}
              selected={selectedCategory == 'foreign'}
            />
          </div>
          <div className="flex-center mr-30">
            <SelectedAllButton
              selectedCategory={selectedCategory}
              selectedAll={selectedAll}
            />
          </div>
        </div>
        <div
          className={`text-13 my-20 flex w-full  mobile:mx-20 tablet:mx-30 tablet:ml-60 tablet:h-350 pc:ml-60 pc:mr-56 pc:h-350  ${getLinkLayoutClass()}`}>
          {categoryList &&
            categoryList[selectedCategory]?.map((el, ind) => (
              <Link
                href={`/${selectedCategory}${el.link}`}
                key={el?.categoryId ?? ind}>
                {el?.subName}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryTab;
