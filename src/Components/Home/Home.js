import Courses from "../Home/Courses";
function Home( props) {
  return(
      <Courses data = {props.python_courses_data}/>
  );
}

export default Home;