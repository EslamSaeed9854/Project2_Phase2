import React from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import CourseItem from "./Course_Folder/ItemCourse";
import Navbar from "./Home/Navbar";
import Footer from "./Home/Footer";
import Test from "./Home/Test";
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
          return response.json();
        })
        .then(function (myJson) {
          setData(myJson);
        });
    };
    useEffect(() => {
      getData();
    }, []);
    return data;
  }
  let aws_data = Get_data("https://api.npoint.io/a9873bb623fc92f84dcd");
  let web_data = Get_data("https://api.npoint.io/53bc1a72b5a018b37a9e");
  let draw_data = Get_data("https://api.npoint.io/1d102302a97a47becc47");
  let rate_data = Get_data("https://api.npoint.io/bcf5a1773ffabab319e4");
  let excel_data = Get_data("https://api.npoint.io/1aeb4646e34d61ba62df");
  let content_data = Get_data("https://api.npoint.io/67f136a92e7213c30ada");
  let instructors_data = Get_data("https://api.npoint.io/d4dec729443bf640622f");
  let data_science_data = Get_data("https://api.npoint.io/808be90a6d05ba845202");
  let python_courses_data = Get_data("https://api.npoint.io/84d5eeaa1586eef2e57b");
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/Home/CourseItem"
          element={
            <CourseItem
              instructors_data={instructors_data}
              rate_data={rate_data}
              content_data={content_data}
            />
          }
        ></Route>
        <Route
          path="/Home"
          element={
            <Home
              python_courses_data={python_courses_data}
              aws_data={aws_data}
              data_science_data={data_science_data}
              draw_data={draw_data}
              excel_data={excel_data}
              web_data={web_data}
            />
          }
        ></Route>
      </Routes>
      <Footer />
      <Test/>
    </div>
  );
}

export default App;
