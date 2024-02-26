/** 책 상세페이지에 들어갈 카드 컴포넌트 */

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
}: BookDetailCardProps) {
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
          authors={authors}
          isBookmarked={isBookmarked}
          isBookmarkPending={isBookmarkPending}
          handleBookmarkClick={handleBookmarkClick}
          bookmarkCount={bookmarkCount}
          publishedDate={publishedDate}
          publisher={publisher}
          averageRating={averageRating}
          reviewCount={reviewCount}
          price={price}
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
