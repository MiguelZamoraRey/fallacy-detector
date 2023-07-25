import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-button" onClick={() => navigate('/home')}>
          Analizador
        </div>
        {/*<img
          className="navbar-badge"
          src={logo}
          onClick={() => navigate('/')}
          alt="Fallacy Detector"
        />*/}
        <div className="navbar-button" onClick={() => navigate('/about')}>
          Sobre mí
        </div>
        <div
          className="navbar-button"
          onClick={() =>
            (location.href =
              'https://github.com/MiguelZamoraRey/fallacy-detector')
          }
        >
          Código del proyecto
        </div>
      </div>
    </div>
  );
}
