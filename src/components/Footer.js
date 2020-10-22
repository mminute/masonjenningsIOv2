import React from 'react';
import { Box } from 'gestalt';
import { Link } from 'gatsby';
import './Footer.css';

function Footer() {
  return (
    <footer style={{ color: '#666', backgroundColor: '#f5f5f5' }}>
      <div className="inconsolata pageFooter">
        <Box display="flex" justifyContent="center" paddingY={6}>
          ©
          {' '}
          {new Date().getFullYear()}
          &nbsp;
          <Link to="/" style={{ textDecoration: 'none', color: '#111' }}>
            MASON JENNINGS
          </Link>
          ,
          ALL RIGHTS RESERVED
        </Box>
      </div>
    </footer>
  );
}

export default Footer;
