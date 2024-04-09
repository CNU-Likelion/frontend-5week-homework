// src/App.tsx
import React, { useState } from 'react';
import './App.css'; // App 컴포넌트 전용 스타일
import Input from './components/Input/Input';
import Output from './components/output/output';

const App = () => {
  const [age, setAge] = useState({ years: '--', months: '--', days: '--' });
  const [inputError, setInputError] = useState(false);

  const handleCalculate = (isValid: boolean, day: string, month: string, year: string) => {
    if (!isValid) {
      setInputError(true);
      setAge({ years: '0', months: '0', days: '0' });
      return;
    }

    // 입력값을 숫자로 변환
    const dNum = parseInt(day, 10);
    const mNum = parseInt(month, 10) - 1; // JavaScript의 Date 객체는 월을 0부터 시작으로 계산합니다.
    const yNum = parseInt(year, 10);

    // 에러 체크
    setInputError(false);

    // 나이 계산
    const birthday = new Date(yNum, mNum, dNum);
    const today = new Date();
    let years = today.getFullYear() - birthday.getFullYear();
    let months = today.getMonth() - birthday.getMonth();
    let days = today.getDate() - birthday.getDate();

    if (days < 0) {
      months--;
      days += new Date(yNum, mNum + 1, 0).getDate(); // 수정: 문자열 대신 숫자 사용
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({
      years: years.toString(),
      months: months.toString(),
      days: days.toString(),
    });
  };

  return (
    <div className="App">
      <Input onCalculate={handleCalculate} />
      {inputError && <p className="error">Please enter a valid date.</p>}
      <Output years={age.years} months={age.months} days={age.days} />
    </div>
  );
};

export default App;