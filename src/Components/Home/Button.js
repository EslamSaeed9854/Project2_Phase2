import { useNavigate } from "react-router-dom";

import "../style.css";
function Button() {
  let route = useNavigate();

  return (
    <div>
      <button class ="expore-pyth" onClick={ ()=>{ route("/Home/Python");}} >Explore Python</button>
    </div>
  );
}

export default  Button;
