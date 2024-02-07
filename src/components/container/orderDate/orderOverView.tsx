import React from 'react';

export type OrderOverViewProps = {
  orderView: {
    processing: number;
    shipping: number;
    completed: number;
    exchangeCompleted: number;
    purchased: number;
  };
};

function OrderOverView(props: OrderOverViewProps) {
  const delivery = props.orderView;
  return (
    <div className="flex-center h-144 max-w-[1080px] rounded-[10px] border-2 border-solid border-gray-1 px-90 py-40 mobile:h-85 mobile:p-20 tablet:p-40">
      <div className="flex w-[902px] justify-between rounded-[10px] text-20 text-black mobile:text-12">
        <div className="flex flex-col gap-11 text-center text-gray-4">
          <span>배송준비중</span>
          <span>{delivery.processing}</span>
        </div>
        <div className="flex flex-col gap-11 text-center text-gray-4">
          <span>배송중</span>
          <span>{delivery.shipping}</span>
        </div>
        <div className="flex flex-col gap-11 text-center text-gray-4">
          <span>배송완료</span>
          <span>{delivery.completed}</span>
        </div>
        <div className="flex flex-col gap-11 text-center text-gray-4">
          <span>교환/환불</span>
          <span>{delivery.exchangeCompleted}</span>
        </div>
        <div className="flex flex-col gap-11 text-center text-gray-4">
          <span>구매확정</span>
          <span>{delivery.purchased}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderOverView;
