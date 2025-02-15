import Image from 'next/image';
import KebabImg from '@/public/icons/Kebab.svg';
import { MutableRefObject, useRef } from 'react';
import useShowDropDown from '@/hooks/useShowDropDown';
import KebabDropDownButton, {
  KebabDropDownButtonProps,
} from '@/components/button/kebab/kebabDropDownButton';

function KebabButton({
  title1,
  title2,
  onClickTitle1,
  onClickTitle2,
}: KebabDropDownButtonProps) {
  const ref = useRef() as MutableRefObject<HTMLImageElement>;
  const [showOptions, setShowOptions] = useShowDropDown(ref, false);

  const handleKebabClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      <Image
        className="absolute right-20 top-23"
        src={KebabImg}
        alt="케밥버튼"
        onClick={handleKebabClick}
        ref={ref}
      />
      {showOptions && (
        <KebabDropDownButton
          title1={title1}
          title2={title2}
          onClickTitle1={onClickTitle1}
          onClickTitle2={onClickTitle2}
        />
      )}
    </>
  );
}

export default KebabButton;
