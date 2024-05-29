import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import useStorageState from "../../hooks/useStorageState";
const favouritesContext = createContext(null);

// Creating a shared context for favourites Courses includes the pannel state and favourites courses

export default function FavouritesContext({ children }) {
  const [isFavOpen, setIsFavOpen] = useState(false);
  const [favItems, setFavItems] = useStorageState("favscourses", []);

  //Toggle function
  const ToggleFav = () => {
    setIsFavOpen(!isFavOpen);
  };

  //Add to Favs
  const addToFavs = (courseDetails) => {
    let duplicatedCourse = favItems.find((fav) => {
      return courseDetails.id === fav.id;
    });
    if (!duplicatedCourse) {
      setFavItems([...favItems, courseDetails]);
    }
  };

  //Remove from Favourotes 
  let removeFromFavs = (courseDetails) =>{
    setFavItems(favItems.filter((fav)=> fav.id !== courseDetails.id ));
  }

  // Check for coures status
  let courseState = (courseDetails) => {
    let duplicatedCourse = favItems.find((fav) => {
      return fav.id === courseDetails.id;
    });
    return duplicatedCourse ? true : false;
  };

  return (
    <favouritesContext.Provider
      value={{
        isFavOpen,
        setIsFavOpen,
        ToggleFav,
        favItems,
        setFavItems,
        addToFavs,
        courseState,
        removeFromFavs
      }}
    >
      {children}
    </favouritesContext.Provider>
  );
}

// Exporting function that return useContext values so I can use them in any component without calling useContext every time
export function useFavouritesContext() {
  return useContext(favouritesContext);
}
