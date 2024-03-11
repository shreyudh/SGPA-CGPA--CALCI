import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import YearPage from './components/YaerPage';
import SemesterPage from './components/SemesterPage';
import DepartmentPage from './components/DepartmentPage';
import CgpaCalculator from './components/CgpaCalculator';
import './Styles.css';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cgpa" element={<CgpaCalculator />} />
        <Route path="/year/:year" element={<YearPage />} />
        <Route path="/semester/:year/:semester" element={<SemesterPage />} />
        <Route path="/department/:year/:semester/:department" element={<DepartmentPage />} />
        <Route path="/semester/:year/:even" element={<SemesterPage />} />
        

      </Routes>
    </Router>
  );
};

export default App;
