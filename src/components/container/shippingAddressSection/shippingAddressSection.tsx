import { useState } from 'react';
import AddressInput from '@/components/input/delivery/addressInput';
import PhoneNumberInput from '@/components/input/delivery/phoneNumberInput';
import RecipientInput from '@/components/input/delivery/receiptInput';
import ShippingOptionRadio from '@/components/button/delivery/shippingOptionRadio';
import SetDefaultAddressButton from '@/components/button/delivery/setDefaultAddressButton';
import DeliveryDropDown from '@/components/dropDown/deliveryDropDown';
import { useGetMember } from '@/api/member';
import { deliveryInfoAtom } from '@/store/deliveryInfo';
import { useAtom } from 'jotai';
import useAddressSplitter from '@/hooks/common/useAddressSplitter';

function ShippingAddressSection() {
  const { data } = useGetMember(); // data를 따로 추출합니다.
  const [isDefault, setIsDefault] = useState(true);
  const [, setDeliveryInfo] = useAtom(deliveryInfoAtom);
  const handleOptionChange = () => {
    setIsDefault(!isDefault);
    setDeliveryInfo((prevDeliveryInfo) => ({
      ...prevDeliveryInfo,
    }));
  };

  const addressLine = useAddressSplitter({
    address: data?.deliveries?.slice(-1)[0]?.address,
  });
  return (
    <div className="flex w-full flex-col gap-y-12 text-16 pc:mx-93">
      <div className="mb-28  mt-40 text-20 font-bold">결제</div>
      <ShippingOptionRadio
        isDefault={isDefault}
        handleOptionChange={handleOptionChange}
      />
      <RecipientInput
        isDefault={isDefault}
        value={data?.deliveries?.slice(-1)[0]?.name}
      />
      <PhoneNumberInput
        isDefault={isDefault}
        value={data?.deliveries?.slice(-1)[0]?.phone}
      />
      <AddressInput
        isDefault={isDefault}
        addressLines={[addressLine[0], addressLine[1], addressLine[2]]}
      />
      <SetDefaultAddressButton />
      <DeliveryDropDown />
    </div>
  );
}

export default ShippingAddressSection;
