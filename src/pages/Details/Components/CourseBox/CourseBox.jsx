import React from "react";
import styles from "./CourseBox.module.css";
import { useFavouritesContext } from "../../../../Context/FavouritesContext/FavouritesContext";

export default function CourseBox({ courseDetails, id }) {
  let { addToFavs, courseState, removeFromFavs, setIsFavOpen } =
    useFavouritesContext();
  return (
    <>
      <div className={styles.courseDetailBox}>
        <img
          src={require(`../../../../imgs/courses/${courseDetails.image}`)}
          alt
        />
        <div className={styles.courseDetailBoxContent}>
          <p className={styles.author}>
            <span>{courseDetails.topic}</span> by{" "}
            <a href className="capitalize">
              {courseDetails.name}
            </a>
          </p>
          <div className={styles.courseDetailBoxFav}>
            <p id="alredyFav">
              <span className="capitalize">i</span>ntreseted about this topic?
            </p>
            <button
              className="capitalize"
              onClick={() => {
                courseState(courseDetails)
                  ? removeFromFavs(courseDetails)
                  : addToFavs(courseDetails);
                setIsFavOpen(true);
              }}
            >
              {courseState(courseDetails)
                ? "remove from favourite"
                : "add to favourite"}

              <ion-icon
                name="heart-outline"
                role="img"
                className="md hydrated"
              />
            </button>
            <p className="cred capitalize">unlimted credits</p>
          </div>
        </div>
      </div>
    </>
  );
}
