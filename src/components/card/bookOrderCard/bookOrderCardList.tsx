import { BookOrderType } from '@/types/bookOrderType';
import BookOrderCard from './bookOrderCard';
import OrderCount from '@/components/container/orderDate/orderCount';

export interface BookOrderCardListType {
  bookData: BookOrderType[];
  orderDate: string;
  orderId: number;
}

export interface BookOrderCardListProps {
  orderData: BookOrderCardListType[];
}

function BookOrderCardList({ orderData }: BookOrderCardListProps) {
  if (!orderData) return;

  return (
    <div className="flex max-w-[1080px] flex-col">
      <div className="flex flex-col gap-40">
        {orderData.map((orderData, index) => (
          <div key={index} className="flex flex-col gap-20">
            <OrderCount
              orderCount={index + 1}
              orderDate={orderData.orderDate}
              orderId={orderData.orderId}
            />
            <div className="flex flex-col gap-20">
              {orderData.bookData.map((bookData) => (
                <BookOrderCard
                  key={bookData.book.productId}
                  book={bookData.book}
                  order={bookData.order}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookOrderCardList;
