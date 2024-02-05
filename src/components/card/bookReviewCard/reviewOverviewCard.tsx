import BookRating from '@/components/book/bookRating/bookRating';
import Percentage from '@/components/book/percentage/percentage';
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
      className="bg-gray-5 h-210 max-w-[710px] w-full rounded-[10px] flex-center mobile:w-330
        mobile:h-151 flex justify-between items-center px-87 mobile:px-15">
      <div className="flex-center flex-col gap-8">
        <h3 className="font-bold text-[24px] text-gray-4">{rating}</h3>
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
