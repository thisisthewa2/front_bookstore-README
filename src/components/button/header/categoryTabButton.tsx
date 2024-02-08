import Image from 'next/image';
import CategoryIcon from '@/public/icons/CategoryIcon.svg';
import { OnClickProps } from '@/types/onClickType';

function CategoryTabButton({ onClick }: OnClickProps) {
  return (
    <button className="flex-center gap-10" onClick={onClick}>
      <Image src={CategoryIcon} width={18} height={18} alt="카테고리 버튼" />
      <div className="flex items-center font-bold mobile:hidden">카테고리</div>
    </button>
  );
}
export default CategoryTabButton;
