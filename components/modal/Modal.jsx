import { useEffect } from "react";
import styles from "./Modal.module.scss";
import Form from "../Form/Form";

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
        <div className={styles.conteiner}>
          <p>
            Пожалуйста укажите свои данные, чтобы мы могли связаться с Вами.
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Modal;
