import Image from 'next/image';
import CloseIcon from '@/public/icons/Close.svg';
import { ReactNode } from 'react';

interface ModalContainerProps {
  children: ReactNode;
  onClick: () => void;
  title?: string;
}

function ModalContainer({ children, onClick, title }: ModalContainerProps) {
  return (
    <div
      className="relative flex h-[851px] w-[688px] flex-col items-center justify-start gap-40 bg-white px-40 pb-40
    pt-60 mobile:h-[600px] mobile:w-330 mobile:px-20 mobile:pb-30 mobile:pt-40">
      <p className="text-b-b text-20">{title}</p>
      {children}
      <Image
        className="absolute right-30 top-30 cursor-pointer"
        src={CloseIcon}
        alt="닫기"
        width={24}
        height={24}
        onClick={onClick}
      />
    </div>
  );
}

export default ModalContainer;
