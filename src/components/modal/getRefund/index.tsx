import ModalContainer from '@/components/modal/modalContainer';
import ModalLayout from '@/components/modal/modalLayout';
import GetRefundForm from '@/components/modal/getRefund/getRefundForm';

export interface GetRefund {
  onClick: () => void;
  deliveryId: number;
  bookTitle: string;
  authors: string;
}

function GetRefund({ onClick, deliveryId, bookTitle, authors }: GetRefund) {
  return (
    <ModalLayout onClick={onClick}>
      <ModalContainer onClick={onClick} title="교환/환불 신청하기">
        <GetRefundForm onClick={onClick} deliveryId={deliveryId} bookTitle={bookTitle} authors={authors} />
      </ModalContainer>
    </ModalLayout>
  );
}

export default GetRefund;
