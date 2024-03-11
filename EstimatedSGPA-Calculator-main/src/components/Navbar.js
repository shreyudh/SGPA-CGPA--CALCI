import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg " style={{ height: '60px' }}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ESTIMATE YOUR GPA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <Link to="/" className='home'>SGPA</Link>
      </li>
      <li className="nav-item" style={{ marginLeft: '20px' }}>
        <Link to="/cgpa" className='home'>CGPA</Link>
      </li>
      <li className="nav-item" style={{ marginLeft: '20px' }}>
        <Link to="/" className='home'>Home</Link>
      </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
export default Navbar;