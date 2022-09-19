import CourseItem from "../Home/CourseItem";
import "../style.css";
import Text from "../Home/Text";
import Button from "../Home/Button";
import Spinner from "../Home/Spinner";
import CoursesItems from "../Home/CoursesItems";
function Courses(props) {
  function Check() {
    return props.web_data.courses == undefined ||
      props.excel_data.courses == undefined ||
      props.draw_data.courses == undefined ||
      props.data_science_data.courses == undefined ||
      props.data_python.courses == undefined ||
      props.aws_data.courses == undefined
      ? 0
      : 1;
  }
  return (
    <div>
      <Text />
      <Button />
      <div class="Mat m-2  justify-content-center">
        {Check() ? (
          <CoursesItems
            data_python={props.data_python}
            aws_data={props.aws_data}
            data_science_data={props.data_science_data}
            draw_data={props.draw_data}
            excel_data={props.excel_data}
            web_data={props.web_data}
          />
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default Courses;
