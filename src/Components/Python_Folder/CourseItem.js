
import "../style.css"
import { useNavigate } from "react-router-dom";

function CourseItem(props) {
  let route = useNavigate();
    return(
        <div class = "one-course">
          <img onClick={ ()=>{ route("/Home/Python");}} class = "ph" src={props.data.image}/>
          <p class = "tit">{props.data.title}</p>
          <p class = "cent">{props.data.instructors[0].name}</p>
          <div className="col">
          <span class="checked cent">&#9733;&#9733;&#9733;&#9733;</span>
          <span class="">&#9733; </span>
          </div>
          
          <span class="ms-3" >({props.data.rating})</span>
          <p class = "cent">${props.data.price}</p>
      </div>
    );
  }
  
  export default CourseItem;
  