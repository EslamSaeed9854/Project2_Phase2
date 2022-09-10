import React from "react";
import { ArrowsExpand } from "react-bootstrap-icons";
import CourseContentItem from "../Python_Folder/CourseContentItem";
//import data from "../all_Data/course_contente_data";
import {useState,useEffect} from 'react';
function CourseContent() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('https://api.npoint.io/67f136a92e7213c30ada'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
 
  let expnd = "Expand all sections";
  let collps = "Collapse all sections";
  let cur_mood = expnd;
  function expand() {
    for (let i = "1"; i <= "10"; i++) {
      let cur = "collapseExample" + i;
      document.getElementById(cur).classList.add("active");
      document.getElementById(cur).classList.remove("collapse");
    }
  }
  function collapse() {
    for (let i = "1"; i <= "10"; i++) {
      let cur = "collapseExample" + i;
      document.getElementById(cur).classList.add("collapse");
      document.getElementById(cur).classList.remove("active");
    }
  }
  function do_it() {
    if (cur_mood == expnd) {
      expand();
      cur_mood = collps;
    } else {
      collapse();
      cur_mood = expnd;
    }
    document.getElementById("btn").textContent = cur_mood;
  }

  return (
    <div class="mb-5">
      <th class="col-7" style={{ fontSize: "27px" }}>
        {" "}
        Course content
      </th>
      <br></br>
      <div className="row">
        <div className="col-7">
          15 sections • 146 lectures • 14h 42m total length
        </div>
        <div class="col-1"></div>
        <div class="col-4" style={{ textIndent: "20%" }}>
          <button
            id="btn"
            class="fw-bold bg-white"
            style={{ border: "0px", fontSize: "20px", color: "blueviolet" }}
            onClick={do_it}
          >
            {" "}
            {cur_mood}
          </button>
        </div>
      </div>
      {console.log("=========")}
      {console.log(data)}
      {data.map((cur_course) => {
        return (
          <CourseContentItem
            id={cur_course.id}
            name={cur_course.CourseName}
            list={cur_course.CourseInside}
          />
        );
      })}
    </div>
  );
}

export default CourseContent;
