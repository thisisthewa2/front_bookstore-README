import { THOUSAND_UNIT } from 'src/constants/price';
import LikeButton from '@/components/button/likeButton';
import { useState } from 'react';
import BookRating from '@/components/book/bookRating/bookRating';
import ActionButton from '@/components/button/actionButton';
import { notify } from '@/components/toast/toast';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import { BookOrderType } from '@/types/bookOrderType';
import BookAuthor from '@/components/book/bookAuthor/bookAuthor';

function BookPaymentCard({ book, order }: BookOrderType) {
  if (!book || !order) return null;
  const router = useRouter();

  return (
    <div
      role="card-container"
      className="relative flex h-220 flex-col justify-between rounded-xl border-2 border-gray-1
        p-30 mobile:h-251 mobile:w-330 mobile:p-15 mobile:pb-15 tablet:w-[511px]">
      <div role="book-info-container" className="flex">
        <Link
          role="book-img"
          href={`bookdetail/${book.productId}`}
          className="h-170 bg-white mobile:h-134 mobile:min-w-93">
          <PreviewBookInfo size="sm" image={book.imageUrl} itemsStart />
        </Link>

        <div
          role="book-info"
          className="ml-30 mr-auto flex flex-col items-start justify-start gap-4 mobile:ml-12
            mobile:max-w-185 mobile:gap-2">
          <div
            role="book-title"
            className="min-w-250 truncate whitespace-nowrap text-15 font-normal">
            {book.title}
          </div>
          <div role="book-author-publisher" className="flex-center gap-4">
            <div>
              {/* {book.authors?.map((author) => {
                return (
                  <span key={author} className="text-14 text-gray-3">
                    {author}
                  </span>
                );
              })} */}
              <BookAuthor authorList={book.authors} />
            </div>
          </div>
          <div
            role="book-price"
            className="flex-center flex-col gap-10 whitespace-nowrap mobile:flex-row">
            <div role="price-div" className="text-14 font-bold text-black">
              {book.cost.toString().replace(THOUSAND_UNIT, ',')}원
            </div>
          </div>
        </div>

        {/* 모바일에서만 보이는 컴포넌트(장바구니/구매하기 버튼)*/}
        <div role="mobile-section" className="pt-10 tablet:hidden pc:hidden">
          <div className="border-b-1 absolute bottom-70 left-0 w-328 border border-gray-1"></div>
          <div role="mobile-cart-button" className="flex gap-10">
            <ActionButton label="장바구니" variant="primary" mobile />
            <ActionButton label="구매하기" variant="secondary" mobile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookPaymentCard;
