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
      className="sticky top-297 mt-107 mobile:mt-20 mobile:mb-165 mobile:w-full h-fit flex
        flex-col w-340 tablet:w-216 border-2 border-solid border-gray-1 p-30 tablet:p-20
        mobile:p-20 rounded-[10px]">
      <div className="flex justify-between mb-20">
        <span className="text-black font-normal text-15">총 상품 금액</span>
        <span className="text-black font-bold text-15">
          {totalAmount.toString().replace(THOUSAND_UNIT, ',')}원
        </span>
      </div>
      <div className="flex justify-between mb-20">
        <span className="text-black font-normal text-15">총 배송비</span>
        <span className="text-black font-bold text-15">
          {calculateDeliveryFee(totalAmount, totalDiscount)
            .toString()
            .replace(THOUSAND_UNIT, ',')}
          원
        </span>
      </div>
      <div className="flex justify-between mb-30">
        <span className="text-black font-normal text-15">총 할인 금액</span>
        <span>{totalDiscount.toString().replace(THOUSAND_UNIT, ',')}원</span>
      </div>
      <div className="flex justify-between mb-40 mobile:mb-10">
        <span className="text-green font-bold text-15">결제 금액</span>
        <span className="text-green font-bold text-25">
          {calculatePaymentFee(totalAmount, totalDiscount)
            .toString()
            .replace(THOUSAND_UNIT, ',')}
          원
        </span>
      </div>
      <div className="w-full mobile:fixed left-0 bottom-0 mobile:px-15 mobile:py-10 bg-white">
        <button className="w-full text-center bg-green text-white rounded-[5px] py-15">
          결제하기({bookTotalCount})
        </button>
      </div>
    </div>
  );
}
export default CartPayment;
