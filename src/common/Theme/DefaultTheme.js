import Apply from './Apply';
export default function DefaultTheme() {
  // Check localStorage for theme preference
  if (localStorage.getItem("theme") === "dark") {
    Apply("dark");
  } else {
    Apply("light");
  }

  // check for user default system
  if (!localStorage.getItem("theme")) {
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
