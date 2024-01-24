import { type } from 'os';
import React, { MouseEventHandler } from 'react';

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: string;
  children: React.ReactNode;
};

function RegisterButton({ onClick, children }: ButtonProps) {
  return (
    <button
      className="h-50 w-full text-center bg-green rounded-[5px] text-17 text-white"
      onClick={onClick}>
      {children}
    </button>
  );
}
export default RegisterButton;
