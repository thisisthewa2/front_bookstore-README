import { OnClickProps } from '@/types/onClickType';
import ModalContainer from '@/components/modal/modalContainer';
import ModalLayout from '@/components/modal/modalLayout';
import GetRefundForm from '@/components/modal/getRefund/getRefundForm';

function GetRefund({ onClick }: OnClickProps) {
  return (
    <ModalLayout onClick={onClick}>
      <ModalContainer onClick={onClick} title="교환/환불 신청하기">
        <GetRefundForm />
      </ModalContainer>
    </ModalLayout>
  );
}

export default GetRefund;
