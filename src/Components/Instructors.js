import React from "react";
import Person from "./Person";
import Instructor_data from "./instructorsData";
function Instructors() {
  return (
    <div>
      <th class="col-7" style={{ fontSize: "28px" }}>
        {" "}
        Instructors
      </th>
      {Instructor_data.map((cur_item) => {
        return (<Person 
          name = {cur_item.name}
          img= {cur_item.photo}
          major = {cur_item.major}
          view = {cur_item.view}
          rate = {cur_item.rate}
          students = {cur_item.students}
          courses = {cur_item.courses}
          paragraph = {cur_item.paragraph}
        />);
      })}
    </div>
  );
}

export default Instructors;
