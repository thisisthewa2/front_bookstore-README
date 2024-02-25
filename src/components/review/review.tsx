/** 상품 상세페이지 하위에 들어갈 리뷰 섹션 컴포넌트*/

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';

import { getReviewList } from '@/api/review';
import ReviewOverviewCard from '@/components/card/bookReviewCard/reviewOverviewCard';
import BookReviewCard from '@/components/card/bookReviewCard/bookReviewCard';
import DropDown from '@/components/dropDown/dropDown';
import Pagination from '@/components/button/pagination';
import { REVIEW_ORDER_STANDARD } from '@/constants/orderList';
import { ReviewData, ReviewSortType } from '@/types/api/review';
import { CurrentPageStateAtom } from '@/store/state';
import SkeletonBookReviewCard from '@/components/skeleton/bookReviewCard/skeleton';

interface ReviewProps {
  bookId: string;
  ratingDist: [number, number, number, number, number];
  averageRating: number;
  reviewCount: number;
}

const INITIAL_ORDER_STATUS = {
  sortType: 'NEWEST' as ReviewSortType['sortType'],
  ascending: false,
};

function Review({
  bookId,
  ratingDist,
  averageRating,
  reviewCount,
}: ReviewProps) {
  const [selectedOrder, setSelectedOrder] = useState('조회순');
  const [currentOrder, setCurrentOrder] = useState(INITIAL_ORDER_STATUS);
  const [reviewCurrentPage] = useAtom(CurrentPageStateAtom);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [bookId, reviewCurrentPage, 'review-list'],
    queryFn: () =>
      getReviewList({
        bookId,
        params: {
          offset: String(reviewCurrentPage - 1),
          limit: '5',
          sortType: currentOrder.sortType,
          ascending: currentOrder.ascending,
        },
      }),
    enabled: !!bookId,
    staleTime: 1000 * 60,
  });

  useEffect(() => {
    refetch();
  }, [reviewCurrentPage, currentOrder]);

  let reviewList: Array<ReviewData> = data?.data.reviews ?? [];

  const onSelectedOrder = (menu: string) => {
    setSelectedOrder(menu);
    if (menu === '최신순')
      setCurrentOrder(() => {
        return { sortType: 'NEWEST', ascending: false };
      });
    if (menu === '별점 높은순')
      setCurrentOrder(() => {
        return { sortType: 'STAR', ascending: false };
      });
    if (menu === '별점 낮은순')
      setCurrentOrder(() => {
        return { sortType: 'STAR', ascending: true };
      });
  };
  return (
    <section className="mobile:flex-center flex flex-col gap-20">
      <h3
        className="flex w-full max-w-[710px] items-start justify-start text-20 font-bold
          text-gray-4 mobile:w-330">
        리뷰
        <span className="text-primary pl-10 text-20 font-bold">
          {reviewCount}
        </span>
      </h3>
      <ReviewOverviewCard
        rating={averageRating}
        reviewNum={reviewCount}
        ratingDist={ratingDist}
      />
      <div className="flex w-full justify-end pt-20  mobile:w-330">
        <div className="z-30 w-120">
          <DropDown
            menus={REVIEW_ORDER_STANDARD}
            selectedItem={selectedOrder}
            onSelectedItem={onSelectedOrder}
          />
        </div>
      </div>
      {isLoading ? (
        <>
          {[0, 1, 2, 3, 4].map((el) => {
            return <SkeletonBookReviewCard key={el} />;
          })}
        </>
      ) : (
        <>
          {reviewList.length > 0 && reviewCount > 0 ? (
            <article className="mobile:flex-center flex w-full flex-col gap-20 pt-40 mobile:gap-10">
              {reviewList.map((el) => {
                return (
                  <BookReviewCard
                    key={el.reviewId}
                    createDate={el.createDate}
                    profileImg={el.profileImg}
                    userNickname={el.userNickname}
                    content={el.content}
                    reviewRating={el.reviewRating}
                    reviewId={el.reviewId}
                    updateDate={el.updateDate}
                  />
                );
              })}
              <Pagination totalCount={reviewCount} standard={5} />
            </article>
          ) : (
            <div className="flex-center pt-120 text-16 text-gray-4 mobile:pt-80">
              아직 등록된 리뷰가 없어요!
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default Review;
