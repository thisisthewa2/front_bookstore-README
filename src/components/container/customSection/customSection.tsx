import { useEffect, useState } from 'react';
import CustomGenreButton from '@/components/button/genre/customGenreButton';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import MoreLink from '@/components/button/moreLinkButton';
import {
  CustomBook,
  CustomSectionMockData_3,
} from '@/pages/api/mock/customSectionMock';
import { StaticImageData } from 'next/image';
import NonLoggedInCustomSection from '@/components/container/customSection/nonLoggedInCustomSection';
import NonSelectedCustomSection from '@/components/container/customSection/nonSelectedCustomSection';
import Link from 'next/link';
interface CustomSectionProps {
  isLoggedIn: boolean;
  isGenreSelected: boolean;
}

function CustomSection({ isLoggedIn, isGenreSelected }: CustomSectionProps) {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(
    CustomSectionMockData_3[0].category,
  );
  const [selectedBookList, setSelectedBookList] = useState<
    {
      bookId: number;
      title: string;
      authorList: string[];
      bookImg: string | StaticImageData;
    }[]
  >([]);

  useEffect(() => {
    // 처음 렌더링 시 selectedGenre에 해당하는 bookList 설정
    const initialSelectedData = CustomSectionMockData_3.find(
      (data) => data.category === selectedGenre,
    );
    setSelectedBookList(
      initialSelectedData ? initialSelectedData.bookList : [],
    );
  }, [selectedGenre]);

  const handleGenreClick = (genre: string) => {
    setSelectedGenre((prevGenre) => (prevGenre === genre ? null : genre));
  };

  if (!isLoggedIn) {
    return <NonLoggedInCustomSection />;
  }

  if (isLoggedIn && !isGenreSelected) {
    return <NonSelectedCustomSection />;
  }

  return (
    <div
      className="flex-center relative h-500 w-full bg-gray-1 mobile:h-[886px]
        mobile:flex-col tablet:h-[665px] tablet:flex-col pc:gap-x-20">
      <Link
        href="/custom"
        className="absolute right-60 top-20 flex text-green tablet:top-60 pc:hidden">
        더보기
      </Link>
      <div
        className="flex-center mt-80 w-314 flex-col mobile:mx-auto mobile:mt-50 tablet:mx-auto
          tablet:h-244 pc:h-342 pc:w-347">
        <div className="mb-8 text-24 font-bold">
          <span className="text-green">맞춤도서</span>를 가져왔어요
        </div>
        <div className="mb-30 text-gray-4 mobile:mb-20">
          선호 장르 분석을 통해 도서를 추천해요
        </div>
        <div className="flex-center mb-60 w-full flex-wrap gap-10 mobile:mb-40">
          {CustomSectionMockData_3.map((data) => (
            <CustomGenreButton
              key={data.category}
              title={data.category}
              selected={selectedGenre === data.category}
              onSelect={handleGenreClick}
            />
          ))}
        </div>
      </div>

      <div
        className="flex-center pc:w-712 relative flex-wrap gap-x-20 mobile:mx-auto
          mobile:w-330 mobile:gap-y-60 tablet:h-312 pc:justify-end">
        {selectedBookList.length > 0 && (
          <>
            {selectedBookList.map((book: CustomBook, index: number) => (
              <div className="relative" key={book.bookId}>
                <div className="relative">
                  <PreviewBookInfo
                    size={'md'}
                    title={book.title}
                    authorList={book.authorList}
                    image={book.bookImg || ''}
                  />
                  <MoreLink isVisible={index === 3} />
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default CustomSection;
