/** 책 상세페이지에 들어갈 카드 컴포넌트 */

import useEditAuthorsName from '@/hooks/common/useEditAuthorsName';
import BookDetailImg from './bookDetailImg';
import BookDetailInfo from './bookDetailInfo';
import StaticOrderNavigator from '@/components/orderNavigator/staticOrderNavigator';

interface BookDetailCardProps {
  bookId: string;
  bookImgUrl: string;
  bookTitle: string;
  price: number;
  categories: [string, string];
  authors: string[];
  bookmarkCount: number;
  isBookmarked: boolean;
  handleBookmarkClick: () => void;
  publishedDate: string;
  publisher: string;
  isBookmarkPending: boolean;
  averageRating: number;
  reviewCount: number;
  orderCount: number;
  setOrderCount: (n: number) => void;
  isDetail?: boolean | undefined;
}

function BookDetailCard({
  bookId,
  bookImgUrl,
  bookTitle,
  price,
  categories,
  authors,
  bookmarkCount,
  isBookmarked,
  handleBookmarkClick,
  isBookmarkPending,
  publishedDate,
  publisher,
  averageRating,
  reviewCount,
  orderCount,
  setOrderCount,
  isDetail,
}: BookDetailCardProps) {
  const authorList = useEditAuthorsName({
    authors: authors,
    isDetail: isDetail,
  });


  return (
    <section className="mobile:flex-center flex items-start justify-start gap-20 mobile:flex-col">
      <BookDetailImg imageUrl={bookImgUrl} />
      <article
        role="info"
        className="flex w-full max-w-[525px] flex-col items-start justify-start gap-40 mobile:gap-30">
        <BookDetailInfo
          bookId={bookId}
          bookTitle={bookTitle}
          categories={categories}
          authors={authorList}
          isBookmarked={isBookmarked}
          isBookmarkPending={isBookmarkPending}
          handleBookmarkClick={handleBookmarkClick}
          bookmarkCount={bookmarkCount}
          publishedDate={publishedDate}
          publisher={publisher}
          averageRating={averageRating}
          reviewCount={reviewCount}
          price={price}
          isDetail={isDetail}
        />
        <StaticOrderNavigator
          bookId={bookId}
          bookImgUrl={bookImgUrl}
          bookTitle={bookTitle}
          authors={authors}
          price={price}
          orderCount={orderCount}
          setOrderCount={setOrderCount}
        />
      </article>
    </section>
  );
}

export default BookDetailCard;
