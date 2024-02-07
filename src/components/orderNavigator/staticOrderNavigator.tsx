import BookPrice from '../book/bookPrice/bookPrice';
import OrderBookCount from '../cart/orderBookCount';

/** 상품 상세페이지의 상품 정보 옆에 있는 구매하기 컴포넌트 */
interface OrderNavigatorProps {
  bookId: string;
  price: number;
  orderCount: number;
  setOrderCount: (s: number) => void;
}
function StaticOrderNavigator({
  orderCount,
  setOrderCount,
  price,
  bookId,
}: OrderNavigatorProps) {
  return (
    <div
      className="bg-gray-5 rounded-[10px] p-20 w-full max-w-[525px] h-154 tablet:h-150
        mobile:w-330 mobile:h-130 mx-auto flex flex-col gap-20 mobile:p-15 mobile:gap-10">
      <div className="flex justify-between">
        <OrderBookCount
          count={orderCount}
          plusFunc={() => setOrderCount(orderCount + 1)}
          minusFunc={() =>
            setOrderCount(orderCount - 1 > 0 ? orderCount - 1 : 1)
          }
        />
        <BookPrice isBold fontSize={20} price={price * orderCount} hasUnit />
      </div>
      <div className="flex-center gap-10 grow">
        <button
          className="bg-white text-green border-2 border-green rounded-[5px] w-full h-54 flex-center
            font-bold text-[17px]">
          장바구니
        </button>
        <button
          className="bg-green text-white border-2 border-green rounded-[5px] w-full h-54 flex-center
            font-bold text-[17px]">
          구매하기
        </button>
      </div>
    </div>
  );
}

export default StaticOrderNavigator;
