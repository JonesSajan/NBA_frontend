import React, { useState,useEffect } from "react"
import {getData,postData} from "./FetchNodeServices"

const ActivityCo = () => {
    const [subjectCode,setSubjectCode]=useState('')
    const [coOfact1,setCoOfact1]=useState('')
    const [coOfact2,setCoOfact2]=useState('')
    const [coOfact3,setCoOfact3]=useState('')
    const [coOfact4,setCoOfact4]=useState('')

  
  
    const handleClick=async()=>{
  
      var body = { subcode: subjectCode, co_of_act1: coOfact1, co_of_act2: coOfact2, co_of_act3: coOfact3, co_of_act4: coOfact4};
  
      
  
     
      
  
      var result = await postData('activity/addactivity_co',body)
}
    return (
        <div className="container">
          <div className="row">
          <form className="col-sm-11 col-xs-11 col-md-11 mx-auto">
            <div class="mb-3">
            <h4 className="mb-2 col-sm-11 col-xs-11 col-md-11 mx-auto">Add Activity Co's</h4>
            <hr />
              <label for="subjectCode" class="form-label">Subject Code</label>
              <input type="text" class="form-control" id="subjectCode" onChange={event=>setSubjectCode(event.target.value)}/>
            </div>
            <div class="mb-3">
              <label for="Co_Q1A" class="form-label">CO of Activity-1</label>
              <input type="text" class="form-control" id="Co_Q1A" onChange={event=>setCoOfact1(event.target.value)}/>
            </div>
            <div class="mb-3">
              <label for="Co_Q1B" class="form-label">CO of Activity-2</label>
              <input type="text" class="form-control" id="Co_Q1B" onChange={event=>setCoOfact2(event.target.value)}/>
            </div>
            <div class="mb-3">
              <label for="Co_Q1C" class="form-label">CO of Activity-3</label>
              <input type="text" class="form-control" id="Co_Q1C" onChange={event=>setCoOfact3(event.target.value)}/>
            </div>
            <div class="mb-3">
              <label for="Co_Q1D" class="form-label">CO of Activity-4</label>
              <input type="text" class="form-control" id="Co_Q1D" onChange={event=>setCoOfact4(event.target.value)}/>
            </div>
            <div class="d-grid mb-4">
            <button type="submit" class="btn btn-block btn-danger" onClick={handleClick}>Add</button>
            </div>
          </form>
          </div>
        </div>
      );
}

export default ActivityCo;
