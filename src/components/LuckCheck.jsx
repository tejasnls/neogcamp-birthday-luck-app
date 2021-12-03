import React, { useState } from "react";
import "./LuckCheck.css";

const LuckCheck = () => {
  const [message, setmessage] = useState("");
  const [dob, setdob] = useState();
  const [number, setnumber] = useState();
  const changeHandler = (e) => {
      const {name,value} = e.target;
      if (name === 'dob') {
        setdob(value);
      }
      else if (name === 'luckynum') {
          setnumber(number);
      }
  }

  const dateSum = (dob) => {
    let sum=0;
    let dobNumber = dob.replaceAll('-','');
    [...dobNumber].forEach(n => sum+= (+n))
    return sum; 
  }

  const calculateLuck = (dateSum,luckyNumber) => {
    if (dateSum % luckyNumber === 0) {
        setmessage("That's Lucky!")
    }
    else {
        setmessage("Unlucky!")
    }
  }

  const clickHandler = (e) => {
    e.preventDefault();
    calculateLuck(dateSum(dob),number);
  };
    return (
    <div className="container">
      <h2>Please enter your Birthday and Lucky Numeber</h2>
      <div className="input">
        <label htmlFor="dob">DOB</label>
        <input onChange={changeHandler} type="date" name="dob" value ={dob} id="dob" />
        <label htmlFor="luckynum">Lucky Number</label>
        <input onChange={changeHandler} type="number" min="1" step="1" value ={number} name= "luckynum" id="luckynum" />
      </div>
      <button type="submit" onClick={clickHandler}>Check!</button>
      <span className="message">{message}</span>
    </div>
  );
};

export default LuckCheck;
