import CourseItem from "../Python_Folder/CourseItem";
import "../style.css";
import Text from "../Home/Text";
import Button from "../Home/Button";
function Courses(props) {
  let i = 0;
  return (
    <div >
      <Text/>
      <Button/>
      <div class="Mat justify-content-between">
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
