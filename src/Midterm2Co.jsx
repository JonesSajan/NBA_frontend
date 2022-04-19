import React, { useState,useEffect } from "react"
import {getData,postData} from "./FetchNodeServices"

const Midterm2Co = () => {

  const [subjectCode,setSubjectCode]=useState('')
  const [coa,setCoa]=useState('')
  const [cob,setCob]=useState('')
  const [coc,setCoc]=useState('')

  const handleClick=async()=>{

    var body = { subcode: subjectCode, co_a: coa, co_b: cob, co_c: coc };

    

   
    

    var result = await postData('midterm2/addmidterm2_co',body)
    if(result){
      alert("Midterm2 Added Successfully")
      setSubjectCode('')
      setCoa('')
      setCob('')
      setCoc('')

    }
    

}

  return (
    <div className="container">
      <div className="row">
      <form className="col-sm-11 col-xs-11 col-md-11 mx-auto">
        <div class="mb-3">
        <h4 className="mb-2 col-sm-11 col-xs-11 col-md-11 mx-auto">Add Mid term - 2 CO Scheme</h4>
        <hr />
          <label for="subjectCode" class="form-label">Subject Code</label>
          <input type="text" class="form-control" id="subjectCode" value={subjectCode} onChange={event=>setSubjectCode(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Co_A" class="form-label">CO A</label>
          <input type="text" class="form-control" id="Co_A" value={coa} onChange={event=>setCoa(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Co_B" class="form-label">CO B</label>
          <input type="text" class="form-control" id="Co_B" value={cob} onChange={event=>setCob(event.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="Co_C" class="form-label">CO C</label>
          <input type="text" class="form-control" id="Co_C" value={coc} onChange={event=>setCoc(event.target.value)}/>
        </div>
        <div class="d-grid mb-4">
        <button type="submit" class="btn btn-block btn-danger" onClick={handleClick}>Add</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Midterm2Co;
