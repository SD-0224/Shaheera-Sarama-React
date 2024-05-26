import style from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer>
        <p>
          <span className={style.capitalize}>Developed</span> with{" "}
          <ion-icon name="heart"></ion-icon> &copy; 2024
        </p>
      </footer>
    </>
  );
}
export default Footer;
