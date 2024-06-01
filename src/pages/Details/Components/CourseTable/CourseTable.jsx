import React from "react";
import styles from "./CoursesTable.module.css";
import CourseSub from "./CourseSub/CourseSub";
export default function CourseTable({ courseDetails }) {
  return (
    <section className={styles.courseContent}>
      <div>
        <h4 className="capitalize">
          <span> {courseDetails.topic} </span> Sub Topics
        </h4>
        <ul>
          <CourseSub subTopics={courseDetails.subtopics} />
        </ul>
      </div>
    </section>
  );
}
