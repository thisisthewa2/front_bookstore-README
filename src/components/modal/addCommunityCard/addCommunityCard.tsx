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
        className="flex-center relative h-[851px] w-[688px] flex-col gap-40 bg-white px-40 pb-40
          pt-60 mobile:h-[794px] mobile:w-330 mobile:px-20 mobile:pb-30 mobile:pt-40">
        <p className="text-b-b text-20">글쓰기</p>
        <AddCommunityCardForm />
        <Image
          className="absolute right-30 top-30 cursor-pointer"
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
