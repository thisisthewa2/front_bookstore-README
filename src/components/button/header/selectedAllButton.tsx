import Link from 'next/link';
import Image from 'next/image';
import GreenArrowRightIcon from '@/public/icons/GreenRightArrow.svg';
interface SelectedAllButtonProps {
  selectedCategory: string;
  selectedAll: string;
}

/* 
  국내도서 전체보기 와 같이 전체보기를 나타내는 버튼입니다. 
  모바일 사이즈 일 때 그리고 선택된 버튼에 따라 표시할 텍스트가 달라져 버튼 컴포넌트를 하나생성했어요
*/
function SelectedAllButton({
  selectedCategory,
  selectedAll,
}: SelectedAllButtonProps) {
  return (
    <div className="flex tablet:mt-10 pc:mt-10">
      <Link href={`/${selectedCategory}`} className="bg-white mobile:hidden">
        <p className="text-13 text-green">
          {selectedAll}
          <Image
            src={GreenArrowRightIcon}
            alt="전체보기 화살표"
            width={8}
            height={13}
            className="inline-block"
          />
        </p>
      </Link>
      <Link
        href={`/${selectedCategory}`}
        className="bg-white text-[13px] text-green tablet:hidden pc:hidden">
        전체
        <Image
          src={GreenArrowRightIcon}
          alt="전체보기 화살표"
          width={8}
          height={13}
          className="mb-2 ml-3 inline-block"
        />
      </Link>
    </div>
  );
}

export default SelectedAllButton;
