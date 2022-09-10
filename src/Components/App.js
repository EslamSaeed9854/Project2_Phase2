import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import PythonCourse from "./PythonCourse";
import Navbar from './Navbar';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/Home/Python" element={<PythonCourse/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
