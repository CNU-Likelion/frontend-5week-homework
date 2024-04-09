import React, { Component, useEffect, useState } from 'react';
import Input from "./Input";
import styles from "../components/Output.css";

function Output( { date } ) {
  const [ dayResult, setDayResult ] = useState('--');
  const [ monthResult, setMonthResult ] = useState('--');
  const [ yearResult, setYearResult ] = useState('--');
  

  return (
    <div>

      <div className='outputrContainer'>
        <span className='outputYear'>{yearResult}</span>
        <span className='outputText'>years</span>
      </div>

      <div className='outputContainer'>
        <span className='outputMonth'>{monthResult}</span>
        <span className='outputText'>months</span>
      </div>

      <div className='outputContainer'>
        <span className='outputDay'>{dayResult}</span>
        <span className='outputText'>days</span>
      </div>

    </div>
  );
}

export default Output;
