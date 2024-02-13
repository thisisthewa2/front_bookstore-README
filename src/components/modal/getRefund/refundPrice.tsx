function RefundPrice({ refundPrice }: { refundPrice: string }) {
  return (
    <div className="flex flex-col items-start gap-20 text-16 font-light">
      <div className="text-b-b text-16">
        환불 금액
        <span className="ml-8 text-12 font-light text-gray-2">
          결제하신 결제수단으로 2~3 영업일 내 입금
        </span>
      </div>
      {refundPrice}원 (배송료 3,000원 차감)
    </div>
  );
}

export default RefundPrice;
