import React from "react";
import CourseContent from "./CourseContents";
import OverView from "./OverView";

function App() {
  return(
<div class="container mt-5" style={{width:'800px'}}>
    <OverView/>
    <CourseContent/>
  </div>
  ) 
}

export default App;
