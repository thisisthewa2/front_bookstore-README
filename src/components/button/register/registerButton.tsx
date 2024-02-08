import React, { MouseEventHandler } from 'react';

type ButtonProps = {
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
  color?: string;
  height?: number;
  text?: number;
};

function RegisterButton({
  type,
  onClick,
  children,
  disabled = true,
  color = 'green',
  height = 50,
  text = 17,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`h-${height} w-full text-center bg-${!disabled ? 'gray-2' : color} rounded-[5px] text-${text} text-white
        py-8`}
      onClick={onClick}
      disabled={!disabled}
      >
      {children}
    </button>
  );
}
export default RegisterButton;
