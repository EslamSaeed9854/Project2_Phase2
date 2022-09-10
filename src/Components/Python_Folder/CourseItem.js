
import "../style.css"
import { useNavigate } from "react-router-dom";

function CourseItem(props) {
  let route = useNavigate();
    return(
        <div class = "one-course">
          <img onClick={ ()=>{ route("/Home/Python");}} class = "ph" src={props.data.courses[props.ID].image}/>
          <p class = "tit">{props.data.courses[props.ID].title}</p>
          <p class = "cent">{props.data.courses[props.ID].instructors[0].name}</p>
          <span class="checked cent">&#9733;&#9733;&#9733;&#9733;</span>
          <span>&#9733; </span>
          <span >({props.data.courses[props.ID].rating})</span>
          <p class = "cent">${props.data.courses[props.ID].price}</p>
      </div>
    );
  }
  
  export default CourseItem;
  