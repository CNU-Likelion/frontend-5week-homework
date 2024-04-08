import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";
import { useState } from "react";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = () => {
    setResult({ day, month, year });
  };

  return (
    <>
      <main className="main">
        <section className="section">
          <div className="section-all">
            <Input
              day={day}
              month={month}
              year={year}
              setDay={setDay}
              setMonth={setMonth}
              setYear={setYear}
            />
            <div className="section-division">
              <hr className="division-border"></hr>
              <button className="division-button" onClick={handleButtonClick}>
                <img src="../public/icon-arrow.svg" />
              </button>
            </div>
            <Output result={result} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
