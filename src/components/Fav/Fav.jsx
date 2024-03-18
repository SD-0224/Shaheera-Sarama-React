import React from 'react'
import styles from './Fav.module.css'
import LayoutContainer from '../LayoutContainer/LayoutContainer'
import Star from '../Stars/Star'
export default function Fav() {
  return (
    <section className={styles.favourites}>
  <LayoutContainer>
    <h2 className="capitalize">my favourites topics</h2>
    <div className={styles.favouritesContent} id="favContent">
      <div className={styles.favouritesContentBox}>
        <img src="imgs/courses/react.webp" alt />
        <div className={styles.favouritesText}>
          <h3 className="capitalize">react</h3>
          <div className="stars">
           <Star/>
          </div>
        </div>
      </div>
    </div>
  </LayoutContainer>
</section>

  )
}
