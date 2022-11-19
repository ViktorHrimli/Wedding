import styles from "./Heart.module.scss";
import Image from "next/image";

const Heart = () => {
  const onClickImg = (event) => {
    console.log(event.currentTarget.name);
  };
  return (
    <div className={styles.conteiner}>
      <div className={styles.first_row}>
        <div className={styles.first_row_left}>
          <Image
            onClick={onClickImg}
            src="/2_left.jpg"
            name="watawt"
            width={36}
            height={36}
            alt="merried"
          />
          <Image
            onClick={onClickImg}
            src="/5_left.jpg"
            width={36}
            height={36}
            alt="merried"
          />
        </div>
        <div className={styles.first_row_right}>
          <Image src="/5_right.jpg" width={36} height={36} alt="merried" />
          <Image src="/2_right.jpg" width={36} height={36} alt="merried" />
        </div>
      </div>
      <div className={styles.second_row}>
        <Image src="/1_left.jpg" width={36} height={36} alt="merried" />
        <Image src="/3_left.jpg" width={36} height={36} alt="merried" />
        <Image src="/6_left.jpg" width={36} height={36} alt="merried" />
        <Image src="/1_center.jpg" width={36} height={36} alt="merried" />
        <Image src="/6_right.jpg" width={36} height={36} alt="merried" />
        <Image src="/3_right.jpg" width={36} height={36} alt="merried" />
        <Image src="/1_right.jpg" width={36} height={36} alt="merried" />
      </div>
      <div className={styles.third_row}>
        <Image src="/4_left.jpg" width={36} height={36} alt="merried" />
        <Image src="/7_left.jpg" width={36} height={36} alt="merried" />
        <Image src="/2_center.jpg" width={36} height={36} alt="merried" />
        <Image src="/4_right.jpg" width={36} height={36} alt="merried" />
        <Image src="/7_right.jpg" width={36} height={36} alt="merried" />
      </div>
      <div className={styles.four_row}>
        <Image src="/8_left.jpg" width={36} height={36} alt="merried" />
        <Image src="/3_center.jpg" width={36} height={36} alt="merried" />
        <Image src="/8_right.jpg" width={36} height={36} alt="merried" />
      </div>
      <div className={styles.four_row}>
        <Image src="/4_center.jpg" width={36} height={36} alt="merried" />
      </div>
    </div>
  );
};

export default Heart;
