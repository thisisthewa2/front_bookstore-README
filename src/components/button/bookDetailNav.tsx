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
      className="mobile:flex-center sticky top-170 z-10 flex h-70 w-full items-center
        justify-start gap-80 border-b-[1px] border-gray-1 bg-gray-5 px-70 mobile:top-90
        mobile:h-50 mobile:px-0">
      <div
        className={`${
          location === 'information'
            ? 'flex-center h-full border-b-[3px] border-green'
            : 'border-none'
        }`}>
        <button
          id="information"
          onClick={handleClickLocation}
          className={`font-bold text-gray-4 ${location === 'information' ? 'text-green' : ''}`}>
          상품 정보
        </button>
      </div>
      <div
        className={`${
          location === 'review'
            ? 'flex-center h-full border-b-[3px] border-green'
            : 'border-none'
        }`}>
        <button
          id="review"
          onClick={handleClickLocation}
          className={`font-bold text-gray-4 ${location === 'review' ? 'text-green' : ''}`}>
          리뷰
          <span
            id="review"
            className={`ml-5 font-bold text-gray-2 ${location === 'review' ? 'text-green' : ''}`}>
            {reviewNum}
          </span>
        </button>
      </div>
      <div
        className={`${
          location === 'currency'
            ? 'flex-center h-full border-b-[3px] border-green'
            : 'border-none'
        }`}>
        <button
          id="currency"
          onClick={handleClickLocation}
          className={`font-bold text-gray-4 ${location === 'currency' ? 'text-green' : ''}`}>
          배송/교환/환불
        </button>
      </div>
    </div>
  );
}

export default BookDetailNav;
