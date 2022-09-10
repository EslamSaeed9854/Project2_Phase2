import { InfoCircleFill, Globe, BadgeCcFill } from "react-bootstrap-icons";
import "./CourseDescription.css";

function CourseDescription({ courseData }) {
  return (
    <div className="courseHeader">
      <div>
        { "Development" + " > " + "Programming Languages" + " > " + "Python"}
      </div>
      <h2>Learn Python: The Complete Python Programming Course</h2>
      <p>{courseData.headline}</p>
      <div className="otherData">
        <div>{courseData.rating}</div>
        <div>{courseData.people}</div>
      </div>
      <div>
        Created by <span>{courseData.instructors}</span>
      </div>
      <div className="otherData">
        <div>
          <InfoCircleFill /> Last updated {courseData.lastUpdateDate}
        </div>
        <div>
          <Globe /> {courseData.lang}
        </div>
        <div>
          <BadgeCcFill /> {courseData.captionLang}
        </div>
      </div>
    </div>
  );
}

export default CourseDescription;