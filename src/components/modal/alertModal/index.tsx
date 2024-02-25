import ModalLayout from '@/components/modal/modalLayout';
import RegisterButton from '@/components/button/register/registerButton';
import { useDeleteCommunity } from '@/api/community';
import { UseMutationResult } from '@tanstack/react-query';

interface AlertModalProps {
  title: string;
  description: string;
  onClick: () => void;
  Fn?: (id: number | undefined) => UseMutationResult<any, Error, void, unknown>;
  id?: number;
}
function AlertModal({ title, description, onClick, Fn ,id }: AlertModalProps) {  
  const mutation = Fn ? Fn(id) : null;

  const handleDelete = () => {
    if (mutation) mutation.mutate();
    onClick();
  }

  return (
    <ModalLayout onClick={onClick}>
      <div
        className="flex-center flex-col w-412 h-240 mobile:w-330 mobile:h-190 px-40 pt-50 pb-40
          gap-40 mobile:p-30">
        <div>
          <p className="mb-8 text-20 font-bold">{title}</p>
          <span className="text-16 font-light text-gray-3">{description}</span>
        </div>
        <div className="flex w-full gap-20">
          <RegisterButton type="button" color="bg-gray-2" onClick={onClick}>
            취소
          </RegisterButton>
          <RegisterButton type="button" color="bg-red" onClick={handleDelete}>
            삭제
          </RegisterButton>
        </div>
      </div>
    </ModalLayout>
  );
}

export default AlertModal;
