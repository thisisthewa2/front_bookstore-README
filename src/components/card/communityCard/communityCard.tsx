import Image from 'next/image';
import EmojiButtonContainer from '@/components/card/communityCard/emoji/emojiButtonContainer';
import KebabButton from '@/components/button/kebab/kebabButton';
import { CommunityCardProps } from '@/types/communityCardType';

function CommunityCard({
  profileImg,
  userNickname,
  createAt,
  bookCover,
  bookTitle,
  review,
  kebab = false,
}: CommunityCardProps) {
  return (
    <div
      className="relative flex flex-col w-347 h-439 border-[1px] border-solid border-gray-1
        rounded-[10px] py-20 gap-20 tablet:max-w-334 mobile:max-w-330">
      <div className="flex items-center px-20">
        <div className="relative w-48 h-48 overflow-hidden rounded-full">
          <Image src={profileImg} alt="프로필이미지" fill />
        </div>
        <div className="flex flex-col justify-start py-5 pl-12">
          <p className="text-14 font-bold text-gray-4">{userNickname}</p>
          <p className="text-12 font-normal text-gray-3">{createAt}</p>
        </div>
        {kebab && <KebabButton title1="수정하기" title2="삭제하기" />}
      </div>
      <div className="flex-center w-full h-180 bg-gray-5">
        <Image
          src={bookCover}
          alt="책표지"
          width={0}
          height={0}
          sizes="height:180px"
          className="w-auto h-full"
          priority
        />
      </div>
      <div className="flex flex-col px-20">
        <p className="text-16 font-bold text-gray-4">{bookTitle}</p>
        <p className="text-14 font-light text-gray-3 h-60">{review}</p>
      </div>
      <EmojiButtonContainer />
    </div>
  );
}

export default CommunityCard;
