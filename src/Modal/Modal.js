import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ theme }) => {
  const [open, setOpen] = useState(false);

  const handleToggleVisibleModal = () => {
    setOpen(!open);
  };
  console.log(theme);

  return (
    <>
      <button onClick={handleToggleVisibleModal}>Open modal</button>
      {open && (
        <div className="modal">
          <div className={theme === "black" ? "black-model" : "modal-body"}>
            <h1>Modal title</h1>
            <p>I am awesome modal!</p>
            <button onClick={handleToggleVisibleModal}>Close modal</button>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
