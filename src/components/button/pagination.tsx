import { MouseEvent, useState } from 'react';
import Image from 'next/image';
import PrevPageIcon from '@/public/icons/PrevIcon.svg';
import NextPageIcon from '@/public/icons/NextIcon.svg';
import usePagination from '@/hooks/usePagination';

function Pagination({ totalCount, standard }: { totalCount: number; standard: number; }) {
  const {
    pageArrays,
    currentPage,
    currentPageArrayIndex,
    goToNextPageArray,
    goToPrevPageArray,
    changeCurrentPage,
  } = usePagination(totalCount, standard);

  return (
    <div className="flex-center">
      {currentPageArrayIndex > 0 && (
        <Image
          src={PrevPageIcon}
          alt="이전"
          width={22}
          height={22}
          onClick={goToPrevPageArray}
          style={{cursor:'pointer'}}
        />
      )}
      <div className="flex-center gap-20 w-200">
        {pageArrays[currentPageArrayIndex]?.map((page) => (
          <span
            key={page + 1}
            className={`${currentPage === page ? 'text-green' : 'text-gray-4'}`}
            style={{cursor:'pointer'}}
            onClick={() => changeCurrentPage(page)}>
            {page}{' '}
          </span>
        ))}
      </div>
      {currentPageArrayIndex < pageArrays.length - 1 && (
        <Image
          src={NextPageIcon}
          alt="다음"
          width={22}
          height={22}
          onClick={goToNextPageArray}
          style={{cursor:'pointer'}}
        />
      )}
    </div>
  );
}

export default Pagination;
