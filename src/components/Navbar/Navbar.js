import React, {useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar-container'>
      <p className='title'>Parikrama</p>
      <div className='nav-toggle' onClick={toggleNavbar}>
        ☰
      </div>
      <div className={`nav-item-container ${isOpen ? 'open' : ''}`}>
        <Link to="/" className='nav-item'>Stays</Link>
        <Link to="/hotels" className='nav-item'>Hotels</Link>
        <Link to="/flights" className='nav-item'>Flights</Link>
        <Link to="/rental" className='nav-item'>Rental</Link>
        <Link to="/cars" className='nav-item'>Cars</Link>
      </div>
      <div className='icon-container'>
        <Link to="/Register"><button className='register-btn'>Register</button></Link>
      </div>
    </div>
  );
}
export default Navbar