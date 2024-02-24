import Link from 'next/link';
import React from 'react';

function VacantCustomLayout() {
  return (
    <div className="flex h-482 flex-col items-center justify-center bg-pink mobile:h-205 tablet:h-324">
      <div className="mb-25">
        <p className="text-20 font-bold text-black">
          해당하는 맞춤도서가 없습니다.
        </p>
        <p className="text-14 font-normal text-gray-4">
          선택한 선호장르의 책 데이터가 없습니다
        </p>
      </div>
      <div className="h-50 w-287 rounded-[5px] border border-solid border-primary bg-white px-45 py-13 text-center text-14 font-normal text-primary">
        <Link href="/mypage/setting/selectGenre">선호장르 선택하러가기</Link>
      </div>
    </div>
  );
}

export default VacantCustomLayout;
