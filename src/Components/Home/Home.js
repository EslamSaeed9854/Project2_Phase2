import Courses from "../Home/Courses";
function Home(props) {
  let data_python = props.python_courses_data;
  let aws_data = props.aws_data;
  let data_science_data = props.data_science_data;
  let draw_data = props.draw_data;
  let excel_data = props.excel_data;
  let web_data = props.web_data;
  return (
    <Courses
      data_python={data_python}
      aws_data={aws_data}
      data_science_data={data_science_data}
      draw_data={draw_data}
      excel_data={excel_data}
      web_data={web_data}
    />
  );
}

export default Home;
