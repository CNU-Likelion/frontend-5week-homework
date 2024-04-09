// src/components/Input.tsx
import React, { useState } from 'react';
import './Input.css';

interface Props {
  onCalculate: (isValid: boolean, day: string, month: string, year: string) => void;
}

const Input: React.FC<Props> = ({ onCalculate }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState({ day: '', month: '', year: '' });

  const getNoOfDays = (y: number, m: number) => {
    return new Date(y, m, 0).getDate();
  };

  const validDay = (y: number, m: number, d: number) => {
    return d >= 1 && d <= getNoOfDays(y, m);
  };

  const validMonth = (m: number) => {
    return m >= 1 && m <= 12;
  };

  const validYear = (y: number) => {
    const currentYear = new Date().getFullYear();
    return y >= 1900 && y <= currentYear;
  };

  const validate = () => {
    const d = parseInt(day);
    const m = parseInt(month);
    const y = parseInt(year);
    let isValid = true;

    // Day validation
    if (!day || isNaN(d) || !validDay(y, m, d)) {
      setError((prev) => ({ ...prev, day: 'Invalid day' }));
      isValid = false;
    } else {
      setError((prev) => ({ ...prev, day: '' }));
    }

    // Month validation
    if (!month || isNaN(m) || !validMonth(m)) {
      setError((prev) => ({ ...prev, month: 'Invalid month' }));
      isValid = false;
    } else {
      setError((prev) => ({ ...prev, month: '' }));
    }

    // Year validation
    if (!year || isNaN(y) || !validYear(y)) {
      setError((prev) => ({ ...prev, year: 'Invalid year' }));
      isValid = false;
    } else {
      setError((prev) => ({ ...prev, year: '' }));
    }

    onCalculate(isValid, day, month, year);
  };

  return (
    <div className="input">
      <div>
        <h6>Day</h6>
        <input
          type="text"
          placeholder="DD"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          onBlur={validate}
          className={error.day ? 'error' : ''}
        />
        <p className="error-message">{error.day}</p>
      </div>
      <div>
        <h6>Month</h6>
        <input
          type="text"
          placeholder="MM"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          onBlur={validate}
          className={error.month ? 'error' : ''}
        />
        <p className="error-message">{error.month}</p>
      </div>
      <div>
        <h6>Year</h6>
        <input
          type="text"
          placeholder="YYYY"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          onBlur={validate}
          className={error.year ? 'error' : ''}
        />
        <p className="error-message">{error.year}</p>
      </div>
    </div>
  );
};

export default Input;
