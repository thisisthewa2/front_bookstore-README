import { OnClickProps } from "@/types/onClickType";
import ModalContainer from "../modalContainer"
import ModalLayout from "../modalLayout"
import AddReviewForm from "./addReviewForm";

function AddReview({onClick} : OnClickProps) {
  return (
    <ModalLayout onClick={onClick}>
      <ModalContainer onClick={onClick} title="리뷰 작성하기">
        <AddReviewForm />
      </ModalContainer>
    </ModalLayout>
  )
}

export default AddReview