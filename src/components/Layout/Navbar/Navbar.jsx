import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="navbar">
      <div
        className="navbar-title"
        onClick={() => {
          navigate('/home');
        }}
      >
        <h1>Fallacy detector</h1>
      </div>
      <div className="navbar-content">
        <div className="navbar-button" onClick={() => navigate('/home')}>
          {t('navbar.analyzer')}
        </div>
        <div className="navbar-button" onClick={() => navigate('/about')}>
          {t('navbar.aboutMe')}
        </div>
        <div
          className="navbar-button"
          onClick={() =>
            (location.href =
              'https://github.com/MiguelZamoraRey/fallacy-detector')
          }
        >
          {t('navbar.code')}
        </div>
      </div>
    </div>
  );
}
