import OrderBookCount from '@/components/cart/orderBookCount';
import LikeButton from '@/components/button/likeButton';
import BookPrice from '@/components/book/bookPrice/bookPrice';
import useAddItemBasket from '@/hooks/useAddItemBasket';
import usePayNowItem from '@/hooks/usePayNowItem';

interface SideOrderNavigatorProps {
  orderCount: number;
  setOrderCount: (s: number) => void;
  bookImgUrl: string;
  bookTitle: string;
  authors: string[];
  price: number;
  bookId: string;
  isBookmarked: boolean;
  isBookmarkPending: boolean;
  handleBookmarkClick: () => void;
}

function FooterOrderNavitgator({
  orderCount,
  setOrderCount,
  price,
  bookId,
  bookImgUrl,
  isBookmarkPending,
  bookTitle,
  authors,
  isBookmarked,
  handleBookmarkClick,
}: SideOrderNavigatorProps) {
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

  return (
    <div
      className="sticky bottom-0 z-10 flex h-70 w-full justify-between
        border-t-[1px] border-gray-5 bg-white px-40 py-10 mobile:px-15 pc:hidden">
      <div className="flex items-center justify-between gap-18">
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
      <div className="flex grow items-center justify-end gap-10">
        <div className="flex-center h-50 w-50 rounded-[5px] border-[1px] border-gray-5 mobile:hidden">
          <LikeButton
            isLiked={isBookmarked}
            onClick={handleBookmarkClick}
            disabled={isBookmarkPending}
            width={24}
            height={24}
          />
        </div>
        <button
          className="flex-center h-50 w-135 rounded-[5px] border-2 border-primary bg-white text-[17px]
            font-bold text-primary mobile:hidden"
          onClick={handleAddToBasket}>
          장바구니
        </button>
        <button
          className="flex-center h-50 w-135 rounded-[5px] border-2 border-primary bg-primary text-[17px]
            font-bold text-white"
          onClick={handlePayNowButton}>
          구매하기
        </button>
      </div>
    </div>
  );
}

export default FooterOrderNavitgator;
