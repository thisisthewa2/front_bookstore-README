import { BookOrderType } from '@/types/bookOrderType';

import BookPaymentCard from './bookPaymentCard';
interface BookPaymentCardListProps {
  bookData: BookOrderType[];
  label: string;
}

function BookPaymentCardList({ bookData, label }: BookPaymentCardListProps) {
  return (
    <div
      role="list-container"
      className="flex w-[618px] flex-col text-black mobile:w-330 tablet:w-[688px]">
      <h1 className="mb-20 text-18 font-bold">{label}</h1>
      <div role="list-section" className="flex flex-col gap-20">
        {bookData.map((data) => (
          <BookPaymentCard
            key={data.book.productId}
            order={data.order}
            book={data.book}
          />
        ))}
      </div>
    </div>
  );
}
export default BookPaymentCardList;
