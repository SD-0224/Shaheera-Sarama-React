import style from "./Header.module.css";
import UiButton from "./../UiButtons/UiButtons";
import LayoutContainer from "../LayoutContainer/LayoutContainer";

function Header() {
  return (
    <header>
      <LayoutContainer>
      <nav className="flex">
          <div className={style.logo}>
            <a href="index.html">web topics</a>
          </div>

          <div className={`${style.buttonsNav} flex`}>
            <UiButton className="flex" label="dark mode" icon="moon-outline" onMouseOver={()=>{alert("mouse")}} onClick = {()=>{alert('hi')}}/>
            <UiButton label="favourites" icon="heart-outline" />
          </div>
        </nav>
      </LayoutContainer>
    </header>
  );
}
export default Header;
