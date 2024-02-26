import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

export interface ModalLayoutProps {
  children: ReactNode;
  onClick: () => void;
}

function ModalLayout({ children, onClick }: ModalLayoutProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      {createPortal(
        <div
          role="overlay"
          className="flex-center fixed left-0 top-0 z-[100] h-full w-full">
          <div
            className="absolute h-screen w-screen bg-black opacity-60"
            onClick={onClick}
          />
          <div
            role="modalContainer"
            className="scrollbar-hide z-[150] max-h-[95vh] overflow-auto rounded-[10px] border border-none bg-white ">
            {children}
          </div>
        </div>,
        document.getElementById('portal') as HTMLDivElement,
      )}
    </>
  );
}

export default ModalLayout;
