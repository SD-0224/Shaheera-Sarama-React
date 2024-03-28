import { useContext, useEffect, useState } from "react";
import { fetchData } from "../../common/fetch";
import style from "./Courses.module.css";
import { getRating } from "../../common/rating";
import Card from "../Card/Card";
function Courses({courses}) {
  // console.log(courses);
  // let [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   async function getAllCourses() {
  //     let allCourses = await fetchData("/list");
  //     setCourses(allCourses);
  //   }
  //   getAllCourses();
  // }, []);

  // if (courses.length == 0) {
  //   return <img src={require(`../../imgs/giphy.gif`)} className="loadingImg" />;
  // }

  return (
    <>
      <section className={style.courses}>
        <div className={style.coursestext}>
          <p className="capitalize">"{courses.length}" web topic found</p>
        </div>
        <div className={style.coursesContent}>
          {courses.map((course) => (
            <Card key={course.id} topics={course} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Courses;
