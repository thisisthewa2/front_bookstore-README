import ModalLayout from "@/layouts/modalLayout";
interface AlertModalProps {
  title: string;
  description: string;
  onClick: () => void;
}
function AlertModal({ title, description, onClick }: AlertModalProps) {
  console.log('열리네');

  return (
    <ModalLayout onClick={onClick}>
      <div className="flex-center flex-col">
        <p>{title}</p>
        <span>{description}</span>
        <button onClick={onClick}>취소, 삭제</button>
      </div>
    </ModalLayout>
  );
}

export default AlertModal;
