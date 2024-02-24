import { useState } from 'react';
import Image from 'next/image';
import CheckIcon from '@/public/icons/CheckIcon.svg';
import { useAtom } from 'jotai';
import { deliveryInfoAtom } from '@/store/deliveryInfo';
/* TODO
기본 배송지 저장 시 api post/put 요청 연결
*/
function SetDefaultAddressButton() {
  const [isClicked, setIsClicked] = useState(false);
  const [isDefault, setIsDefault] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useAtom(deliveryInfoAtom);
  const handleClick = () => {
    setIsClicked((prevState) => !prevState); // 이전 상태를 반전시킴
    setIsDefault(!isDefault);
    setDeliveryInfo((prevDeliveryInfo) => ({
      ...prevDeliveryInfo,
      isDefault: isDefault,
    }));
  };

  return (
    <div className="mt-20 inline-flex text-16">
      <div className="flex-center relative mr-10 inline-flex">
        <button
          className={`flex-center flex h-20 w-20 rounded-[2px] ${
            isClicked ? 'bg-primary' : 'border border-gray-1'
          }`}
          onClick={handleClick}>
          <Image
            src={CheckIcon}
            alt="체크아이콘"
            width={10}
            height={6}
            className="absolute bottom-0 left-0 right-0 top-0 z-10 m-auto"
          />
        </button>
      </div>
      기본 배송지로 저장
    </div>
  );
}

export default SetDefaultAddressButton;
