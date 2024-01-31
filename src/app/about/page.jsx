import Image from "next/image";
import styles from "./about.module.css";
const AboutPage = () => {
  return (
    <div className={styles.imgContainer}>
      <Image src="/img/chalet-5218666_1280.png" alt="" fill />
    </div>
  );
};

export default AboutPage;
