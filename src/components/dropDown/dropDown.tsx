import { useRef, useState } from 'react';
import useShowDropDown from '@/hooks/useShowDropDown';
import DropDownItem from '@/components/dropDown/dropDownItem';
import OrderDate from '@/components/container/orderDate/orderDate';
import Image from 'next/image';
import { Person } from '@/types/orderDateType';

type DropDownTypes = {
  person: Person;
};

function DropDown({ person }: DropDownTypes) {
  const [selectedItem, setSelectedItem] = useState('전체보기');
  const ref = useRef(null);
  const [showOptions, setShowOptions] = useShowDropDown(ref, false);
  const handleClick = () => setShowOptions(!showOptions);

  const menus = [
    '전체보기',
    '최근 1개월',
    '최근 3개월',
    '최근 6개월',
    '최근 1년',
    '직접 입력',
  ];

  return (
    <div className="flex relative">
      <div ref={ref}>
        <div className="flex relative w-180">
          <button
            onClick={handleClick}
            className={`flex items-center border-solid border-2 border-gray-1 w-113 h-42 text-left
              ${showOptions ? 'rounded-t-[5px]' : 'rounded-[5px]'}`}>
            <span className="w-85 pl-16 text-14">{selectedItem}</span>
            <div>
              <Image
                src={showOptions ? 'icons/UpArrow.svg' : 'icons/DownArrow.svg'}
                alt=""
                width={20}
                height={20}
              />
            </div>
          </button>
        </div>
        {showOptions && (
          <ul className="w-113 border-solid border-2 border-gray-1 absolute rounded-b-[5px] text-14">
            {menus.map((menu) => {
              return (
                <DropDownItem
                  key={menu}
                  menu={menu}
                  setSelectedItem={setSelectedItem}
                  setIsClick={setShowOptions}
                />
              );
            })}
          </ul>
        )}
      </div>
      <div className="flex-center">
        <OrderDate
          pastDate={selectedItem}
          setSelectedItem={setSelectedItem}
          person={person}
        />
      </div>
    </div>
  );
}

export default DropDown;
