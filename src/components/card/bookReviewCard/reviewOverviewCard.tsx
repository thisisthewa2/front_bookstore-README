/** 책 상세페이지에 들어가는 별점 총평 카드 */

import BookRating from '@/components/book/bookRating/bookRating';
import ReviewPercentageOverview from '@/components/book/percentage/reviewPercentageOverview';

interface ReviewOverviewCardProps {
  rating: number; // 책의 평점
  reviewNum: number; // 리뷰 총 개수
  ratingDist: [number, number, number, number, number]; // 1, 2, 3, 4, 5점 리뷰는 각각 몇 개 있는지
}

function ReviewOverviewCard({
  rating,
  reviewNum,
  ratingDist,
}: ReviewOverviewCardProps) {
  return (
    <div
      className="flex-center flex h-210 w-full max-w-[710px] items-center justify-between
        rounded-[10px] bg-gray-5 px-87 mobile:h-151 mobile:w-330 mobile:px-15">
      <div className="flex-center flex-col gap-8">
        <h3 className="text-[24px] font-bold text-gray-4">{rating}</h3>
        <BookRating rating={rating} size="md" />
      </div>
      <div>
        <ReviewPercentageOverview
          rating={rating}
          reviewNum={reviewNum}
          ratingDist={ratingDist}
        />
      </div>
    </div>
  );
}

export default ReviewOverviewCard;
