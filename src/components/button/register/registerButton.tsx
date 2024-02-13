import classNames from 'classnames';
import React, { MouseEventHandler } from 'react';

type ButtonProps = {
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
  color?: string;
  height?: string;
  text?: string;
};

function RegisterButton({
  type,
  onClick,
  children,
  disabled = true,
  color = 'bg-green',
  height = 'h-50',
  text = 'text-17',
}: ButtonProps) {
  const buttonColor = `${!disabled ? 'bg-gray-2' : color}`;
  const className = classNames("w-full text-center rounded-[5px] text-white py-8", buttonColor, text, height);
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={!disabled}
      >
      {children}
    </button>
  );
}
export default RegisterButton;
