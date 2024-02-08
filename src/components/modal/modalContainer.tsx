import Image from "next/image";
import CloseIcon from '@/public/icons/Close.svg';
import { ReactNode } from "react";

interface ModalContainerProps {
  children: ReactNode;
  onClick: () => void;
  title?: string;
}

function ModalContainer({ children, onClick, title }: ModalContainerProps) {
  return (
    <div
  className="relative flex flex-col items-center justify-start w-[688px] h-[851px] bg-white px-40 pt-60 pb-40
    gap-40 mobile:w-330 mobile:h-[600px] mobile:px-20 mobile:pt-40 mobile:pb-30">
      <p className="text-20 text-b-b">{title}</p>
      {children}
      <Image
        className="absolute top-30 right-30 cursor-pointer"
        src={CloseIcon}
        alt="닫기"
        width={24}
        height={24}
        onClick={onClick}
      />
    </div>
  )
}

export default ModalContainer