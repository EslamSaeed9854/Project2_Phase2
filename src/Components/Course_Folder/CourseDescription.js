import { InfoCircleFill, Globe, BadgeCcFill } from "react-bootstrap-icons";
import "./CourseDescription.css";

function CourseDescription({ courseData }) {
  return (
    <div className="courseHeader bg-dark">
      <div class = "fw-bold" style = {{color:"blueviolet"}}>
        <span>  Development </span> <span style = {{verticalAlign: "middle"}} class="material-icons">navigate_next</span>
         <span >Programming Languages </span> <span span  style = {{verticalAlign: "middle"}} class="material-icons">navigate_next</span>
           <span>Python</span>
      </div>
      <h1 style={{ width: "800px"}}>{ localStorage.CourseTitle}</h1>
      <p>{courseData.headline}</p>
      <div className="otherData">
        <div>{courseData.rating}</div>
        <div>{courseData.people}</div>
      </div>
      <div>
        <h5  style={{ width: "600px"}}>Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!</h5>
      </div>
      <div>
        Created by  <span
        class="text-decoration-underline"
        style={{ fontSize: "15px", color: "blueviolet" }}
      >
        {" "}
        Dr. Angela Yu
      </span>
      </div>
      <div>
      <span class="material-icons" style={{fontSize: "20px" , color: "rgb(255, 210, 48)" }} >star_rate</span>
      <span class="material-icons" style={{fontSize: "20px" , color: "rgb(255, 210, 48)" }} >star_rate</span>
      <span class="material-icons" style={{fontSize: "20px" , color: "rgb(255, 210, 48)" }} >star_rate</span>
      <span class="material-icons" style={{fontSize: "20px" , color: "rgb(255, 210, 48)" }} >star_rate</span>
      <span class="material-icons" style={{fontSize: "20px" , color: "rgb(255, 210, 48)" }} >star_rate</span>
      </div>
      <div className="otherData">
        <div>
          <InfoCircleFill /> <span>  Last updated 12/2021 </span> {courseData.lastUpdateDate}
        </div>
        <div>
          <Globe/> <span>English  </span> 
        </div>
        <div>
          <BadgeCcFill /> <span> English, Arabic [Auto],15more  </span>
        </div>
      </div>
    </div>
  );
}

export default CourseDescription;