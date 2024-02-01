import styles from "./contact.module.css"
import Image from "next/image"

const ContactPage = () => {
    return <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image src="/contact.png" alt="alt" fill />
        </div>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
                <input type="text" placeholder="Name and Surname" />
            </form>
        </div>
    </div>;
};

export default ContactPage;
