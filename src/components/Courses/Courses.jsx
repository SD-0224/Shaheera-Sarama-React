import { useEffect, useState } from "react";
import { fetchData } from "../../common/fetch";
import style from "./Courses.module.css";
import { getRating } from "../../common/rating";
import Card from "../Card/Card";
function Courses() {
  let [Courses, setCourses] = useState([]);

  useEffect(async () => {
    let allCourses = await fetchData("/list");
    setCourses(allCourses);
  }, []);

  return (
    <>
      <main>
        <div className="container">
          <section className={style.courses}>
            <div className={style.coursestext}>
              <p className="capitalize">"24" web topic found</p>
            </div>
            <div id="courses-content" className={style.coursesContent}>
                {
                    Courses.map((course)=>(
                        <Card topics={course}/>

                    ))
                }
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Courses;