import Image from 'next/image';
import BookCategory from '@/components/book/bookCategory/bookCategory';
import BookPrice from '@/components/book/bookPrice/bookPrice';
import BookRating from '@/components/book/bookRating/bookRating';
import LikeButton from '@/components/button/likeButton';
import Spacing from '@/components/container/spacing/spacing';
import React, { useState } from 'react';
import BookAuthor from '@/components/book/bookAuthor/bookAuthor';

interface TempProps {
  title: string;
  categoryList: [string, string];
  isBookmarked: boolean;
  bookmarkNum: number;
  authors?: [] | string[];
  publisher?: string;
  publishedAt: string;
  rating: number;
  reviewNum: number;
  price: number;
}

function BookDetailInfo({
  title,
  categoryList,
  isBookmarked: myBookmarked,
  bookmarkNum,
  authors,
  publishedAt,
  publisher,
  rating,
  reviewNum,
  price,
}: TempProps) {
  const [isBookmarked, setIsBookmarked] = useState(myBookmarked || false);
  const [bookmarkCount, setIsBookmarkCount] = useState(bookmarkNum || 0);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
    if (!isBookmarked) setIsBookmarkCount((prevCount) => prevCount + 1);
    else setIsBookmarkCount((prevCount) => prevCount - 1);
  };

  return (
    <article
      role="info"
      className="flex flex-col justify-start items-start grow mobile:w-full">
      <BookCategory categories={categoryList} />
      <Spacing height={[4, 4, 4]} />
      <div className="flex justify-between items-center w-full gap-20">
        <h3 className="font-bold text-[22px] text-gray-4 text-pretty">
          {title}
        </h3>
        <div className="flex justify-center gap-24">
          <div className="flex-center flex-col">
            <LikeButton
              onClick={handleBookmarkClick}
              isLiked={isBookmarked}
              width={30}
              height={30}
            />
            {bookmarkCount}
          </div>
          <button className="relative w-30 h-30">
            <Image src="/icons/ShareIcon.svg" fill alt="공유 버튼" />
          </button>
        </div>
      </div>
      <Spacing height={[12, 12, 12]} />
      <BookAuthor authorList={authors} />
      <div className="h-[1px] w-full bg-gray-1 max-w-[525px] my-20 mobile:my-12"></div>
      <div className="text-14 text-gray-3">
        {publisher} | {publishedAt}
      </div>
      <Spacing height={[12, 12, 12]} />

      <div role="rating" className="flex gap-6">
        <BookRating rating={rating} size="md" />
        <span className="relative top-12 text-gray-3 text-14">
          ({reviewNum})
        </span>
        <span className="text-green font-bold text-[24px]">{rating}</span>
      </div>
      <Spacing height={[12, 12, 12]} />
      <BookPrice
        price={price}
        isBold={true}
        fontSize={32}
        fontColor="text-gray-4"
        hasUnit={true}
      />
    </article>
  );
}

export default BookDetailInfo;
