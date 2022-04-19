import React, { useState,useEffect } from "react"
import {getData,postData} from "./FetchNodeServices"

const ActivityMarks = () => {
    const [subjectCode,setSubjectCode]=useState('')
    const [rollno,setRollno]=useState('')
    const [markOfact1,setMarkOfact1]=useState('')
    const [markOfact2,setMarkOfact2]=useState('')
    const [markOfact3,setMarkOfact3]=useState('')
    const [markOfact4,setMarkOfact4]=useState('')

  
  
    const handleClick=async()=>{
  
        var body = { subcode: subjectCode , rollno: rollno, mark_of_act1: markOfact1, mark_of_act2: markOfact2, mark_of_act3: markOfact3, mark_of_act4: markOfact4};
  
      
  
     
      
  
      var result = await postData('activity/addactivity_marks',body)
}
    return (
        <div className="container">
          <div className="row">
          <form className="col-sm-11 col-xs-11 col-md-11 mx-auto">
            <div class="mb-3">
            <h4 className="mb-2 col-sm-11 col-xs-11 col-md-11 mx-auto">Add Activity Marks</h4>
            <hr />
              <label for="subjectCode" class="form-label">Subject Code</label>
              <input type="text" class="form-control" id="subjectCode" onChange={event=>setSubjectCode(event.target.value)}/>
            </div>
            <div class="mb-3">
              <label for="Co_Q1A" class="form-label">Roll Number</label>
              <input type="text" class="form-control" id="Co_Q1A" onChange={event=>setRollno(event.target.value)}/>
            </div>
            <div class="mb-3">
              <label for="Co_Q1B" class="form-label">Activity-1 Marks</label>
              <input type="text" class="form-control" id="Co_Q1B" onChange={event=>setMarkOfact1(event.target.value)}/>
            </div>
            <div class="mb-3">
              <label for="Co_Q1C" class="form-label">Activity-2 Marks</label>
              <input type="text" class="form-control" id="Co_Q1C" onChange={event=>setMarkOfact2(event.target.value)}/>
            </div>
            <div class="mb-3">
              <label for="Co_Q1D" class="form-label">Activity-3 Marks</label>
              <input type="text" class="form-control" id="Co_Q1D" onChange={event=>setMarkOfact3(event.target.value)}/>
            </div>
            <div class="mb-3">
              <label for="Co_Q1D" class="form-label">Activity-4 Marks</label>
              <input type="text" class="form-control" id="Co_Q1D" onChange={event=>setMarkOfact4(event.target.value)}/>
            </div>
            <div class="d-grid mb-4">
            <button type="submit" class="btn btn-block btn-danger" onClick={handleClick}>Add</button>
            </div>
          </form>
          </div>
        </div>
      );
}

export default ActivityMarks;
