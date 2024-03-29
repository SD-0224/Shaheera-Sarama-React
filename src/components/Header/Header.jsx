import style from "./Header.module.css";
import UiButton from "./../UiButtons/UiButtons";
import LayoutContainer from "../LayoutContainer/LayoutContainer";
import { Link } from "react-router-dom";
// import Toggle from "../../common/Theme/Toggle";

function Header({ togglefunction, theme }) {
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
              onClick={togglefunction}
            />
            <UiButton label="favourites" icon="heart-outline" />
          </div>
        </nav>
      </LayoutContainer>
    </header>
  );
}
export default Header;
