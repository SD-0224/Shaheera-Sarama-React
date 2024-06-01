import "./App.css";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Shapes from "./components/Shapes/Shapes.jsx";
import { Route, Routes } from "react-router-dom";
import Details from "./pages/Details/Details.jsx";
import FavouritesContext from "./Context/FavouritesContext/FavouritesContext.jsx";
import Fav from "./components/Fav/Fav.jsx";
import { useThemeContext } from "./Context/ThemeContext.jsx";
function App() {
  const { theme } = useThemeContext();

  return (
    <div className={`App ${theme}`}>
      <FavouritesContext>
        <Header />
        <Shapes />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
        <Footer />
        <Fav />
      </FavouritesContext>
    </div>
  );
}

export default App;

/*
slide smothily 
theme with context
*/
