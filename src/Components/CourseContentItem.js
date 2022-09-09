import React from "react";

function CourseContentItem(props) {
  let mhref = "#collapseExample";
  mhref += props.id;
  let mid = "collapseExample";
  mid += props.id;
  return (
    <div>
      <p class="mb-0 w-100">
        <a
          class="btn border w-100 "
          data-bs-toggle="collapse"
          href={mhref}
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          style={{ height: "50px", backgroundColor: "rgb(209, 215, 220)" }}
        >
          {props.name}
        </a>
      </p>
      <div class="collapse" id={mid}>
        <div class="card card-body">
          {props.list.map((cur_item) => {
            return (
              <div>
                <i style={{fontSize:"18px"}} class="fa">&#xf144;</i>
                <span> {cur_item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CourseContentItem;
