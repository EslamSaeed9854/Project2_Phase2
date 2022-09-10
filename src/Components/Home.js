import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
    let route = useNavigate();
  return (
    <div>
     <button
        type="button"
        onClick={() => {
          route("/home/python");
        }}
        class="btn btn-primary"
      >
        Python_course
      </button>
    </div>
  );
}

export default Home;
