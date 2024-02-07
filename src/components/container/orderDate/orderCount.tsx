import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type OrderCountProps = {
  orderDate: string;
  orderCount: number;
  orderId: number;
};

// LINK 주소 임의로 지정. 추후 변경가능
// OrderId 임의로 지정. 추후 변경가능
function OrderCount({ orderId, orderDate, orderCount }: OrderCountProps) {
  return (
    <>
      <div className="flex max-w-[1080px] justify-between">
        <div className="flex-center">
          <span className="marker:font-weight text-[17px] font-normal text-gray-4">
            {orderDate}
          </span>
          <div className="ml-23 mr-18 h-12 w-1 bg-gray-1"></div>
          <span className="text-14 text-gray-3">주문 {orderCount}건</span>
        </div>
        <Link className="flex" href={`order/${orderId}`}>
          <span className="text-15">주문상세</span>
          <Image
            src="/icons/RightArrow.svg"
            alt="화살표버튼"
            width={20}
            height={20}
          />
        </Link>
      </div>
      {/*모바일에서만 보이는 밑선*/}
      <div className="flex flex-col">
        <div className="h-1 w-full bg-gray-1 tablet:hidden pc:hidden"></div>
      </div>
    </>
  );
}

export default OrderCount;
