import ModalLayout from '@/components/modal/modalLayout';
import AddCommunityCardForm from '@/components/modal/addCommunityCard/addCommunityCardForm';
import ModalContainer from '../modalContainer';
import { OnClickProps } from '@/types/onClickType';

function AddCommunityCard({ onClick }: OnClickProps) {
  return (
    <ModalLayout onClick={onClick} >
      <ModalContainer onClick={onClick} title='글쓰기'>
        <AddCommunityCardForm/>
      </ModalContainer>
    </ModalLayout>
  );
}

export default AddCommunityCard;
