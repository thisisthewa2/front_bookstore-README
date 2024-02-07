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
    <section className="mobile:flex-center flex flex-col gap-20">
      <h3
        className="flex w-full max-w-[710px] items-start justify-start text-20 font-bold
          text-gray-4 mobile:w-330">
        리뷰
        <span className="pl-10 text-20 font-bold text-green">
          {ReviewListMock1.reviewNum}
        </span>
      </h3>
      <ReviewOverviewCard
        rating={ReviewListMock1.averageRating}
        reviewNum={ReviewListMock1.reviewNum}
        ratingDist={ReviewListMock1.ratingDist}
      />
      <article className="flex flex-col gap-20 w-full pt-40 mobile:flex-center mobile:gap-10">
        {ReviewListMock1.reviewList.map((el) => {
          return (
            <BookReviewCard
              key={el.reviewId}
              createdAt={el.createdAt}
              reviewProfileImg={el.reviewProfileImg}
              userNickname={el.userNickname}
              reviewContent={el.reviewContent}
              reviewRating={el.reviewRating}
              reviewId={el.reviewId}
              isOwner={el.isOwner}
            />
          );
        })}
      </article>
      페이지네이션, order드롭다운 아직 구현 안 했습니다, !!
    </section>
  );
}

export default Review;
