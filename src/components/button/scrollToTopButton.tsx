import ScrollToTopButtonImg from '@/public/icons/ScrollToTopButton.svg';
import { pointVisibleAtom } from '@/store/state';
import { useAtom } from 'jotai';
import Image from 'next/image';

function ScrollToTopButton() {
  const [pointVisible] = useAtom(pointVisibleAtom);

  const handleClickScrollToTop = () => {
    if (!pointVisible) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return pointVisible ? null : (
    <div onClick={handleClickScrollToTop} className="cursor-pointer">
      <Image
        className="fixed bottom-80 right-20"
        src={ScrollToTopButtonImg}
        alt="페이지 상단으로 이동"
      />
    </div>
  );
}

export default ScrollToTopButton;
