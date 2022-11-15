import styles from "../Hero/Hero.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <header>
      <div className={styles.conteiner}>
        <h1 className={styles.hero_title}>Воплоти мрії у реальність</h1>
        <div className={styles.lastik_wrapper}>
          <div className={styles.lastik}></div>
          <p className={styles.hero_text}>Створи свою уникальну свадьбу</p>
        </div>
        <div className={styles.image_wrapper}>
          {/* <Image src="/girls_mobile.jpg" alt="girls" width={359} height={190} /> */}
        </div>
        <button className={styles.hero_button} type="button">
          Замовити консультацію
        </button>
      </div>
    </header>
  );
};

export default Hero;
