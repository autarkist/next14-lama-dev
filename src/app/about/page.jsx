import Image from "next/image";
import styles from "./about.module.css";
const AboutPage = () => {
  return (
    <div className={styles.imgContainer}>
      <Image src="/public/" alt="" fill />
    </div>
  );
};

export default AboutPage;
