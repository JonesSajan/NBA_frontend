import React, { useState,useEffect } from "react"
import {getData,postData} from "./FetchNodeServices"

const Midterm2Marks = () => {

  const [subjectCode,setSubjectCode]=useState('')
  const [rollno,setRollno]=useState('')
  const [totalMarks,setTotalMarks]=useState('')


  const handleClick=async()=>{

    var body = { subcode: subjectCode, rollno: rollno, totalmarks: totalMarks };

    

   
    

    var result = await postData('midterm2/addmidterm2_marks',body)

    if(result){
      alert("Midterm 2 Marks Added Successfully")
      setSubjectCode('')
      setRollno('')
      setTotalMarks('')

    }
    

}


  return (
    <div className="container">
      <div className="row">
      <form className="col-sm-11 col-xs-11 col-md-11 mx-auto">
        <div class="mb-3">
        <h4 className="mb-2 col-sm-11 col-xs-11 col-md-11 mx-auto">Add Mid term - 2 Marks</h4>
        <hr />
          <label for="subjectCode" class="form-label">Subject Code</label>
          <input type="text" class="form-control" id="subjectCode" value={subjectCode} onChange={event=>setSubjectCode(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="roll_no" class="form-label">Roll No.</label>
          <input type="text" class="form-control" id="roll_no" value={rollno} onChange={event=>setRollno(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="total_marks" class="form-label">Total Marks</label>
          <input type="text" class="form-control" id="total_marks" value={totalMarks} onChange={event=>setTotalMarks(event.target.value)}/>
        </div>
        
        <div class="d-grid mb-4">
        <button type="submit" class="btn btn-block btn-danger" onClick={handleClick}>Add</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Midterm2Marks;
