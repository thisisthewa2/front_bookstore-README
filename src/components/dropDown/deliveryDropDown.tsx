import DropDown from '@/components/dropDown/dropDown';
import DeliveryRequestInput from '@/components/input/delivery/deliveryRequestInput';
import { useState } from 'react';
import { DELIVERY_MENU } from '@/constants/deliveryMenu';
import { useAtom } from 'jotai';
import { deliveryInfoAtom } from '@/store/deliveryInfo';

function DeliveryDropDown() {
  const [selectedItem, setSelectedItem] =
    useState('배송 요청사항을 선택해주세요');
  const [customDelivery, setCustomDelivery] = useState('');
  const [, setDeliveryInfo] = useAtom(deliveryInfoAtom);

  const onSelectedItem = (menu: string) => {
    setSelectedItem(menu);
    if (menu !== '직접 입력') {
      setDeliveryInfo((prevDeliveryInfo) => ({
        ...prevDeliveryInfo,
        message: menu,
      }));
    }
  };

  const onCustomDeliveryChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSelectedItem('직접 입력');
    const inputValue = event.target.value;
    setCustomDelivery(inputValue);
  };

  const onCustomDeliveryBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setCustomDelivery(inputValue);
    setDeliveryInfo((prevDeliveryInfo) => ({
      ...prevDeliveryInfo,
      message: inputValue,
    }));
  };

  return (
    <div className="flex w-full flex-col gap-y-12">
      <DropDown
        menus={DELIVERY_MENU}
        selectedItem={selectedItem}
        onSelectedItem={onSelectedItem}
      />

      <DeliveryRequestInput
        placeholder="직접 입력"
        value={customDelivery}
        onChange={onCustomDeliveryChange}
        onBlur={onCustomDeliveryBlur}
        className="mt-2 h-42 w-full min-w-fit max-w-full rounded-[5px] border border-gray-1 bg-white pl-12 text-14 text-gray-2"
      />
    </div>
  );
}

export default DeliveryDropDown;
