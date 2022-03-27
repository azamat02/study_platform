import React from 'react';
import './static/fonts/gilroy/stylesheet.css'
import './styles/main.scss'
import {Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import CollegePage from "./pages/CollegePage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={"/"} element={<MainPage/>}/>
            <Route path={"/college/:id"} element={<CollegePage/>}/>
        </Routes>
    </div>
  );
}

export default App;
