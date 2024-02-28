import Link from 'next/link';
import Image from 'next/image';
import DefaultLogo from '@/public/icons/DefaultLogo.svg';
import SmallLogo from '@/public/icons/SmallLogo.svg';
function ReadMeButton() {
  return (
    <Link
      className="text-18 font-bold text-primary tablet:text-24 pc:text-24"
      href="/">
      <Image
        className="tablet:hidden pc:hidden"
        src={SmallLogo}
        alt="로고 버튼"
      />
      <Image className="mobile:hidden" src={DefaultLogo} alt="로고 버튼" />
    </Link>
  );
}
export default ReadMeButton;
