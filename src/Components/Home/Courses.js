import CourseItem from "../Python_Folder/CourseItem";
import "../style.css";
import Text from "../Home/Text";
import Button from "../Home/Button";
function Courses(props) {
  let i = 0;
  return (
    <div>
      <Text />
      <Button />
      <div class="Mat justify-content-between">
        {props.data_python.courses?.map((cur_item) => {
          return <CourseItem data={cur_item} ID={i++} />;
        })}
        {props.aws_data.courses?.map((cur_item) => {
          return <CourseItem data={cur_item} ID={i++} />;
        })}
        {props.data_science_data.courses?.map((cur_item) => {
          return <CourseItem data={cur_item} ID={i++} />;
        })}
        {props.draw_data.courses?.map((cur_item) => {
          return <CourseItem data={cur_item} ID={i++} />;
        })}
        {props.excel_data.courses?.map((cur_item) => {
          return <CourseItem data={cur_item} ID={i++} />;
        })}
        {props.web_data.courses?.map((cur_item) => {
          return <CourseItem data={cur_item} ID={i++} />;
        })}
      </div>
    </div>
  );
}

export default Courses;
