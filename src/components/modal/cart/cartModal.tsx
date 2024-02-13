import RegisterButton from '@/components/button/register/registerButton';
import ModalLayout from '@/components/modal/modalLayout';

interface CartModalProps {
  title: string;
  description: string;
  onClick: () => void;
}
function CartModal({ title, description, onClick }: CartModalProps) {
  return (
    <ModalLayout onClick={onClick}>
      <div
        className="flex-center flex-col items-center w-412 h-240 mobile:w-330 mobile:h-190 px-40
          pt-50 pb-40 gap-40 mobile:p-30">
        <div className="flex flex-col items-center">
          <p className="text-20 font-bold mb-8">{title}</p>
          <span className="text-16 text-gray-3 font-light">{description}</span>
        </div>
        <div className="flex w-156">
          <RegisterButton type="button" onClick={onClick}>
            확인
          </RegisterButton>
        </div>
      </div>
    </ModalLayout>
  );
}

export default CartModal;
