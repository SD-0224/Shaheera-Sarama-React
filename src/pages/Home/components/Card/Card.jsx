import { Link } from "react-router-dom";
import style from "./Card.module.css";
import Star from "../../../../components/Stars/Star";
export default function Card({ topics }) {
  return (
    <>
      <div className={style.courseBox}>
        <Link to={`/details/${topics.id}`}>
          <img
            src={require(`../../../../imgs/courses/${topics.image}`)}
            alt={topics.title}
          />
          <div className={style.courseBoxText}>
            <div className={style.coursesHeadings}>
              <h2>{topics.category}</h2>
              <h3>{topics.topic}</h3>
            </div>
            <Star className={style.stars} courseRating={topics.rating} />
            <p className="capitalize">author: {topics.name}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
