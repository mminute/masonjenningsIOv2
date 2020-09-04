import React from 'react';
// TODO: Is this file pointless
function Montserrat({ children, styles }) {
  const defaultStyles = { letterSpacing: '0.15em' };

  return (
    <div className="montserrat" style={{ ...defaultStyles, ...(styles || {}) }}>
      {children}
    </div>
  );
}

export default Montserrat;
