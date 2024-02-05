/** 상품 상세페이지 내부 하위 nav 바 컴포넌트,
 *
 * 상품정보, 리뷰, 배송교환환불 선택지가 있음
 * TODO 하드코딩해놨습니다 추후 수정 예정
 */

import { BookDetailNavLocationType } from '@/types/bookDetailtype';
import { MouseEventHandler } from 'react';

interface BookDetailNavProps {
  reviewNum: number;
  location: string;
  setLocation: (s: BookDetailNavLocationType) => void;
}

function BookDetailNav({
  reviewNum,
  location,
  setLocation,
}: BookDetailNavProps) {
  const handleClickLocation: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { id } = e?.target as HTMLButtonElement;
    setLocation(id as BookDetailNavLocationType);
  };

  return (
    <div
      className="bg-gray-5 flex justify-start gap-80 items-center sticky top-170 mobile:top-90
        h-70 mobile:h-50 w-full px-70 mobile:px-0 mobile:flex-center border-b-[1px]
        border-gray-1 z-10">
      <div
        className={`${
          location === 'information'
            ? 'h-full border-b-[3px] border-green flex-center'
            : 'border-none'
        }`}>
        <button
          id="information"
          onClick={handleClickLocation}
          className={`text-gray-4 font-bold ${location === 'information' ? 'text-green' : ''}`}>
          상품 정보
        </button>
      </div>
      <div
        className={`${
          location === 'review'
            ? 'h-full border-b-[3px] border-green flex-center'
            : 'border-none'
        }`}>
        <button
          id="review"
          onClick={handleClickLocation}
          className={`text-gray-4 font-bold ${location === 'review' ? 'text-green' : ''}`}>
          리뷰
          <span
            id="review"
            className={`text-gray-2 font-bold ml-5 ${location === 'review' ? 'text-green' : ''}`}>
            {reviewNum}
          </span>
        </button>
      </div>
      <div
        className={`${
          location === 'currency'
            ? 'h-full border-b-[3px] border-green flex-center'
            : 'border-none'
        }`}>
        <button
          id="currency"
          onClick={handleClickLocation}
          className={`text-gray-4 font-bold ${location === 'currency' ? 'text-green' : ''}`}>
          배송/교환/환불
        </button>
      </div>
    </div>
  );
}

export default BookDetailNav;
