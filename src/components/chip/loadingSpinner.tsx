/** 페이지 이동할 때 보이는 로딩 스피너 */
import Image from 'next/image';
import LogoIcon from 'public/icons/LogoFav.svg';
import BrandIcon from 'public/icons/BrandName.svg';

function LoadingSpinner() {
  return (
    <div className="flex-center fixed inset-0 z-[999] h-full w-full	">
      <div className="flex-center absolute z-30 flex-col gap-10">
        <Image
          src={LogoIcon}
          alt="로고 사진"
          width={60}
          height={60}
          priority
          className="animate-[rotating_3s_infinite]"
        />
        <Image
          src={BrandIcon}
          alt="브랜드 사진"
          width={56}
          height={18}
          priority
        />
      </div>
      <div className="flex-center h-full w-full bg-white opacity-70"></div>
    </div>
  );
}

export default LoadingSpinner;
