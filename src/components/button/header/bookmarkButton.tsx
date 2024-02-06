import Link from 'next/link';
import Image from 'next/image';
import HeartEmptyIcon from '@/public/icons/HeartEmptyIcon.svg';
function BookmarkButton() {
  return (
    <Link href="/bookmarked">
      <button className="relative flex h-14 w-14 items-center tablet:h-24 tablet:w-24 pc:h-24 pc:w-24">
        <Image src={HeartEmptyIcon} fill alt="찜 버튼" />
      </button>
    </Link>
  );
}

export default BookmarkButton;
