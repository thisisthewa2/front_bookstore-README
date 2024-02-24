import CartPaymentModal from '@/components/modal/cart/cartPaymentModal';
import { CartItem } from '@/types/cartType';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { THOUSAND_UNIT } from 'src/constants/price';
import { basketItemList } from '@/store/state';
type CartPaymentProps = {
  totalAmount: number;
  totalDiscount: number;
  bookTotalCount: number;
  selectedItemArr: CartItem[];
  wishListData: CartItem[];
};
function CartPayment({
  totalAmount,
  totalDiscount,
  bookTotalCount,
  selectedItemArr,
  wishListData,
}: CartPaymentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const handleAlertModalOpenClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const calculateDeliveryFee = (totalAmount: number, totalDiscount: number) => {
    if (selectedItemArr.length === 0) return 0;
    return totalAmount - totalDiscount >= 30000 ? 0 : 3000;
  };

  const calculatePaymentFee = (totalAmount: number, totalDiscount: number) => {
    return totalAmount + calculateDeliveryFee(totalAmount, totalDiscount);
  };

  const setBasketItemList = useSetAtom(basketItemList);

  const handleMovePayMentPage = () => {
    // 수정된 배열을 사용하여 setBasketItemList 함수 호출
    setBasketItemList(selectedItemArr);
    // 페이지 이동
    router.push('/order');
  };

  return (
    <div
      className="top- sticky mt-127 flex h-fit w-340 flex-col rounded-[10px]
        border-2 border-solid border-gray-1 p-30 mobile:mb-165 mobile:mt-20 mobile:w-full mobile:p-20
        tablet:w-216 tablet:p-20">
      <div className="mb-20 flex justify-between">
        <span className="text-15 font-normal text-black">총 상품 금액</span>
        <span className="text-15 font-bold text-black">
          {totalAmount.toString().replace(THOUSAND_UNIT, ',')}원
        </span>
      </div>
      <div className="mb-20 flex justify-between">
        <span className="text-15 font-normal text-black">총 배송비</span>
        <span className="text-15 font-bold text-black">
          {calculateDeliveryFee(totalAmount, totalDiscount)
            .toString()
            .replace(THOUSAND_UNIT, ',')}
          원
        </span>
      </div>
      <div className="mb-30 flex justify-between">
        <span className="text-15 font-normal text-black">총 할인 금액</span>
        <span>{totalDiscount.toString().replace(THOUSAND_UNIT, ',')}원</span>
      </div>
      <div className="mb-40 flex justify-between mobile:mb-10">
        <span className="text-15 font-bold text-primary">결제 금액</span>
        <span className="text-25 font-bold text-primary">
          {calculatePaymentFee(totalAmount, totalDiscount)
            .toString()
            .replace(THOUSAND_UNIT, ',')}
          원
        </span>
      </div>
      <div className="bottom-0 left-0 w-full bg-white mobile:fixed mobile:px-15 mobile:py-10">
        <button
          className="w-full rounded-[5px] bg-primary py-15 text-center text-white"
          onClick={() => {
            selectedItemArr.length > 0
              ? handleMovePayMentPage()
              : handleAlertModalOpenClick();
          }}>
          결제하기({bookTotalCount})
        </button>
      </div>
      <CartPaymentModal
        wishListDataLength={wishListData.length}
        selectedItemArrLength={selectedItemArr.length}
        isModalOpen={isModalOpen}
        handleAlertModalOpenClick={handleAlertModalOpenClick}
      />
    </div>
  );
}
export default CartPayment;
