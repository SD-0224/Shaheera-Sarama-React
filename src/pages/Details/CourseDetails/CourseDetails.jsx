import React from 'react'
import styles from './CourseDetails.module.css'
import Stars from './../../../components/Stars/Star'
export default function CourseDetails() {
  return (
    <section className={styles.courseDatails}>
          <div className={styles.container}>
            <div className={styles.courseDetailsText}>
              <h2>Web Development Languages</h2>
              <h3>HTML</h3>
              <div className={styles.star}>
                <Stars />
              </div>
              <p className="course-desc">
                HTML (Hypertext Markup Language) is the standard markup language
                for creating web pages and other information that can be
                displayed in a web browser. It provides a structure for content
                and defines how it should be displayed on a web page, including
                text, images, and multimedia. HTML is essential for creating
                static web pages and is a foundational technology for the World
                Wide Web
              </p>
            </div>
            <div className={styles.courseDetailBox}>
              <img src="imgs/courses/html.png" alt />
              <div className={styles.courseDetailBoxContent}>
                <p className={styles.author}>
                  <span>html</span> by{" "}
                  <a href className="capitalize">
                    sarah smith
                  </a>
                </p>
                <div className={styles.courseDetailBoxFav}>
                  <p id="alredyFav">
                    <span className="capitalize">i</span>ntreseted about this
                    topic?
                  </p>
                  <a href className="capitalize">
                    add to favourite
                    <ion-icon
                      name="heart-outline"
                      role="img"
                      className="md hydrated"
                    />
                  </a>
                  <p className="cred capitalize">unlimted credits</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
