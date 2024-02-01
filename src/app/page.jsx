import styles from "./home.module.css"
import Image from "next/image"

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1>Creative Thoughts Agency</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum hic quisquam officiis! Doloribus voluptate unde possimus fugiat laborum nesciunt ab illo sit eligendi inventore ad, quas vero tenetur earum laudantium.</p>
    </div>
    <div className={styles.buttons}>
      <div className={styles.button}>Learn More</div>
      <div className={styles.button}>Contact</div>
    </div>
    <div className={styles.brands}>
      <Image src="/brands.png" fill alt="" className={styles.brand} />
    </div>
    <div className={styles.imgContainer}>
      <Image className={styles.heroImage} src="/hero.gif" fill alt=""/>
    </div>
  </div>;
};

export default Home;