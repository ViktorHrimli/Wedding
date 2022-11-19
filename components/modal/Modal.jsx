import styles from "./Modal.module.scss";
import { useEffect, useState } from "react";

const Modal = ({ toggle }) => {
  const handleClickClose = (event) => {
    if (event.target === event.currentTarget) {
      toggle(false);
      return;
    }
  };

  const pressEscapeClose = (event) => {
    if (event.code === "Escape") {
      toggle(false);
      return;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", pressEscapeClose);

    return () => {
      window.removeEventListener("keydown", pressEscapeClose);
    };
  });
  return (
    <div className={styles.backdrop} onClick={handleClickClose}>
      <div className={styles.modal}>
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button type="submit">Отпрвить</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
