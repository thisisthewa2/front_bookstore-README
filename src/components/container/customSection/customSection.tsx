import { useEffect, useMemo, useState } from 'react';
import { CusTomBookType, PreferredGenre } from '@/types/customPageType';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import { filteredBooks } from '@/utils/compareBooks';
import VacantCustomLayout from '@/components/layout/vacantCustomLayout';
import { useQuery } from '@tanstack/react-query';
import { getCustomCategoryList } from '@/api/category';
import { getRandomBookList } from '@/api/book';
import GenreSelection from './genreSelection';
import Link from 'next/link';
import NonLoggedInCustomSection from './nonLoggedInCustomSection';
import NonSelectedCustomSection from './nonSelectedCustomSection';

interface CustomSectionProps {
  isLoggedIn: boolean;
}
function CustomSection({ isLoggedIn }: CustomSectionProps) {
  const [selectedGenreId, setSelectedGenreId] = useState<string | null>(null);
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);

  const cusTomSelectedGenreListQuery = useQuery({
    queryKey: ['custom-category'],
    queryFn: () => getCustomCategoryList(),
    select: (data) => data.data,
    staleTime: Infinity,
  });

  const genreList = useMemo(() => {
    try {
      const shuffledGenres = cusTomSelectedGenreListQuery.data.memberCategory
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      return shuffledGenres.map((item: PreferredGenre) => {
        return {
          categoryId: item.categoryId,
          title: item.subName,
        };
      });
    } catch (error) {
      return [];
    }
  }, [cusTomSelectedGenreListQuery.data]);

  const selectedCategoryIds = selectedGenreId ? selectedGenreId : '';

  const getRandomCustomBookList = useQuery({
    queryKey: ['randomBook', selectedGenreId],
    queryFn: () => getRandomBookList(selectedCategoryIds, true),
    enabled: initialDataLoaded && !!selectedCategoryIds,
    select: (data) => filteredBooks(data.data.books),
  });

  useEffect(() => {
    try {
      if (
        cusTomSelectedGenreListQuery.data.memberCategory.length &&
        !selectedGenreId
      ) {
        setSelectedGenreId(genreList[0].categoryId);
        setInitialDataLoaded(true);
      }
    } catch (error) {
      setSelectedGenreId(null);
    }
  }, [cusTomSelectedGenreListQuery.data, selectedGenreId]);
  if (!isLoggedIn) return <NonLoggedInCustomSection />;

  return (
    <div className="flex-center w-full bg-pink">
      {genreList.length === 0 ? (
        <NonSelectedCustomSection />
      ) : getRandomCustomBookList?.data?.length === 0 ? (
        <VacantCustomLayout />
      ) : (
        <div className="flex-center w-full max-w-[1200px] mobile:h-[940px] mobile:flex-col tablet:h-[655px] tablet:flex-col pc:flex pc:h-500 pc:items-center">
          <GenreSelection
            genreList={genreList}
            selectedGenreId={selectedGenreId}
            setSelectedGenreId={setSelectedGenreId}
          />
          <div className="mobile:flex-center relative flex  flex-wrap gap-x-30 mobile:mx-15  mobile:mb-60 mobile:mt-40 mobile:w-360 mobile:gap-x-10 mobile:gap-y-35 mobile:pr-15 tablet:mt-63 tablet:gap-x-20 pc:ml-75 pc:mr-60 pc:justify-between">
            {getRandomCustomBookList.isLoading ? (
              <div></div>
            ) : (
              getRandomCustomBookList.data?.map(
                (book: CusTomBookType, index: number) => (
                  <div key={book.bookId} className="relative mt-17">
                    {index === 3 && (
                      <div className="absolute right-3 top-[-30px] mobile:hidden">
                        <Link href="/custom" className="text-primary">
                          더보기
                        </Link>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="absolute right-0 top-[-30px] tablet:hidden pc:hidden">
                        <Link href="/custom" className="text-primary">
                          더보기
                        </Link>
                      </div>
                    )}
                    <div className="mobile:hidden tablet:hidden">
                      <PreviewBookInfo
                        size="md"
                        bookId={book.bookId}
                        image={book.bookImgUrl}
                        title={book.bookTitle}
                        authorList={book.authors}
                        isUnit={true}
                      />
                    </div>
                    <div className=" pc:hidden">
                      <PreviewBookInfo
                        size="lg"
                        bookId={book.bookId}
                        image={book.bookImgUrl}
                        title={book.bookTitle}
                        authorList={book.authors}
                        isUnit={true}
                      />
                    </div>
                  </div>
                ),
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomSection;
