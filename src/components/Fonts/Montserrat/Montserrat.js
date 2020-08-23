import React from 'react';
import './Montserrat.css'

function Montserrat({ children, styles }) {
  return <div className="montserrat" style={styles || {}}>{children}</div>
}

export default Montserrat;
