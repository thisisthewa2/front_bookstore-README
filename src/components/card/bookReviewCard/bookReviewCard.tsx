/** 책 상세페이지에 들어갈 리뷰 컴포넌트 */
import Image from 'next/image';
import BookRating from '@/components/book/bookRating/bookRating';
import { ReviewType } from '@/types/bookReviewType';
import TestImage1 from '@/public/images/SampleBookCover1.jpeg';

interface BookReviewProfileType {
  userNickname: string;
  reviewProfileImg?: string | null;
  reviewRating: number;
  createdAt: string;
}

function BookReviewProfile({
  userNickname,
  reviewProfileImg,
  reviewRating,
  createdAt,
}: BookReviewProfileType) {
  return (
    <div className="flex justify-between items-start">
      <div className="flex gap-12">
        <div className="rounded-[50%] border-[1px] border-gray-5 overflow-hidden relative w-48 h-48">
          <Image
            src={reviewProfileImg ?? TestImage1}
            alt="리뷰 작성자 프로필 이미지"
            fill
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
          <h3 className="text-14 text-gray-4 font-bold">{userNickname}</h3>
          <BookRating rating={reviewRating} />
        </div>
      </div>
      <div className="text-12 text-gray-3">{createdAt}</div>
    </div>
  );
}

function BookReviewCard({
  createdAt,
  reviewProfileImg,
  userNickname,
  reviewContent,
  reviewRating,
}: ReviewType) {
  return (
    <div
      role="card-container"
      className="w-full max-w-[710px] min-w-330 border-gray-1 border-2 min-h-120 p-20 rounded-xl
        flex justify-start gap-12 relative mobile:p-0 mobile:pb-12 mobile:w-330
        mobile:min-h-108 mobile:border-b mobile:border-x-0 mobile:border-t-0">
      <div className="flex flex-col gap-12 w-full">
        <BookReviewProfile
          createdAt={createdAt}
          userNickname={userNickname ?? '익명이'}
          reviewProfileImg={reviewProfileImg}
          reviewRating={reviewRating}
        />
        <div role="content" className="text-gray-3 text-14 text-pretty">
          {reviewContent}
        </div>
      </div>
    </div>
  );
}
export default BookReviewCard;
