import Link from 'next/link';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import { BookData } from '@/types/api/book';

interface BestSellerSectionProps {
  page: 'main' | 'category'; // page props 추가
  bookList?: Array<BookData> | [];
}

function BestSellerSection({ page, bookList }: BestSellerSectionProps) {
  // page 값이 'main'이면 mx 값을 표시해주고, 아니면 제거합니다.
  const mxClass =
    page === 'main'
      ? 'tablet:mx-40  tablet:w-[690px] mobile:mx-15 pc:w-[1080px] tablet:my-120 pc:my-120'
      : 'pc:w-[895px] tablet:w-[511px]';
  const gapXClass =
    page === 'main'
      ? 'pc:gap-x-30 tablet:gap-x-20 mobile:gap-x-10'
      : ' pc:gap-x-20 tablet:gap-x-15 mobile:gap-x-10';

  return (
    <div
      className={`flex-col flex-wrap mobile:my-80 ${mxClass} mobile:w-330 
        `}>
      <div className="flex justify-between mobile:mb-20 tablet:mb-40 pc:mb-50">
        <div className="text-20 font-bold">베스트셀러</div>
        {page === 'main' && (
          <Link href="/domestic/bestseller" className="text-primary">
            더보기
          </Link>
        )}
      </div>
      <div
        className={`flex-center flex flex-wrap justify-start gap-y-62 overflow-auto mobile:hidden tablet:hidden ${gapXClass}`}>
        {bookList?.map((book, index) => (
          <PreviewBookInfo
            key={book.bookId}
            size={page === 'main' ? 'lg' : 'md'}
            title={book.bookTitle}
            image={book.bookImgUrl}
            authorList={book.authors}
            ranking={index + 1}
            bookId={book.bookId}
          />
        ))}
      </div>
      <div
        className={`flex-center flex flex-wrap justify-start gap-y-62 tablet:hidden pc:hidden ${gapXClass}`}>
        {bookList?.map((book, index) => (
          <PreviewBookInfo
            key={book.bookId}
            size="lg"
            title={book.bookTitle}
            image={book.bookImgUrl}
            authorList={book.authors}
            ranking={index + 1}
            bookId={book.bookId}
          />
        ))}
      </div>

      <div
        className={`flex w-full flex-wrap justify-start gap-y-62 mobile:hidden pc:hidden ${gapXClass}`}>
        {bookList?.map((book, index) => (
          <PreviewBookInfo
            key={book.bookId}
            size={page === 'main' ? 'sm' : 'lg'}
            title={book.bookTitle}
            image={book.bookImgUrl}
            authorList={book.authors}
            ranking={index + 1}
            bookId={book.bookId}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSellerSection;
