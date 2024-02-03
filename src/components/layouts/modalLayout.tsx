import { ReactElement } from 'react';
import { createPortal } from 'react-dom';
interface ModalLayoutProps {
  children: ReactElement;
  onClick: () => void;
}
function ModalLayout({ children, onClick }: ModalLayoutProps) {
  return (
    <>
      {createPortal(
        <div
          role="overlay"
          className="fixed top-0 left-0 w-screen h-screen flex-center bg-black opacity-60 z-9999"
          onClick={onClick}>
          <div role="modalContainer" className="bg-gray-1 rounded-[10px]">
            {children}
          </div>
        </div>,
        document.getElementById('portal') as HTMLDivElement,
      )}
    </>
  );
}

export default ModalLayout;
