import { createContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Shapes from "./components/Shapes/Shapes.jsx";
import { Route, Routes } from "react-router-dom";
import Details from "./pages/Details/Details.jsx";
import FavouritesContext from "./Context/FavouritesContext/FavouritesContext.jsx";
import Fav from "./components/Fav/Fav.jsx";
export let ThemeContext = createContext();

function App() {
  let [theme, setTheme] = useState(localStorage.getItem("theme"));
  function toggleTheme() {
    let chosenTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", chosenTheme);
    setTheme(chosenTheme);
  }
  useEffect(() => {
    if (theme === null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        localStorage.setItem("theme", "dark");
        setTheme("dark");
      } else {
        localStorage.setItem("theme", "light");
        setTheme("light");
      }
    }
  }, []);
  return (
    <div className={`App ${theme}`}>
      <ThemeContext.Provider value={{theme,toggleTheme}}>
        <FavouritesContext>
          <Header togglefunction={toggleTheme} />
          <Shapes />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/details/:id" element={<Details />}></Route>
          </Routes>
          <Footer />
          <Fav />
        </FavouritesContext>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

/*
Remove from favs 
slide smothily 
theme with context
checkign for files
create useFetch Hook
*/