import style from "./Header.module.css";
import UiButton from "./../UiButtons/UiButtons";
import LayoutContainer from "../LayoutContainer/LayoutContainer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { useFavouritesContext } from "../../Context/FavouritesContext/FavouritesContext";
function Header() {
  let { ToggleFav } = useFavouritesContext();
  const {theme,toggleTheme} = useContext(ThemeContext);
  let mode = theme === "dark" ? "light" : "dark";
  return (
    <header>
      <LayoutContainer>
        <nav className="flex">
          <div className={style.logo}>
            <Link to="/">web topics</Link>
          </div>

          <div className={`${style.buttonsNav} flex`}>
            <UiButton
              className="flex"
              label={mode + " mode"}
              icon="moon-outline"
              onClick={toggleTheme}
            />
            <UiButton
              label="favourites"
              icon="heart-outline"
              onClick={() => {
                ToggleFav();
              }}
            />
          </div>
        </nav>
      </LayoutContainer>
    </header>
  );
}
export default Header;
