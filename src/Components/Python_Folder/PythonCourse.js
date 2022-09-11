import React from "react";
import CourseContent from "../Python_Folder/CourseContents";
import Description from "../Home/Description";
import OverView from "../Python_Folder/OverView";
import Requirements from "../Python_Folder/Requirements";
import Instructors from "../Python_Folder/Instructors";
import Ratings from "../Python_Folder/Ratings";
import CourseDescription from "../Home/CourseDescription";
import CourseCard from "../Python_Folder/CourseCard";
function PythonCourse(props) {
  return (
    <div>
      {" "}
      <CourseDescription courseData={{}} />{" "}
      <div class="row">
        <div class="col-7 ms-2">
          <div class="container mt-5 mb-5" style={{ width: "800px" }}>
            <OverView />
            <CourseContent content_data = {props.content_data}/>
            <Requirements />
            <Description />
            <Instructors  instructors_data = {props.instructors_data}/>
            <Ratings rate_data = {props.rate_data}/>
          </div>
        </div>

        <div class="col-4 d-none d-xl-block">
          <CourseCard image ="https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg" />
        </div>
      </div>
    </div>
  );
}

export default PythonCourse;
