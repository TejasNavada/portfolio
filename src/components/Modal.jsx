import { useEffect, useRef } from "react";

const Modal = ({ openModal, closeModal, children, style}) => {

    const ref = useRef();

    useEffect(() => {
      if (openModal) {
        ref.current?.showModal();
      } else {
        ref.current?.close();
      }
    }, [openModal]);
  
    return (
      <dialog
        ref={ref}
        onCancel={closeModal}
        onClick={(e) => {
            const dialog = ref.current;
            const rect = dialog.getBoundingClientRect();
            const isClickOutside = (
              e.clientX < rect.left ||
              e.clientX > rect.right ||
              e.clientY < rect.top ||
              e.clientY > rect.bottom
            );
            if (isClickOutside) {
              closeModal();
            }
        }}
    
        style={style}
      >
        {children}
      </dialog>
    )
  }
  export default Modal
  