import { type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: ModalProps) {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed flex z-50 p-4 items-center justify-center inset-0 w-dvw h-dvh backdrop-brightness-80"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative bg-slate-100 min-w-96 p-6 py-8 flex flex-col items-center rounded-2xl">
        <button
          onClick={onClose}
          className="absolute top-1 right-4 text-[22px] p-2 transition-all ease-in-out duration-300 cursor-pointer hover:scale-120 hover:text-blue-600"
        >
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
}
