import Courses from "../Home/Courses";
function Home( props) {
  return(
      <Courses 
      data_python = {props.python_courses_data}
      aws_data={props.aws_data}
      data_science_data={props.data_science_data}
      draw_data={props.draw_data}
      excel_data={props.excel_data}
      web_data={props.web_data}
      
      />
  );
}

export default Home;