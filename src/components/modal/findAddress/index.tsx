import { OnClickProps } from '@/types/onClickType';
import ModalContainer from '@/components/modal/modalContainer';
import ModalLayout from '@/components/modal/modalLayout';
import FindAddressForm from '@/components/modal/findAddress/findAddressForm';

function FindAddress({ onClick }: OnClickProps) {
  return (
    <ModalLayout onClick={onClick}>
      <ModalContainer onClick={onClick} title="주소 검색하기">
        <FindAddressForm />
      </ModalContainer>
    </ModalLayout>
  );
}

export default FindAddress;
