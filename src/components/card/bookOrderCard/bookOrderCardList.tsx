import { OrderBookData } from '@/types/bookOrderType';
import BookOrderCard from './bookOrderCard';
import OrderCount from '@/components/container/orderDate/orderCount';

export interface BookOrderCardListProps {
  orderData: OrderBookData[];
}

function BookOrderCardList({ orderData }: BookOrderCardListProps) {
  if (!orderData) return null;

  return (
    <div className="flex max-w-[1080px] flex-col">
      <div className="flex flex-col gap-40">
        {orderData.map((order) => {
          return (
            <div key={order.orderId} className="flex flex-col gap-20">
              <OrderCount
                orderCount={order.orderBook.length}
                orderDate={order.createTime}
                orderId={order.orderId}
              />
              <div className="flex flex-col gap-20">
                {order.orderBook.map((bookData) => (
                  <BookOrderCard
                    key={bookData.bookId}
                    bookId={bookData.bookId}
                    bookTitle={bookData.bookTitle}
                    bookImgUrl={bookData.bookImgUrl}
                    bookPrice={bookData.price}
                    quantity={bookData.quantity}
                    authors={bookData.authors}
                    deliveryStatus={order.deliveryStatus}
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
