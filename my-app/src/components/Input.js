import React, { Component, useEffect, useState } from 'react';
import styles from "../components/Input.css";

function Input() {

  const [ day, setDay ] = useState('');
  const [ month, setMonth ] = useState('');
  const [ year, setYear ] = useState('');

  const today = new Date();
  const todayYear = today.getFullYear();

  const [ dayError, setDayError ] = useState();
  const [ monthError, setMonthError ] = useState();
  const [ yearError, setYearError ] = useState();

  const [ date, setDate ] = useState(); 

  const onClickButton = (e) => {
    e.preventDefault();
    setDate({ day, month, year });
    // console.log(`inputMonth${ setMonthError ? 'error' : '' }`);
  }

  const onChangeDayHandler = (e) => {
    const dayValue = e.target.value;
    setDay(dayValue);

    if (dayValue === '') {
      setDayError('The field is required');
    }
    else if (dayValue < 1 || dayValue > 31) {
      setDayError('Must be a valid day');
    } 
  }

  const onChangeMonthHandler = (e) => {
    const monthValue = e.target.value;
    setMonth(monthValue);

    if (monthValue === '') {
      setMonthError('The field is required');
    }
    else if (monthValue < 1 || monthValue > 12) {
      setMonthError('Must be a valid month');
    }
  }

  const onChangeYearHandler = (e) => {
    const yearValue = e.target.value;
    setYear(yearValue);

    if (yearValue === '') {
      setYearError('The field is required');
    }
    else if (yearValue < 0 || yearValue > todayYear) {
      setYearError('Must be in the past');
    }
  }


  return (
    <div>
      <form className='form_container'>
        <div className='dayContainer'>
          <p className='dayTitle'>DAY</p>
          <input 
            className='inputDay'
            placeholder='DD'
            value={day}
            onChange={onChangeDayHandler}
          />
          {dayError && <p className='Error'>{dayError}</p>}
        </div>

        <div className='monthContainer'>
          <p className='monthTitle'>MONTH</p>
          <input 
            className='inputMonth'
            placeholder='MM'
            value={month}
            onChange={onChangeMonthHandler}
          />
          {monthError && <p className='Error'>{monthError}</p>}
        </div>

        <div className='yearContainer'>
          <p className='yearTitle'>YEAR</p>
          <input 
            className='inputYear'
            placeholder='YYYY'
            value={year}
            onChange={onChangeYearHandler}
          />
          {yearError && <p className='Error'>{yearError}</p>}
        </div>

        <button
          className='button'
          onClick={onClickButton}
        >^</button>
      </form>

    </div>
  );
}

export default Input;
