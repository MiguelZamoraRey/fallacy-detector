import React from 'react';

import './Button.css';

export default function Button({ label, onClickFunction, style }) {
  return (
    <button className="custom-button" onClick={onClickFunction} style={style}>
      {label}
    </button>
  );
}
