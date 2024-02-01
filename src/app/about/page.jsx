import Image from "next/image";
import styles from "./about.module.css";
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum perspiciatis recusandae delectus iusto sit iure dolorem quo repellendus at nisi? Modi quas illum totam sed molestias ad, eos sunt voluptas.</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>year of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>234 K+</h1>
            <p>People Reached</p>
          </div>
          <div className={styles.box}>
            <h1>5 K+</h1>
            <p>Services and Plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="alt" fill />
      </div>
    </div>
  );
};

export default AboutPage;
