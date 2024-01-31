import BookAuthor from '@/components/book/bookAuthor/bookAuthor';
import { BookOverviewType } from '@/types/bookOverviewType';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import { THOUSAND_UNIT } from 'src/constants/price';
import Image from 'next/image';
import LikeButton from '@/components/button/likeButton';
import { useEffect, useState } from 'react';
import BookRating from '../bookRating/bookRating';

function BookOverviewCard({ book, like }: BookOverviewType) {
  const [isLiked, setIsLiked] = useState(like.userLiked || false);
  const [likeCount, setIsLikeCount] = useState(like.count || 0);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    if (!isLiked) setIsLikeCount((prevCount) => prevCount + 1);
    else setIsLikeCount((prevCount) => prevCount - 1);
  };

  return (
    <div
      role="card-container"
      className="h-220 border-gray-1 border-2 p-30 pb-20 rounded-xl flex relative mobile:p-15
        mobile:pb-15 mobile:w-330">
      <div
        role="book-img"
        className="h-170 bg-white mobile:min-w-75 mobile:h-75">
        <PreviewBookInfo size="sm" image={book.imageUrl} ranking={book.rank} />
      </div>

      <div className="flex flex-col justify-start items-start gap-4 ml-30 mr-auto">
        <div
          role="book-title"
          className="text-15 font-normal truncate whitespace-nowrap min-w-250">
          {book.title}
        </div>

        <BookAuthor authorList={book.authors} publisher={book.publisher} />
        <BookRating rating={book.rating} />

        <div className="flex-center flex-col gap-10 whitespace-nowrap mobile:flex-row">
          <div role="price-div" className="text-black text-14 font-bold mt-4">
            {book.price.toString().replace(THOUSAND_UNIT, ',')}원
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-30">
        <div role="like-button" className="flex flex-col items-end gap-2">
          <LikeButton onClick={handleLikeClick} isLiked={isLiked} />
          <span className="text-black text-12">{likeCount}</span>
        </div>
        <div role="cart-button" className="flex flex-col gap-12">
          <button className="bg-white border-green border-2 text-green w-130 h-40 flex-center rounded-md">
            장바구니
          </button>
          <button className="bg-green border-green border-2 text-white w-130 h-40 flex-center rounded-md">
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookOverviewCard;
