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
      className={`bg-white px-40 pt-40 rounded-xl border-2 border-gray-1 tablet:pt-30 tablet:px-30
        mobile:px-20 mobile:pt-20 ${STYLE.container}`}>
      <Link
        href={`/book/${bookData.productId}`}
        className="flex justify-start items-start gap-20 mobile:gap-10">
        <div
          role="img-section"
          className={`relative bg-white flex-center ${STYLE.img}`}>
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
        <div className="flex flex-col gap-4 justify-start items-start">
          <div
            role="bookTitle"
            className="w-full leading-tight text-15 text-gray-7 font-bold line-clamp-2">
            {bookData.title}
          </div>
          <BookAuthor authorList={bookData.author} />
          <BookRating rating={bookData.rating} />
          <p role="bookGenre" className="text-13 text-gray-3 pb-4">
            {bookData.genre}
          </p>
          <p role="bookPrice" className="text-14 font-bold text-gray-7">
            {bookData.price} 원
          </p>
        </div>
      </Link>
    </div>
  );
}

export default TodayBestBook;
