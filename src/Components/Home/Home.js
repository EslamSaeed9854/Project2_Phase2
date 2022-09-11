import Courses from "../Home/Courses";
import data_python from '../Python_Folder/python_res.js'
function App() {
  return(
      <Courses data = {data_python}/>
  );
}

export default App;