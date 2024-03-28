import Apply from './Apply';
export default function DefaultTheme() {
  // Check localStorage for theme preference
  if(localStorage.getItem("theme")){
    if (localStorage.getItem("theme") === "dark") {
      Apply("dark");
    } else {
      Apply("light");
    }
  }
  else if (!localStorage.getItem("theme")) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      Apply("dark");
    } else {
      Apply("light");
    }
  }
}
