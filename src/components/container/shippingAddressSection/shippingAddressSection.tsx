import { useState } from 'react';
import AddressInput from '@/components/input/delivery/addressInput';
import PhoneNumberInput from '@/components/input/delivery/phoneNumberInput';
import RecipientInput from '@/components/input/delivery/receiptInput';
import ShippingOptionRadio from '@/components/button/delivery/shippingOptionRadio';
import SetDefaultAddressButton from '@/components/button/delivery/setDefaultAddressButton';
import DeliveryDropDown from '@/components/dropDown/deliveryDropDown';
import { MOCK_ADDRESS } from '@/constants/address';
//import { useGetMember } from '@/api/member';
import { deliveryInfoAtom } from '@/store/deliveryInfo';
import { useAtom } from 'jotai';

function ShippingAddressSection() {
  //const { data } = useGetMember();
  const [isDefault, setIsDefault] = useState(true);
  const [, setDeliveryInfo] = useAtom(deliveryInfoAtom);
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDefault(event.target.id === 'defaultAddress');
    setDeliveryInfo((prevDeliveryInfo) => ({
      ...prevDeliveryInfo,
      isDefault: event.target.id === 'defaultAddress',
    }));
  };

  return (
    <div className="flex w-full flex-col gap-y-12 text-16 pc:mx-93">
      <div className="mb-28  mt-40 text-20 font-bold">결제</div>
      <ShippingOptionRadio
        isDefault={isDefault}
        handleOptionChange={handleOptionChange}
      />
      <RecipientInput isDefault={isDefault} value={MOCK_ADDRESS.recipient} />
      <PhoneNumberInput
        isDefault={isDefault}
        value={MOCK_ADDRESS.phoneNumber}
      />
      <AddressInput
        isDefault={isDefault}
        addressLines={[
          MOCK_ADDRESS.addressLine1,
          MOCK_ADDRESS.addressLine2,
          MOCK_ADDRESS.addressLine3,
        ]}
      />
      <SetDefaultAddressButton />
      <DeliveryDropDown />
    </div>
  );
}

export default ShippingAddressSection;
