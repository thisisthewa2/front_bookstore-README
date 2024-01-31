import BookAuthor from '@/components/book/bookAuthor/bookAuthor';
import { BookOverviewType } from '@/types/bookOverviewType';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import { THOUSAND_UNIT } from 'src/constants/price';
import Image from 'next/image';
import RegisterButton from '@/components/button/register/registerButton';
import LikeButton from '@/components/button/likeButton';
import { useState } from 'react';

function BookOverviewCard({ book, like }: BookOverviewType) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      role="card-container"
      className="h-220 border-gray-1 border-2 p-30 pb-20 rounded-xl flex relative mobile:p-15
        mobile:pb-15">
      <div
        role="book-img"
        className="h-170 bg-white mobile:min-w-75 mobile:h-75">
        <PreviewBookInfo size="sm" image={book.imageUrl} ranking={book.rank} />
      </div>
      <div className="flex flex-col justify-start items-start gap-4 w-full">
        <div
          role="book-title"
          className="text-15 font-normal truncate whitespace-nowrap min-w-250">
          {book.title}
        </div>
        <BookAuthor authorList={book.authors} />
        <div className="flex-center flex-col gap-10 whitespace-nowrap mobile:flex-row">
          <div role="price-div" className="text-black text-14 font-bold mt-4">
            {book.price.toString().replace(THOUSAND_UNIT, ',')}원
          </div>
        </div>
      </div>

      <button
        className="text-gray-3 text-14 flex-center absolute right-20 top-20 mobile:top-50
          mobile:right-0"
        onClick={handleLikeClick}>
        ddddd
      </button>

      <LikeButton onClick={handleLikeClick} isLiked={isLiked} />

      <div
        role="service-div"
        className="flex-center gap-12 absolute right-20 bottom-20 mobile:bottom-0 mobile:right-0
          mobile:left-0">
        {/* <button
          className="bg-white border-green border-2 text-green w-130 h-40 flex-center rounded-md
            mobile:w-full">
          문의
        </button>
        <button
          className="bg-green border-green border-2 text-white w-130 h-40 flex-center rounded-md
            mobile:w-full">
          리뷰쓰기
        </button> */}
        <RegisterButton>하이</RegisterButton>
      </div>
    </div>
  );
}

export default BookOverviewCard;
