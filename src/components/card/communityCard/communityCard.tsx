import Image from 'next/image';
import EmojiButtonContainer from '@/components/card/communityCard/emoji/emojiButtonContainer';
import KebabButton from '@/components/button/kebab/kebabButton';
import { CommunityCardProps } from '@/types/communityCardType';
import NoProfileImg from '@/public/icons/Noprofile.svg';
import { useState } from 'react';
import AlertModal from '@/components/modal/alertModal';
import AddCommunityCard from '@/components/modal/addCommunityCard';
import { useAtom } from 'jotai';
import { chooseBookIdAtom } from '@/store/state';

function CommunityCard({
  communityId,
  profileImg,
  userNickname,
  createAt,
  bookId,
  bookCover,
  bookTitle,
  review,
  kebab = false,
}: CommunityCardProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  const handleEditModalOpenClick = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleAlertModalOpenClick = () => {
    setIsAlertModalOpen(!isAlertModalOpen);
  };
  return (
    <div
      className="relative flex h-439 w-347 flex-col gap-20 rounded-[10px] border-[1px]
        border-solid border-gray-1 py-20 mobile:max-w-330 tablet:max-w-334">
      <div className="flex items-center px-20">
        <div className="relative h-48 w-48 overflow-hidden rounded-full">
          <Image src={profileImg ?? NoProfileImg} alt="프로필이미지" fill />
        </div>
        <div className="flex flex-col justify-start py-5 pl-12">
          <p className="text-14 font-bold text-gray-4">{userNickname}</p>
          <p className="text-12 font-normal text-gray-3">{createAt}</p>
        </div>
        {kebab && (
          <KebabButton
            title1="수정하기"
            title2="삭제하기"
            onClickTitle1={handleEditModalOpenClick}
            onClickTitle2={handleAlertModalOpenClick}
          />
        )}
      </div>
      <div className="flex-center h-[180px] w-full overflow-hidden bg-gray-5">
        <Image
          src={bookCover}
          alt="책표지"
          width={0}
          height={0}
          sizes="height:180px"
          className="h-full w-auto"
          priority
        />
      </div>
      <div className="flex flex-col px-20">
        <p className="h-23 truncate text-16 font-bold text-gray-4">
          {bookTitle}
        </p>
        <p className="h-60 text-14 font-light text-gray-3">{review}</p>
      </div>
      <EmojiButtonContainer />
      {isEditModalOpen && (
        <AddCommunityCard onClick={handleEditModalOpenClick} communityId={communityId} review={review} bookId={bookId} edit={true}/>
      )}
      {isAlertModalOpen && (
        <AlertModal
          title="정말 삭제하시겠습니까?"
          description="삭제한 글은 복구할 수 없습니다."
          onClick={handleAlertModalOpenClick}
          id={communityId}
        />
      )}
    </div>
  );
}

export default CommunityCard;
