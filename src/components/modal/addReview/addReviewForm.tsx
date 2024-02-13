import BookRating from '@/components/book/bookRating/bookRating';
import RegisterButton from '@/components/button/register/registerButton';
import TitleContentTable from '@/components/modal/addReview/titleContentTable';
import Image from 'next/image';
import LineIcon from '@/public/icons/Line.svg';
import useFormControl from '@/hooks/useFormControl';
import Input from '@/components/input/input';
import { useState } from 'react';

function AddReviewForm() {
  const [newRating, setNewRating] = useState(0);
  const {
    control,
    handleSubmit,
    isButtonActive,
    onSubmit,
  } = useFormControl(newRating);

  return (
    <>
      <form
        className="flex w-full flex-col gap-40 overflow-scroll mobile:gap-30"
        onSubmit={handleSubmit(onSubmit)}>
        <TitleContentTable
          title1="책 제목"
          content1="스물 아홉 생일, 1년 후 죽기로 결심하다"
          title2="저자"
          content2="이제니"
          truncate="truncate"
        />
        <Image src={LineIcon} alt="구분선" />
        <div className="text-b-b flex h-87 flex-col justify-between text-16">
          별점 평가
          <BookRating
            rating={newRating}
            setNewRating={setNewRating}
            size="lg"
            onClick={true}
            className="flex h-52 w-full items-center justify-start gap-13 mobile:gap-9"
          />
        </div>
        <Input type='text' title='내용' height="h-274" control={control} name="description" />
      </form>
      <RegisterButton type="submit" disabled={isButtonActive ? true : false}>
        리뷰 작성하기
      </RegisterButton>
    </>
  );
}

export default AddReviewForm;
