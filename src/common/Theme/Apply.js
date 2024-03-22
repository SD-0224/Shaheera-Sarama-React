export default function Apply(theme) {
  let root = document.documentElement;
  if (theme == "dark") {
    root.style.setProperty("--brand-primary", "#0768AC");
    root.style.setProperty("--brand-secondary", "#03C180");
    root.style.setProperty("--bg-default", "#1A1A1A");
    root.style.setProperty("--bg-body", "#282828");
    root.style.setProperty("--lines-color", "#000000");
    root.style.setProperty("--body-text", "#EDEDED");
    root.style.setProperty("--heart-color", "#DC143C");
  } else {
    root.style.setProperty("--brand-primary", "#0768AC");
    root.style.setProperty("--brand-secondary", "#03C180");
    root.style.setProperty("--bg-default", "#FFF");
    root.style.setProperty("--bg-body", "#F0F9FF");
    root.style.setProperty("--lines-color", "#DDD");
    root.style.setProperty("--body-text", "#333");
    root.style.setProperty("--heart-color", "#DC143C");
  }
}
