import Link from 'next/link';
import Image from 'next/image';
import HeartIcon from '@/public/icons/HeartIcon.svg';
function BookmarkButton() {
  return (
    <Link href="/bookmarked">
      <button className="flex items-center relative w-14 h-14 tablet:w-24 tablet:h-24 pc:w-24 pc:h-24">
        <Image src={HeartIcon} fill alt="찜 버튼" />
      </button>
    </Link>
  );
}

export default BookmarkButton;
