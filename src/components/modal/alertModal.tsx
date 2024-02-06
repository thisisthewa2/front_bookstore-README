import ModalLayout from '@/components/modal/modalLayout';
import RegisterButton from '../button/register/registerButton';
interface AlertModalProps {
  title: string;
  description: string;
  onClick: () => void;
}
function AlertModal({ title, description, onClick }: AlertModalProps) {
  return (
    <ModalLayout onClick={onClick}>
      <div className="flex-center h-240 w-412 flex-col gap-40 px-40 pb-40 pt-50 mobile:h-190 mobile:w-330 mobile:p-30">
        <div>
          <p className="mb-8 text-20 font-bold">{title}</p>
          <span className="text-16 font-light text-gray-3">{description}</span>
        </div>
        <div className="flex w-full gap-20">
          <RegisterButton type="button" color="gray-2" onClick={onClick}>
            취소
          </RegisterButton>
          <RegisterButton type="button" color="red">
            삭제
          </RegisterButton>
        </div>
      </div>
    </ModalLayout>
  );
}

export default AlertModal;
