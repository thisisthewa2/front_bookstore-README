import Percentage from './percentage';

/** 상품상세페이지 리뷰 총평을 보여주는 컴포넌트 */
interface ReviewOverviewCardProps {
  rating: number; // 책의 평점
  reviewNum: number; // 리뷰 총 개수
  ratingDist: [number, number, number, number, number]; // 1, 2, 3, 4, 5점 리뷰는 각각 몇 개 있는지
}

function ReviewPercentageOverview({
  rating,
  reviewNum,
  ratingDist,
}: ReviewOverviewCardProps) {
  const major = Math.round(rating);
  return (
    <div className="flex flex-col gap-13 mobile:gap-9">
      {ratingDist.map((el, ind) => {
        return (
          <div key={ind} className="flex-center gap-20 mobile:gap-10">
            <div
              className={`text-12 text-gray-2 ${major === ind + 1 ? 'text-green font-bold' : ''}`}>
              {ind + 1} 점
            </div>
            <Percentage num={el} total={reviewNum} />
            <div
              className={`text-12 text-gray-2 ${major === ind + 1 ? 'text-green font-bold' : ''}`}>
              {reviewNum === 0 ? 0 : (el * 100) / reviewNum} %
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ReviewPercentageOverview;
