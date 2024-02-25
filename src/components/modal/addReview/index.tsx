import ModalContainer from '@/components/modal/modalContainer';
import ModalLayout from '@/components/modal/modalLayout';
import AddReviewForm from '@/components/modal/addReview/addReviewForm';

export interface AddReviewProps {
  onClick: () => void;
  bookId: number;
  bookTitle: string;
  authors: string | string[];
  edit?: boolean;
  reviewId?: number;
  review?: string;
  rating?: number;
}

function AddReview({
  onClick,
  bookId,
  bookTitle,
  authors,
  edit,
  reviewId,
  review,
  rating,
}: AddReviewProps) {
  return (
    <ModalLayout onClick={onClick}>
      <ModalContainer onClick={onClick} title="리뷰 작성하기">
        <AddReviewForm
          onClick={onClick}
          bookId={bookId}
          bookTitle={bookTitle}
          authors={authors}
          edit={edit}
          reviewId={reviewId}
          review={review}
          rating={rating}
        />
      </ModalContainer>
    </ModalLayout>
  );
}

export default AddReview;
