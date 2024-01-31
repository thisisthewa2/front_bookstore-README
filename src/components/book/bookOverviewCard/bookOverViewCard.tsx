import BookAuthor from '@/components/book/bookAuthor/bookAuthor';
import { BookOverviewType } from '@/types/bookOverviewType';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';

function BookOverviewCard({ book, like }: BookOverviewType) {
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
          <div role="price-div" className="text-gray-4 text-14">
            {book.price} 원
          </div>
        </div>
      </div>

      {/* <button
        className="text-gray-3 text-14 flex-center absolute right-20 top-20 mobile:top-50
          mobile:right-0">
        배송 조회
        <Image
          src="/icons/RightArrow.svg"
          width={15}
          height={15}
          alt="화살표 버튼"
        />
      </button>

      <div
        role="service-div"
        className="flex-center gap-12 absolute right-20 bottom-20 mobile:bottom-0 mobile:right-0
          mobile:left-0">
        <button
          className="bg-white border-green border-2 text-green w-130 h-40 flex-center rounded-md
            mobile:w-full">
          문의
        </button>
        <button
          className="bg-green border-green border-2 text-white w-130 h-40 flex-center rounded-md
            mobile:w-full">
          리뷰쓰기
        </button>
      </div> */}
    </div>
  );
}

export default BookOverviewCard;
