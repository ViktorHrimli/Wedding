import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Team from "../components/Team/Team";
import Happy from "../components/BeHappy/BeHappy";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

const Home = () => {
  return (
    <div className={styles.conteiner}>
      <Head>
        <title>ForWeding</title>
      </Head>
      <div className={styles.wrapper_comp}>
        <Hero />
        <About />
        <Team />
        <Happy />
        <Footer />
      </div>
    </div>
  );
};
export default Home;
