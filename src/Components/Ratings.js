import React from "react";
import Rate_Item from './Rate_Item'
import data from "./rate_Item_data";
function Ratings() {
  return (
    <div>
      <th class="col-7" style={{ fontSize: "24px" }}>
        {" "}
        <i
          class="material-icons"
          style={{ color: "rgb(255, 210, 48)", fontSize: "20px" }}
        >
          star
        </i>
        4.4 course rating{" "}
        <i
          class="material-icons"
          style={{ fontSize: "16px", transform: "rotate(130deg)" }}
        >
          fiber_manual_record
        </i>
        3K ratings
      </th>
      <div class="row">
      {data.map((cur_item)=>{
        return <Rate_Item 
          name = {cur_item.name}
          img = {cur_item.img}
          paragraph = {cur_item.paragraph}
          time = {cur_item.time}
        />
      })}
      </div>
      
    </div>
  );
}

export default Ratings;