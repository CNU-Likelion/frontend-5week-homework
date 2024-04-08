import { useState, useEffect } from "react";
import "../App.css";

function Output({ result }) {
  const [years, setYears] = useState("--");
  const [months, setMonths] = useState("--");
  const [days, setDays] = useState("--");

  useEffect(() => {
    if (result) {
      const { day, month, year } = result;
      // 현재 날짜 가져오기
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      const currentDay = currentDate.getDate();

      // 입력받은 날짜와 현재 날짜 간의 연, 월, 일 차이 계산
      const yearDiff = currentYear - parseInt(year);
      const monthDiff = currentMonth - parseInt(month);
      const dayDiff = currentDay - parseInt(day);

      // 계산된 결과로 변경
      setYears(yearDiff);
      setMonths(monthDiff);
      setDays(dayDiff);
    } else {
      setYears("--");
      setMonths("--");
      setDays("--");
    }
  }, [result]);

  return (
    <>
      <div className="section-output">
        <div className="output-div">
          <h1 className="output-var">{years}</h1>
          <h1>years</h1>
        </div>

        <div className="output-div">
          <h1 className="output-var">{months}</h1>
          <h1>months</h1>
        </div>

        <div className="output-div">
          <h1 className="output-var">{days}</h1>
          <h1>days</h1>
        </div>
      </div>
    </>
  );
}

export default Output;
