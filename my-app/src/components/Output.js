import React, { Component, useEffect, useState } from 'react';
import Input from "./Input";

function Output( { date } ) {
  const [ dayResult, setDayResult ] = useState('--');
  const [ monthResult, setMonthResult ] = useState('--');
  const [ yearResult, setYearResult ] = useState('--');
  

  return (
    <div>
      <div>
        <span>{dayResult}</span>
        <p>years</p>
        "years"
      </div>

      <div>
        <span>{monthResult}</span>
        <p>months</p>
        "months"
      </div>

      <div>
        <span>{yearResult}</span>
        <p>days</p>
        "days"
      </div>
    </div>
  );
}

export default Output;
