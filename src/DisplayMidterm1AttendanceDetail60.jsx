import React, { useState, useEffect } from "react";
import { getData, postData } from "./FetchNodeServices";

const DisplayMidTerm1AttendanceDetail60 = () => {
  const [list, setList] = useState([]);
  const [search,setSearch]=useState("")


  const fetchAllStudent = async () => {
    const result = await getData("extras/displaymidterm1attendance60");
    setList(result);
  };

  useEffect(function () {
    fetchAllStudent();
  }, []);

  const filltable = () => {
    return list.filter((val)=>{
      if(search===""){
          return val 
      }else if (val.subcode.toLowerCase().includes(search.toLowerCase())  ){
          return val
      }
  }).map((item) => {
      return (
        <tr className="d-flex">
          <th scope="row" className="col-1">
            {item.subcode}
          </th>
          <td className="col-1">{item.mark_of_q1a}</td>
          <td className="col-1">{item.mark_of_q1b}</td>
          <td className="col-1">{item.mark_of_q1c}</td>
          <td className="col-1">{item.mark_of_q1d}</td>
          <td className="col-1">{item.mark_of_q1e}</td>
          <td className="col-1">{item.mark_of_q2a}</td>
          <td className="col-1">{item.mark_of_q2b}</td>
          <td className="col-1">{item.mark_of_q2c}</td>
          <td className="col-1">{item.mark_of_q3}</td>
          <td className="col-1">{item.mark_of_q4}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <div className="container">
        <h4>Mid Term-1 Questions Attempted by students with more than 60% score</h4>
        <input class="form-control search col-sm-12 col-xs-12 col-md-12 mx-auto" type="text" placeholder="Search...." aria-label="Search a record" onChange={event=>{setSearch(event.target.value)}}></input>

        <table class="table table-hover table-dark col-sm-12 col-xs-12 col-md-12 mx-auto">
          <thead>
            <tr className="d-flex">
              <th scope="col" className="col-1">
                Subject Code
              </th>
              <th scope="col" className="col-1">
                Q1(A)
              </th>
              <th scope="col" className="col-1">
                Q1(B)
              </th>
              <th scope="col" className="col-1">
                Q1(C)
              </th>
              <th scope="col" className="col-1">
                Q1(D)
              </th>
              <th scope="col" className="col-1">
                Q1(E)
              </th>
              <th scope="col" className="col-1">
                Q2(A)
              </th>
              <th scope="col" className="col-1">
                Q2(B)
              </th>
              <th scope="col" className="col-1">
                Q2(C)
              </th>
              <th scope="col" className="col-1">
                Q3
              </th>
              <th scope="col" className="col-1">
                Q4
              </th>
            </tr>
          </thead>
          <tbody>{filltable()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayMidTerm1AttendanceDetail60;
