import { Button } from "antd";
import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useAppTheme } from "../../../../themeProvider/useAppTheme";

const Modal = ({
  show,
  onClose,
  children,
}: {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  const { darkMode } = useAppTheme();
  useEffect(() => {
    if (!show) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log(e, "dsakjbj7t6");
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
  }, [show, onClose]);

  if (!show) return null;
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-lg rounded-lg p-6 shadow-xl ${
          darkMode ? "bg-slate-800 text-slate-100" : "bg-white text-slate-900"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <Button onClick={onClose} className="absolute! right-4! top-4!">
          ❌
        </Button>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
