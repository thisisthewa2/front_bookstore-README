import ModalLayout from '@/components/modal/modalLayout';
import CloseIcon from '@/public/icons/Close.svg';
import Image from 'next/image';

interface TermsDetailCardProps {
  title: string;
  content: string;
  onClick: () => void;
}

function TermsDetailModal({ title, content, onClick }: TermsDetailCardProps) {
  return (
    <ModalLayout onClick={onClick}>
      <div className="relative flex max-h-[908px] w-[750px] flex-col rounded-[10px] mobile:max-h-[794px] mobile:w-330 tablet:max-h-[815px] tablet:w-[688px]">
        <div className="sticky top-0 flex items-center justify-between bg-white py-30 pl-30 pr-36">
          <h1 className="text-20 font-bold text-black">{title}</h1>
          <button onClick={onClick}>
            <Image src={CloseIcon} width={12} height={12} alt="취소 아이콘" />
          </button>
        </div>
        <div className="overflow-auto whitespace-pre-wrap px-30 pb-20">
          {content}
        </div>
      </div>
    </ModalLayout>
  );
}

export default TermsDetailModal;
