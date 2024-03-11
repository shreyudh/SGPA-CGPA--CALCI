import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './DepartmentPage.css';
import oddeven from './success.jpg';


const DepartmentPage = () => {
  



  
  const { year, semester, department } = useParams();
  const [subjectGrades, setSubjectGrades] = useState({});
  
  let subjects;
  
  if(year==="1")
  {
    if(semester==="odd")
  {
    subjects = [
      { id: 'subject1', name: 'INTEGRATED PROFESSIONAL ENGLISH', credits: 2 },
      { id: 'subject2', name: 'MATHEMATICS FOR COMPUTING', credits: 4.5 },
      { id: 'subject3', name: 'COMPUTATIONAL THINKING FOR STRUCTURED DESIGN', credits: 5.5 },
      { id: 'subject4', name: 'DIGITAL LOGIC AND PROCESSORS', credits: 4 },
    
      // Add more subjects here
    ];
  
  }
  else
  {
    if(department==="cse")
    {
      subjects = [
        { id: 'subject1', name: 'DESIGN THINKING AND INNOVATION', credits: 2 },
        { id: 'subject2', name: 'ENGLISH PROFICIENCY', credits: 2 },
        { id: 'subject3', name: 'DATA STRUCTURES', credits: 5 },
        { id: 'subject4', name: 'IOT WORKSHOP', credits: 2 },
        { id: 'subject5', name: 'MATHEMATICS FOR ENGINEERS', credits: 3 },
        { id: 'subject6', name: 'COMPUTATIONAL THINKING FOR OBJECT ORIENTED DESIGN', credits: 5 },
        { id: 'subject7', name: 'COMPUTER ORGANISATION AND ARCHITECTURE', credits: 2 },
        // Add more subjects here
      ];
    }
    else if(department==="aids")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else
    {
      subjects = [
        { id: 'subject1', name: 'x', credits: 2 },
        { id: 'subject2', name: 'y', credits: 4.5 },
        { id: 'subject3', name: 'z', credits: 5.5 },
        { id: 'subject4', name: 'g', credits: 4 },
        // Add more subjects here
      ];
    }
    





  }
  }
  else if(year==="2")
  {
    if(semester==="odd")
  {
    if(department==="csehonors")
    {
      subjects = [
        { id: 'subject1', name: 'PROCESSORS & CONTROLLERS', credits: 4.5 },
        { id: 'subject2', name: 'ESSENTIALS SKILLS FOR EMPLOYABILITYO', credits: 2 },
        { id: 'subject3', name: 'PYTHON FULL STACK DEVELOPMENT WITH DJANGO', credits: 4 },
        { id: 'subject4', name: 'DATABASE MANAGEMENT SYSTEMS', credits: 5 },
        { id: 'subject5', name: 'ADVANCED OBJECT ORIENTED PROGRAMMING', credits: 6 },
        { id: 'subject6', name: 'OPERATING SYSTEMS', credits: 3 },
        { id: 'subject7', name: 'MATHEMATICAL PROGRAMMING', credits: 4 },
        { id: 'subject8', name: 'ADAPTIVE SOFTWARE ENGINEERING', credits: 3 },
        // Add more subjects here
      ];
    }
    else if(department==="cseregular")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="aidshonors")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="aidsregular")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="ecehonors5")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else
    {
      subjects = [
        { id: 'subject1', name: 'x', credits: 2 },
        { id: 'subject2', name: 'y', credits: 4.5 },
        { id: 'subject3', name: 'z', credits: 5.5 },
        { id: 'subject4', name: 'g', credits: 4 },
        // Add more subjects here
      ];
    }
    





  }
  
  
  
  else
  {
    if(department==="csehonors")
    {
      subjects = [
        { id: 'subject1', name: 'a', credits: 2 },
        { id: 'subject2', name: 'b', credits: 4.5 },
        { id: 'subject3', name: 'c', credits: 5.5 },
        { id: 'subject4', name: 'd', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="cseregular")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="aidshonors")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="aidsregular")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="ecehonors5")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else
    {
      subjects = [
        { id: 'subject1', name: 'x', credits: 2 },
        { id: 'subject2', name: 'y', credits: 4.5 },
        { id: 'subject3', name: 'z', credits: 5.5 },
        { id: 'subject4', name: 'g', credits: 4 },
        // Add more subjects here
      ];
    }
    }
  }





  else if(year==="3")
  {
    if(semester==="odd")
  {
    if(department==="csehonors")
    {
      subjects = [
        { id: 'subject1', name: 'ENTERPRISE PROGRAMMING', credits: 4 },
        { id: 'subject2', name: 'JAVA FULL STACK DEVELOPMENT', credits: 2 },
        { id: 'subject3', name: 'SOLUTIONS ARCHITECTING ON CLOUD', credits: 5 },
        { id: 'subject4', name: 'PROBLEM SOLVING SKILLS', credits: 4 },
        { id: 'subject5', name: 'PROBLEM SOLVING SKILLS', credits: 4 },
        { id: 'subject6', name: 'PROBLEM SOLVING SKILLS', credits: 4 },
        { id: 'subject7', name: 'PROBLEM SOLVING SKILLS', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="cseregular")
    {
      subjects = [
        { id: 'subject1', name: 'ENTERPRISE PROGRAMMING', credits: 4 },
        { id: 'subject2', name: 'JAVA FULL STACK DEVELOPMENT', credits: 2 },
        { id: 'subject3', name: 'SOLUTIONS ARCHITECTING ON CLOUD', credits: 5 },+
        { id: 'subject4', name: 'PROBLEM SOLVING SKILLS', credits: 4 },
        { id: 'subject5', name: 'PROBLEM SOLVING SKILLS', credits: 4 },
        { id: 'subject6', name: 'PROBLEM SOLVING SKILLS', credits: 4 },
        { id: 'subject7', name: 'PROBLEM SOLVING SKILLS', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="aidshonors")
    {
      subjects = [
        { id: 'subject1', name: 'AUTOMATA THEORY AND COMPILER DESIGN', credits: 3 },
        { id: 'subject2', name: 'SIGNAL PROCESSING (OR) INTERNET OF THINGS', credits: 4.5 },
        { id: 'subject3', name: 'MID GRAD CAPSTONE PROJECT-I', credits: 5.5 },
        { id: 'subject4', name: 'CLOUD COMPUTING', credits: 4 },
        { id: 'subject5', name: 'SOFT COMPUTING (OR) BIG DATA ANALYTICS', credits: 4 },
        { id: 'subject6', name: 'PROBLEM SOLVING SKILLS', credits: 4 },


        // Add more subjects here
      ];
    }
    else if(department==="aidsregular")
    {
      subjects = [
        { id: 'subject1', name: 'AUTOMATA THEORY AND COMPILER DESIGN', credits: 3 },
        { id: 'subject2', name: 'SIGNAL PROCESSING (OR) INTERNET OF THINGS', credits: 4.5 },
        { id: 'subject3', name: 'MID GRAD CAPSTONE PROJECT-I', credits: 5.5 },
        { id: 'subject4', name: 'CLOUD COMPUTING', credits: 4 },
        { id: 'subject5', name: 'SOFT COMPUTING (OR) BIG DATA ANALYTICS', credits: 4 },
        { id: 'subject6', name: 'PROBLEM SOLVING SKILLS', credits: 4 },

        // Add more subjects here
      ];
    }
    else if(department==="ecehonors5")
    {
      subjects = [
        { id: 'subject1', name: 'PROBLEM SOLVING SKILLS', credits: 1.5 },
        { id: 'subject2', name: 'TRANSFORMS TECHNIQUES AND NUMERICAL METHODS', credits: 3 },
        { id: 'subject3', name: 'DIGITAL SIGNAL PROCESSING', credits: 6 },
        { id: 'subject4', name: 'WIRELESS COMMUNICATION (OR) MACHINE LEARNING WITH PYTHON', credits: 4},
        { id: 'subject5', name: 'MIDGRAD CAPSTONE PROJECT 1', credits: 4 },

        
        
      ];
    }
    else
    {
      subjects = [
        { id: 'subject1', name: 'PROBLEM SOLVING SKILLS', credits: 2 },
        { id: 'subject2', name: 'TRANSFORMS TECHNIQUES AND NUMERICAL METHODS', credits: 4.5 },
        { id: 'subject3', name: 'DIGITAL SIGNAL PROCESSING', credits: 5.5 },
        { id: 'subject4', name: 'WIRELESS COMMUNICATION (OR) MACHINE LEARNING WITH PYTHON' , credits: 4 },
        { id: 'subject5', name: 'MIDGRAD CAPSTONE PROJECT 1', credits: 4 },
      ];
    }
    





  }
  
  
  
  else
  {
    if(department==="csehonors")
    {
      subjects = [
        { id: 'subject1', name: 'a', credits: 2 },
        { id: 'subject2', name: 'b', credits: 4.5 },
        { id: 'subject3', name: 'c', credits: 5.5 },
        { id: 'subject4', name: 'd', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="cseregular")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="aidshonors")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="aidsregular")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="ecehonors5")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else
    {
      subjects = [
        { id: 'subject1', name: 'x', credits: 2 },
        { id: 'subject2', name: 'y', credits: 4.5 },
        { id: 'subject3', name: 'z', credits: 5.5 },
        { id: 'subject4', name: 'g', credits: 4 },
        // Add more subjects here
      ];
    }
    }
  }





  else if(year==="4")
  {
    if(semester==="odd")
  {
    if(department==="csehonors")
    {
      subjects = [
        { id: 'subject1', name: 'a', credits: 2 },
        { id: 'subject2', name: 'b', credits: 4.5 },
        { id: 'subject3', name: 'c', credits: 5.5 },
        { id: 'subject4', name: 'd', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="cseregular")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="aidshonors")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="aidsregular")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="ecehonors5")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else
    {
      subjects = [
        { id: 'subject1', name: 'x', credits: 2 },
        { id: 'subject2', name: 'y', credits: 4.5 },
        { id: 'subject3', name: 'z', credits: 5.5 },
        { id: 'subject4', name: 'g', credits: 4 },
        // Add more subjects here
      ];
    }
    





  }
  
  
  
  else
  {
    if(department==="csehonors")
    {
      subjects = [
        { id: 'subject1', name: 'a', credits: 2 },
        { id: 'subject2', name: 'b', credits: 4.5 },
        { id: 'subject3', name: 'c', credits: 5.5 },
        { id: 'subject4', name: 'd', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="cseregular")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="aidshonors")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="aidsregular")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else if(department==="ecehonors5")
    {
      subjects = [
        { id: 'subject1', name: '1', credits: 2 },
        { id: 'subject2', name: '2', credits: 4.5 },
        { id: 'subject3', name: '3', credits: 5.5 },
        { id: 'subject4', name: '4', credits: 4 },
        // Add more subjects here
      ];
    }
    else
    {
      subjects = [
        { id: 'subject1', name: 'x', credits: 2 },
        { id: 'subject2', name: 'y', credits: 4.5 },
        { id: 'subject3', name: 'z', credits: 5.5 },
        { id: 'subject4', name: 'g', credits: 4 },
        // Add more subjects here
      ];
    }
    }
  }
  
  



  const totalCredits = subjects.reduce((total, subject) => total + subject.credits, 0);

  const handleGradeChange = (subjectId, grade) => {
    setSubjectGrades(prevGrades => ({
      ...prevGrades,
      [subjectId]: grade
    }));
  };

  const calculateGpa = () => {
    const totalWeightedCredits = subjects.reduce(
      (total, subject) => total + (subjectGrades[subject.id] || 0) * subject.credits,
      0
    );
    return totalWeightedCredits / totalCredits;
  };

  function validateGPA(gpa) {
    if (gpa > 10) {
      alert("GPA cannot be greater than 10. Setting GPA to 10.");
      return 10;
    }
    return gpa;
  }

  
  return (
    
      
      <div className="department-page" >
        <div
    className="background-image"
    style={{ backgroundImage: `url(${oddeven})` }}
  ></div>
        <div className="content">
      <h2>{year} Year - {semester} Semester</h2>
      <h3>Department: {department}</h3>
      <form>
        <h4>Subjects</h4>
        <ul className="subject-list">
          {subjects.map(subject => (
            <ul key={subject.id}>
              {subject.name} ({subject.credits} credits)
              <input
                type="number"
                step="1"
                min="0"
                max="10"
                placeholder="Enter GPA less than or equal to 10"
                value={subjectGrades[subject.id] || ''}
                onChange={e => handleGradeChange(subject.id, validateGPA(parseFloat(e.target.value)))}
              />
            </ul>
          ))}
        </ul>
        <div className="gpa-result">
          <h4>Estimated GPA: {calculateGpa().toFixed(2)}</h4>
        </div>
      </form>
      </div>
      </div>
    
  );
};

export default DepartmentPage;