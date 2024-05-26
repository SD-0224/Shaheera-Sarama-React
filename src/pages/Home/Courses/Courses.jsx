import style from "./Courses.module.css";
import Card from "../../../components/Card/Card";
function Courses({ courses }) {
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
