import React from 'react';
import { useParams, Link } from 'react-router-dom';
import oddeven from './odd.jpg'

const YearPage = () => {

  
  const { year } = useParams();

  return (
    <div className="year-page" >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${oddeven})` }}
      ></div>
       <div className="content">
      <h2>{year} Year</h2>
      {year === '1' && (
        <>
          <Link to={`/semester/${year}/odd`} className='oddeven'>Odd Semester</Link>
          {year === '1' && (
        <Link to={`/semester/${year}/even`} className='oddeven'>Even Semester</Link>
      )}
        </>
      )}
      {year === '2' && (
        <>
          <Link to={`/semester/${year}/odd`} className='oddeven'>Odd Semester</Link>
          {year === '2' && (
        <Link to={`/semester/${year}/even`} className='oddeven'>Even Semester</Link>
      )}
        </>
      )}
      {year === '3' && (
        <>
          <Link to={`/semester/${year}/odd`} className='oddeven'>Odd Semester</Link>
          {year === '3' && (
        <Link to={`/semester/${year}/even`} className='oddeven'>Even Semester</Link>
      )}
        </>
      )}
      {year === '4' && (
        <>
          <Link to={`/semester/${year}/odd`} className='oddeven'>Odd Semester</Link>
          {year === '4' && (
        <Link to={`/semester/${year}/even`} className='oddeven'>Even Semester</Link>
      )}
        </>
      )}
      </div>
    </div>
  );
};


export default YearPage;
