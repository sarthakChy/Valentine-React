import React from "react";
import Main from "./Main";
import Maze from "./Maze";
import Start from "./Start";
import Tinder from "./Tinder";
import Yes from "./Yes";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import No from "./No";
function App() {


  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/maze" element={<Maze/>}/>
            <Route path="/start" element={<Start/>}/>
            <Route path="/no" element={<No/>}/>
            <Route path="/yes" element={<Yes/>}/>
            <Route path="/card" element={<Tinder/>}/>

          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
