import styles from "./Details.module.css";
import CourseTable from "../../components/CourseTable/CourseTable";
import CourseDetails from "./CourseDetails/CourseDetails";
export default function Details() {
  return (
    <>
        <CourseDetails/>
        <div className={styles.container}>
        <CourseTable/>
        </div>
    </>
  );
}
