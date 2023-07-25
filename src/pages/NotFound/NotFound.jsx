import React from 'react';
import EyeIcon from '../../components/Icons/EyeIcon';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <EyeIcon color="#038cfc" width="5em" height="5em" />
        <p>
          Noting to see here, you can return{' '}
          <span
            onClick={() => navigate('/')}
            style={{ color: '#038cfc', cursor: 'pointer', marginLeft: '0.2em' }}
          >
            home
          </span>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
