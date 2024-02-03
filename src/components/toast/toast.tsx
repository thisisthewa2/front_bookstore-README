import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

interface NotifyProps {
  text: string;
  type: string;
}

export const notify = ({ type, text }: NotifyProps) => {
  switch (type) {
    case 'default':
      toast(text);
      break;
    case 'success':
      toast.success(text);
      break;
    case 'warning':
      toast.warning(text);
      break;
    case 'error':
      toast.error(text);
      break;
  }
};

function Toast() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateIsMobile = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', updateIsMobile);

    // 클린업 함수
    return () => {
      mediaQuery.removeEventListener('change', updateIsMobile);
    };
  }, []);

  return (
    <ToastContainer
      position={isMobile ? 'bottom-center' : 'top-right'}
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
}

export default Toast;
