import React from 'react';
import CustomSectionGenreButton from '@/components/button/genre/customSectionGenreButton';
import { SelectedGenre } from '@/types/customPageType';
import Link from 'next/link';
import RecommendationContent from './recommendationContent';

interface GenreSelectionProps {
  genreList: SelectedGenre[];
  selectedGenreId: string | null;
  setSelectedGenreId: React.Dispatch<React.SetStateAction<string | null>>;
}

function GenreSelection({
  genreList,
  selectedGenreId,
  setSelectedGenreId,
}: GenreSelectionProps) {
  return (
    <div className="flex-center flex w-260 flex-col gap-8 mobile:mb-3 mobile:mt-60 mobile:w-314 tablet:w-314">
      {genreList.length > 0 ? (
        <div className="flex-center mb-30 mt-22 flex h-75 w-full flex-wrap gap-8 ">
          <div className="text-24 font-bold mobile:text-20">
            <span className="text-primary">맞춤 </span>도서를 가져왔어요
          </div>
          <div className="flex text-14 text-gray-3">
            선호 장르 분석을 통해 도서를 추천해요
          </div>
          <div className="flex-center flex-wrap gap-8">
            {genreList.map((genre: SelectedGenre) => (
              <div key={genre.categoryId}>
                <CustomSectionGenreButton
                  categoryId={genre.categoryId}
                  title={genre.title}
                  selected={selectedGenreId === genre.categoryId}
                  onClick={() => setSelectedGenreId(genre.categoryId)}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        // 선택된 장르가 없는 경우에 대한 처리
        <div>
          <div className="text-24 font-bold mobile:text-20">
            <span className="text-primary">맞춤 </span>도서를 가져왔어요
          </div>
          <div className="flex text-14 text-gray-3">
            선호 장르를 선택해주세요
          </div>
        </div>
      )}
    </div>
  );
}

export default GenreSelection;
