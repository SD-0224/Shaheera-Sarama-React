export default function Toggle() {
  // Toggle theme between light and dark
  if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
    apply("light");
  } else {
    localStorage.setItem("theme", "dark");
    apply("dark");
  }
}
