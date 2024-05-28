import React from "react";
import styles from "./Fav.module.css";
import LayoutContainer from "../LayoutContainer/LayoutContainer";
import Star from "../Stars/Star";
import { useFavouritesContext } from "../../Context/FavouritesContext/FavouritesContext";
export default function Fav() {
  let { isFavOpen, favItems } = useFavouritesContext();
  return (
    isFavOpen && (
      <section className={styles.favourites}>
        <LayoutContainer>
          <h2 className="capitalize">my favourites topics</h2>
          <div className={styles.favouritesContent} id="favContent">
          {favItems.map((fav) => (
            <>
                <div className={styles.favouritesContentBox}>
                  <img src={require(`./../../imgs/courses/${fav.image}`)} alt />
                  <div className={styles.favouritesText}>
                    <h3 className="capitalize">{fav.topic}</h3>
                    <div className="stars">
                      <Star courseRating={fav.rating} />
                    </div>
                  </div>
                </div>
            </>
          ))}
          </div>
        </LayoutContainer>
      </section>
    )
  );
}
