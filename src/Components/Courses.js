import CourseItem from "./CourseItem";
import "../style.css";
import Text from "./Text";
import Button from "./Button";
function Courses(props) {
  let i = 0;
  return (
    <div >
      <Text/>
      <Button/>
      <div class="Mat">
      <CourseItem data={props.data} ID={i++} />
      <CourseItem data={props.data} ID={i++} />
      <CourseItem data={props.data} ID={i++} />
      <CourseItem data={props.data} ID={i++} />
      <CourseItem data={props.data} ID={i++} />
      </div>
     
    </div>
  );
}

export default Courses;
