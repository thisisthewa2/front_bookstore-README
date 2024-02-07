/** 책 상세페이지에 들어갈 카드 컴포넌트 */

import { BookDetailMock1 as Mock } from '@/pages/api/mock/bookDetailMock';
import BookDetailImg from './bookDetailImg';
import BookDetailInfo from './bookDetailInfo';
import StaticOrderNavigator from '@/components/orderNavigator/staticOrderNavigator';

interface BookDetailCardProps {
  bookId: string;
  orderCount: number;
  setOrderCount: (n: number) => void;
}

function BookDetailCard({
  bookId,
  orderCount,
  setOrderCount,
}: BookDetailCardProps) {
  return (
    <section className="flex justify-start gap-20 items-start mobile:flex-col mobile:flex-center">
      <BookDetailImg imageUrl={Mock.imageUrl} />
      <article
        role="info"
        className="flex flex-col gap-57 justify-start items-start mobile:w-full">
        <BookDetailInfo
          title={Mock.title}
          categoryList={Mock.categoryList}
          authors={Mock.authors}
          isBookmarked={Mock.isBookmarked}
          bookmarkNum={Mock.bookmarkNum}
          publishedAt={Mock.publishedAt}
          publisher={Mock.publisher}
          rating={Mock.rating}
          reviewNum={Mock.reviewNum}
          price={Mock.price}
        />
        <StaticOrderNavigator
          bookId={bookId}
          price={Mock.price}
          orderCount={orderCount}
          setOrderCount={setOrderCount}
        />
      </article>
    </section>
  );
}

export default BookDetailCard;
