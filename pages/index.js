import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Team from "../components/Team/Team";
import Happy from "../components/BeHappy/BeHappy";
import Footer from "../components/Footer/Footer";
import Modal from "../components/modal/Modal";
import Head from "next/head";
import ModalImg from "../components/Modal_Img/ModalImg";
import { useState } from "react";

const Home = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShowImg, setIsShowImg] = useState(false);
  const [idImg, setidImg] = useState(null);

  const handleClick = () => {
    setIsShow(true);
  };

  const handleClickImg = (e) => {
    setidImg(e.target.name);
    setIsShowImg(true);
  };
  return (
    <div className={styles.conteiner}>
      <Head>
        <title>ForWeding</title>
      </Head>
      <div className={styles.wrapper_comp}>
        {isShow && <Modal toggle={setIsShow} />}
        {isShowImg && <ModalImg toggle={setIsShowImg} id={idImg} />}
        <Hero click={handleClick} />
        <About />
        <Team />
        <Happy click={handleClickImg} />
        <Footer />
      </div>
    </div>
  );
};
export default Home;
