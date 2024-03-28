import Select from "../Select/Select";
import UiButton from "../UiButtons/UiButtons";
import styles from "./Search.module.css";
import SearchIcon from "./SearchIcon/SearchIcon";
export default function Search({ children }) {
  // let cats = new Set();
  // courses.map((course) => {
  //   cats.add(course.category);
  // });
  // const catsArray = Array.from(cats);

  return (
    <section className={styles.search}>
      {children}
    </section>
  );
}
