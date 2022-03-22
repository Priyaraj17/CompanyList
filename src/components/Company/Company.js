import React, { useState } from "react";

import "./Company.css";
const Company = ({ Name }) => {
  const [isChecked,setIsChecked] = useState(localStorage.getItem("selectedArr") ? (JSON.parse(localStorage.getItem("selectedArr")).includes(Name) ? true : false) : false);
  const handleCheck=()=>{
    setIsChecked(isChecked ? false : true)
    if(localStorage.getItem("selectedArr")){
      const tmpSelectedArr = JSON.parse(localStorage.getItem("selectedArr"));
      if(!isChecked){
        
        tmpSelectedArr.push(Name);
        localStorage.setItem("selectedArr",JSON.stringify(tmpSelectedArr));
      }
      else{
        const newArr = tmpSelectedArr.filter((item)=>item!=Name)
        localStorage.setItem("selectedArr",JSON.stringify(newArr));
      }
    }
    else{
      const newSelectedArr = [Name];
      localStorage.setItem("selectedArr",JSON.stringify(newSelectedArr));
    }
  }
  return (
    <li>
      <div>
        {Name}
        <input className="input" type="checkbox" onClick={(e)=>{handleCheck(e)}} checked={isChecked}/>
      </div>
    </li>
  );
};

export default Company;
