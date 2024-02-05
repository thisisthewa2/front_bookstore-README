/** 상품 상세페이지 하위에 들어갈 리뷰 섹션 컴포넌트
 *
 *
 */
import { ReviewListMock1 } from '@/pages/api/mock/bookDetailMock';
import ReviewOverviewCard from '../card/bookReviewCard/reviewOverviewCard';
import BookReviewCard from '../card/bookReviewCard/bookReviewCard';

function Review({ bookId = '' }) {
  // TODO react query를 통해 book 상세 정보와 review 리스트를 받아올 것

  return (
    <section className="flex flex-col gap-20 mobile:flex-center">
      <h3
        className="w-full max-w-[710px] mobile:w-330 text-20 font-bold text-gray-4 flex
          justify-start items-start">
        리뷰
        <span className="text-20 font-bold text-green pl-10">
          {ReviewListMock1.reviewNum}
        </span>
      </h3>
      <ReviewOverviewCard
        rating={ReviewListMock1.averageRating}
        reviewNum={ReviewListMock1.reviewNum}
        ratingDist={ReviewListMock1.ratingDist}
      />
      <article className="flex flex-col gap-20 w-full pt-40 mobile:flex-center">
        {ReviewListMock1.reviewList.map((el) => {
          return <BookReviewCard key={el.reviewId} />;
        })}
      </article>
      페이지네이션 아직 구현 안 했습니다, !!
    </section>
  );
}

export default Review;
