import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../Header/Header.css';
import person from '../Header/person.png';

const Header = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <header className='header'>
      <div className='header-content'>
        <div className='admin'>
          <img src={person} alt="Admin" style={{ height: '44px', width: '44px' }} />
          <span className='admin'>
            Moni Roy <br />
            <span className='admin-role'>Admin</span>
          </span>
        </div>
        <button className='logout-button' onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
}

export default Header;
