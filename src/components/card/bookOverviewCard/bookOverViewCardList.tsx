import BookOverviewCard from './bookOverViewCard';
import { BookData } from '@/types/api/book';
import BookOverviewEmptyCard from './bookOverviewEmptyCard';
import SkeletonBookOverviewCard from '@/components/skeleton/bookOverviewCard/skeleton';

interface BookOverViewCardListProps {
  bookData: BookData[];
  title: string;
  isLoading: boolean;
  ranking?: boolean;
}

function BookOverViewCardList({
  title,
  bookData,
  isLoading,
  ranking,
}: BookOverViewCardListProps) {
  return (
    <div className="flex flex-col gap-40 pb-40 text-black">
      <h1 className="text-20 font-bold">{title}</h1>
      <div className="flex flex-col gap-20 mobile:gap-10">
        {isLoading ? (
          // 로딩 중이면 5개의 스켈레톤 UI 렌더링
          Array.from({
            length: 5,
          }).map((_, index) => (
            <SkeletonBookOverviewCard key={index} size="sm" />
          ))
        ) : bookData.length === 0 ? (
          // 로딩 중이 아니고 데이터가 없으면 빈 카드 표시
          <BookOverviewEmptyCard />
        ) : (
          // 로딩 중이 아니고 데이터가 있으면 데이터 렌더링
          bookData.map((data, index) => (
            <div key={data?.bookId}>
              <BookOverviewCard
                book={data}
                rank={ranking ? index + 1 : undefined}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BookOverViewCardList;
