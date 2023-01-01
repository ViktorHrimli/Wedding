import styled from "./ModalImg.module.scss";
import { BsFillFileArrowUpFill, BsFileArrowDownFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import paths from "../../pathImg";

const arrImg = [
  ...paths.firstRowLeft,
  ...paths.firstRowRight,
  ...paths.secondRow,
  ...paths.thirdRow,
  ...paths.fourRow,
  ...paths.fiveRow,
];

const ModalImg = ({ toggle, id }) => {
  const [idImg, setIdImg] = useState(null);
  const [count, setCount] = useState(Number(id));
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

  const sliderIdChange = (e) => {
    switch (e.currentTarget.name) {
      case "dicrement": {
        return setCount((prev) => (prev -= 1));
      }
      case "increment": {
        return setCount((prev) => (prev += 1));
      }
      default: {
        return id;
      }
    }
  };

  useEffect(() => {
    if (count === arrImg.length + 1) return setCount(1);
    if (count === 0) return setCount(20);

    const { path } = arrImg.find((item) => +item.id === count);
    setIdImg(path);
  }, [count]);

  useEffect(() => {
    window.addEventListener("keydown", pressEscapeClose);

    return () => {
      window.removeEventListener("keydown", pressEscapeClose);
    };
  });
  return (
    <div className={styled.backdrop} onClick={handleClickCloseModal}>
      <div className={styled.modal}>
        <button
          className={styled.slide_prev}
          type="button"
          onClick={sliderIdChange}
          name="dicrement"
        >
          <BsFillFileArrowUpFill className={styled.icons_prev} />
        </button>
        <picture>
          <img className={styled.img_modal} src={idImg} alt="merried" />
        </picture>
        <button
          className={styled.slide_next}
          type="button"
          onClick={sliderIdChange}
          name="increment"
        >
          <BsFileArrowDownFill className={styled.icons_next} />
        </button>
      </div>
    </div>
  );
};

export default ModalImg;
