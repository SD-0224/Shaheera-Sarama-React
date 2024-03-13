import styles from "./Shapes.module.css";
export default function Shapes() {
  return (
    <>
    <section className={styles.shapes}>
      <section className={styles.shape}></section>
    </section>

    <section className={styles.welcome}>
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Welcome to our website!</h1>
                <p>We have a new design thats fresh, modren, and easy to use.</p>
            </div>
        </div>
    </section>
    </>
  );
}
