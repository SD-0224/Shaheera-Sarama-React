import React from "react";
import styles from "./Fav.module.css";
import LayoutContainer from "../LayoutContainer/LayoutContainer";
import Star from "../Stars/Star";
import { useFavouritesContext } from "../../Context/FavouritesContext/FavouritesContext";

export default function Fav() {
  let { isFavOpen, favItems } = useFavouritesContext();
  return (
    <section
      className={`${styles.favourites} ${
        isFavOpen ? styles.favouritesOpen : styles.favouritesClose
      } ${!isFavOpen ? styles.hideFavPannel : styles.showFavPannel}`}
    >
      <LayoutContainer>
        <h2 className="capitalize">my favourites topics</h2>
        <div className={styles.favouritesContent} id="favContent">
          {favItems.map((fav) => (
            <div key={fav.topic} className={styles.favouritesContentBox}>
              <img
                src={require(`./../../imgs/courses/${fav.image}`)}
                alt={fav.topic}
              />
              <div className={styles.favouritesText}>
                <h3 className="capitalize">{fav.topic}</h3>
                <div className="stars">
                  <Star courseRating={fav.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
}
