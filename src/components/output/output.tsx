// src/components/Output.tsx
import React from 'react';
import './output.css'; // 가정된 경로

interface OutputProps {
  years: string;
  months: string;
  days: string;
}

const Output: React.FC<OutputProps> = ({ years, months, days }) => {
  return (
    <div className="output">
      <div className="age-display">
        <h1><span id="years">{years}</span> years</h1>
        <h1><span id="months">{months}</span> months</h1>
        <h1><span id="days">{days}</span> days</h1>
      </div>
    </div>
  );
};

export default Output;
