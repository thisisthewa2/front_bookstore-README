import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalLayoutProps {
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
            className="z-[150] rounded-[10px] bg-white">
            {children}
          </div>
        </div>,
        document.getElementById('portal') as HTMLDivElement,
      )}
    </>
  );
}

export default ModalLayout;
