import React, { Component, useState } from 'react';

function Input() {

  const [ day, setDay ] = useState('');
  const [ month, setMonth ] = useState('');
  const [ year, setYear ] = useState('');

  const [ dayError, setDayError ] = useState('');
  const [ monthError, setMonthError ] = useState('');
  const [ yearError, setYearError ] = useState('');


  const onClickButton = (e) => {
    e.preventDefault();
    console.log(day);
    console.log(month);
    console.log(year);
  }

  const onChangeDayHandler = (e) => {
    const dayValue = e.target.value;
    setDay(dayValue);

    if (dayValue === '') {
      setDayError('The field is required');
    }
    else if (dayValue < 1 || dayValue > 32) {
      setDayError('The field is required');
    }
  }

  const onChangeMonthHandler = (e) => {
    const monthValue = e.target.value;
    setMonth(monthValue);

    if (monthValue === '') {
      setMonthError('The field is required');
    }
    else if (monthValue < 1 || monthValue > 13) {
      setMonthError('The field is required');
    }
  }

  const onChangeYearHandler = (e) => {
    const yearValue = e.target.value;
    setYear(yearValue);

    if (yearValue === '') {
      setYearError('The field is required');
    }
    else if (yearValue < 0 || yearValue > 2025) {
      setYearError('The field is required');
    }
  }


  return (
    <div>
      <form>
        <div className='dayContainer'>
          <p className='dayTitle'>DAY</p>
          <input 
            className='inputDay'
            placeholder='DD'
            value={day}
            onChange={onChangeDayHandler}
          />
          {dayError && <span>{dayError}</span>}
        </div>

        <div className='monthContainer'>
          <p className='monthTitle'>MONTH</p>
          <input 
            className='inputMonth'
            placeholder='MM'
            value={month}
            onChange={onChangeMonthHandler}
          />
          {monthError && <span>{monthError}</span>}
        </div>

        <div className='yearContainer'>
          <p className='yearTitle'>YEAR</p>
          <input 
            className='inputYear'
            placeholder='YYYY'
            value={year}
            onChange={onChangeYearHandler}
          />
          {yearError && <span>{yearError}</span>}
        </div>

        <button
          onClick={onClickButton}
        >button</button>
      </form>

    </div>
  );
}

export default Input;
