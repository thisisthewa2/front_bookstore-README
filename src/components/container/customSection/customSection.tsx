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
      className="relative tablet:flex-col mobile:flex-col flex-center w-full h-500
        tablet:h-[665px] mobile:h-[886px] pc:gap-x-20 bg-gray-1">
      <Link
        href="/custom"
        className="flex absolute top-20 tablet:top-60 right-60 pc:hidden text-green">
        더보기
      </Link>
      <div
        className="flex-col pc:w-347 flex-center w-314 tablet:h-244 pc:h-342 mobile:mt-50
          tablet:mx-auto mobile:mx-auto mt-80">
        <div className="font-bold text-24 mb-8">
          <span className="text-green">맞춤도서</span>를 가져왔어요
        </div>
        <div className="mobile:mb-20 mb-30 text-gray-4">
          선호 장르 분석을 통해 도서를 추천해요
        </div>
        <div className="flex-center flex-wrap w-full gap-10 mb-60 mobile:mb-40">
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
        className="flex-center flex-wrap tablet:h-312 gap-x-20 pc:w-712 mobile:w-330
          mobile:gap-y-60 mobile:mx-auto pc:justify-end relative">
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
