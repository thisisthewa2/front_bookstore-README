/* 실시간 인기도서 책 컴포넌트 */

import Link from 'next/link';

import BookAuthor from '@/components/book/bookAuthor/bookAuthor';
import BookRating from '@/components/book/bookRating/bookRating';
import BookPrice from '@/components/book/bookPrice/bookPrice';
import BookCategory from '@/components/book/bookCategory/bookCategory';
import BookTitle from '@/components/book/bookTitle/bookTitle';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import { BookData } from '@/types/api/book';

const SIZE = {
  desktop: {
    container: 'w-347 h-240',
    img: 'min-w-112 max-w-112 h-170',
  },
  tablet: {
    container: 'tablet:w-334 tablet:h-220',
    img: 'tablet:min-w-112 tablet:max-w-112 tablet:h-170',
  },
  mobile: {
    container: 'mobile:w-294 mobile:h-181',
    img: 'mobile:w-93 mobile:h-141',
  },
};

const STYLE = {
  container: `${SIZE.desktop.container} ${SIZE.tablet.container} ${SIZE.mobile.container}`,
  img: `${SIZE.desktop.img} ${SIZE.tablet.img} ${SIZE.mobile.img}`,
};

function TodayBestBook({
  bookId,
  bookImgUrl,
  bookTitle,
  price,
  authors,
  averageRating,
  categories,
}: BookData) {
  return (
    <div
      role="container"
      className={`rounded-xl border-2 border-gray-1 bg-white px-40 pt-40 mobile:px-20 mobile:pt-20
        tablet:px-30 tablet:pt-30 ${STYLE.container}`}>
      <Link
        href={`/bookdetail/${bookId}`}
        className="flex items-start justify-start gap-20 mobile:gap-10">
        <div
          role="img-section"
          className={`flex-center relative bg-white ${STYLE.img}`}>
          {bookImgUrl ? (
            <PreviewBookInfo
              size="sm"
              image={bookImgUrl}
              itemsStart
              bookId={bookId}
            />
          ) : (
            <div className={`bg-gray-1 ${STYLE.img}`}></div>
          )}
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <BookTitle
            isBold
            fontSize={15}
            title={bookTitle}
            classNames="line-clamp-2 mobile:line-clamp-1"
          />
          <BookAuthor
            authorList={authors}
            fontSize={14}
            classNames="line-clamp-1 mobile:hidden"
          />
          <BookRating rating={averageRating} />
          <BookCategory
            categories={categories}
            fontSize={13}
            classNames="line-clamp-2"
          />
          <BookPrice price={price} fontSize={14} isBold hasUnit />
        </div>
      </Link>
    </div>
  );
}

export default TodayBestBook;
