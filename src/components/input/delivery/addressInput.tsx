import SearchAddressButton from '@/components/button/delivery/searchAddressButton';
import FindAddress from '@/components/modal/findAddress';
import { useState } from 'react';
import { useAtom } from 'jotai'; // Jotai의 useAtom 함수를 불러옵니다.
import { zipNoAtom, roadAddrAtom } from '@/store/address';
import AddressLabel from './addressLabel';
import AddressInputField from './addressInputField';
import AddressTextArea from './addressTextArea';
import { deliveryInfoAtom } from '@/store/deliveryInfo';
// AddressInput 컴포넌트
interface AddressInputProps {
  isDefault: boolean;
  addressLines: string[];
}

function AddressInput({ isDefault, addressLines }: AddressInputProps) {
  const [zipNo] = useAtom(zipNoAtom);
  const [roadAddr] = useAtom(roadAddrAtom);
  const [isFindAddressModalOpen, setIsFindAddressModalOpen] = useState(false);
  const [customAddressLine, setCustomAddressLine] = useState('');
  const [, setDeliveryInfo] = useAtom(deliveryInfoAtom);
  const handleFindAddressModalOpen = () => {
    setIsFindAddressModalOpen(!isFindAddressModalOpen);
  };
  function handleInputChange(inputValue: string) {
    setCustomAddressLine(inputValue);
  }
  function handleInputBlur() {
    if (!isDefault) {
      setDeliveryInfo((prevDeliveryInfo) => ({
        ...prevDeliveryInfo,
        address: zipNo + roadAddr + customAddressLine,
      }));
    }
  }

  return (
    <div className="flex w-full text-16 text-gray-3">
      <AddressLabel>주소</AddressLabel>
      <div className="flex w-full flex-col gap-y-12">
        <div className="flex items-center">
          <AddressInputField value={isDefault ? addressLines[0] : zipNo} />
          <SearchAddressButton onClick={handleFindAddressModalOpen} />
          {!isDefault && isFindAddressModalOpen && (
            <FindAddress onClick={handleFindAddressModalOpen} />
          )}
        </div>
        <AddressTextArea value={isDefault ? addressLines[1] : roadAddr} />
        <input
          type="text"
          id="addressLine3"
          placeholder={`${isDefault ? '' : '상세주소 입력'}`}
          value={isDefault ? addressLines[2] : customAddressLine}
          className={`mt-2 flex h-48 w-full items-center overflow-scroll rounded-[5px] border border-gray-1 bg-gray-5 pl-12 text-16 text-gray-2 ${
            isDefault ? 'pointer-events-none' : 'bg-white'
          }`}
          onChange={(event) => {
            if (!isDefault) {
              handleInputChange(event.target.value);
            }
          }}
          onBlur={handleInputBlur}
        />
      </div>
    </div>
  );
}

export default AddressInput;
