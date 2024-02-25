import AddCommunityButtonImg from '@/public/icons/AddCommunityButton.svg';
import Image from 'next/image';
import { useState } from 'react';
import AddCommunityCard from '@/components/modal/addCommunityCard';

function AddCommunityButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCommunityButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        onClick={handleAddCommunityButtonClick}
        className="cursor-pointer mobile:fixed tablet:hidden pc:hidden">
        <Image
          className="fixed mobile:bottom-60 mobile:right-15"
          src={AddCommunityButtonImg}
          alt="글쓰기 모달로 이동"
        />
      </div>
      {isModalOpen && <AddCommunityCard onClick={handleAddCommunityButtonClick} />}
    </>
  );
}

export default AddCommunityButton;
