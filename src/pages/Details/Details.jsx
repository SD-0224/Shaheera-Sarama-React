import styles from "./Details.module.css";
import CourseDetails from "./Components/CourseDetails/CourseDetails";
import CourseTable from "./Components/CourseTable/CourseTable";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../common/fetch";

export default function Details() {
  let { id } = useParams();
  let [courseDetails, setcourseDatails] = useState();

  useEffect(() => {
    async function getCourse() {
      courseDetails = await fetchData(`/details/${id}`);
      setcourseDatails(courseDetails);
    }
    getCourse();
  }, [id]);

  if (!courseDetails) {
    return (
      <img
        className="loadingImg"
        src={require(`../../imgs/giphy.gif`)}
        alt=""
      />
    );
  }
  return (
    <>
      <CourseDetails courseDetails={courseDetails} id={id} />
      <div className={styles.container}>
        <CourseTable courseDetails={courseDetails} />
      </div>
    </>
  );
}
