import React, { useState } from 'react';
import oddeven from './cgpa.jpg';
import './Cgpa.css';

function CgpaCalculator() {
  const [numSemesters, setNumSemesters] = useState(1);
  const [semesterGPAs, setSemesterGPAs] = useState(Array(8).fill(0));
  const [cgpa, setCGPA] = useState(null);

  const handleNumSemestersChange = (event) => {
    const value = parseInt(event.target.value);

    // Ensure the value is within the range of 1 to 8
    if (value >= 1 && value <= 8) {
      setNumSemesters(value);
    }
  };
  
  const handleGPAChange = (index, value) => {
    let parsedValue = parseFloat(value);
  
    if (isNaN(parsedValue)) {
      parsedValue = 0;
    }

    parsedValue = Math.max(0, Math.min(10, parsedValue));

    const updatedGPAs = [...semesterGPAs];
    updatedGPAs[index] = parsedValue;
    setSemesterGPAs(updatedGPAs);
  };

  const calculateCGPA = () => {
    const totalGPA = semesterGPAs.slice(0, numSemesters).reduce((sum, gpa) => sum + gpa, 0);
    const calculatedCGPA = totalGPA / numSemesters;
    setCGPA(calculatedCGPA.toFixed(2));
  };

  return (
    <div className='container'>
      <div>
        <label htmlFor="numSemesters">Enter the number of semesters (1-8):</label>
        <input
          type="number"
          id="numSemesters"
          value={numSemesters}
          onChange={handleNumSemestersChange}
          min="1"
          max="8"
        />
        -

        {semesterGPAs.map((gpa, index) => (
          <div key={index}>
            {index < numSemesters && (
              <input
                type="number"
                placeholder={`Enter GPA for Semester ${index + 1}`}
                step="0.1"
                min="0"
                max="10"
                value={gpa}
                onChange={(event) => handleGPAChange(index, event.target.value)}
              />
            )}
          </div>
          
        ))}
<button onClick={calculateCGPA}>Calculate CGPA</button>
        {cgpa !== null && (
          <div className="result">
            Your CGPA is: {cgpa}
          </div>
        )}
      </div>
    </div>
  );
}

export default CgpaCalculator;
