import UiButton from '../UiButtons/UiButtons';
import styles from './Search.module.css';
export default function Search() {
  return (
    <main>
      <div className="container">
        <section className={styles.search}>
          <ion-icon name="search-outline" />
          <input
            type="search"
            placeholder="Search the website..."
            id="searchInput"
          />
          <div className={`${styles.select} ${styles.sort}`}>
            <label htmlFor="sort">sort by:</label>
            <div className={styles.selcetBottom}>
              <select name="" id="sort">
                <option value="default">Default</option>
                <option value="title">Topic Title</option>
                <option value="name">Author Name</option>
              </select>
            </div>
          </div>
          <div className={`${styles.select} ${styles.filter}`}>
            <label htmlFor="sort">filter by:</label>
            <div className={styles.selcetBottom}>
              <select name="" id="filter">
                <option value>Default</option>
              </select>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
