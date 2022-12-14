import Heart from "./Heart/Heart";
import styles from "./BeHappy.module.scss";

const Happy = ({ click }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.happy_title}>Наши счастливые</h1>
      <p className={styles.happy_text}>Stories</p>
      <Heart click={click} />
      <div className={styles.happy_div_text}>
        <div className={styles.happy_lastick_conteiner}></div>
        <p>
          “Любовь — это не тогда, когда человек делает для тебя этот мир, а
          тогда, когда вы творите его вместе”
        </p>
      </div>
    </div>
  );
};

export default Happy;
