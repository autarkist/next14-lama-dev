import Link from "next/link"
import Image from "next/image"
import styles from "./postcard.module.css"

const PostCard = () => {
    return <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="/static/girl.png" fill alt="" className={styles.img} />
            </div>
            <span className={styles.date}>2024.02.02</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Desc</p>
            <Link href="/blog/post">READ MORE</Link>
        </div>
    </div>;
};

export default PostCard;