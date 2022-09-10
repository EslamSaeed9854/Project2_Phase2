import React from "react";
import CourseContent from "./CourseContents";
import Description from "./Description";
import OverView from "./OverView";
import Requirements from "./Requirements";
import Instructors from "./Instructors";
import Ratings from "./Ratings";
import CourseDescription from "./CourseDescription";
import CourseCard from "./CourseCard";
function App() {
  return (
    <div>
      {" "}
      <CourseDescription courseData={{}} />{" "}
      <div class="row">
        <div class="col-7">
          <div class="container mt-5 mb-5" style={{ width: "800px" }}>
            <OverView />
            <CourseContent />
            <Requirements />
            <Description />
            <Instructors />
            <Ratings />
          </div>
        </div>

        <div class="col-5">
          <CourseCard image ="https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg" />
        </div>
      </div>
    </div>
  );
}

export default App;
