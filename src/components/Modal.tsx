import { XMarkIcon } from '@heroicons/react/24/outline';
import { useCallback, useRef, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ children }: { children: ReactNode }) => {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const onDismiss = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current && onDismiss) {
        onDismiss();
      }
    },
    [onDismiss, overlay],
  );

  return (
    <div
      ref={overlay}
      className="fixed bottom-0 left-0 right-0 top-0 z-[99] mx-auto bg-black/80"
      onClick={handleClick}
    >
      <div
        ref={wrapper}
        className="absolute bottom-0 flex h-[90%] w-full flex-col items-center justify-start overflow-auto rounded-t-3xl bg-foreground px-8 pb-72 pt-14 text-text lg:px-40"
      >
        <button
          type="button"
          onClick={onDismiss}
          className="absolute right-4 top-4 z-50 text-black"
        >
          <XMarkIcon className="h-6 w-6" />
          <span className="sr-only">Back to home</span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
