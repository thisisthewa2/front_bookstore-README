import { THOUSAND_UNIT } from 'src/constants/price';
import Link from 'next/link';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import { BookOrderType } from '@/types/bookOrderType';
import BookAuthor from '@/components/book/bookAuthor/bookAuthor';
import BookPaymentCost from './bookPaymentCost';

function BookPaymentCard({ book, order }: BookOrderType) {
  if (!book || !order) return null;

  return (
    <div
      role="card-container"
      className="relative flex h-220 w-[618px] flex-col justify-between rounded-xl border-2
        border-gray-1 p-30 mobile:h-251 mobile:w-330 mobile:p-15 mobile:pb-15 tablet:w-[688px] ">
      <div role="book-info-container" className="flex">
        <Link
          role="book-img"
          href={`bookdetail/${book.productId}`}
          className="h-170 bg-white mobile:h-134 mobile:min-w-93">
          <PreviewBookInfo
            size="sm"
            image={book.imageUrl}
            itemsStart
            bookId={book.productId}
          />
        </Link>

        <div
          role="book-info"
          className="relative ml-30 flex w-full flex-col items-start justify-start gap-4 whitespace-pre-line mobile:ml-12 mobile:max-w-185 mobile:gap-2">
          <div
            role="book-title"
            className="min-w-250 text-15 font-normal mobile:w-185 mobile:min-w-0">
            {book.title}
          </div>
          <div role="book-author-publisher" className="flex-center gap-4">
            <BookAuthor authorList={book.authors} />
          </div>
          <div
            role="book-price"
            className="flex-center flex-col gap-10 whitespace-nowrap mobile:flex-row">
            <div role="price-div" className="text-14 font-bold text-black">
              {book.cost.toString().replace(THOUSAND_UNIT, ',')}원
            </div>
          </div>
          <BookPaymentCost
            orderCount={order.orderCount}
            cost={book.cost}
            mobileHidden
          />
        </div>
      </div>
      {/* 모바일에서만 보이는 컴포넌트(결제금액)*/}
      <div
        role="mobile-section"
        className="flex justify-end tablet:hidden pc:hidden">
        <div className="border-b-1 absolute bottom-65 left-0 w-328 border border-gray-1"></div>
        <BookPaymentCost orderCount={order.orderCount} cost={book.cost} />
      </div>
    </div>
  );
}

export default BookPaymentCard;
