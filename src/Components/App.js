import React from "react";
import CourseContent from "./CourseContents";
import Description from "./Description";
import OverView from "./OverView";
import Requirements from "./Requirements";
import Instructors from './Instructors'
import Ratings from "./Ratings";
function App() {
  return(
<div class="container mt-5 mb-5" style={{width:'800px'}}>
    <OverView/>
    <CourseContent/>
    <Requirements/>
    <Description/>
    <Instructors/>
    <Ratings/>
  </div>
  ) 
}

export default App;
