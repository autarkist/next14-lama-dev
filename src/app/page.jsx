import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum hic
          quisquam officiis! Doloribus voluptate unde possimus fugiat laborum
          nesciunt ab illo sit eligendi inventore ad, quas vero tenetur earum
          laudantium.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" fill alt="" className={styles.brand} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.heroImage} src="/hero.gif" fill alt="" />
      </div>
    </div>
  );
};

export default Home;
