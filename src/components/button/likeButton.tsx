import HeartFillIcon from '@/public/icons/HeartFillIcon.svg';
import HeartEmptyIcon from '@/public/icons/HeartEmptyIcon.svg';
import Image from 'next/image';

interface LikeButtonProps {
  onClick: () => void;
  isLiked: boolean;
}

function LikeButton({ onClick, isLiked }: LikeButtonProps) {
  return (
    <button onClick={onClick}>
      <Image
        src={isLiked ? HeartFillIcon : HeartEmptyIcon}
        alt="좋아요 이미지"
      />
    </button>
  );
}
export default LikeButton;
