import React, { useEffect, useRef } from "react";
import "./Modal.css";

function Modal({
  isOpen,
  onClose,
  title = "Title",
  message = "Message",
  logo,
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const outsideClickListener = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal"
      onClick={outsideClickListener}
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
      ref={modalRef}
      tabIndex="-1"
    >
      <div className="modal-content">
        {logo && <img src={logo} alt="Logo" className="modal-logo" />}
        <h2 id="modalTitle">{title}</h2>
        <p id="modalDescription">{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
