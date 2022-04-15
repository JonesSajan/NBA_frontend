import React, { useState,useEffect } from "react"
import {getData,postData} from "./FetchNodeServices"

const DisplayQuizCo = () => {
    const [list,setList]=useState([])
    const [search,setSearch]=useState("")



    const fetchAllQuiz=async()=>{
        var result = await getData("quiz/displayallquiz_co")
        setList(result)
        // alert(JSON.stringify(result))

        }
    
    useEffect(function(){
            fetchAllQuiz()
            // alert(1)
    },[])
    const filltable =()=>{
        return list.filter((val)=>{
            if(search===""){
                return val 
            }else if (val.subcode.toLowerCase().includes(search.toLowerCase()) || val.co_of_quiz1.toLowerCase().includes(search.toLowerCase()) || val.co_of_quiz2.toLowerCase().includes(search.toLowerCase())  ){
                return val
            }
        }).map((item) => {
            return (
                <tr className='d-flex'>
                            <th scope="row" className='col-2'>{item.subcode}</th>
                            <td className='col-2'>{item.co_of_quiz1}</td>
                            <td className='col-2'>{item.co_of_quiz2}</td>
                            
                            
                        </tr>
            )
        });
    }
    return( <div>
                   <div className='container'>
                <h4>Quiz Co</h4>
                <input class="form-control search" type="text" placeholder="Search...." aria-label="Search a record" onChange={event=>{setSearch(event.target.value)}}></input>

                <table class="table table-hover table-dark">
                    <thead>
                        <tr className='d-flex'>
                            <th scope="col" className='col-2'>Subject Code</th>
                            <th scope="col" className='col-2'>CO Of Quiz 1</th>
                            <th scope="col" className='col-2'>CO Of Quiz 2</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {filltable()}
                    </tbody>
                </table>
            </div>
    </div>
    )
}

export default DisplayQuizCo;
