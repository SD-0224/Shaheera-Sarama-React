import React from "react";
import styles from "./CoursesTable.module.css";
import CourseSub from "./CourseSub/CourseSub";
export default function CourseTable() {
  return (
    <section className={styles.courseContent}>
      <div>
        <h4 class="capitalize">
          <span> HTML </span> Sub Topics
        </h4>
        <ul>
          <CourseSub subTopics={["Html syntax and structure", "Html elements and attributes","Html forms and input elements","Html tabels and lists","HTML multimedia elements (audio, video, images)","HTML accessibility and semantic markup"]} />
        </ul>
      </div>
    </section>
  );
}
