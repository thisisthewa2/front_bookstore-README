/** 상품 상세페이지 상품정보에 들어갈 서브 컴포넌트
 *
 */

import Image from 'next/image';

import BookDetailImg from '@/components/card/bookDetailCard/bookDetailImg';
import BookCharacterGray from 'public/icons/BookCharacterGray.svg';

interface BookInformationProps {
  bookImgUrl?: string;
  description?: string;
}
function BookInformation({ bookImgUrl, description }: BookInformationProps) {
  if (!description) {
    return (
      <section className="flex max-h-[792px] min-h-[589px] w-full min-w-330 max-w-[710px] flex-col gap-20">
        <h2 className="text-[22px] font-bold text-gray-4">상품 정보</h2>

        <p className="flex-center flex-col gap-20 py-80 text-[13px] text-gray-3">
          <Image
            src={BookCharacterGray}
            alt="상품 정보 준비 중"
            width={150}
            height={90}
          />
          <span>상품 정보 준비 중!</span>
        </p>
      </section>
    );
  }

  return (
    <section className="flex max-h-[792px] min-h-[589px] w-full min-w-330 max-w-[710px] flex-col gap-20">
      <h2 className="text-[22px] font-bold text-gray-4">상품 정보</h2>
      <BookDetailImg imageUrl={bookImgUrl} />
      <p className="text-[13px] text-gray-3">{description}</p>
    </section>
  );
}

export default BookInformation;
