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
      className="w-full max-w-[1080px] min-w-330 border-gray-1 border-2 min-h-140 p-20 rounded-xl
        flex justify-start gap-12 relative mobile:p-0 mobile:min-h-105
        mobile:border-none">
      <div className="flex gap-12 w-full">
        <div
          role="book-img"
          className="min-w-102 h-102 bg-gray-1 text-center mobile:min-w-75 mobile:h-75">
          {book.imageUrl ? (
            <Image src={book.imageUrl} alt="book sample image" layout="fill" />
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col justify-start items-start gap-4 w-4/5">
          <div
            role="book-title"
            className="text-15 font-normal truncate whitespace-nowrap min-w-250">
            {book.title}
          </div>
          <BookAuthor authorList={book.authors} />
          <div className="absolute w-18 h-18 right-0 top-0 mobile:-top-20 mobile:-right-10">
            <KebabButton title1="수정하기" title2="삭제하기" />
          </div>
          <div className="flex-center gap-10 whitespace-nowrap">
            <BookRating rating={review.reviewRating} />
            <span className="text-gray-4 text-14">{review.createdAt}</span>
          </div>
          <div
            role="content-div"
            className={`flex mobile:relative mobile:w-full mobile:-left-87 top-10 ${
              isSummarized ? 'w-[90%]' : 'w-full mobile:w-[120%]'
            }`}>
            <div
              role="content"
              className={`text-gray-3 text-14 ${isSummarized ? `truncate` : ''}`}>
              {review.reviewContent}
            </div>
          </div>
          {isSummarized && (
            <button
              onClick={() => setIsSummarized(false)}
              className="text-green text-14 whitespace-nowrap absolute right-20 bottom-23
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
