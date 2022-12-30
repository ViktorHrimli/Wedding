import styles from "./About.module.scss";

const About = () => {
  return (
    <main >
      <div className={styles.conteiner}>
        <div className={styles.about_wrapper}>
          <h3 className={styles.about_title}>твоя свадьба -</h3>
          <p className={styles.about_text}>твои правила</p>
        </div>
        <div className={styles.img_wrapper}>
          <div className={styles.lastik}></div>
        </div>
      </div>
    </main>
  );
};
export default About;
