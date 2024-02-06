import Image from 'next/image';
import React from 'react';

type OrderCountProps = {
  orderDate: string;
  orderCount: number;
};

function OrderCount({ orderDate, orderCount }: OrderCountProps) {
  return (
    <div className="flex w-[1080px] justify-between">
      <div className="flex-center gap-x-24">
        <span className="marker:font-weight text-gray-4">{orderDate}</span>
        <div className="h-12 w-1 bg-gray-1"></div>
        <span className="text-gray-3">{orderCount}건</span>
      </div>
      <div className="flex">
        <span>주문상세</span>
        <Image
          src="/icons/RightArrow.svg"
          alt="화살표버튼"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}

export default OrderCount;
