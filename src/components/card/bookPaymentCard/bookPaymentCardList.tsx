import { PayMentAtom } from '@/types/cartType';
import BookPaymentCard from './bookPaymentCard';
interface BookPaymentCardListProps {
  bookData: PayMentAtom[];
  label: string;
}

function BookPaymentCardList({ bookData, label }: BookPaymentCardListProps) {
  return (
    <div
      role="list-container"
      className="flex w-[618px] flex-col text-black mobile:w-330 tablet:w-[688px]">
      <h1 className="mb-20 text-18 font-bold">{label}</h1>
      <div role="list-section" className="flex flex-col gap-20">
        {bookData.map((data, id) => (
          <BookPaymentCard
            key={id}
            bookId={data.orderBookId}
            imageUrl={data.bookImgUrl}
            cost={data.price}
            count={data.quantity}
            title={data.bookTitle}
          />
        ))}
      </div>
    </div>
  );
}
export default BookPaymentCardList;
