import { useState } from 'react';
import BookPrice from '../book/bookPrice/bookPrice';
import LikeButton from '../button/likeButton';
import OrderBookCount from '../cart/orderBookCount';
import usePayNowItem from '@/hooks/usePayNowItem';
import useAddItemBasket from '@/hooks/useAddItemBasket';

interface SideOrderNavigatorProps {
  bookId: string;
  bookImgUrl: string;
  bookTitle: string;
  authors: string[];
  orderCount: number;
  setOrderCount: (s: number) => void;
  price: number;
  isBookmarked: boolean;
}

function SideOrderNavigator({
  bookId,
  bookImgUrl,
  bookTitle,
  authors,
  orderCount,
  setOrderCount,
  price,
  isBookmarked,
}: SideOrderNavigatorProps) {
  const [checkBookmarked, setIsBookmarked] = useState(isBookmarked || false);

  // 구매하기 버튼 함수
  const { handlePayNowButton } = usePayNowItem({
    bookId: Number(bookId),
    bookImgUrl,
    bookTitle,
    authors,
    price,
    count: orderCount,
  });
  //장바구니 버튼 함수
  const { handleAddToBasket } = useAddItemBasket({
    bookId: Number(bookId),
    count: orderCount,
  });
  const handleBookmarkClick = () => {
    setIsBookmarked(!checkBookmarked);
  };
  return (
    <div
      className="bottom-0 left-0 right-0 z-50 mt-auto flex h-70 w-full flex-col
        gap-20 bg-white pc:sticky pc:bottom-80 pc:right-60 pc:h-164 pc:w-340">
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
      <div className="flex-center grow gap-10">
        <div className="flex-center h-50 w-50 rounded-[5px] border-[1px] border-gray-5">
          <LikeButton
            isLiked={checkBookmarked}
            onClick={handleBookmarkClick}
            width={24}
            height={24}
          />
        </div>
        <button
          className="flex-center h-50 w-135 rounded-[5px] border-2 border-green bg-white text-[17px]
            font-bold text-green"
          onClick={handleAddToBasket}>
          장바구니
        </button>
        <button
          className="flex-center h-50 w-135 rounded-[5px] border-2 border-green bg-green text-[17px]
            font-bold text-white"
          onClick={handlePayNowButton}>
          구매하기
        </button>
      </div>
    </div>
  );
}

export default SideOrderNavigator;
