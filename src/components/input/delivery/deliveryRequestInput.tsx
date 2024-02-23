// 배송 요청사항 input
import React from 'react';

interface DeliveryRequestInputProps {
  placeholder?: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
}

function DeliveryRequestInput({
  placeholder,
  value,
  onChange,
  className,
  disabled,
  onBlur,
}: DeliveryRequestInputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      disabled={disabled}
      onBlur={onBlur}
    />
  );
}

export default DeliveryRequestInput;
