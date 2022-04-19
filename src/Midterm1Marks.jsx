import React, { useState,useEffect } from "react"
import {getData,postData} from "./FetchNodeServices"

const Midterm1Marks = () => {

  const [subjectCode,setSubjectCode]=useState('')
  const [rollno,setRollno]=useState('')
  const [markOfQ1a,setMarkOfQ1a]=useState('')
  const [markOfQ1b,setMarkOfQ1b]=useState('')
  const [markOfQ1c,setMarkOfQ1c]=useState('')
  const [markOfQ1d,setMarkOfQ1d]=useState('')
  const [markOfQ1e,setMarkOfQ1e]=useState('')
  const [markOfQ2a,setMarkOfQ2a]=useState('')
  const [markOfQ2b,setMarkOfQ2b]=useState('')
  const [markOfQ2c,setMarkOfQ2c]=useState('')
  const [markOfQ3,setMarkOfQ3]=useState('')
  const [markOfQ4,setMarkOfQ4]=useState('')


  const handleClick=async()=>{

    var body = { subcode: subjectCode , rollno: rollno, mark_of_q1a: markOfQ1a, mark_of_q1b: markOfQ1b, mark_of_q1c: markOfQ1c, mark_of_q1d: markOfQ1d, mark_of_q1e: markOfQ1e, mark_of_q2a: markOfQ2a, mark_of_q2b: markOfQ2b, mark_of_q2c: markOfQ2c, mark_of_q3: markOfQ3, mark_of_q4: markOfQ4 };

    

   
    

    var result = await postData('midterm1/addmidterm1_marks',body)

    if(result){
      alert("Midterm 1 Marks Added Successfully")
      setSubjectCode('')
      setRollno('')
      setMarkOfQ1a('')
      setMarkOfQ1b('')
      setMarkOfQ1c('')
      setMarkOfQ1d('')
      setMarkOfQ1e('')
      setMarkOfQ2a('')
      setMarkOfQ2b('')
      setMarkOfQ2c('')
      setMarkOfQ3('')
      setMarkOfQ4('')

    }
    

}

  return (
    <div className="container">
      <div className="row">
      <form className="col-sm-11 col-xs-11 col-md-11 mx-auto">
        <div class="mb-3">
        <h4 className="mb-2 col-sm-11 col-xs-11 col-md-11 mx-auto">Add Mid term - 1 Marks</h4>
        <hr />
          <label for="subjectCode" class="form-label">Subject Code</label>
          <input type="text" class="form-control" id="subjectCode" value={subjectCode} onChange={event=>setSubjectCode(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q1A" class="form-label">Student Rollno</label>
          <input type="text" class="form-control" id="Marks_Q1A" value={rollno} onChange={event=>setRollno(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q1A" class="form-label">Marks of Q1(A)</label>
          <input type="text" class="form-control" id="Marks_Q1A" value={markOfQ1a} onChange={event=>setMarkOfQ1a(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q1B" class="form-label">Marks of Q1(B)</label>
          <input type="text" class="form-control" id="Marks_Q1B" value={markOfQ1b} onChange={event=>setMarkOfQ1b(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q1C" class="form-label">Marks of Q1(C)</label>
          <input type="text" class="form-control" id="Marks_Q1C" value={markOfQ1c} onChange={event=>setMarkOfQ1c(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q1D" class="form-label">Marks of Q1(D)</label>
          <input type="text" class="form-control" id="Marks_Q1D" value={markOfQ1d} onChange={event=>setMarkOfQ1d(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q1E" class="form-label">Marks of Q1(E)</label>
          <input type="text" class="form-control" id="Marks_Q1E" value={markOfQ1e} onChange={event=>setMarkOfQ1e(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q2A" class="form-label">Marks of Q2(A)</label>
          <input type="text" class="form-control" id="Marks_Q2A" value={markOfQ2a} onChange={event=>setMarkOfQ2a(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q2B" class="form-label">Marks of Q2(B)</label>
          <input type="text" class="form-control" id="Marks_Q2B" value={markOfQ2b} onChange={event=>setMarkOfQ2b(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q2C" class="form-label">Marks of Q2(C)</label>
          <input type="text" class="form-control" id="Marks_Q2C" value={markOfQ2c} onChange={event=>setMarkOfQ2c(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q3A" class="form-label">Marks of Q3</label>
          <input type="text" class="form-control" id="Marks_Q3A" value={markOfQ3} onChange={event=>setMarkOfQ3(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Marks_Q3B" class="form-label">Marks of Q4</label>
          <input type="text" class="form-control" id="Marks_Q3B" value={markOfQ4} onChange={event=>setMarkOfQ4(event.target.value)}/>
        </div>
        
        <div class="d-grid mb-4">
        <button type="submit" class="btn btn-block btn-danger" onClick={handleClick}>Add</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Midterm1Marks;
