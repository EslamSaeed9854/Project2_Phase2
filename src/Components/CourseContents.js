import React from "react";
import CourseContentItem from "./CourseContentItem";
import data from "./data";

function CourseContent() {
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
        <div class="col-4" style={{ textIndent: "20%"}}>
          <button class ="fw-bold bg-white" style={{border :"0px",  fontSize: "20px", color: "blueviolet"  }}
           onClick={ ()=>{
           
          }}
           >
            {" "}
            Expand all sections
          </button>
        </div>
      </div>
      { data.map((cur_course)=>{
       return  <CourseContentItem id = {cur_course.id} name ={cur_course.CourseName} list = {cur_course.CourseInside}/>
     })}
    </div>
  );
}

export default CourseContent;
