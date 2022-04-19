import React, { useState, useEffect } from "react";
import { getData, postData } from "./FetchNodeServices";

const DisplayLevelMidTerm1 = () => {
  const [list, setList] = useState([]);
  const [search,setSearch]=useState("")


  const fetchAllStudent = async () => {
    const result = await getData("extras/displaypercentagemidterm1attendance60");
    setList(result);
            // alert(JSON.stringify(result))

  };

  useEffect(function () {
    fetchAllStudent();
  }, []);
  var x
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
          <td className="col-1">{(item.mark_of_q1a<60?0:item.mark_of_q1a>=60 && item.mark_of_q1a< 70?1+((item.mark_of_q1a%10)/10):item.mark_of_q1a>=70 && item.mark_of_q1a<80 ?2+((item.mark_of_q1a%10)/10):item.mark_of_q1a>80?3:4).toPrecision(2)}</td>
          <td className="col-1">{(item.mark_of_q1b<60?0:item.mark_of_q1b>=60 && item.mark_of_q1b< 70?1+((item.mark_of_q1b%10)/10):item.mark_of_q1b>=70 && item.mark_of_q1b<80 ?2+((item.mark_of_q1b%10)/10):item.mark_of_q1b>80?3:4).toPrecision(2)}</td>
          <td className="col-1">{(item.mark_of_q1c<60?0:item.mark_of_q1c>=60 && item.mark_of_q1c< 70?1+((item.mark_of_q1c%10)/10):item.mark_of_q1c>=70 && item.mark_of_q1c<80 ?2+((item.mark_of_q1c%10)/10):item.mark_of_q1c>80?3:4).toPrecision(2)}</td>
          <td className="col-1">{(item.mark_of_q1d<60?0:item.mark_of_q1d>=60 && item.mark_of_q1d< 70?1+((item.mark_of_q1d%10)/10):item.mark_of_q1d>=70 && item.mark_of_q1d<80 ?2+((item.mark_of_q1d%10)/10):item.mark_of_q1d>80?3:4).toPrecision(2)}</td>
          <td className="col-1">{(item.mark_of_q1e<60?0:item.mark_of_q1e>=60 && item.mark_of_q1e< 70?1+((item.mark_of_q1e%10)/10):item.mark_of_q1e>=70 && item.mark_of_q1e<80 ?2+((item.mark_of_q1e%10)/10):item.mark_of_q1e>80?3:4).toPrecision(2)}</td>
          <td className="col-1">{(x=((item.mark_of_q2a<60?0:item.mark_of_q2a>=60 && item.mark_of_q2a< 70?1+((item.mark_of_q2a%10)/10):item.mark_of_q2a>=70 && item.mark_of_q2a<80 ?2+((item.mark_of_q2a%10)/10):item.mark_of_q2a>80?3:4).toPrecision(2)))}</td>
          <td className="col-1">{(item.mark_of_q2b<60?0:item.mark_of_q2b>=60 && item.mark_of_q2b< 70?1+((item.mark_of_q2b%10)/10):item.mark_of_q2b>=70 && item.mark_of_q2b<80 ?2+((item.mark_of_q2b%10)/10):item.mark_of_q2b>80?3:4).toFixed(1)}</td>
          <td className="col-1">{(item.mark_of_q2c<60?0:item.mark_of_q2c>=60 && item.mark_of_q2c< 70?1+((item.mark_of_q2c%10)/10):item.mark_of_q2c>=70 && item.mark_of_q2c<80 ?2+((item.mark_of_q2c%10)/10):item.mark_of_q2c>80?3:4).toFixed(1)}</td>
          <td className="col-1">{(item.mark_of_q3<60?0:item.mark_of_q3>=60 && item.mark_of_q3< 70?1+((item.mark_of_q3%10)/10):item.mark_of_q3>=70 && item.mark_of_q3<80 ?2+((item.mark_of_q3%10)/10):item.mark_of_q3>80?3:4).toFixed(1)}</td>
          <td className="col-1">{(item.mark_of_q4<60?0:item.mark_of_q4>=60 && item.mark_of_q4< 70?1+((item.mark_of_q4%10)/10):item.mark_of_q4>=70 && item.mark_of_q4<80 ?2+((item.mark_of_q4%10)/10):item.mark_of_q4>80?3:4).toFixed(1)}</td>
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

export default DisplayLevelMidTerm1;
