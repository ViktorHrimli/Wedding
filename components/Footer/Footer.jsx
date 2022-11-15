import styles from "./Footer.module.scss";
import { BsTelephone, BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.icons_conteiner}>
        <div className={styles.telephone}>
          <BsTelephone className={styles.react_icons} />
        </div>
        <div className={styles.instagram}>
          <BsInstagram className={styles.react_icons} />
        </div>
        <div className={styles.facebook}>
          <ImFacebook className={styles.react_icons_facebook} />
        </div>
        <div className={styles.telegram}>
          <FaTelegramPlane className={styles.react_icons} />
        </div>
      </div>
      <div className={styles.hesh_conteiner}>
        <span className={styles.vektor_text}></span>
        <p className={styles.hesh_text}>#find_love_and_inspire</p>
      </div>
    </div>
  );
};

export default Footer;
