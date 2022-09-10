import React from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import PythonCourse from "./Python_Folder/PythonCourse";
import Navbar from './Home/Navbar';
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
