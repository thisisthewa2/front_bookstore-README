import { useState } from 'react';
import { useAtom } from 'jotai';
import { deliveryInfoAtom } from '@/store/deliveryInfo';

// 받는 분 입력 필드 컴포넌트
interface RecipientInputProps {
  isDefault: boolean;
  value?: string;
}
function RecipientInput({ isDefault, value }: RecipientInputProps) {
  const [recipient, setRecipient] = useState('');
  const [, setDeliveryInfo] = useAtom(deliveryInfoAtom);

  function handleInputChange(inputValue: string) {
    setRecipient(inputValue);
  }

  function handleInputBlur() {
    if (!isDefault) {
      setDeliveryInfo((prevDeliveryInfo) => ({
        ...prevDeliveryInfo,
        name: recipient,
      }));
    }
  }

  return (
    <div className="flex text-16 text-gray-3">
      <label htmlFor="recipient" className="mr-45 inline-flex items-center">
        받는 분
      </label>
      <input
        type="text"
        id="recipient"
        value={isDefault ? value : recipient}
        placeholder="이름"
        className={`flex-center h-48 w-160 rounded-[5px] border border-gray-1 pl-12 ${
          isDefault ? 'pointer-events-none  bg-gray-5 text-gray-2' : ''
        }`}
        onChange={(event) => {
          if (!isDefault) {
            handleInputChange(event.target.value);
          }
        }}
        onBlur={handleInputBlur}
        disabled={isDefault}
      />
    </div>
  );
}

export default RecipientInput;
