/** 마이페이지에 들어갈 내가 쓴 리뷰 컴포넌트 */

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import BookRating from '@/components/book/bookRating/bookRating';
import BookAuthor from '@/components/book/bookAuthor/bookAuthor';
import KebabButton from '@/components/button/kebab/kebabButton';
import BookTitle from '@/components/book/bookTitle/bookTitle';
import useFormatDate from '@/hooks/useFormatDate';
import { MyReviewData } from '@/types/api/review';
import AlertModal from '@/components/modal/alertModal';
import AddReview from '@/components/modal/addReview';
import { useDeleteReview } from '@/api/review';

function MyReviewCard({
  bookId,
  bookImgUrl,
  bookTitle,
  authors,
  content,
  reviewRating,
  updateDate,
  reviewId,
}: MyReviewData) {
  const [isSummarized, setIsSummarized] = useState(true);
  const formatDate = useFormatDate(updateDate);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  const handleReviewModalOpenClick = () => {
    setIsReviewModalOpen(!isReviewModalOpen);
  };
  const handleAlertModalOpenClick = () => {
    setIsAlertModalOpen(!isAlertModalOpen);
  };

  return (
    <div className="flex min-h-140 w-full max-w-[1080px] flex-col mobile:min-h-115 mobile:w-330 tablet:max-w-[710px]">
      <div
        role="card-container"
        className="relative flex justify-start gap-12
        rounded-xl border-2 border-gray-1 p-20 mobile:border-none
        mobile:p-0">
        <div className="flex w-full gap-12">
          <div
            role="book-img"
            className="relative h-102 min-w-102 bg-gray-1 text-center mobile:h-75 mobile:min-w-75">
            <Link href={`/bookdetail/${bookId}`}>
              <Image src={bookImgUrl} alt="book sample image" layout="fill" />
            </Link>
          </div>
          <div className="flex w-4/5 flex-col items-start justify-start gap-4">
            <BookTitle
              title={bookTitle}
              fontSize={15}
              classNames="max-w-[860px] w-[90%] truncate whitespace-nowrap mobile:w-220 line-clam-1"
            />
            <BookAuthor authorList={authors} classNames="line-clamp-2" />
            <div className="absolute right-0 top-0 h-18 w-18 mobile:-right-10 mobile:-top-20">
              <KebabButton title1="수정하기" title2="삭제하기" onClickTitle1={handleReviewModalOpenClick} onClickTitle2={handleAlertModalOpenClick} id={reviewId} />
            </div>
            <div className="flex-center gap-10 whitespace-nowrap">
              <BookRating rating={reviewRating} />
              <span className="text-14 text-gray-2">{formatDate}</span>
            </div>
            <div
              role="content-div"
              className={`top-10 flex mobile:relative mobile:-left-87 mobile:w-full ${
                isSummarized ? 'w-[90%]' : 'w-full mobile:w-[120%]'
              }`}>
              <div
                role="content"
                className={`text-14 text-gray-3 ${isSummarized ? `truncate` : 'w-full whitespace-normal break-words'}`}>
                {content}
              </div>
            </div>
            {isSummarized && (
              <button
                onClick={() => setIsSummarized(false)}
                className="absolute bottom-23 right-20 whitespace-nowrap text-14 text-primary
                mobile:-bottom-3 mobile:right-0">
                더보기
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="pt-32  tablet:hidden pc:hidden">
        <div className="h-1 w-full border border-gray-1"></div>
      </div>
      {isReviewModalOpen && (
        <AddReview onClick={handleReviewModalOpenClick} bookId={bookId} bookTitle={bookTitle} authors={authors} review={content} rating={reviewRating}/>
      )}
      {isAlertModalOpen && (
        <AlertModal
          title="정말 삭제하시겠습니까?"
          description="삭제한 글은 복구할 수 없습니다."
          onClick={handleAlertModalOpenClick}
          Fn={useDeleteReview}
          id={reviewId}
        />
      )}
    </div>
  );
}

export default MyReviewCard;
