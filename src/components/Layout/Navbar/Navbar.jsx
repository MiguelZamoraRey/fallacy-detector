import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/FD_LOGO.png';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-button" onClick={() => navigate('/home')}>
          Analizador
        </div>
        <img
          className="navbar-badge"
          src={logo}
          onClick={() => navigate('/')}
          alt="Fallacy Detector"
        />
        <div className="navbar-button" onClick={() => navigate('/about')}>
          Sobre mí
        </div>
      </div>
    </div>
  );
}
