import React from 'react';

type OrderBookCountProps = {
  plusFunc: React.MouseEventHandler<HTMLDivElement>;
  minusFunc: React.MouseEventHandler<HTMLDivElement>;
  count: number;
};

function OrderBookCount({ plusFunc, minusFunc, count }: OrderBookCountProps) {
  return (
    <div
      className="flex justify-center gap-x-6 w-72 rounded-[5px] py-4 border-2 border-solid
        border-gray-1">
      <div className="cursor-pointer" onClick={minusFunc}>
        -
      </div>
      <div>{(count >= 1 && count) || 1}</div>
      <div className="cursor-pointer" onClick={plusFunc}>
        +
      </div>
    </div>
  );
}
export default OrderBookCount;
