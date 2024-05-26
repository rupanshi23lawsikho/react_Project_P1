import React from 'react';
import { useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <img className="logo" src="MainLogo.png" alt="Logo" />
      <div className='sub-header'>
        {location.pathname !== '/add-resource' && (
          <a className="nav-link-header add-button" href="/add-resource">+ ADD</a>
        )}
        <img className="profile-image" src="S.png" alt="Profile" />
      </div>
    </header>
  );
};

export default Header;
