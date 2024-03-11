import React from 'react';
import { useParams, Link } from 'react-router-dom';
import oddeven from './sem.jpg'

const SemesterPage = () => {
  const sempage1 = {
    backgroundImage: `url(${oddeven})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  const { year, semester } = useParams();
  console.log(semester);
  
  if(year==="1")
  {
    const isOddSemester = semester === 'odd';
  const isEvenSemester = semester === 'even';

  return (
    
    <div className='semesterpage'>
    <div
    className="background-image"
    style={{ backgroundImage: `url(${oddeven})` }}
  ></div>
       <div className="content">
      <h2>{year} Year - {semester} Semester</h2>
      {isOddSemester && (
        <ul className="department-list">
          <li><Link to={`/department/${year}/${semester}/cse`} className='oddeven'>CSE</Link></li>
          <li><Link to={`/department/${year}/${semester}/ece`} className='oddeven'>ECE</Link></li>
          <li><Link to={`/department/${year}/${semester}/aids`} className='oddeven'>AI&DS</Link></li>
        </ul>
      )}

      {isEvenSemester && (
        <ul className="department-list">
          <li><Link to={`/department/${year}/${semester}/cse`} className='oddeven'>CSE</Link></li>
          <li><Link to={`/department/${year}/${semester}/ece`} className='oddeven'>ECE</Link></li>
          <li><Link to={`/department/${year}/${semester}/aids`} className='oddeven'>AIDS</Link></li>
        </ul>
      )}
      </div>
    </div>
  );
}

  else if(year==="2")
  {
    const isOddSemester = semester === 'odd';
  const isEvenSemester = semester === 'even';

  return (
    <div className='semesterpage'>
    <div
    className="background-image"
    style={{ backgroundImage: `url(${oddeven})` }}
  ></div>
       <div className="content">
      <h2>{year} Year - {semester} Semester</h2>
      {isOddSemester && (
        <ul className="department-list">
          <li><Link to={`/department/${year}/${semester}/csehonors`} className='oddeven'>CSE HONORS</Link></li>
          <li><Link to={`/department/${year}/${semester}/cseregular`} className='oddeven'>CSE REGULAR</Link></li>
          <li><Link to={`/department/${year}/${semester}/aidshonors`} className='oddeven'>AIDS HONORS</Link></li>
          <li><Link to={`/department/${year}/${semester}/aidsregular`} className='oddeven'>AIDS REGULAR</Link></li>
          <li><Link to={`/department/${year}/${semester}/ecehonors`} className='oddeven'>ECE HONORS</Link></li>
          <li><Link to={`/department/${year}/${semester}/eceregular`} className='oddeven'>ECE REGULAR</Link></li>
        </ul>
      )}

      {isEvenSemester && (
        <ul className="department-list">
        <li><Link to={`/department/${year}/${semester}/csehonors`} className='oddeven'>CSE HONORS</Link></li>
        <li><Link to={`/department/${year}/${semester}/cseregular`} className='oddeven'>CSE REGULAR</Link></li>
        <li><Link to={`/department/${year}/${semester}/aidshonors`} className='oddeven'>AIDS HONORS</Link></li>
        <li><Link to={`/department/${year}/${semester}/aidsregular`} className='oddeven'>AIDS REGULAR</Link></li>
        <li><Link to={`/department/${year}/${semester}/ecehonors`} className='oddeven'>ECE HONORS</Link></li>
        <li><Link to={`/department/${year}/${semester}/eceregular`} className='oddeven'>ECE REGULAR</Link></li>
      </ul>
      )}
    </div>
    </div>
    
  );
  



  }






  else if(year==="3")
  {
    const isOddSemester = semester === 'odd';
  const isEvenSemester = semester === 'even';

  return (
    <div className='semesterpage'>
    <div
    className="background-image"
    style={{ backgroundImage: `url(${oddeven})` }}
  ></div>
       <div className="content">
     
      <h2>{year} Year - {semester} Semester</h2>
      {isOddSemester && (
        <ul className="department-list">
          <li><Link to={`/department/${year}/${semester}/csehonors`} className='oddeven'>CSE HONORS</Link></li>
          <li><Link to={`/department/${year}/${semester}/cseregular`} className='oddeven'>CSE REGULAR</Link></li>
          <li><Link to={`/department/${year}/${semester}/aidshonors`} className='oddeven'>AIDS HONORS</Link></li>
          <li><Link to={`/department/${year}/${semester}/aidsregular`} className='oddeven'>AIDS REGULAR</Link></li>
          <li><Link to={`/department/${year}/${semester}/ecehonors`} className='oddeven'>ECE HONORS</Link></li>
          <li><Link to={`/department/${year}/${semester}/eceregular`} className='oddeven'>ECE REGULAR</Link></li>
        </ul>
      )}

      {isEvenSemester && (
        <ul className="department-list">
        <li><Link to={`/department/${year}/${semester}/csehonors`} className='oddeven'>CSE HONORS</Link></li>
        <li><Link to={`/department/${year}/${semester}/cseregular`} className='oddeven'>CSE REGULAR</Link></li>
        <li><Link to={`/department/${year}/${semester}/aidshonors`} className='oddeven'>AIDS HONORS</Link></li>
        <li><Link to={`/department/${year}/${semester}/aidsregular`} className='oddeven'>AIDS REGULAR</Link></li>
        <li><Link to={`/department/${year}/${semester}/ecehonors`} className='oddeven'>ECE HONORS</Link></li>
        <li><Link to={`/department/${year}/${semester}/eceregular`} className='oddeven'>ECE REGULAR</Link></li>
      </ul>
      )}
    </div>
    </div>
    
  );
  



  }




  else if(year==="4")
  {
    const isOddSemester = semester === 'odd';
  const isEvenSemester = semester === 'even';

  return (
    <div className='semesterpage'>
    <div
    className="background-image"
    style={{ backgroundImage: `url(${oddeven})` }}
  ></div>
       <div className="content">
      
      <h2>{year} Year - {semester} Semester</h2>
      {isOddSemester && (
        <ul className="department-list">
          <li><Link to={`/department/${year}/${semester}/csehonors`} className='oddeven' >CSE HONORS</Link></li>
          <li><Link to={`/department/${year}/${semester}/cseregular`} className='oddeven'>CSE REGULAR</Link></li>
          <li><Link to={`/department/${year}/${semester}/aidshonors`} className='oddeven'>AIDS HONORS</Link></li>
          <li><Link to={`/department/${year}/${semester}/aidsregular`} className='oddeven'>AIDS REGULAR</Link></li>
          <li><Link to={`/department/${year}/${semester}/ecehonors`} className='oddeven'>ECE HONORS</Link></li>
          <li><Link to={`/department/${year}/${semester}/eceregular`} className='oddeven'>ECE REGULAR</Link></li>
        </ul>
      )}

      {isEvenSemester && (
        <ul className="department-list">
        <li><Link to={`/department/${year}/${semester}/csehonors`} className='oddeven'>CSE HONORS</Link></li>
        <li><Link to={`/department/${year}/${semester}/cseregular`} className='oddeven'>CSE REGULAR</Link></li>
        <li><Link to={`/department/${year}/${semester}/aidshonors`} className='oddeven'>AIDS HONORS</Link></li>
        <li><Link to={`/department/${year}/${semester}/aidsregular`} className='oddeven'>AIDS REGULAR</Link></li>
        <li><Link to={`/department/${year}/${semester}/ecehonors`} className='oddeven'>ECE HONORS</Link></li>
        <li><Link to={`/department/${year}/${semester}/eceregular`} className='oddeven'>ECE REGULAR</Link></li>
      </ul>
      )}
    </div>
    </div>
    
  );
  



  }
};

export default SemesterPage;