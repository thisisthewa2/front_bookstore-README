import Image from 'next/image';
import GetRefund from '@/components/modal/getRefund';
import BookAuthor from '@/components/book/bookAuthor/bookAuthor';
import BookPrice from '@/components/book/bookPrice/bookPrice';
import BookTitle from '@/components/book/bookTitle/bookTitle';
import { useState } from 'react';
import AddReview from '@/components/modal/addReview';

import {
  ConFirmButton,
  ExchangeRefundButton,
  ReviewButton,
} from '@/components/button/order/orderPageButton';
import { DeliveryStatus, putDeliveryStatus } from '@/api/delivery';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export type BookOrderCardProps = {
  bookId: number;
  bookTitle: string;
  bookImgUrl: string;
  bookPrice: number;
  authors: string;
  quantity: number;
  deliveryId: number;
  deliveryStatus: string;
};

function BookOrderCard({
  bookId,
  bookTitle,
  bookImgUrl,
  bookPrice,
  authors,
  quantity,
  deliveryId,
  deliveryStatus,
}: BookOrderCardProps) {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const queryClient = useQueryClient();
  const statusMutation = useMutation({
    mutationFn: (data: DeliveryStatus) => putDeliveryStatus(data),
    onSuccess: () => queryClient.invalidateQueries(),
  });

  const handleReviewModalOpenClick = () => {
    setIsReviewModalOpen(!isReviewModalOpen);
  };

  const [isGetRefundFormModalOpen, setIsGetRefundFormModalOpen] =
    useState(false);

  const handleGetRefundFormModalOpen = () => {
    setIsGetRefundFormModalOpen(!isGetRefundFormModalOpen);
  };

  const conFirmButtonClick = () => {
    statusMutation.mutate({
      deliveryId: deliveryId,
      deliveryStatus: 'CONFIRM',
    });
  };
  
  return (
    <div
      role="card-container"
      className="relative flex min-h-140 w-full min-w-330 max-w-[1080px] justify-start gap-12
        rounded-xl border-2 border-gray-1 p-20 mobile:border-none mobile:p-0">
      <div
        role="book-img"
        className="relative h-102 min-w-102 bg-gray-1 text-center mobile:h-75 mobile:min-w-75">
        {bookImgUrl ? (
          <Image src={bookImgUrl} alt="책 표지 이미지" layout="fill" />
        ) : null}
      </div>
      <div className="relative flex w-full flex-col items-start justify-start gap-12 truncate">
        <div className="flex w-full flex-col items-start justify-start gap-4">
          <BookTitle
            title={bookTitle}
            fontSize={15}
            classNames="w-[60vw] truncate whitespace-nowrap"
          />
          <BookAuthor
            authorList={[authors]}
            classNames="w-[60vw] truncate whitespace-nowrap"
          />
          <div className="flex gap-8">
            <span className="text-14 text-gray-3">{quantity}개</span>
            <BookPrice
              price={bookPrice}
              fontSize={14}
              fontColor="text-gray-3"
            />
          </div>
        </div>
        <div
          role="delivery-div"
          className="text-14 text-primary mobile:absolute mobile:bottom-65 mobile:right-0">
          {deliveryStatus}
        </div>
      </div>
      <div
        role="service-div"
        className="flex-center absolute bottom-20 right-20 gap-12 mobile:bottom-0 mobile:left-0
          mobile:right-0">
        {deliveryStatus === '배송 중' && (
          <ConFirmButton onClick={conFirmButtonClick} />
        )}
        {deliveryStatus === '배송 완료' && (
          <>
            <ExchangeRefundButton onClick={handleGetRefundFormModalOpen} />
            <ReviewButton onClick={handleReviewModalOpenClick} />
          </>
        )}
        {deliveryStatus === '구매확정' && (
          <ReviewButton onClick={handleReviewModalOpenClick} />
        )}
        {isGetRefundFormModalOpen && (
          <GetRefund
            onClick={handleGetRefundFormModalOpen}
            deliveryId={deliveryId}
            bookTitle={bookTitle}
            authors={authors}
            bookPrice={bookPrice}
          />
        )}
      </div>
      {isReviewModalOpen && (
        <AddReview
          onClick={handleReviewModalOpenClick}
          bookId={bookId}
          bookTitle={bookTitle}
          authors={authors}
        />
      )}
    </div>
  );
}

export default BookOrderCard;
