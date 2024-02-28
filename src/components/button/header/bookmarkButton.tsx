import Link from 'next/link';
import Image from 'next/image';
import HeartEmptyIcon from '@/public/icons/HeartEmptyIcon.svg';
function BookmarkButton() {
  return (
    <Link href="/bookmarked">
      <button className="relative flex h-14 w-16 items-center tablet:h-23 tablet:w-26 pc:h-23 pc:w-26">
        <Image src={HeartEmptyIcon} fill alt="찜 버튼" />
      </button>
    </Link>
  );
}

export default BookmarkButton;
