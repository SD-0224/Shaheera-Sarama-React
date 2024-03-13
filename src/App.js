import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';
import Shapes from './components/Shapes/Shapes.jsx';
import { Route, Routes } from 'react-router-dom';
import Details from './pages/Details/Details.jsx';

function App() {

  return (
    <div className="App">
      {/* <Header/> */}
      {/* <UiButton icon = 'heart' label = 'click'/> */}
      <Header/>
      <Shapes/>
      <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/details' element = {<Details/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
