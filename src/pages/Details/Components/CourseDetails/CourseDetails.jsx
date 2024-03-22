import React from 'react'
import styles from './CourseDetails.module.css'
import Stars from './../../../../components/Stars/Star'
import CourseBox from '../CourseBox/CourseBox'

function fav(id){
  alert (id)
}
export default function CourseDetails({courseDetails,id}) {
  return (
    <section className={styles.courseDatails}>
          <div className={styles.container}>
            <div className={styles.courseDetailsText}>
              <h2>{courseDetails.category}</h2>
              <h3>{courseDetails.topic}</h3>
              <div className={styles.star}>
                <Stars courseRating={courseDetails.rating}/>
              </div>
              <p className="course-desc">
                {courseDetails.description}
              </p>
            </div>
            <CourseBox courseDetails={courseDetails} id={id}/>
          </div>
        </section>
  )
}
