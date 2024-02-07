/** 마이페이지에 들어갈 내가 쓴 리뷰 컴포넌트 */

import { useState } from 'react';
import Image from 'next/image';

import BookRating from '@/components/book/bookRating/bookRating';
import BookAuthor from '@/components/book/bookAuthor/bookAuthor';
import { MyReviewType } from '@/types/bookReviewType';
import KebabButton from '@/components/button/kebab/kebabButton';

function MyReviewCard({ book, review }: MyReviewType) {
  const [isSummarized, setIsSummarized] = useState(true);

  return (
    <div
      role="card-container"
      className="relative flex min-h-140 w-full min-w-330 max-w-[1080px] justify-start gap-12
        rounded-xl border-2 border-gray-1 p-20 mobile:min-h-105 mobile:border-none
        mobile:p-0">
      <div className="flex w-full gap-12">
        <div
          role="book-img"
          className="h-102 min-w-102 bg-gray-1 text-center mobile:h-75 mobile:min-w-75">
          {book.imageUrl ? (
            <Image src={book.imageUrl} alt="book sample image" layout="fill" />
          ) : (
            <></>
          )}
        </div>
        <div className="flex w-4/5 flex-col items-start justify-start gap-4">
          <div
            role="book-title"
            className="min-w-250 truncate whitespace-nowrap text-15 font-normal">
            {book.title}
          </div>
          <BookAuthor authorList={book.authors} />
          <div className="absolute right-0 top-0 h-18 w-18 mobile:-right-10 mobile:-top-20">
            <KebabButton title1="수정하기" title2="삭제하기" />
          </div>
          <div className="flex-center gap-10 whitespace-nowrap">
            <BookRating rating={review.reviewRating} />
            <span className="text-14 text-gray-4">{review.createdAt}</span>
          </div>
          <div
            role="content-div"
            className={`top-10 flex mobile:relative mobile:-left-87 mobile:w-full ${
              isSummarized ? 'w-[90%]' : 'w-full mobile:w-[120%]'
            }`}>
            <div
              role="content"
              className={`text-14 text-gray-3 ${isSummarized ? `truncate` : ''}`}>
              {review.reviewContent}
            </div>
          </div>
          {isSummarized && (
            <button
              onClick={() => setIsSummarized(false)}
              className="absolute bottom-23 right-20 whitespace-nowrap text-14 text-green
                mobile:-bottom-3 mobile:right-0">
              더보기
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyReviewCard;
