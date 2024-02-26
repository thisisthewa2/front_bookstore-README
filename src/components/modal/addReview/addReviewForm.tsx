import BookRating from '@/components/book/bookRating/bookRating';
import RegisterButton from '@/components/button/register/registerButton';
import TitleContentTable from '@/components/modal/addReview/titleContentTable';
import Image from 'next/image';
import LineIcon from '@/public/icons/Line.svg';
import useFormControl from '@/hooks/useFormControl';
import Input from '@/components/input/input';
import { useState } from 'react';
import { usePostReview, usePutReview } from '@/api/review';
import { AddReviewProps } from '@/components/modal/addReview';

function AddReviewForm({
  onClick,
  bookId,
  bookTitle,
  authors,
  edit,
  reviewId,
  review,
  rating,
}: AddReviewProps) {
  const [newRating, setNewRating] = useState(0);
  const { control, handleSubmit, isButtonActive, onSubmit } = useFormControl({
    postFn: usePostReview,
    putFn: usePutReview,
    edit: edit,
    id: bookId,
    option: { required: newRating, optional: reviewId },
    onClick: onClick,
    initialValue: { content: review },
  });

  return (
    <>
      <form
        className="scrollbar-hide flex w-full flex-col gap-40 overflow-scroll mobile:gap-30"
        onSubmit={handleSubmit(onSubmit)}>
        <TitleContentTable
          title1="책 제목"
          content1={bookTitle}
          title2="저자"
          content2={Array.isArray(authors) ? authors.join(', ') : authors}
          truncate="truncate"
        />
        <Image src={LineIcon} alt="구분선" />
        <div className="text-b-b flex h-87 flex-col justify-between text-16">
          별점 평가
          <BookRating
            rating={rating ? rating : newRating}
            setNewRating={setNewRating}
            size="lg"
            onClick={true}
            className="flex h-52 w-full items-center justify-start gap-13 mobile:gap-9"
          />
        </div>
        <Input
          type="text"
          title="내용"
          height="h-274"
          control={control}
          name="content"
        />
        <RegisterButton type="submit" disabled={isButtonActive ? true : false}>
          리뷰 작성하기
        </RegisterButton>
      </form>
    </>
  );
}

export default AddReviewForm;
