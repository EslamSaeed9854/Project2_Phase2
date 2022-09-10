import React from "react";
import Person from "../Python_Folder/Person";
import {useState,useEffect} from 'react';
function Instructors() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('https://api.npoint.io/d4dec729443bf640622f'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <th class="col-7" style={{ fontSize: "28px" }}>
        {" "}
        Instructors
      </th>
      {data.map((cur_item) => {
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
