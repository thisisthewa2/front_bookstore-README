import React from 'react';
import { THOUSAND_UNIT } from 'src/constants/price';

type CartPaymentProps = {
  totalAmount: number;
  totalDiscount: number;
  bookTotalCount: number;
};

function CartPayment({
  totalAmount,
  totalDiscount,
  bookTotalCount,
}: CartPaymentProps) {
  const calculateDeliveryFee = (totalAmount: number, totalDiscount: number) => {
    return totalAmount - totalDiscount >= 30000 ? 3000 : 0;
  };

  const calculatePaymentFee = (totalAmount: number, totalDiscount: number) => {
    return (
      totalAmount -
      totalDiscount -
      calculateDeliveryFee(totalAmount, totalDiscount)
    );
  };

  return (
    <div
      className="sticky top-297 mt-107 flex h-fit w-340 flex-col rounded-[10px]
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
        <span className="text-15 font-bold text-green">결제 금액</span>
        <span className="text-25 font-bold text-green">
          {calculatePaymentFee(totalAmount, totalDiscount)
            .toString()
            .replace(THOUSAND_UNIT, ',')}
          원
        </span>
      </div>
      <div className="bottom-0 left-0 w-full bg-white mobile:fixed mobile:px-15 mobile:py-10">
        <button className="w-full rounded-[5px] bg-green py-15 text-center text-white">
          결제하기({bookTotalCount})
        </button>
      </div>
    </div>
  );
}
export default CartPayment;
