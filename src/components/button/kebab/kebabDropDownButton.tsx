import React from 'react';
export interface KebabDropDownButtonProps {
  title1: string | React.ReactNode; // Link 연결도 가능하게 하기 위해 변경
  title2: string | React.ReactNode;
  color?: string;
  onClickTitle1?: () => void; // onClick prop 추가
  onClickTitle2?: () => void; // onClick prop 추가
}

function KebabDropDownButton({
  title1,
  title2,
  color = 'red',
  onClickTitle1,
  onClickTitle2,
}: KebabDropDownButtonProps) {
  return (
    <div
      className="flex-center absolute right-20 top-48 z-10 h-84 w-108 flex-col
        rounded-[5px] border-[1px] border-solid border-gray-1 bg-white">
      <div
        className="flex-center h-full w-full justify-start rounded-t-[5px] border-b-[1px] border-solid
          border-gray-1 pl-15 text-14 text-black hover:bg-gray-5"
        onClick={onClickTitle1}>
        {title1}
      </div>
      <div
        className={`hover:bg-gray-5 text-${color} flex-center h-full w-full justify-start rounded-b-[5px]
          pl-15 text-14`}
        onClick={onClickTitle2}>
        {title2}
      </div>
    </div>
  );
}
export default KebabDropDownButton;
