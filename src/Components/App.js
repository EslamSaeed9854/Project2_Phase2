import React from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import PythonCourse from "./Python_Folder/PythonCourse";
import Navbar from './Home/Navbar';
import Footer from "./Home/Footer";
import { useState, useEffect } from "react";
function App() {
  function Get_data(uri) {
    const [data, setData] = useState([]);
    const getData = () => {
      fetch(uri, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (myJson) {
          console.log(myJson);
          setData(myJson);
        });
    };
    useEffect(() => {
      getData();
    }, []);
    return data;
  }
  let rate_data = Get_data("https://api.npoint.io/bcf5a1773ffabab319e4");
  let content_data = Get_data("https://api.npoint.io/67f136a92e7213c30ada");
  let instructors_data = Get_data("https://api.npoint.io/d4dec729443bf640622f");
  let python_courses_data = Get_data("https://api.npoint.io/84d5eeaa1586eef2e57b");
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/Home/Python" element={<PythonCourse instructors_data = {instructors_data} rate_data = {rate_data} content_data = {content_data}/>}></Route>
        <Route path="/Home" element={<Home python_courses_data = {python_courses_data} />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
