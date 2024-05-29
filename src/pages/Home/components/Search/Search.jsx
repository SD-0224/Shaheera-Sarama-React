import styles from "./Search.module.css";
export default function Search({ children }) {

  return (
    <section className={styles.search}>
      {children}
    </section>
  );
}
