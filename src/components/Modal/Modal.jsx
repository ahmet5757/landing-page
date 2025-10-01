import "./Modal.scss";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()} 
        role="dialog"
        aria-modal="true"
      >
        <button className="modal__close" onClick={onClose}>
          ✖
        </button>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
