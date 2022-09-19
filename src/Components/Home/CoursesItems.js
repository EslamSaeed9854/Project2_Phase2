import CourseItem from "../Home/CourseItem";
function CoursesItems(props) {
    let i = 0;
  return (
    <div class="Mat  justify-content-center" style = {{ border :"none"}}>
      {props.data_python.courses?.map((cur_item) => {
          return cur_item.title.toLowerCase().indexOf(localStorage.srch.toLowerCase()) > -1 ? <CourseItem data={cur_item} ID={i++} />:<i></i>;
        })}
        {props.aws_data.courses?.map((cur_item) => {
          return cur_item.title.toLowerCase().indexOf(localStorage.srch.toLowerCase()) > -1 ? <CourseItem data={cur_item} ID={i++} />:<i></i>;
        })}
        {props.data_science_data.courses?.map((cur_item) => {
           return cur_item.title.toLowerCase().indexOf(localStorage.srch.toLowerCase()) > -1 ? <CourseItem data={cur_item} ID={i++} />:<i></i>;
        })}
        {props.draw_data.courses?.map((cur_item) => {
          return cur_item.title.toLowerCase().indexOf(localStorage.srch.toLowerCase()) > -1 ? <CourseItem data={cur_item} ID={i++} />:<i></i>;
        })}
        {props.excel_data.courses?.map((cur_item) => {
          return cur_item.title.toLowerCase().indexOf(localStorage.srch.toLowerCase()) > -1 ? <CourseItem data={cur_item} ID={i++} />:<i></i>;
        })}
        {props.web_data.courses?.map((cur_item) => {
           return cur_item.title.toLowerCase().indexOf(localStorage.srch.toLowerCase()) > -1 ? <CourseItem data={cur_item} ID={i++} />:<i></i>;
        })}
    </div>
  );
}

export default CoursesItems;
