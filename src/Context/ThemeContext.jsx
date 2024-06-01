import React, { createContext, useContext, useState, useEffect } from "react";
let themeContext = createContext(null);
export default function ThemeContext({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  function toggleTheme() {
    let chosenTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", chosenTheme);
    setTheme(chosenTheme);
  }
  useEffect(() => {
    if (theme === null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        localStorage.setItem("theme", "dark");
        setTheme("dark");
      } else {
        localStorage.setItem("theme", "light");
        setTheme("light");
      }
    }
  }, []);
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}
export function useThemeContext() {
  return useContext(themeContext);
}
