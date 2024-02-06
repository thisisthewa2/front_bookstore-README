import { SetStateAction, useState } from 'react';
import Link from 'next/link';
import {
  CategoryProps,
  ReadMeForeignCategoryList,
  ReadMeDomesticCategoryList,
} from '@/pages/api/mock';

import SelectedAllButton from '@/components/button/header/selectedAllButton';
import CategoryButton from '@/components/button/header/categoryButton';

function CategoryTab() {
  const [selectedCategory, setSelectedCategory] = useState<
    'domestic' | 'foreign'
  >('domestic');
  // 'domestic' 또는 'foreign';
  const [selectedAll, setSelectedAll] = useState('국내도서 전체보기');
  const [categoryList, setCategoryList] = useState(
    ReadMeDomesticCategoryList.categoryList,
  );

  const handleCategoryClick = (categoryType: SetStateAction<string>) => {
    if (categoryType === 'domestic') {
      setSelectedCategory('domestic');
      setCategoryList(ReadMeDomesticCategoryList.categoryList);
      setSelectedAll('국내도서 전체보기');
    } else {
      setSelectedCategory('foreign');
      setCategoryList(ReadMeForeignCategoryList.categoryList);
      setSelectedAll('외국도서 전체보기');
    }
  };

  const getButtonStyle = (categoryType: string) => ({
    borderBottom:
      selectedCategory === categoryType
        ? '2px solid green'
        : '2px solid transparent',
    color: selectedCategory === categoryType ? 'green' : 'black',
    marginBottom: '-22px',
    '@screen tablet': {
      marginBottom: '-33px',
    },
  });

  const getLinkLayoutClass = () => {
    return 'bg-white pc:grid pc:grid-cols-4 pc:gap-4 tablet:grid tablet:grid-cols-4 tablet:gap-x-16 mobile:grid mobile:grid-cols-2 mobile:gap-4 ';
  };

  return (
    <div
      className="z-100 relative mx-15 flex min-h-fit flex-wrap rounded-md
        border border-t-0 border-gray-1 bg-white opacity-100 mobile:w-280 tablet:mx-30
        tablet:h-437 tablet:w-[600px] pc:mx-60 pc:h-437 pc:w-[600px]">
      <div className="flex w-full justify-between border-b border-gray-1">
        <div className="relative mx-30 flex h-60 items-center gap-60 mobile:mx-20 mobile:gap-35">
          <CategoryButton
            label="국내도서"
            onClick={() => {
              handleCategoryClick('domestic');
              setCategoryList(ReadMeDomesticCategoryList.categoryList);
            }}
            style={getButtonStyle('domestic')}
          />
          <CategoryButton
            label="외국도서"
            onClick={() => {
              handleCategoryClick('foreign');
              setCategoryList(ReadMeForeignCategoryList.categoryList);
            }}
            style={getButtonStyle('foreign')}
          />
        </div>
        <div className="mr-30 mt-15 mobile:mt-22">
          <SelectedAllButton
            selectedCategory={selectedCategory}
            selectedAll={selectedAll}
          />
        </div>
      </div>
      <div
        className={`text-13 mx-30 my-20 flex flex-wrap mobile:mx-20 tablet:h-350 pc:h-350
          ${getLinkLayoutClass()}`}>
        {categoryList.map(({ title, link }) => (
          <Category
            key={link}
            title={title}
            link={link}
            categoryType={selectedCategory}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryTab;

function Category({ title, link, categoryType }: CategoryProps) {
  const dynamicLink = `/${categoryType}${link}`;

  return (
    <Link
      key={dynamicLink}
      href={`/${categoryType}/[category]`}
      as={dynamicLink}>
      {title}
    </Link>
  );
}
