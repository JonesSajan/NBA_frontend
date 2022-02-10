import React, { useState,useEffect } from "react"
import {getData,postData} from "./FetchNodeServices"



const Midterm1Co = () => {
  const [subjectCode,setSubjectCode]=useState('')
  const [coOfQ1a,setCoOfQ1a]=useState('')
  const [coOfQ1b,setCoOfQ1b]=useState('')
  const [coOfQ1c,setCoOfQ1c]=useState('')
  const [coOfQ1d,setCoOfQ1d]=useState('')
  const [coOfQ1e,setCoOfQ1e]=useState('')
  const [coOfQ2a,setCoOfQ2a]=useState('')
  const [coOfQ2b,setCoOfQ2b]=useState('')
  const [coOfQ2c,setCoOfQ2c]=useState('')
  const [coOfQ3,setCoOfQ3]=useState('')
  const [coOfQ4,setCoOfQ4]=useState('')


  const handleClick=async()=>{

    var body = { subcode: subjectCode, co_of_q1a: coOfQ1a, co_of_q1b: coOfQ1b, co_of_q1c: coOfQ1c, co_of_q1d: coOfQ1d, co_of_q1e: coOfQ1e, co_of_q2a: coOfQ2a, co_of_q2b: coOfQ2b, co_of_q2c: coOfQ2c, co_of_q3: coOfQ3, co_of_q4: coOfQ4 };

    

   
    

    var result = await postData('midterm1/addmidterm1_co',body)
    

}

  return (
    <div className="container">
      <div className="row">
      <form className="col-sm-9 col-md-7 mx-auto">
        <div class="mb-3">
        <h4 className="mb-2">Add Mid term 1 CO Scheme</h4>
          <label for="subjectCode" class="form-label">Subject Code</label>
          <input type="text" class="form-control" id="subjectCode" onChange={event=>setSubjectCode(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Co_Q1A" class="form-label">CO of Q1(A)</label>
          <input type="text" class="form-control" id="Co_Q1A" onChange={event=>setCoOfQ1a(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Co_Q1B" class="form-label">CO of Q1(B)</label>
          <input type="text" class="form-control" id="Co_Q1B" onChange={event=>setCoOfQ1b(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Co_Q1C" class="form-label">CO of Q1(C)</label>
          <input type="text" class="form-control" id="Co_Q1C" onChange={event=>setCoOfQ1c(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Co_Q1D" class="form-label">CO of Q1(D)</label>
          <input type="text" class="form-control" id="Co_Q1D" onChange={event=>setCoOfQ1d(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Co_Q1E" class="form-label">CO of Q1(E)</label>
          <input type="text" class="form-control" id="Co_Q1E" onChange={event=>setCoOfQ1e(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Co_Q2A" class="form-label">CO of Q2(A)</label>
          <input type="text" class="form-control" id="Co_Q2A" onChange={event=>setCoOfQ2a(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Co_Q2B" class="form-label">CO of Q2(B)</label>
          <input type="text" class="form-control" id="Co_Q2B" onChange={event=>setCoOfQ2b(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Co_Q2C" class="form-label">CO of Q2(C)</label>
          <input type="text" class="form-control" id="Co_Q2C" onChange={event=>setCoOfQ2c(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Co_Q3A" class="form-label">CO of Q3</label>
          <input type="text" class="form-control" id="Co_Q3A" onChange={event=>setCoOfQ3(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Co_Q3B" class="form-label">CO of Q4</label>
          <input type="text" class="form-control" id="Co_Q3B" onChange={event=>setCoOfQ4(event.target.value)}/>
        </div>
        
        <div class="d-grid mb-4">
        <button type="submit" class="btn btn-block btn-danger" onClick={handleClick}>Add</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Midterm1Co;
