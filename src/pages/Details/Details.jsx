import UiButton from '../../components/UiButtons/UiButtons';
import styles from './Details.module.css';
export default function Details(){
    return(
        <>
       <div>
  <section className={styles.courseDatails}>
    <div className="container" id="course-datails">
      <div className={styles.courseDetailsText}>
        <h2>Web Development Languages</h2>
        <h3>HTML</h3>
        <div className={styles.star}>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        </div>
        <p className="course-desc">
        HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It provides a structure for content and defines how it should be displayed on a web page, including text, images, and multimedia. HTML is essential for creating static web pages and is a foundational technology for the World Wide Web
        </p>
      </div>
      <div className={styles.courseDetailBox}>
        <img src="imgs/courses/html.png" alt />
        <div className={styles.courseDetailBoxContent}>
          <p className={styles.author}><span>html</span> by <a href className="capitalize">sarah smith</a></p>
          <div className={styles.courseDetailBoxFav}>
            <p id="alredyFav"><span className="capitalize">i</span>ntreseted about this topic?</p>
            <a href className="capitalize" id="addTofav">add to favourite <ion-icon name="heart-outline" role="img" className="md hydrated" /></a>
            <p className="cred capitalize">unlimted credits</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className={styles.courseContent} id="table-content">
  <div>
              <h4 class="capitalize"> <span> HTML </span> Sub Topics</h4>
              <ul>
                <li>
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                    <a href="">HTML syntax and structure</a>
                </li>
                <li>
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                    <a href="">HTML elements and attributes</a>
                </li>
                <li>
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                    <a href="">HTML forms and input elements</a>
                </li>
                <li>
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                    <a href="">HTML tables and lists</a>
                </li>
                <li>
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                    <a href="">HTML multimedia elements (audio, video, images)</a>
                </li>
                <li>
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                    <a href="">HTML accessibility and semantic markup</a>
                </li>
                   </ul>
                </div>
  </section>
</div>

        </>
    )
}