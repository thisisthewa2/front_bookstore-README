/* 실시간 인기도서 책 컴포넌트 */

import Link from 'next/link';
import Image from 'next/image';

import BookAuthor from '@/components/book/bookAuthor/bookAuthor';
import BookRating from '@/components/book/bookRating/bookRating';
import { TodayBestBookCardType } from '@/types/cardType';

const SIZE = {
  desktop: {
    container: 'w-347 h-240',
    img: 'w-112 h-170',
  },
  tablet: {
    container: 'tablet:w-334 tablet:h-220',
  },
  mobile: {
    container: 'mobile:w-294 mobile:h-181',
    img: 'mobile:w-93 mobile:h-141',
  },
};

const STYLE = {
  container: `${SIZE.desktop.container} ${SIZE.tablet.container} ${SIZE.mobile.container}`,
  img: `${SIZE.desktop.img} ${SIZE.mobile.img}`,
};

function TodayBestBook({ ...bookData }: TodayBestBookCardType) {
  return (
    <div
      role="container"
      className={`rounded-xl border-2 border-gray-1 bg-white px-40 pt-40 mobile:px-20 mobile:pt-20
        tablet:px-30 tablet:pt-30 ${STYLE.container}`}>
      <Link
        href={`/book/${bookData.productId}`}
        className="flex items-start justify-start gap-20 mobile:gap-10">
        <div
          role="img-section"
          className={`flex-center relative bg-white ${STYLE.img}`}>
          {bookData.bookImg ? (
            <Image
              src={bookData.bookImg}
              alt="책 표지 이미지"
              layout="fill"
              objectFit="contain"
              objectPosition="top"
            />
          ) : (
            <div className={`bg-gray-1 ${STYLE.img}`}></div>
          )}
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <div
            role="bookTitle"
            className="text-gray-7 line-clamp-2 w-full text-15 font-bold leading-tight">
            {bookData.title}
          </div>
          <BookAuthor authorList={bookData.author} />
          <BookRating rating={bookData.rating} />
          <p role="bookGenre" className="text-13 pb-4 text-gray-3">
            {bookData.genre}
          </p>
          <p role="bookPrice" className="text-gray-7 text-14 font-bold">
            {bookData.price} 원
          </p>
        </div>
      </Link>
    </div>
  );
}

export default TodayBestBook;
