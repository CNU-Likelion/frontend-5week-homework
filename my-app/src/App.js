import React, { useState } from "react";
import "./index.css";

const AgeCalculator = () => {
  const [InYear, setInYear] = useState('');
  const [InMonth, setInMonth] = useState('');
  const [InDay, setInDay] = useState('');

  const [OutYear, setOutYear] = useState('--');
  const [OutMonth, setOutMonth] = useState('--');
  const [OutDay, setOutDay] = useState('--');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'InYear':
        setInYear(value);
        break;
      case 'InMonth':
        setInMonth(value);
        break;
      case 'InDay':
        setInDay(value);
        break;
      default:
        break;
    }
  }

  const calculateAge = () => {
    const birthDate = new Date(InYear, InMonth - 1, InDay);
    const today = new Date();

    // 생일로부터 오늘까지의 차이 계산
    const diffInMs = today - birthDate;
    const msInYear = 1000 * 60 * 60 * 24 * 365; // 1년을 밀리초로 나타낸 값

    // 생일로부터 오늘까지의 연도 계산
    const years = Math.floor(diffInMs / msInYear);

    // 생일로부터 오늘까지의 남은 일수 계산
    const remainingMs = diffInMs % msInYear;
    const msInDay = 1000 * 60 * 60 * 24; // 1일을 밀리초로 나타낸 값
    const days = Math.floor(remainingMs / msInDay);

    // 연도에서 생일을 지났으면 1년을 빼줍니다.
    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
      setOutYear(years - 1);
    } else {
      setOutYear(years);
    }

    // 생일로부터 오늘까지의 월 계산
    const months = Math.floor(days / 30);
    setOutMonth(months);

    // 남은 일수 계산
    const remainingDays = days % 30;
    setOutDay(remainingDays);
  };

  return (
    <main>
      <section>
        <div className="allSection">
          <div className="section-in">
            <div>
              <label className="label">DAY</label>
              <input type="number" name="InDay" className="date-in" placeholder="DD" value={InDay} onChange={handleChange} />
            </div>
            <div>
              <label className="label">MONTH</label>
              <input type="number" name="InMonth" className="date-in" placeholder="MM" value={InMonth} onChange={handleChange} />
            </div>
            <div>
              <label className="label">YEAR</label>
              <input type="number" name="InYear" className="date-in" placeholder="YYYY" value={InYear} onChange={handleChange} />
            </div>
          </div>

          <div className="section-out">
            
            <button onClick={calculateAge}></button>
          </div>

          <div className="output-div">
            <h1 className="date-out">{OutYear}</h1>
            <h1>years</h1>
          </div>
          <div className="output-div">
            <h1 className="date-out">{OutMonth}</h1>
            <h1>months</h1>
          </div>
          <div className="output-div">
            <h1 className="date-out">{OutDay}</h1>
            <h1>days</h1>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AgeCalculator;
