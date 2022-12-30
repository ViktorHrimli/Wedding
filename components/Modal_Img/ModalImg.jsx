import styled from "./ModalImg.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

const ModalImg = ({ toggle, imge }) => {
  const [viewWidth, setviewWidth] = useState(0);
  const handleClickCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      toggle(false);
    }
  };

  const pressEscapeClose = (event) => {
    if (event.code === "Escape") {
      toggle(false);
    }
  };

  useEffect(() => {
    const windowWidth = (e) => setviewWidth(e.target.innerWidth);
    window.addEventListener("keydown", pressEscapeClose);
    window.addEventListener("resize", windowWidth);

    return () => {
      window.removeEventListener("keydown", pressEscapeClose);
      window.removeEventListener("resize", windowWidth);
    };
  });
  return (
    <div className={styled.backdrop} onClick={handleClickCloseModal}>
      <div className={styled.modal}>
        <Image
          src={imge}
          width={viewWidth > 768 ? 750 : viewWidth - 100}
          height={500}
          alt="merried"
        />
      </div>
    </div>
  );
};

export default ModalImg;
