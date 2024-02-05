import ModalLayout from '@/components/modal/modalLayout';
import Image from 'next/image';
import CloseIcon from '@/public/icons/Close.svg';
import AddCommunityCardForm from '@/components/modal/addCommunityCard/addCommunityCardForm';

interface AddCommunityCardProps {
  onClick: () => void;
}

function AddCommunityCard({ onClick }: AddCommunityCardProps) {
  return (
    <ModalLayout onClick={onClick}>
      <div
        className="relative flex-center flex-col w-[688px] h-[851px] bg-white px-40 pt-60 pb-40
          gap-40 mobile:w-330 mobile:h-[794px] mobile:px-20 mobile:pt-40 mobile:pb-30">
        <p className="text-20 text-b-b">글쓰기</p>
        <AddCommunityCardForm/>
        <Image
          className="absolute top-30 right-30 cursor-pointer"
          src={CloseIcon}
          alt="닫기"
          width={24}
          height={24}
          onClick={onClick}
        />
      </div>
    </ModalLayout>
  );
}

export default AddCommunityCard;
