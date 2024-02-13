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
        {orderData.map((order, index) => {
          // orderData.bookData 배열 내의 모든 order.orderCount 값을 누적합산
          const totalOrderCount = order.bookData.reduce(
            (acc, curr) => acc + curr.order.orderCount,
            0,
          );

          return (
            <div key={index} className="flex flex-col gap-20">
              <OrderCount
                orderCount={totalOrderCount}
                orderDate={order.orderDate}
                orderId={order.orderId}
              />
              <div className="flex flex-col gap-20">
                {order.bookData.map((bookData) => (
                  <BookOrderCard
                    key={bookData.book.productId}
                    book={bookData.book}
                    order={bookData.order}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookOrderCardList;
