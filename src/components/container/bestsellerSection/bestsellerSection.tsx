import Link from 'next/link';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import { useGetBook } from '@/api/book';
import { BookData } from '@/types/api/book';

function BestSellerSection() {
  const { data, isLoading, isError } = useGetBook({
    endpoint: '0/main',
    params: {
      bookId: '0',
      limit: '10',
      sort: 'BESTSELLER',
      ascending: false,
    },
  });
  const bookList: Array<BookData> = data ? data.data.books : [];
  return (
    <div
      className="flex-col mobile:mx-15 mobile:my-80 mobile:w-330 tablet:mx-40 tablet:my-120
        tablet:w-[690px] pc:my-120 pc:w-[1080px]">
      <div className="flex justify-between mobile:mb-20 tablet:mb-40 pc:mb-50">
        <div className="text-20 font-bold">베스트셀러</div>
        <Link href="/domestic/bestseller" className="text-green">
          더보기
        </Link>
      </div>
      <div className="flex-center flex flex-wrap gap-x-10 gap-y-62 tablet:hidden pc:gap-x-30">
        {bookList.map((book, index) => (
          <PreviewBookInfo
            key={book.bookId}
            size={'lg'}
            title={book.bookTitle}
            image={book.bookImgUrl}
            authorList={book.authors}
            ranking={index + 1}
            bookId={book.bookId}
          />
        ))}
      </div>

      <div className="flex w-full flex-wrap justify-start gap-x-20 gap-y-62 mobile:hidden pc:hidden">
        {bookList.map((book, index) => (
          <PreviewBookInfo
            key={book.bookId}
            size={'sm'}
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
