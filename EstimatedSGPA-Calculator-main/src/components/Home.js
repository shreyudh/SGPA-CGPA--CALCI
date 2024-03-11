import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './home.jpg';

const Home = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="home-page" style={backgroundImageStyle}>
      <h1>Welcome to SGPA Estimation</h1>
      <div className="year-boxes">
        <Link to="/year/1" className="year-box">
          1st Year
        </Link>
        <Link to="/year/2" className="year-box">
          2nd Year
        </Link>
        <Link to="/year/3" className="year-box">
          3rd Year
        </Link>
        <Link to="/year/4" className="year-box">
          4th Year
        </Link>
      </div>
    </div>
  );
};

export default Home;
