import Link from 'next/link';
import { bookOverviewsMock } from '@/pages/api/mock/bestSellerMock';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';

function BestSellerSection() {
  return (
    <div
      className="flex-col pc:w-[1080px] mobile:w-330 tablet:w-[690px] pc:my-120 tablet:my-120
        tablet:mx-40 mobile:my-80 mobile:mx-15">
      <div className="flex justify-between mobile:mb-20 pc:mb-50 tablet:mb-40">
        <div className="font-bold text-20">베스트셀러</div>
        <Link href="/bestseller" className="text-green">
          더보기
        </Link>
      </div>
      <div className="tablet:hidden flex mobile:flex-center flex-wrap gap-x-30 gap-y-62">
        {bookOverviewsMock.map((book, index) => (
          <PreviewBookInfo
            key={book.book.bookId}
            size={'md'}
            title={book.book.bookTitle}
            image={book.book.bookImgUrl}
            authorList={book.book.authors}
            ranking={index + 1}
          />
        ))}
      </div>

      <div className="pc:hidden mobile:hidden w-full justify-start flex flex-wrap gap-x-20 gap-y-62">
        {bookOverviewsMock.map((book, index) => (
          <PreviewBookInfo
            key={book.book.bookId}
            size={'sm'}
            title={book.book.bookTitle}
            image={book.book.bookImgUrl}
            authorList={book.book.authors}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSellerSection;
