import React from "react";

function OverView() {
  return (
    <div class="container border rounded row mb-3">
      <th class="col-7" style={{ fontSize: "24px" }}>
        {" "}
        What you'll learn
      </th>
      <div class="col-6" style={{ fontSize: "15px" }}>
        &#10003; Create their own Python Programs{" "}
      </div>
      <div class="col-6" style={{ fontSize: "15px" }}>
        &#10003; Become an experienced Python Programmer
      </div>
      <div class="col-6" style={{ fontSize: "15px" }}>
        &#10003; Parse the Web and Create their own Games
      </div>
    </div>
  );
}

export default OverView;
