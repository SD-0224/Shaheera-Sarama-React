import style from "./Header.module.css";
import UiButton from "./../UiButtons/UiButtons";

function Header() {
  return (
    <header>
      <div className="container">
        <nav className="flex">
          <div className={style.logo}>
            <a href="index.html">web topics</a>
          </div>

          <div className={`${style.buttonsNav} flex`}>
            <UiButton className="flex" label="dark mode" icon="moon-outline" />
            <UiButton label="favourites" icon="heart-outline" />
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Header;
