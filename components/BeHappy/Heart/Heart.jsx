import { useEffect, useState } from "react";
import styles from "./Heart.module.scss";
import Image from "next/image";
import path from "../../../pathImg";

const Heart = ({ click }) => {
  const [mediaQuery, setMediaQuery] = useState(0);

  useEffect(() => {
    const windowWidth = (e) => setMediaQuery(e.currentTarget.innerWidth);

    window.addEventListener("resize", windowWidth);
    return () => {
      window.removeEventListener("resize", windowWidth);
    };
  });

  useEffect(() => {
    const windowWidth = (e) => setMediaQuery(e.currentTarget.innerWidth);

    window.addEventListener("loadstart", windowWidth);
    return () => {
      window.removeEventListener("loadstart", windowWidth);
    };
  });

  return (
    <div className={styles.conteiner}>
      <div className={styles.first_row}>
        <ul className={styles.first_row_left}>
          {path.firstRowLeft &&
            path.firstRowLeft.map(({ path, id }) => (
              <li key={id}>
                <Image
                  onClick={click}
                  src={path}
                  name={path}
                  width={mediaQuery > 768 ? 64 : 36}
                  height={mediaQuery > 768 ? 64 : 36}
                  alt="merried"
                />
              </li>
            ))}
        </ul>
        <ul className={styles.first_row_right}>
          {path.firstRowRight &&
            path.firstRowRight.map(({ path, id }) => (
              <li key={id}>
                <Image
                  onClick={click}
                  src={path}
                  name={path}
                  width={mediaQuery > 768 ? 64 : 36}
                  height={mediaQuery > 768 ? 64 : 36}
                  alt="merried"
                />
              </li>
            ))}
        </ul>
      </div>
      <ul className={styles.second_row}>
        {path.secondRow &&
          path.secondRow.map(({ id, path }) => (
            <li key={id}>
              <Image
                onClick={click}
                src={path}
                name={path}
                width={mediaQuery > 768 ? 64 : 36}
                height={mediaQuery > 768 ? 64 : 36}
                alt="merried"
              />
            </li>
          ))}
      </ul>
      <ul className={styles.third_row}>
        {path.thirdRow &&
          path.thirdRow.map(({ id, path }) => (
            <li key={id}>
              <Image
                onClick={click}
                src={path}
                name={path}
                width={mediaQuery > 768 ? 64 : 36}
                height={mediaQuery > 768 ? 64 : 36}
                alt="merried"
              />
            </li>
          ))}
      </ul>
      <ul className={styles.four_row}>
        {path.fourRow &&
          path.fourRow.map(({ id, path }) => (
            <li key={id}>
              <Image
                onClick={click}
                src={path}
                name={path}
                width={mediaQuery > 768 ? 64 : 36}
                height={mediaQuery > 768 ? 64 : 36}
                alt="merried"
              />
            </li>
          ))}
      </ul>
      <ul className={styles.four_row}>
        {path.fiveRow &&
          path.fiveRow.map(({ id, path }) => (
            <li key={id}>
              <Image
                onClick={click}
                src={path}
                name={path}
                width={mediaQuery > 768 ? 64 : 36}
                height={mediaQuery > 768 ? 64 : 36}
                alt="merried"
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Heart;
