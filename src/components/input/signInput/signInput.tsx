/* Text input 컴포넌트와 Password input 컴포넌트
react hook form의 register과 isError, pattern, validate를 옵셔널 인자로 넘겨줘서 사용.

params: 
  - id: required, string
  - placeholder: optional, string
  - register: required, 
  - isRequired: required, boolean
  - isError: required, boolean
  - pattern: optional,
  - validate: optional, 

returns: component
*/

import { InputHTMLAttributes, useState } from 'react';
import Image from 'next/image';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder?: string;
  register?: any;
  requiredMessage?: string;
  isError?: any;
  pattern?: any;
  validate?: any;
  classNames?: string;
}

function TextInput({
  id,
  placeholder,
  register,
  requiredMessage,
  isError,
  pattern,
  validate,
  classNames,
  ...props
}: InputProps) {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        {...register(id, {
          required: requiredMessage,
          pattern: pattern,
          validate: validate,
        })}
        className={`h-48 w-full border-b border-gray-1 pb-[12px] pt-[13px] text-[16px] leading-normal autofill:bg-white focus:border-green 
        ${isError && 'border-red focus:border-red'}
          outline-none ${classNames}`}
        {...props}
      />
    </div>
  );
}

function PasswordInput({
  id,
  placeholder,
  register,
  requiredMessage,
  isError,
  pattern,
  validate,
  classNames,
  ...props
}: InputProps) {
  const [isView, setIsView] = useState(false);
  return (
    <div className="relative w-full">
      <button type="button" className="absolute bottom-12 right-8">
        <Image
          onClick={() => setIsView(!isView)}
          src={isView ? 'icons/EyeOpen.svg' : 'icons/EyeClose.svg'}
          alt="eye"
          width={24}
          height={24}
        />
      </button>
      <input
        id={id}
        type={isView ? 'text' : 'password'}
        placeholder={placeholder}
        {...register(id, {
          required: requiredMessage,
          pattern: pattern,
          validate: validate,
        })}
        className={`h-48 w-full border-b border-gray-1 pb-[12px] pt-[13px] text-[16px] leading-normal autofill:bg-white focus:border-green
          ${isError && 'border-red focus:border-red'} 
          outline-none ${classNames}`}
        {...props}
      />
    </div>
  );
}

export { TextInput, PasswordInput };
