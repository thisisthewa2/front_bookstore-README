import ModalLayout from "@/components/modal/modalLayout";
import RegisterButton from "../button/register/registerButton";
interface AlertModalProps {
  title: string;
  description: string;
  onClick: () => void;
}
function AlertModal({ title, description, onClick }: AlertModalProps) {

  return (
    <ModalLayout onClick={onClick}>
      <div className="flex-center flex-col w-412 h-240 mobile:w-330 mobile:h-190 px-40 pt-50 pb-40 gap-40 mobile:p-30">
        <div>
          <p className="text-20 font-bold mb-8">{title}</p>
          <span className="text-16 text-gray-3 font-light">{description}</span>
        </div>
        <div className="flex w-full gap-20">
          <RegisterButton type="button" color="gray-2" onClick={onClick}>취소</RegisterButton>
          <RegisterButton type="button" color="red">삭제</RegisterButton>
        </div>
      </div>
    </ModalLayout>
  );
}

export default AlertModal;
