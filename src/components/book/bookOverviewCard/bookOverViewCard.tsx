import BookAuthor from '@/components/book/bookAuthor/bookAuthor';
import { BookOverviewType } from '@/types/bookOverviewType';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import { THOUSAND_UNIT } from 'src/constants/price';
import LikeButton from '@/components/button/likeButton';
import { useState } from 'react';
import BookRating from '../bookRating/bookRating';
import ActionButton from '@/components/button/actionButton';

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
        className="h-170 bg-white mobile:min-w-93 mobile:h-134 pt-2 overflow-hidden">
        <PreviewBookInfo
          size="sm"
          image={book.imageUrl}
          ranking={book.rank}
          itemsStart
        />
      </div>

      <div
        role="book-info"
        className="flex flex-col justify-start items-start gap-4 ml-30 mr-auto mobile:max-w-185
          mobile:ml-12">
        <div
          role="book-title"
          className="text-15 font-normal truncate whitespace-nowrap min-w-250">
          {book.title}
        </div>
        <div role="book-author-publisher" className="flex-center gap-4">
          {book.authors?.map((author) => {
            return (
              <span key={author} className="text-gray-3 text-14">
                {author}
              </span>
            );
          })}
          {book.publisher && (
            <span className="text-gray-3 text-14 mobile:hidden">
              | {book.publisher}
            </span>
          )}
        </div>

        <div role="book-rating" className="flex-center gap-4">
          <BookRating rating={book.rating} size="md" />
          <span className="text-14 text-gray-3 mobile:hidden">
            ({book.reviewCount})
          </span>
        </div>

        <div className="flex-center flex-col gap-10 whitespace-nowrap mobile:flex-row">
          <div role="price-div" className="text-black text-14 font-bold mt-4">
            {book.price.toString().replace(THOUSAND_UNIT, ',')}원
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-30 mobile:absolute mobile:bottom-116 mobile:right-26">
        <div role="like-button" className="flex-center flex-col gap-2">
          <LikeButton onClick={handleLikeClick} isLiked={isLiked} />
          <span className="text-black text-12">{likeCount}</span>
        </div>
        <div role="cart-button" className="flex flex-col gap-12 mobile:hidden">
          <ActionButton label="장바구니" variant="primary" />
          <ActionButton label="구매하기" variant="secondary" />
        </div>
      </div>
      <div className="w-330 border border-t-1 border-gray-1">
        <div
          role="mobile-cart-button"
          className="absolute bottom-15 left-20 pc:hidden tablet:hidden">
          <div role="cart-button" className="flex gap-10">
            <ActionButton label="장바구니" variant="primary" mobile />
            <ActionButton label="구매하기" variant="secondary" mobile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookOverviewCard;
