import Apply from './Apply';
export default function Toggle() {
  // Toggle theme between light and dark
  if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
    Apply("light");
  } else {
    localStorage.setItem("theme", "dark");
    Apply("dark");
  }
}
