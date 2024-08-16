import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose, className = " " }) {
  const dialog = useRef();

  useEffect(() => {
const modal = dialog.current;

    if (open) {
      // using showModal()
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);

  return createPortal(
    // <dialog open={open}>{children}</dialog>,
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
        {children}
    </dialog>,
    document.getElementById("modal")
  );
}
