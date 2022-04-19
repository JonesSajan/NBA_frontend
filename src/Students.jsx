import React, { useState,useEffect } from "react"
import {getData,postData} from "./FetchNodeServices"



const Students = () => {
  const [rollno,setRollno]=useState('')
  const [studentName,setStudentName]=useState('')
  const [batch,setBatch]=useState('')
  const [branch,setBranch]=useState('')


  const handleClick=async()=>{

    var body = { rollno: rollno, name: studentName, batch: batch, branch: branch };

    

   
    

    var result = await postData('student/addnewstudent',body)

    if(result){
      alert("Student Added Successfully")
      setRollno('')
      setStudentName('')
      setBatch('')
      setBranch('')

    }
    

}

  return (
    <div className="container">
      <div className="row">
      <form className="col-sm-11 col-xs-11 col-md-11 mx-auto">
        <div class="mb-3">
        <h4 className="mb-2 col-sm-11 col-xs-11 col-md-11 mx-auto">Add Students</h4>
        <hr />
          <label for="rollno" class="form-label">Roll No.</label>
          <input type="text" class="form-control" value={rollno} id="rollno" onChange={event=>setRollno(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="stname" class="form-label">Student Name</label>
          <input type="text" class="form-control" id="stname" value={studentName} onChange={event=>setStudentName(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="batch" class="form-label">Batch</label>
          <input type="text" class="form-control" id="batch" value={batch} onChange={event=>setBatch(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="branch" class="form-label">Branch</label>
          <input type="text" class="form-control" id="branch" value={branch} onChange={event=>setBranch(event.target.value)}/>
        </div>
        <div class="d-grid mb-4">
        <button type="button" class="btn btn-block btn-danger" onClick={handleClick}>Add</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Students;
