import { BookOverviewType2 } from '@/types/bookOverviewType';
import { THOUSAND_UNIT } from 'src/constants/price';
import LikeButton from '@/components/button/likeButton';
import { useState } from 'react';
import BookRating from '@/components/book/bookRating/bookRating';
import ActionButton from '@/components/button/actionButton';
import { useRouter } from 'next/router';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import BookTitle from '@/components/book/bookTitle/bookTitle';
import formatDate from '@/hooks/useFormatDate';
import { useAddToBasket } from '@/hooks/api/useAddToBasket';
import MobileBookOverViewCard from './bookOverviewMobile';
import { useSetAtom } from 'jotai';
import { PayMentAtom } from '@/types/cartType';
import { basketItemList } from '@/store/state';
import { useUpdateBookmark } from '@/hooks/api/useUpdateBookmark';

function BookOverviewCard({ book, rank }: BookOverviewType2) {
  const [isBookmarked, setIsBookMarked] = useState(book.bookmarks?.marked);
  const [bookmarkCount, setBookmarkCount] = useState(book.bookmarkCount);
  const router = useRouter();
  const formattedDate = formatDate(book.publishedDate);
  const { addToBasket, isAddToBasketPending } = useAddToBasket({
    bookId: book.bookId,
  });

  const { updateBookmark, isBookmarkPending } = useUpdateBookmark({
    bookId: book.bookId,
    onChangeBookmarkCount: () => {
      if (isBookmarked) {
        setBookmarkCount((prev) => prev - 1);
      } else {
        setBookmarkCount((prev) => prev + 1);
      }
    },
    onChangeBookmarked: (prevState) => setIsBookMarked(prevState),
  });

  const setNowPayItem = useSetAtom(basketItemList);
  const setNowPayItemList: PayMentAtom[] = [
    {
      bookId: book.bookId,
      bookImgUrl: book.bookImgUrl,
      bookTitle: book.bookTitle,
      price: book.price,
      authors: book.authors,
      count: 1,
    },
  ];
  const handleAddToBookmark = () => {
    updateBookmark();
  };

  const handleAddToBasket = () => {
    addToBasket();
  };

  const handleAddForPayment = () => {
    setNowPayItem(setNowPayItemList);
    router.push('/order');
  };

  return (
    <div
      role="card-container"
      className="relative flex h-220 flex-col justify-between rounded-xl border-2 border-gray-1
        p-30 mobile:h-251 mobile:w-330 mobile:p-15 mobile:pb-15 tablet:w-[511px]">
      <div role="book-info-container" className="relative flex">
        <div
          role="book-img"
          className="h-170 bg-white mobile:h-134 mobile:min-w-93">
          <PreviewBookInfo
            size="sm"
            image={book.bookImgUrl}
            ranking={rank}
            itemsStart
            bookId={book.bookId}
          />
        </div>
        <div>{book.bookmarks?.marked}</div>

        <div
          role="book-info"
          className="relative ml-30 mr-auto flex flex-col items-start justify-start 
            gap-4 whitespace-pre-line mobile:ml-12 mobile:max-w-185 mobile:gap-2">
          <div
            role="book-title"
            className="text-overflow2 max-w-500 text-15 font-normal mobile:w-200 tablet:w-250">
            <BookTitle title={book.bookTitle} />
          </div>
          <div
            role="book-author-publisher"
            className="pc:flex-center gap-4 mobile:flex mobile:flex-col tablet:flex tablet:w-150 tablet:flex-col">
            <div className="text-overflow1">
              {book.authors?.map((author) => {
                return (
                  <span key={author} className="text-14 text-gray-3">
                    {author}
                  </span>
                );
              })}
            </div>
            <div className="text-overflow1 mobile:hidden tablet:hidden">
              {book.publisher && (
                <>
                  <span className="mobile:hidden tablet:hidden">| </span>
                  <span className="text-14 text-gray-3">{book.publisher}</span>
                </>
              )}
            </div>
          </div>
          <div>
            <span className="text-14 text-gray-3 mobile:hidden">
              {formattedDate}
            </span>
          </div>

          <div
            role="book-rating"
            className="flex-center mb-8 gap-4 mobile:mb-4">
            <BookRating rating={book.averageRating} size="md" />
            <span className="text-14 text-gray-3 mobile:hidden">
              ({book.reviewCount})
            </span>
          </div>

          <div role="book-category">
            <span className="text-[13px] text-gray-4 tablet:hidden pc:hidden">
              [{book.categories[1]}]
            </span>
          </div>

          <div
            role="book-price"
            className="flex-center flex-col gap-10 whitespace-nowrap mobile:flex-row">
            <div role="price-div" className="text-14 font-bold text-black">
              {book.price.toString().replace(THOUSAND_UNIT, ',')}원
            </div>
          </div>
        </div>

        <div
          role="buttons-div"
          className="flex flex-col items-end gap-30 mobile:absolute mobile:bottom-16 mobile:right-0
            tablet:absolute tablet:right-0">
          <div role="like-button" className="flex-center flex-col gap-2">
            <LikeButton
              onClick={handleAddToBookmark}
              isLiked={isBookmarked}
              disabled={isBookmarkPending}
            />
            <span className="text-12 text-black">{bookmarkCount}</span>
          </div>
          <div
            role="cart-button"
            className="flex flex-col gap-12 mobile:hidden">
            <ActionButton
              label="장바구니"
              variant="primary"
              onClick={handleAddToBasket}
              disabled={isAddToBasketPending}
            />
            <ActionButton
              label="구매하기"
              variant="secondary"
              onClick={handleAddForPayment}
            />
          </div>
        </div>
      </div>

      {/* 모바일에서만 보이는 컴포넌트(장바구니/구매하기 버튼)*/}
      <MobileBookOverViewCard
        basketOnClick={handleAddToBasket}
        buyOnClick={handleAddForPayment}
        disabled={isAddToBasketPending}
      />
    </div>
  );
}

export default BookOverviewCard;
