import { InfoCircleFill, Globe, BadgeCcFill } from "react-bootstrap-icons";
import "./CourseDescription.css";

function CourseDescription({ courseData }) {
  return (
    <div className="courseHeader">
      <div>
        {courseData.path1 + " > " + courseData.path2 + " > " + courseData.path3}
      </div>
      <h4>{courseData.title}</h4>
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