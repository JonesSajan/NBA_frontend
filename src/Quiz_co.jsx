import React, { useState,useEffect } from "react"
import {getData,postData} from "./FetchNodeServices"



const Quiz_co = () => {
  const [subjectCode,setSubjectCode]=useState('')
  const [coOfQ1,setCoOfQ1]=useState('')
  const [coOfQ2,setCoOfQ2]=useState('')


  const handleClick=async()=>{

    var body = { subcode: subjectCode, co_of_q1: coOfQ1, co_of_q2: coOfQ2};

    

   
    

    var result = await postData('quiz/addquiz_co',body)
    

}

  return (
    <div className="container">
      <div className="row">
      <form className="col-sm-11 col-xs-11 col-md-11 mx-auto">
        <div class="mb-3">
        <h4 className="mb-2 col-sm-11 col-xs-11 col-md-11 mx-auto">Add Quiz CO Scheme</h4>
          <label for="subjectCode" class="form-label">Subject Code</label>
          <input type="text" class="form-control" id="subjectCode" onChange={event=>setSubjectCode(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Co_Quiz1" class="form-label">CO of Quiz - 1</label>
          <input type="text" class="form-control" id="Co_Q1A" onChange={event=>setCoOfQ1(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Co_Quiz2" class="form-label">CO of Quiz - 2</label>
          <input type="text" class="form-control" id="Co_Q1B" onChange={event=>setCoOfQ2(event.target.value)}/>
        </div>
        
        <div class="d-grid mb-4">
        <button type="submit" class="btn btn-block btn-danger" onClick={handleClick}>Add</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Quiz_co;
