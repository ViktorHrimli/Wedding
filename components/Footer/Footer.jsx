import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.icons_conteiner}>
        <div className={styles.telephone}></div>
        <div className={styles.instagram}></div>
        <div className={styles.facebook}></div>
        <div className={styles.telegram}></div>
      </div>
      <div className={styles.hesh_conteiner}>
        <span></span>
        <p className={styles.hesh_text}>#find_love_and_inspire</p>
      </div>
    </div>
  );
};

export default Footer;
