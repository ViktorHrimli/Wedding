import styled from "./ModalImg.module.scss";
import { useEffect } from "react";

const ModalImg = ({ toggle }) => {
  const handleClickCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      toggle(false);
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
    <div className={styled.backdrop} onClick={handleClickCloseModal}>
      <div className={styled.modal}></div>
    </div>
  );
};

export default ModalImg;
