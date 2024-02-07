import { useState } from 'react';
import BookPrice from '../book/bookPrice/bookPrice';
import LikeButton from '../button/likeButton';
import OrderBookCount from '../cart/orderBookCount';

interface SideOrderNavigatorProps {
  orderCount: number;
  setOrderCount: (s: number) => void;
  price: number;
  bookId: string;
  isBookmarked: boolean;
}

function SideOrderNavigator({
  orderCount,
  setOrderCount,
  price,
  bookId,
  isBookmarked,
}: SideOrderNavigatorProps) {
  const [checkBookmarked, setIsBookmarked] = useState(isBookmarked || false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!checkBookmarked);
  };
  return (
    <div
      className="bg-white mt-auto flex flex-col pc:w-340 gap-20 pc:h-164 pc:sticky pc:bottom-80
        pc:right-60 z-50 bottom-0 left-0 right-0 w-full h-70">
      <div className="flex justify-between">
        <span className="text-17 font-bold">수량</span>
        <OrderBookCount
          count={orderCount}
          plusFunc={() => setOrderCount(orderCount + 1)}
          minusFunc={() =>
            setOrderCount(orderCount - 1 > 0 ? orderCount - 1 : 1)
          }
        />
      </div>
      <div className="flex justify-between">
        <span className="text-17 font-bold">총 금액</span>
        <BookPrice isBold fontSize={20} price={price * orderCount} hasUnit />
      </div>
      <div className="flex-center gap-10 grow">
        <div className="w-50 h-50 border-[1px] border-gray-5 rounded-[5px] flex-center">
          <LikeButton
            isLiked={checkBookmarked}
            onClick={handleBookmarkClick}
            width={24}
            height={24}
          />
        </div>
        <button
          className="bg-white text-green border-2 border-green rounded-[5px] w-135 h-50 flex-center
            font-bold text-[17px]">
          장바구니
        </button>
        <button
          className="bg-green text-white border-2 border-green rounded-[5px] w-135 h-50 flex-center
            font-bold text-[17px]">
          구매하기
        </button>
      </div>
    </div>
  );
}

export default SideOrderNavigator;
