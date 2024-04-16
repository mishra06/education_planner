import React, { useEffect, useRef, useState } from 'react'
import Results from './Results';
import './Results.css'

const Planner = () => {

    const[details, setDetails] = useState([]);

    const nameRef = useRef(null);
    const hourRef = useRef(null);
     
    function handeler(){

       setDetails([...details,
      {
        name:nameRef.current.value,
        hour:Number(hourRef.current.value),
      }])
      nameRef.current.value='';
      hourRef.current.value='';

  }
//  localstorage 
  useEffect(()=>{
      const local = JSON.parse(localStorage.getItem("plnr"))

      if(local && local.length>0){
        setDetails(local)
      }
  },[])

  useEffect(()=>{
    localStorage.setItem("plnr",JSON.stringify(details))
  },[details])
 
  // localstorage end 

  return (
    <div className='container'>
      <h1>Mishra Planner</h1>
      <div className="inputs_sec">
        <input ref={nameRef} type="text" placeholder='Name..'/>
        <input ref={hourRef} type="number" placeholder='Hours...' />
        <button onClick={handeler}>Add</button>
      </div>
      <Results details={details} setDetails={setDetails}/>
    </div>
  )
}

export default Planner
