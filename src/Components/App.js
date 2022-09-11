import React from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import PythonCourse from "./Python_Folder/PythonCourse";
import Navbar from "./Home/Navbar";
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
  let python_courses_data = Get_data(
    "https://api.npoint.io/84d5eeaa1586eef2e57b"
  );
  let aws_data = Get_data("https://api.npoint.io/a9873bb623fc92f84dcd");
  let data_science_data = Get_data(
    "https://api.npoint.io/808be90a6d05ba845202"
  );
  let draw_data = Get_data("https://api.npoint.io/1d102302a97a47becc47");
  let excel_data = Get_data("https://api.npoint.io/1aeb4646e34d61ba62df");
  let web_data = Get_data("https://api.npoint.io/53bc1a72b5a018b37a9e");
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/Home/Python"
          element={
            <PythonCourse
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
    </div>
  );
}

export default App;
