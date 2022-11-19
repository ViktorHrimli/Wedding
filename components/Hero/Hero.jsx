import styles from "../Hero/Hero.module.scss";
import imgStyles from "./ImageWrapper.module.scss";
import { GiDiamondRing } from "react-icons/gi";

const Hero = ({ click }) => {
  return (
    <header>
      <div className={styles.conteiner}>
        <div className={styles.ring_conteiner}>
          <h1 className={styles.ring_title}>
            Y<span className={styles.unVisible}>O</span>UR
            <GiDiamondRing className={styles.ring_img} />
          </h1>
          <p className={styles.ring_text}>perfect</p>
          <h3 className={styles.ring_text_title}> wedding</h3>
        </div>
        <h1 className={styles.hero_title}>Воплоти мрії у реальність</h1>
        <div className={imgStyles.lastik_wrapper}>
          <div className={imgStyles.lastik}></div>
          <p className={styles.hero_text}>Створи свою уникальну свадьбу</p>
        </div>
        <div className={imgStyles.image_wrapper}>
          <div className={imgStyles.conteiner_img_right}></div>
          <div className={imgStyles.conteiner_img_center}></div>
          <div className={imgStyles.conteiner_img_left}></div>
        </div>
        <button className={styles.hero_button} onClick={click} type="button">
          Замовити консультацію
        </button>
      </div>
    </header>
  );
};

export default Hero;
