import React from "react";
import './Results.css'

const Results = ({ details , setDetails }) => {
    console.log(details,"details")

    function handleIncrement(index) {
      const updatedDetails = [...details];
      updatedDetails[index].hour += 1;
      setDetails(updatedDetails);
    }

    function decreasses(index) {
      const updatedDetails = [...details];
      updatedDetails[index].hour -= 1; 
      setDetails(updatedDetails);
    }
  return (
    <div className="results_sec">
           {
            details.map((e,index)=>{
              return(
                <div key={index} className="results">
                  <span>{e.name}-</span>
                  <span>{e.hour}-hours</span>
                  <div className="btn">
                  <button onClick={()=>{
                    handleIncrement(index)
                  }}>+</button>
                  <button onClick={()=>{
                    decreasses(index)
                  }}>-</button>
                  </div>
                  
                </div>
              )
            })
           }
    </div>
  );
};

export default Results;
