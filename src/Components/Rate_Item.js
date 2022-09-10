import React from "react";

function Rate_Item(props) {
  return (
    <div className="col-6">
        <p>________________________________________________________</p>
      <div class="row">
        <div
          class="badge bg-black rounded-circle"
          style={{ height: "3rem", width: "3rem" }}
        >
          <div class="mt-3">{props.img}</div>
        </div>
        <div className="col">
          <span class="col-7 fw-bold" style={{ fontSize: "24px" }}>
            {" "}
            {props.name}
          </span>
          <div>
            <span
              class="material-icons"
              style={{ color: "rgb(255, 210, 48)", fontSize: "20px" }}
            >
              star
            </span>
            <span
              class="material-icons"
              style={{ color: "rgb(255, 210, 48)", fontSize: "20px" }}
            >
              star
            </span>
            <span
              class="material-icons"
              style={{ color: "rgb(255, 210, 48)", fontSize: "20px" }}
            >
              star
            </span>
            <span
              class="material-icons"
              style={{ color: "rgb(255, 210, 48)", fontSize: "20px" }}
            >
              star
            </span>
            <span
              class="material-icons"
              style={{ color: "rgb(255, 210, 48)", fontSize: "20px" }}
            >
              star
            </span>
            <span> {props.time}</span>
          </div>
        </div>
      </div>
      <p>
        <br></br>
        {props.paragraph}
      </p>
      <span>Helpful? </span>
      <span class="material-icons" style={{fontSize: "22px"}}>thumb_up_off_alt</span>
      <span class="material-icons" style={{fontSize: "22px"}}>&nbsp;&nbsp;thumb_down_off_alt</span>
    </div>
  );
}

export default Rate_Item;
