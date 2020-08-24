import React from 'react';
import './Montserrat.css';

function Montserrat({ children, styles }) {
  const defaultStyles = { letterSpacing: '0.15em' };

  return (
    <div className="montserrat" style={{ ...defaultStyles, ...(styles || {}) }}>
      {children}
    </div>
  );
}

export default Montserrat;
