import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/static/moon.png"} alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src={"/static/girl.png"}
            alt=""
            className={styles.avartar}
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>2024.02.02.</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          quam, assumenda itaque architecto omnis mollitia, non quod tenetur
          blanditiis, ratione natus magnam minima? Autem eos nesciunt saepe
          aspernatur, culpa quaerat.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
