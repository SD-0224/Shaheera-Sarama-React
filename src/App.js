import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Shapes from "./components/Shapes/Shapes.jsx";
import { Route, Routes } from "react-router-dom";
import Details from "./pages/Details/Details.jsx";

function App() {
  let [theme, setTheme] = useState(localStorage.getItem("theme"));
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
    <div className={`App ${theme}`}>
      {/* <button onClick={() => toggleTheme()}>test</button> */}
      <Header theme={theme} togglefunction = {toggleTheme}/>
      <Shapes />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
