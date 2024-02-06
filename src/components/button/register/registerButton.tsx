import React, { MouseEventHandler } from 'react';

type ButtonProps = {
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  color?: string;
};

function RegisterButton({
  type,
  onClick,
  children,
  color = 'green',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`h-50 w-full text-center bg-${color} text-17 rounded-[5px] text-white`}
      onClick={onClick}>
      {children}
    </button>
  );
}
export default RegisterButton;
