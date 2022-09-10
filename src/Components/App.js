import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import PythonCourse from "./PythonCourse";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/home/python" element={<PythonCourse/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
