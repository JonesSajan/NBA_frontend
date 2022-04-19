import React, { useState,useEffect } from "react"
import {getData,postData} from "./FetchNodeServices"

const Quiz_Marks = () => {

  const [subjectCode,setSubjectCode]=useState('')
  const [rollno,setRollno]=useState('')
  const [markOfQ1,setMarkOfQ1]=useState('')
  const [markOfQ2,setMarkOfQ2]=useState('')
  


  const handleClick=async()=>{

    var body = { subcode: subjectCode , rollno: rollno, mark_of_q1: markOfQ1, mark_of_q2: markOfQ2};

    

   
    

    var result = await postData('quiz/addquiz_marks',body)
    
    
}

  return (
    <div className="container">
      <div className="row">
      <form className="col-sm-11 col-xs-11 col-md-11 mx-auto">
        <div class="mb-3">
        <h4 className="mb-2 col-sm-11 col-xs-11 col-md-11 mx-auto">Add Quiz Marks</h4>
          <label for="subjectCode" class="form-label">Subject Code</label>
          <input type="text" class="form-control" id="subjectCode" onChange={event=>setSubjectCode(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="roll_no" class="form-label">Student Rollno</label>
          <input type="text" class="form-control" id="roll_no" onChange={event=>setRollno(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Marks_Quiz-1" class="form-label">Marks of Quiz-1</label>
          <input type="text" class="form-control" id="Marks_Quiz-1" onChange={event=>setMarkOfQ1(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Marks_Quiz-2" class="form-label">Marks of Quiz-2</label>
          <input type="text" class="form-control" id="Marks_Quiz-2" onChange={event=>setMarkOfQ2(event.target.value)}/>
        </div>
        
        <div class="d-grid mb-4">
        <button type="submit" class="btn btn-block btn-danger" onClick={handleClick}>Add</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Quiz_Marks;
