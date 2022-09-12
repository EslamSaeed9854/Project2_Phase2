import React from "react";

function Person(props) {
  return (
    <div class ="mb-5">
      <th
        class="col-7 text-decoration-underline"
        style={{ fontSize: "18px", color: "blueviolet" }}
      >
        {" "}
        {props.name}
      </th>
      <br></br>
      <p>{props.major}</p>
      <div className="row mb-3">
        <div class="col-3">
          <img
            src={props.img}
            class="w-100 rounded-circle d-block"
            alt="..."
          />
        </div>
        <div class="col-4">
          <div>
            <i class="fa fa-star"></i> {props.rate}
          </div>
          <br></br>
          <div>
            {" "}
            <i class="fa fa-certificate"></i>{props.view}
          </div>
          <br></br>
          <div>
            <i style={{ fontSize: "10px" }} class="fa">
              &#xf0c0;
            </i>{" "}
            {props.students}
          </div>
          <br></br>
          <div>
            <i style={{ fontSize: "15px" }} class="fa">
              &#xf144;
            </i>{" "}
            {props.courses}
          </div>
        </div>
      </div>
      <div>
       {props.paragraph}
      </div>
    </div>
  );
}

export default Person;
