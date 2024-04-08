import { useState, useEffect } from "react";
import "../App.css";

function Input() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");

  const ErrorMessage = () => {
    setDayError("");
    setMonthError("");
    setYearError("");

    let hasError = false;

    if (!day.trim()) {
      setDayError("This field is required");
      hasError = true;
    } else if (day < 1 || day > 31) {
      setDayError("Must be a valid day");
      hasError = true;
    }

    if (!month.trim()) {
      setMonthError("This field is required");
      hasError = true;
    } else if (month < 1 || month > 12) {
      setMonthError("Must be a valid day");
      hasError = true;
    }

    if (!year.trim()) {
      setYearError("This field is required");
      hasError = true;
    } else if (year < 1 || year > 2024) {
      setYearError("Must be in the past");
      hasError = true;
    }

    return hasError;
  };

  useEffect(() => {
    ErrorMessage();
  }, [day, month, year]);

  return (
    <>
      <div className="section-input">
        <div className="input-div">
          <p className="input-title">DAY</p>

          <div className="input-box">
            <input
              value={day}
              onChange={(e) => {
                setDay(e.target.value);
                ErrorMessage();
              }}
              className="input-input"
              placeholder="DD"
            ></input>
            {dayError && <p className="error-message">{dayError}</p>}
          </div>
        </div>

        <div className="input-div">
          <p className="input-title">MONTH</p>

          <div className="input-box">
            <input
              value={month}
              onChange={(e) => {
                setMonth(e.target.value);
                ErrorMessage();
              }}
              className="input-input"
              placeholder="MM"
            ></input>
            {monthError && <p className="error-message">{monthError}</p>}
          </div>
        </div>

        <div className="input-div">
          <p className="input-title">YEAR</p>

          <div className="input-box">
            <input
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
                ErrorMessage();
              }}
              className="input-input"
              placeholder="YYYY"
            ></input>
            {yearError && <p className="error-message">{yearError}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Input;
