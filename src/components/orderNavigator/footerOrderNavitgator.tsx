import { useState } from 'react';
import OrderBookCount from '../cart/orderBookCount';
import LikeButton from '../button/likeButton';
import BookPrice from '../book/bookPrice/bookPrice';

interface SideOrderNavigatorProps {
  orderCount: number;
  setOrderCount: (s: number) => void;
  price: number;
  bookId: string;
  isBookmarked: boolean;
}

function FooterOrderNavitgator({
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
      className="pc:hidden flex justify-between w-full bg-white border-t-[1px] border-gray-5
        sticky bottom-0 h-70 z-10 px-40 py-10 mobile:px-15">
      <div className="flex items-center gap-18 justify-between">
        <div>
          <OrderBookCount
            count={orderCount}
            plusFunc={() => setOrderCount(orderCount + 1)}
            minusFunc={() =>
              setOrderCount(orderCount - 1 > 0 ? orderCount - 1 : 1)
            }
          />
        </div>
        <BookPrice isBold fontSize={20} price={price * orderCount} hasUnit />
      </div>
      <div className="flex justify-end items-center gap-10 grow">
        <div className="mobile:hidden w-50 h-50 border-[1px] border-gray-5 rounded-[5px] flex-center">
          <LikeButton
            isLiked={checkBookmarked}
            onClick={handleBookmarkClick}
            width={24}
            height={24}
          />
        </div>
        <button
          className="mobile:hidden bg-white text-green border-2 border-green rounded-[5px] w-135 h-50
            flex-center font-bold text-[17px]">
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

export default FooterOrderNavitgator;
