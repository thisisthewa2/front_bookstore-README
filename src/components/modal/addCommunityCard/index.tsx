import ModalLayout from '@/components/modal/modalLayout';
import AddCommunityCardForm from '@/components/modal/addCommunityCard/addCommunityCardForm';
import ModalContainer from '@/components/modal/modalContainer';

export interface AddCommunityCardProps {
  onClick : () => void;
  edit?: boolean;
  communityId ?: number;
  bookId?: number;
  review?: string;
}

function AddCommunityCard({ onClick, edit, communityId, bookId, review }: AddCommunityCardProps) {
  return (
    <ModalLayout onClick={onClick} >
      <ModalContainer onClick={onClick} title='글쓰기'>
        <AddCommunityCardForm onClick={onClick} edit={edit} communityId={communityId} review={review} bookId={bookId}/>
      </ModalContainer>
    </ModalLayout>
  );
}

export default AddCommunityCard;
