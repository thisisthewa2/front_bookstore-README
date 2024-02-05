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
      className="flex-center flex-col absolute top-48 right-20 w-108 h-84 border-[1px]
        border-solid border-gray-1 rounded-[5px] bg-white z-10">
      <div
        className="hover:bg-gray-5 text-black flex-center justify-start pl-15 w-full h-full
          text-14 border-b-[1px] border-solid border-gray-1 rounded-t-[5px]"
        onClick={onClickTitle1}>
        {title1}
      </div>
      <div
        className={`hover:bg-gray-5 text-${color} flex-center justify-start pl-15 w-full h-full
          text-14 rounded-b-[5px]`}
        onClick={onClickTitle2}>
        {title2}
      </div>
    </div>
  );
}
export default KebabDropDownButton;
